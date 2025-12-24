require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define MONGODB_URI in .env.local");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", AdminSchema);

async function migratePasswords() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✓ Connected to MongoDB");

    const admins = await Admin.find({});
    console.log(`Found ${admins.length} admin(s)`);

    if (admins.length === 0) {
      console.log("No admins found to migrate");
      process.exit(0);
    }

    for (const admin of admins) {
      // Check if password is already hashed
      if (!admin.password.startsWith("$2")) {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        admin.password = hashedPassword;
        await admin.save();
        console.log(`✓ Migrated: ${admin.email}`);
      } else {
        console.log(`⊘ Already hashed: ${admin.email}`);
      }
    }

    console.log("\n✓ Migration complete!");
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("✗ Migration failed:", error.message);
    process.exit(1);
  }
}

migratePasswords();

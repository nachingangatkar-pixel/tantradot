const { connectDB } = require("@/lib/mongodb");
const Admin = require("@/models/Admin");
const bcrypt = require("bcryptjs");

async function migratePasswords() {
  try {
    await connectDB();
    console.log("Connected to database...");

    const admins = await Admin.find({});
    console.log(`Found ${admins.length} admin(s) to migrate`);

    for (const admin of admins) {
      // Check if password is already hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
      if (!admin.password.startsWith("$2")) {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        admin.password = hashedPassword;
        await admin.save();
        console.log(`✓ Migrated admin: ${admin.email}`);
      } else {
        console.log(`⊘ Already hashed: ${admin.email}`);
      }
    }

    console.log("Migration complete!");
    process.exit(0);
  } catch (error) {
    console.error("Migration error:", error);
    process.exit(1);
  }
}

migratePasswords();

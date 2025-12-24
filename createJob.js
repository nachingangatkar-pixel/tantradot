const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const lines = envContent.split('\n');
const env = {};
lines.forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    env[key.trim()] = value.trim();
  }
});

// Define Job Schema
const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkills: { type: String, required: true },
    location: { type: String, required: false, default: null },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', JobSchema);

async function createJob() {
  try {
    const mongoUri = env.MONGODB_URI;
    if (!mongoUri) {
      console.error('MONGODB_URI not found in .env.local');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // Sample job data
    const jobData = {
      title: 'Senior React Developer',
      description: 'We are looking for an experienced React developer to join our team. You will work on building scalable web applications with modern technologies.',
      requiredSkills: 'React, TypeScript, Node.js, MongoDB, REST APIs'
    };

    const job = new Job(jobData);
    await job.save();
    
    console.log('✅ Job created successfully!');
    console.log('Job Details:');
    console.log(`  Title: ${job.title}`);
    console.log(`  Description: ${job.description}`);
    console.log(`  Required Skills: ${job.requiredSkills}`);
    console.log(`  ID: ${job._id}`);

    await mongoose.disconnect();
    console.log('✅ Disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createJob();

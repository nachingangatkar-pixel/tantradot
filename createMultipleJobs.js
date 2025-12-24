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

const jobsData = [
  {
    title: 'Backend Developer (Node.js)',
    description: 'Build robust backend services and APIs using Node.js. Work with databases, authentication, and cloud infrastructure.',
    requiredSkills: 'Node.js, Express, MongoDB, PostgreSQL, Docker'
  },
  {
    title: 'Full Stack Developer',
    description: 'Join our team to develop both frontend and backend features. Work with modern web technologies and collaborate with design team.',
    requiredSkills: 'React, Next.js, Node.js, TypeScript, Tailwind CSS'
  },
  {
    title: 'DevOps Engineer',
    description: 'Manage cloud infrastructure, CI/CD pipelines, and system reliability. Work with AWS, Docker, and Kubernetes.',
    requiredSkills: 'AWS, Docker, Kubernetes, CI/CD, Linux'
  },
  {
    title: 'UI/UX Designer',
    description: 'Create beautiful and intuitive user interfaces for web applications. Collaborate with developers and product managers.',
    requiredSkills: 'Figma, Sketch, UI Design, UX Research, Prototyping'
  }
];

async function createJobs() {
  try {
    const mongoUri = env.MONGODB_URI;
    if (!mongoUri) {
      console.error('MONGODB_URI not found in .env.local');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB\n');

    for (const jobData of jobsData) {
      const job = new Job(jobData);
      await job.save();
      
      console.log(`✅ Created: ${job.title}`);
      console.log(`   Skills: ${job.requiredSkills}`);
      console.log(`   ID: ${job._id}\n`);
    }

    await mongoose.disconnect();
    console.log('✅ All jobs created and disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createJobs();

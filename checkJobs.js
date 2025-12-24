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

async function checkJobs() {
  try {
    const mongoUri = env.MONGODB_URI;
    console.log('Connecting to MongoDB:', mongoUri);
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB\n');

    // Get the jobs collection
    const collection = mongoose.connection.collection('jobs');
    const jobs = await collection.find({}).toArray();

    console.log(`📋 Total jobs in database: ${jobs.length}\n`);

    if (jobs.length === 0) {
      console.log('❌ No jobs found in database');
    } else {
      console.log('📝 Jobs:');
      console.log('─'.repeat(80));
      jobs.forEach((job, index) => {
        console.log(`\n${index + 1}. Title: ${job.title}`);
        console.log(`   ID: ${job._id}`);
        console.log(`   Description: ${job.description.substring(0, 100)}...`);
        console.log(`   Required Skills: ${job.requiredSkills || 'N/A'}`);
        console.log(`   Location: ${job.location || 'N/A'}`);
        console.log(`   Created: ${job.createdAt || 'N/A'}`);
      });
      console.log('\n' + '─'.repeat(80));
    }

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkJobs();

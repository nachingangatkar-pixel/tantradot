import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

// GET all jobs
export async function GET() {
  await connectDB();
  const jobs = await Job.find().sort({ createdAt: -1 });
  return NextResponse.json(jobs);
}

// CREATE job
export async function POST(req: Request) {
  const { title, description, location } = await req.json();

  await connectDB();

  const job = await Job.create({
    title,
    description,
    location,
  });

  return NextResponse.json(job);
}

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

// GET all jobs
export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// CREATE job
export async function POST(req: Request) {
  try {
    const { title, description, requiredSkills } = await req.json();

    // Validation
    if (!title || !description || !requiredSkills) {
      return NextResponse.json(
        { error: "Missing required fields: title, description, requiredSkills" },
        { status: 400 }
      );
    }

    await connectDB();

    const job = await Job.create({
      title,
      description,
      requiredSkills,
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create job" },
      { status: 500 }
    );
  }
}

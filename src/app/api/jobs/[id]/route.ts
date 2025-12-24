import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

/**
 * UPDATE job
 */
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { title, description, location } = await request.json();

  await connectDB();

  const updatedJob = await Job.findByIdAndUpdate(
    id,
    { title, description, location },
    { new: true }
  );

  if (!updatedJob) {
    return NextResponse.json(
      { error: "Job not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(updatedJob);
}

/**
 * DELETE job
 */
export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return NextResponse.json(
      { error: "Job not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: "Job deleted successfully",
  });
}

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
  try {
    const { id } = await context.params;
    const { title, description, requiredSkills } = await request.json();

    // Validation
    if (!title || !description || !requiredSkills) {
      return NextResponse.json(
        { error: "Missing required fields: title, description, requiredSkills" },
        { status: 400 }
      );
    }

    await connectDB();

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { title, description, requiredSkills },
      { new: true }
    );

    if (!updatedJob) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update job" },
      { status: 500 }
    );
  }
}

/**
 * DELETE job
 */
export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
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
      job: deletedJob,
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete job" },
      { status: 500 }
    );
  }
}

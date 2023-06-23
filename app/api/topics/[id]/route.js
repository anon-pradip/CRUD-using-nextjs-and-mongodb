import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  await connectMongoDB();
  try {
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json(topic, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch topic" },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();

  await connectMongoDB();
  try {
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json(
      { message: "Successfully updated topic" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update topic" },
      { status: 500 }
    );
  }
};

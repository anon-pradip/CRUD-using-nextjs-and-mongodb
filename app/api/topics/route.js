import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, description } = await req.json();
  await connectMongoDB();
  try {
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create topic" },
      { status: 500 }
    );
  }
};

export const GET = async (req, res) => {
  await connectMongoDB();
  try {
    const topics = await Topic.find();
    return NextResponse.json(topics);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch topics" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  try {
    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Successfully deleted te topic" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete topic" },
      { status: 500 }
    );
  }
};

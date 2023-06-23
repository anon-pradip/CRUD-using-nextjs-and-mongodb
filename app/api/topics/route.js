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

import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopic = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get the topic");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;
  const data = await getTopic(id);
  const { title, description } = data;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;

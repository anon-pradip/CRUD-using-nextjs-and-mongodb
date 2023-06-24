"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className=" flex flex-col gap-5 m-5 justify-center items-center"
    >
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Topic title"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Topic Description"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <button
        type="submit"
        className=" border border-slate-700 px-5 text-center py-2 bg-indigo-600  rounded-md focus:outline-none focus:bg-indigo-900"
      >
        Update
      </button>
    </form>
  );
};

export default EditTopicForm;

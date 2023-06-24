"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Both fields should be filled");
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-5 m-5 justify-center items-center"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Topic title"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Topic Description"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <button
        type="submit"
        className=" border border-slate-700 px-5 text-center py-2 bg-indigo-600  rounded-md focus:outline-none focus:bg-indigo-900"
      >
        Add
      </button>
    </form>
  );
};

export default AddTopic;

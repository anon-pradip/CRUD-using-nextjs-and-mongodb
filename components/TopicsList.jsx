import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopics = async () => {
  const response = await fetch("http://localhost:3000/api/topics");
  const data = await response.json();
  return data;
};

const TopicsList = async () => {
  const topics = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div className="border-slate-600 bg-slate-800 text-white border p-2 flex justify-between items-start mb-4">
          <div>
            <p className="text-xl font-bold">{t.title}</p>
            <p>{t.description}</p>
          </div>

          <div className=" flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>✏️</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;

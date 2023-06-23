import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const TopicsList = () => {
  return (
    <div className="border-slate-600 bg-slate-800 text-white border p-2 flex justify-between items-start mb-4">
      <div>
        <p className="text-xl font-bold">Topic Title</p>
        <p>topic Description</p>
      </div>

      <div className=" flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>✏️</Link>
      </div>
    </div>
  );
};

export default TopicsList;

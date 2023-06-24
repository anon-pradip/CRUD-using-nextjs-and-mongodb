"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div onClick={removeTopic} className="cursor-pointer">
      🪣
    </div>
  );
};

export default RemoveBtn;

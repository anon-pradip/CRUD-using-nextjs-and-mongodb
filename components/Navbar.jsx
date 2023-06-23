import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="my-2 flex justify-between items-center py-2 px-4 border border-slate-600 sticky top-0">
      <Link href={"/"} className=" text-xl font-bold">
        CRUD
      </Link>
      <Link
        href={"/addTopic"}
        className=" bg-indigo-700 text-white text-xl p-2 rounded-md"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;

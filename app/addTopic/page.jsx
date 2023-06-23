import React from "react";

const AddTopic = () => {
  return (
    <div className=" flex flex-col gap-5 m-5 justify-center items-center">
      <input
        type="text"
        placeholder="Topic title"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <input
        type="text"
        placeholder="Topic Description"
        className=" border w-full max-w-md border-slate-700 bg-transparent rounded-md px-2 py-1 text-white placeholder:text-sm"
      />
      <button className=" border border-slate-700 px-5 text-center py-2 bg-indigo-600  rounded-md focus:outline-none focus:bg-indigo-900">
        Add
      </button>
    </div>
  );
};

export default AddTopic;

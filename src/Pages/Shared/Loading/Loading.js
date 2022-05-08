import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-white mx-auto">
      <div className="flex flex-col gap-2">
        <div className="text-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default Loading;

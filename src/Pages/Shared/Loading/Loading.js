import React from "react";

const Loading = () => {
  return (
    <div className="bg-white mx-auto">
      <div className="flex flex-col gap-2">
        <div className="text-center">
          <div class="radial-progress text-primary">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

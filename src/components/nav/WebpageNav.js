import React from "react";

export const WebpageNav = () => {
  return (
    <div className="flex  flex-row  fixed z-30 px-4 md:px-8 py-4 w-full bg-opacity-5 backdrop-blur-sm">
      <div className="flex-none">
        <img className="h-8" src="/img/nav/logo.svg" />
      </div>
      <div className="ml-auto flex gap-3 md:gap-5">
        <div className="bg-blueDark text-center text-white border  border-borderGray px-3 md:px-5 py-1 rounded-lg text-sm">
          Join our community
        </div>
        <div className="bg-blueDark text-center text-white border border-borderGray px-3 md:px-5 py-1 rounded-lg text-sm">
          connect wallet
        </div>
      </div>
    </div>
  );
};

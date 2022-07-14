import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/Drawer";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

export const WebpageNav = () => {
  const [sideNav, setsideNav] = useState(false);
  return (
    <>
      <div className="hidden relative lg:flex bg-[#0F0631] md:flex-row z-30 px-4 md:px-8 py-3 md:py-4 w-full  ">
        <div className="flex-none">
          <img className="h-8" src="/img/nav/logo.svg" />
        </div>
        <div className="ml-auto flex gap-3 md:gap-5">
          <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
            Gitbook
          </div>
          <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
            Our Community
          </div>
          <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
            <a href="https://stake.omitch.com/">Stake</a>
          </div>
          <div className="bg-blueDark text-center text-white border border-borderGray px-3 md:px-5 py-1 rounded-lg text-sm ">
            <a href="https://app.omitch.com/">Launch App</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8  fixed z-20 px-4 py-4 w-full  lg:hidden">
        <div>
          <div
            className="text-2xl cursor-pointer text-white lg:hidden pt-1 pr-2"
            onClick={() => setsideNav(!sideNav)}
          >
            <HiMenuAlt1 className="cursor-pointer" />
          </div>
          <SwipeableDrawer
            anchor={"left"}
            open={sideNav}
            onClose={() => setsideNav(false)}
            onOpen={() => setsideNav(true)}
          >
            <div className="bg-[#0F0631] h-screen w-screen text-lightGray  relative">
              <div
                onClick={() => setsideNav(!sideNav)}
                className="ml-auto  text-2xl text-white absolute right-3 top-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
              <div className="h-px mt-14 bg-lightGray">
                <div className="mx-auto flex flex-col gap-2 pt-10">
                  <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
                    Gitbook
                  </div>
                  <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
                    Our Community
                  </div>
                  <div className=" text-center text-white  px-3 md:px-5 py-1 rounded-lg text-sm">
                    <a href="https://stake.omitch.com/">Stake</a>
                  </div>
                  <div className="bg-blueDark w-32 mx-auto md:w-auto text-center text-white border border-borderGray px-3 md:px-5 py-1 rounded-lg text-sm ">
                    <a href="app.omitch.com"> Launch App</a>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </div>
        <div className="col-span-7 ">
          <div className="ml-auto w-12 z-40">
            <img src="/img/nav/logo.svg" className="h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

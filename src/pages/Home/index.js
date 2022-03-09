import React from "react";
import { WebpageNav } from "../../components/nav/WebpageNav";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useRef, useEffect } from "react";

//Aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-dark ">
        <WebpageNav />
        <div className="relative grid md:grid-cols-2 pt-8">
          <img
            data-aos="fade-right"
            alt=""
            src="/img/showcase/showcaseimg.svg"
            className="absolute md:h-96 lg:h-144"
          ></img>
          <div></div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="mt-80 md:mt-32  lg:mt-48 px-2"
          >
            <div className="text-white text-[48px] text-center md:text-left  md:text-[58px] lg:text-[78px] leading-10  font-[900] uppercase font-heading tracking-wide">
              Allow your
            </div>
            <div className="text-white text-[80px] text-center md:text-left   md:text-[90px] lg:text-[123px] leading-10 my-6  md:my-8 lg:my-14 font-[900] uppercase font-heading tracking-wide">
              Passion
            </div>
            <div className="text-white text-[48px] text-center md:text-left  md:text-[58px] lg:text-[78px] leading-10 font-[900] uppercase font-heading tracking-wide">
              Reward You
            </div>
            <p className="text-white text-center md:text-left  md:text-lg lg:text-xl tracking-wide mt-8">
              Play and get paid on the best decentralised crypto betting
              platform.
            </p>
          </div>
        </div>

        <div className=" mt-16 md:mt-32 relative container max-w-screen-md mx-auto ">
          <div className="border text-center uppercase text-white w-80 mx-auto rounded-md font-heading font-bold py-1 text-sm tracking-wider">
            About Omitch
          </div>
          <p className="text-sm text-white text-center mt-5 px-8">
            Omitchbet solves the age long and current problems in the TradBet
            systems. It adopts the modern decentralised wallets tech to solve
            the problems associated with KYC and complex payouts method rampant
            in the TradBet systems. Here, bettors( planktons) just connect their
            wallets, deposit the $OMIT/$USDC in our liquidity pool, and place
            bets by choosing the right odds. They receive their earnings by
            having OMIT assests deposited into their wallets. All these are done
            without identity verifications/proofs.
          </p>
        </div>

        <div className="mt-32 relative container mx-auto max-w-screen-lg grid grid-cols-2 px-8 overflow-x-hidden">
          <div className="self-center">
            <div className="uppercase text-white mr-auto font-heading font-bold text-xl tracking-wider">
              HOW TO EARN
            </div>
            <p className="text-sm text-white text-left max-w-lg mt-1">
              Earning on a betting platform couldn't have been easier than this.
              All you have to do is to connect your wallet, select any game of
              your choice from the different interesting games we have in our
              platform and then play.
            </p>
          </div>
          <div className="justify-self-end " data-aos="fade-left">
            <img alt="" className="object-cover" src="/img/home/dice.png"></img>
          </div>
        </div>
        <div className="mt-32 relative container max-w-screen-lg mx-auto grid grid-cols-2 px-8 overflow-x-hidden">
          <div className="justify-self-start" data-aos="fade-right">
            <img
              alt=""
              className="object-cover"
              src="/img/home/coins.png"
            ></img>
          </div>
          <div className="self-center">
            <div className="uppercase text-white text-right font-heading font-bold text-xl tracking-wider max-w-lg">
              THE CHOICE IS YOURS
            </div>
            <p className="text-sm text-white text-right  max-w-lg mt-1">
              You choose to win big, you choose to play from varieties of games
              provided by OmitchBet which includes: Slots, Cards, Crash,
              Roullettes, Baccarat, and lots of others.
            </p>
          </div>
        </div>

        <div className="mt-32 relative container mx-auto max-w-screen-lg px-8">
          <div className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            How to get started
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-10 lg:gap-x-20 mt-6"
          >
            <div className="self-center">
              <div className="bg-lightBlue text-center rounded-lg text-white text-sm py-4">
                Connect your wallet
              </div>
            </div>
            <div>
              <div className="bg-orange text-center rounded-lg py-5 px-10 text-sm">
                Deposit the $OMIT/USDC crypto assets at our platform's liquidity
                pool.
              </div>
            </div>
            <div>
              <div className="bg-yellow text-center rounded-lg py-5 px-10 text-sm">
                Place bets and earn rewards for your passion with our great
                odds.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 relative container mx-auto max-w-screen-lg px-8">
          <div className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            Our Games
          </div>
          <div className="grid  sm:grid-cols-1 md:grid-cols-4  mt-6  gap-x-10 gap-y-10">
            <div data-aos="flip-left">
              <img alt="" src="/img/home/bigwin.svg"></img>
              <p className="text-white text-lg text-center mt-2">Slots</p>
            </div>
            <div data-aos="flip-down">
              <img alt="" src="/img/home/heart.svg"></img>
              <p className="text-white text-lg text-center mt-2">Poker</p>
            </div>
            <div data-aos="flip-up">
              <img alt="" src="/img/home/card.svg"></img>
              <p className="text-white text-lg text-center mt-2">
                Black and Red
              </p>
            </div>
            <div data-aos="flip-right">
              <img alt="" src="/img/home/dicebox.svg"></img>
              <p className="text-white text-lg text-center mt-2">Dice</p>
            </div>
          </div>
        </div>

        <div className="mt-32 relative container mx-auto max-w-screen-lg px-8">
          <h2 className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            Our Roadmap
          </h2>

          <h1 className="font-heading uppercase  font-bold text-3xl md:text-6xl text-center tracking-wider mt-2">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r  from-lightOrange to-orange font-heading">
              Coming soon!!
            </span>
          </h1>
        </div>
        <div className="bg-darKbluebg mt-16">
          <div className="pt-16 pb-8 relative container mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 px-8">
            <div>
              <p className="text-white text-sm">
                Follow us on our social and join our community
              </p>
              <div className="flex flex-row gap-x-4 my-4">
                <FaTelegram className="text-white text-4xl" />
                <AiFillTwitterCircle className="text-white text-4xl" />
                <FaDiscord className="text-white text-4xl" />
              </div>
              <div className="bg-orange text-center py-2 w-44 rounded-lg text-sm ">
                Read our gitbook
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

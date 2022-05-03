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
      <div className="bg-[#0F0631] relative">
        <WebpageNav />
        <div className="relative grid md:grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-rows-0 pt-8 container mx-auto px-8">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="mt-4 md:mt-16 px-2 justify-self-center row-start-2 md:row-start-1"
          >
            <h1 className="text-white text-4xl text-center md:text-left  md:text-5xl lg:text-6xl font-[900] uppercase font-heading max-w-sm tracking-wider">
              The future of web 3 gaming
            </h1>
            <p className="text-white text-center md:text-left md:text-lg mt-2 max-w-sm md:ml-8 ">
              OMITCH is building a decentralized gaming system owned by the
              community where the community play with a pool of asset
            </p>
          </div>
          <img
            data-aos="fade-left"
            alt=""
            src="/img/showcase/showcaseimg.svg"
            className="object-contain lg:h-[450px] justify-self-end row-start-1 md:row-start-1"
          ></img>
        </div>
        <img
          alt=""
          src="/img/home/sidevector.svg"
          className="absolute right-0 top-0"
        ></img>

        <img
          alt=""
          src="/img/home/downvector.svg"
          className="absolute h-[600px] top-[1000px]"
        ></img>

        <div className=" mt-16 md:mt-16 relative container max-w-screen-md mx-auto ">
          <h2 className="border text-center uppercase text-white w-80 mx-auto rounded-md font-heading font-bold py-1 text-sm tracking-wider">
            why choose omitchbet
          </h2>
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

        <div className="mt-24 relative container mx-auto px-8">
          <h2 className="uppercase text-[#F8CD0D] font-heading font-bold text-2xl md:text-3xl tracking-wider text-center">
            How to participate
          </h2>
          <div
            className="grid md:grid-cols-2 gap-x-16 gap-y-8 mx-auto mt-8"
            data-aos="fade-up"
          >
            <div className="bg-[#B080FF] text-white p-4 rounded-xl w-[300px] md:w-[350px]  md:justify-self-end">
              <div className="grid grid-cols-2">
                <h4 className="text-dark uppercase text-2xl font-bold font-heading w-24 leading-6 mt-2">
                  Play to earn
                </h4>
                <img
                  src="/img/icons/gamepad.svg"
                  className="object-contain justify-self-end h-12"
                ></img>
              </div>
              <p className="text-sm w-48 mt-32">
                Play your favourite casino games and get rewarded. Enjoy playing
                alone and with friends with a verity of games
              </p>
              <div className="bg-[#2663FF] w-[80px] text-center rounded text-sm py-1 mt-8">
                Play
              </div>
            </div>
            <div className="bg-[#8AA9F8] text-white p-4 rounded-xl w-[300px] md:w-[350px] md:justify-self-start">
              <div className="grid grid-cols-2">
                <h4 className="text-dark uppercase text-2xl font-bold font-heading w-24 leading-6 mt-2">
                  Stake
                </h4>
                <img
                  src="/img/icons/stack.svg"
                  className="object-contain justify-self-end h-12"
                ></img>
              </div>
              <p className="text-sm w-64 mt-32 ">
                Stakers play import roles at omitch. Stakers deposit their
                stable coins into the protocal to back bets, in exchange stakers
                earn apy and partake in protocols profit and loss
              </p>
              <div className="bg-[#2663FF] w-[80px] text-center rounded text-sm py-1 mt-5">
                Stake
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 relative container mx-auto max-w-screen-lg px-8">
          <h2 className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            How to get started
          </h2>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-10 lg:gap-x-10 mt-6"
          >
            <div className="self-center">
              <div className="bg-[#75ADFF] text-center rounded-lg text-dark text-sm py-4">
                Connect your wallet
              </div>
            </div>
            <div>
              <div className="bg-[#75ADFF] text-center rounded-lg py-5 px-10 text-sm">
                Deposit the $OMIT/USDC crypto assets at our platform's liquidity
                pool.
              </div>
            </div>
            <div>
              <div className="bg-[#75ADFF] text-center rounded-lg py-5 px-10 text-sm">
                Place bets and earn rewards for your passion with our great
                odds.
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-16 text-dark rounded-lg">
          <div
            className="w-full h-[160px] md:h-[250px] lg:h-[420px] bg-cover md:bg-contain mx-auto bg-no-repeat"
            style={{ backgroundImage: "url(/img/home/fighter.svg)" }}
          >
            <h2 className="font-heading uppercase font-bold text-xl md:text-2xl text-left tracking-wider pt-8 pl-4 md:pt-32 md:pl-12">
              Our community /p2
            </h2>
            <p className="text-md w-60 md:w-80 pl-4  md:pl-12">
              Join our community to play with other gamers on our P2P platform
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative container mx-auto max-w-screen-lg px-8">
          <div className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            Our Games
          </div>
          <div className="grid  grid-cols-2 md:grid-cols-4  mt-6 gap-x-5 gap-y-5  md:gap-x-10 md:gap-y-10">
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

        <div className="mt-16  md:mt-32 relative container max-w-screen-lg mx-auto grid md:grid-cols-6 gap-y-4 px-8 overflow-x-hidden">
          <img
            alt=""
            className="object-cover justify-self-center col-span-6 md:col-span-1 h-24 md:h-24 mx-auto"
            src="/img/home/coins.png"
            data-aos="fade-right"
          ></img>

          <div className="col-span-6 md:col-span-4 justify-self-center">
            <div className="h-1 bg-white rounded mb-5"></div>
            <div className="uppercase text-white text-center font-heading font-bold text-2xl tracking-wider max-w-lg">
              THE CHOICE IS YOURS
            </div>
            <p className="text-sm text-white text-center max-w-md mt-1">
              You choose to win big, you choose to play from varieties of games
              provided by OmitchBet which includes: Slots, Cards, Crash,
              Roullettes, Baccarat, and lots of others.
            </p>
          </div>
          <img
            alt=""
            className="object-cover col-span-6 md:col-span-1 h-24 md:h-24 mx-auto"
            src="/img/home/dice.png"
            data-aos="fade-left"
          ></img>
        </div>

        {/* <div className="mt-32 relative container mx-auto max-w-screen-lg px-8">
          <h2 className="font-heading uppercase text-white font-bold text-xl text-center tracking-wider">
            Our Roadmap
          </h2>

          <h1 className="font-heading uppercase  font-bold text-3xl md:text-6xl text-center tracking-wider mt-2">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r  from-lightOrange to-orange font-heading">
              Coming soon!!
            </span>
          </h1>
        </div> */}
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

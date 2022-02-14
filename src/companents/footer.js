import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-200 bg-gray-800 flex flex-col ">
      <div className="m-auto block">
        <h1 className=" text-2xl font-bold text-gray-300">
          Follow from social networks
        </h1>
      </div>
      <div className="flex flex-row space-x-8 m-8 justify-center items-center">
        <a
          className=" rounded-full bg-gray-400 hover:bg-gray-100"
          href="https://www.instagram.com/louisvuitton/"
        >
          <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
        </a>
        <a
          className=" rounded-full bg-gray-400 hover:bg-gray-100"
          href="https://www.facebook.com/LouisVuitton/"
        >
          <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" />
        </a>
        <a
          className=" rounded-full bg-gray-400 hover:bg-gray-100"
          href="https://www.carousell.sg/p/join-telegram-group-louis-vuitton-nano-speedy-1136448469/"
        >
          <img src="https://img.icons8.com/ios/50/000000/twitter-circled--v1.png" />{" "}
        </a>
      </div>
      <div className="flex m-auto block space-x-3">
        <div className=" border border-gray-300 min-w-38 rounded hover:bg-slate-200 bg-slate-400">
          <a className="flex flex-row items-center justify-center" href="https://play.google.com/store/apps/details?id=com.vuitton.android&hl=ru&gl=US">
            <img src="https://img.icons8.com/color/48/000000/google-play.png" />
            Google Play Store
          </a>
        </div>
        <div className=" border border-gray-300 min-w-38 rounded hover:bg-slate-200 bg-slate-400">
          <a className="flex flex-row items-center justify-center" href="https://apps.apple.com/us/app/louis-vuitton/id709101942">
            <img src="https://img.icons8.com/ios-filled/50/000000/apple-app-store--v1.png" />
            Apple Store
          </a>
        </div>
      </div>
      <div className=" m-8">
        <p className="text-gray-300 text-1xl ml-12 ">&copy; Louis Vitton</p>
      </div>
    </footer>
  );
};
export default Footer;

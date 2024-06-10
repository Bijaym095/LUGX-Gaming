import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HeroImg from "@/views/hero-img.jpg";
import BannerBg from "@/assets/images/banner-bg.jpg";
import InnerBannerBg from "@/assets/images/inner-banner-bg.jpg"

const Banner = () => {
  const location = useLocation();
  const [currentUri, setCurrentUri] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCurrentUri(location.pathname);
    setTitle(currentUri.slice(1, currentUri.length).toUpperCase())

    // console.log("Test", location.pathname.split('/') )
    
  }, [location, currentUri]);

  if (currentUri === "/") {
    return (
      <section className="py-8 md:py-14" style={{backgroundImage: `url('${BannerBg}')`}}>
        <div className="container">
          <div className="flex flex-wrap-reverse items-center gap-y-5 -mx-3">
            <div className="w-full md:w-1/2 text-white 2xl:leading-loose px-3">
              <span className="inline-block font-medium text-[1rem] 2xl:text-[1.25rem] leading-[0.8333333333333333] mb-2 2xl:mb-4">WELCOME TO LUGX</span>
              <h1 className="2xl:mb-10">BEST GAMING SITE EVER</h1>
              <p>
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
              </p>

              <div className="max-w-[28rem] 2xl:pt-[3.25rem] text-[0.875rem] text-[#7a7a7a]">
                <form className="relative">
                  <label className="sr-only" htmlFor="search">Search</label>
                  <input className="appearance-none w-full h-[3.125rem] pl-[1.625rem] pr-[11.25rem] rounded-[5rem]" type="search" name="search" id="search" placeholder="Type something here" />

                  <button className="btn btn-primary absolute top-0 bottom-0 right-0" type="submit">Search Now</button>
                </form>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <div className="relative max-w-[25.9375rem] mx-auto md:ml-auto">
                <span className="absolute top-3 2xl:top-[1.375rem] right-3 2xl:right-5 inline-block p-[0.25rem_0.875rem] font-bold text-[1.25rem] 2xl:text-[1.375rem] text-white bg-secondary rounded-[5rem]">$22</span>

                <picture className="mb-0 [&_img]:w-full [&_img]:rounded-[1.5625rem]">
                  <source srcSet={HeroImg} type="image/jpg" />
                  <img
                    src={HeroImg}
                    width="356"
                    height="434"
                    alt="Hero Img"
                    loading="lazy"
                  />
                </picture>

                <span className="absolute -bottom-3 2xl:-bottom-[1.75rem] -left-3 2xl:-left-[1.75rem] inline-flex justify-center items-center w-20 2xl:w-[6.25rem] h-20 2xl:h-[6.25rem] font-bold text-[1.25rem] 2xl:text-[1.75rem] text-white bg-primary rounded-full">-40%</span>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container">
          <div className="flex flex-wrap">
            
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url('${InnerBannerBg}')`}}>
      <div className="container">
          <div className="flex flex-col justify-center items-center min-h-[20rem]">
            <h1 className="text-white">{title}</h1>
          </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import block from "../app/assets/block.svg";
import Timer from "../app/assets/Timer.svg";
import Read from "../app/assets/Read.svg";
import Left from "../app/assets/L-arrow.svg";
import Right from "../app/assets/R-arrow.svg";
import CustomerDiscovery from "../app/assets/customer-discovery.svg";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";


const CNRMarketplace = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // State to hold the Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const slides = [
    {
      id: 1,
      icon: block,
      title: "平台限制 ",
      description:
        "许多电子商务平台（如淘宝、 微店、1688 等）禁止销售仿品。为什么要浪费时间使用那些不适合 你的行业或潜在国际客户的平台，而 CNR Marketplace 可以提供全力 支持并带来客户呢？",
    },
    {
      id: 2,
      icon: Timer,
      title: "不断关闭店铺 ",
      description:
        "你是否厌倦了因为担心业务被扣押或平台封禁账户而不断关闭在线商店，然后重新创建一个新名称的商店？接着再次开始营销以吸引旧客户而不是新客户？这一整个过程不应该占用你宝贵的时间。使用 CNR Marketplace，这将不再是困扰你的问题。",
    },
    {
      id: 3,
      icon: Read,
      title: "隐私问题 ",
      description:
        "您的业务在我们这里是安全的。保护个人和商业信息免受当局和其他实体的侵害是卖家的重要关切。我们将确保您在安全无忧的环境中进行业务。",
    },
  ];

  // Effect to update the swiper instance with the custom navigation
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Attach the event handlers for custom navigation buttons
      prevRef.current.onclick = () => swiperInstance.slidePrev();
      nextRef.current.onclick = () => swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full pt-16 pb-12">
      <div className="max-w-[1240px] px-3 md:px-5 m-auto">
        <h1 className="text-[30px] sm:text-[45px] font-bold text-center sm:text-left text-[#141736]">
          为什么在 CNRMarketplace 上销售是显而易见的选择？
        </h1>
        <div className="px-3">
          <div className="relative z-40 bg-white px-3.5 sm:px-10 py-8 sm:py-10 border border-[#B2C0DB66] rounded-[20px] mt-[65px] pb-20">
            <div className="flex justify-end mb-5">
              {/* Custom Navigation Buttons */}
              <button
                ref={prevRef}
                className="  p-3 rounded-full cursor-pointer flex items-center justify-center"
              >
                <Image src={Left} alt="Previous Slide" width={24} height={24} />
              </button>
              <button
                ref={nextRef}
                className=" p-3 rounded-full cursor-pointer  flex items-center justify-center"
              >
                <Image src={Right} alt="Next Slide" width={24} height={24} />
              </button>
            </div>
            {/* Swiper Component */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => setSwiperInstance(swiper)} // Set swiper instance in state
              navigation={false} // Disable default navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="md:pr-5 flex flex-col items-left w-full">
                    <div className="border-none rounded-[15px] bg-[#0177FB] w-[80px] sm:w-[90px] h-[80px] sm:h-[90px] flex items-center justify-center">
                      <Image
                        src={slide.icon}
                        alt={slide.title}
                        width={36}
                        height={36}
                      />
                    </div>
                    <p className="font-bold leading-[46px] text-[22px] sm:text-[24px] text-[#141736] text-left mt-3">
                      {slide.title}
                    </p>
                    <p className="font-normal text-[#141736] leading-[30px] sm:leading-[33px] text-[18px] sm:text-[20px] sm:max-w-[302px] opacity-70 mt-2.5 text-left">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="-mt-[120px] w-full bg-[#141736] pt-[181px] pb-[70px] px-8">
        <div className="max-w-[1200px] w-full mx-auto ">
          <div className="flex items-center md:flex-row flex-col gap-12 lg:gap-[121px]">
            <Image
              src={CustomerDiscovery}
              alt="customer-discovery k"
              width={305}
              height={343}
            />
            <div className="text-white">
              <h2 className="text-[32px] sm:text-[45px] font-bold leading-[46px] md:text-left text-center">
                客户发现
              </h2>
              <p className="mt-7 text-[14px] sm:text-[20px] font-normal leading-[27px] opacity-70 md:text-left text-center max-w-[792px]">
                这个行业的客户早已期待像 CNR Marketplace
                这样的平台。一个一站式的市场，无论是浏览无尽的产品列表还是将新卖家添加到他们的收藏列表中，我们都有这些客户。他们需要你！
              </p>
              <div className="flex items-center justify-center sm:justify-start">
                <Link href='https://cnrmarketplace.com/vendor-register/' target="_blank" className="flex items-center justify-center mt-8 sm:mt-12 bg-[#2A9CF5] rounded-[10px] w-[202px] sm:w-[276px] h-[33px] sm:h-[46px] text-white text-[12px] sm:text-[16px] leading-[32px] font-semibold">
                  现在加入我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNRMarketplace;

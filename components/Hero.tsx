import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className='container'>
      <div className='flex flex-col items-center justify-center py-[180px] max-md:py-[100px]'>
        <h1 className='text-80 text-white font-sfpro font-bold leading-96 text-center max-md:text-4xl'>
          {t("hero_title")}
        </h1>
        <h4 className='text-xl font-medium leading-6 text-white mt-3 text-center'>
          {t("hero_subtitle")}
        </h4>
        <button className='bg-custom_gray25 py-4 px-8 w-40 h-54 rounded-2xl border-1 border-b-3 border-custom_gray mt-8 flex items-center justify-center shadow-custom-1 backdrop-blur-2xl'>
          <p className='text-base font-semibold font-sfpro leading-5 text-white'>
            {t("try")}
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;

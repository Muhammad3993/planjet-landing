import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OpenSource = () => {
  const t = useTranslations("Open-source");
  return (
    <section className='container' id="open-source">
      <div className="flex flex-col items-center py-[160px] max-md:py-[130px]">
        <h1 className='font-sfpro font-semibold text-56 leading-67 text-center text-white max-md:text-4xl'>
          {t("open_source")}
        </h1>
        <div className='mt-10 max-md:mt-6'>
          <h4 className='text-white text-center font-normal text-2xl font-sfpro max-md:text-base'>
            {t("open_source_text")}
          </h4>
          <h4 className='text-white text-center font-normal text-2xl font-sfpro max-md:text-base'>
            {t("open_source_text_1")}
          </h4>
        </div>
        <button className='bg-custom_gray25 py-4 px-8 w-40 h-54 rounded-2xl border-1 border-b-3 border-custom_gray mt-8 flex items-center justify-center shadow-custom-1 backdrop-blur-2xl select-none gap-1'>
          <p className='text-base font-semibold font-sfpro leading-5 text-white'>
            Git Hub
          </p>
          <Image
            src='/images/git.svg'
            alt=''
            width={26}
            height={26}
            className='relative top-[-1px]'
          />
        </button>
      </div>
    </section>
  );
};

export default OpenSource;

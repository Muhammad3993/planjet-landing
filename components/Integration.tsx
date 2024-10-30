import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Integration = () => {
  const t = useTranslations("Integration");
  return (
    <section className='container'>
      <div className='w-full h-[564px] bg-custom_gray mt-40 rounded-72 border-x-6 border-custom_gray12 backdrop-blur-125 flex items-center justify-center max-md:h-auto max-md:flex-col max-sm:rounded-35'>
        <div className='w-[485]'>
          <Image
            src='/images/intagration.svg'
            alt=''
            className="w-[485px] h-[711px] max-sm:w-[295px] max-sm:h-[432px] max-md:mt-[-140px] max-sm:mt-[-90px]"
            width={485}
            height={711}
          />
        </div>
        <div className='w-[60%] flex flex-col gap-8 max-md:w-full max-md:py-8 max-md:px-6 max-md:gap-4 max-md:mt-[-40px]'>
          <h2 className='text-56 font-semibold font-sfpro leading-67 text-white max-md:text-2xl max-md:leading-6'>
            {t("integration_with_telegram")}
          </h2>
          <div className='flex gap-3 w-[80%] max-md:w-full'>
            <div>
              <div className='w-[6px] h-[6px] rounded-full bg-white relative top-[12px]' />
            </div>
            <h4 className='font-normal text-white text-2xl font-sfpro max-md:text-15 max-md:leading-5'>
              {t("easy_integration")}
            </h4>
          </div>
          <div className='flex gap-3 w-[80%]'>
            <div>
              <div className='w-[6px] h-[6px] rounded-full bg-white relative top-[12px]' />
            </div>
            <h4 className='font-normal text-white text-2xl font-sfpro max-md:text-15 max-md:leading-5'>
              {t("manage_notifications")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;

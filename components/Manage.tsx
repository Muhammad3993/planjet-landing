import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Manage = () => {
  const t = useTranslations("Manage");
  return (
    <section className='container-manage overflow-hidden'>
      <div className='w-full h-[564px] bg-custom_gray mt-40 rounded-72 border-x-6 border-custom_gray12 backdrop-blur-125 flex flex-row-reverse items-center justify-between max-md:h-auto max-md:flex-col-reverse max-sm:rounded-35 max-md:pt-12 max-md:pb-0 max-xs:rounded-none'>
        <div className='relative max-md:flex max-md:justify-end max-md:items-end max-md:w-full max-md:mt-10 '>
          <Image
            src='/images/manage.svg'
            alt=''
            className='w-[422px] h-[621px] max-sm:w-[295px] max-sm:h-[432px] relative top-[-35px] max-xs:hidden'
            width={422}
            height={621}
          />
          <Image
            src='/images/managemedia.svg'
            alt=''
            className='w-[422px] h-[621px] max-sm:w-[295px] max-sm:h-[432px] top-[-35px] relative right-[-30px] hidden max-xs:flex'
            width={422}
            height={621}
          />
          <Image
            src='/images/manage1.svg'
            alt=''
            width={358}
            height={142}
            className='absolute bottom-[11%] left-[-52%] max-md:left-[12%] max-md:bottom-[26%] max-sm:w-[173px] max-xs:left-[10px] z-10'
          />
          <Image
            src='/images/manage2.svg'
            alt=''
            width={320}
            height={124}
            className='absolute bottom-[27%] left-[-35%] max-md:left-[25%] max-md:bottom-[35%] max-sm:w-[173px] max-xs:left-[30px] z-0'
          />
        </div>
        <div className='w-[70%] pl-20 flex flex-col gap-8 max-md:w-full max-md:py-8 max-md:px-6 max-md:gap-4 max-md:mt-[-40px] max-lg:gap-4'>
          <h2 className='text-56 font-semibold font-sfpro leading-67 text-white max-md:text-2xl max-md:leading-6 max-lg:text-4xl'>
            {t("manage_task_with_planjet")}
          </h2>

          <h4 className='font-normal text-white text-2xl font-sfpro max-md:text-15 max-md:leading-5 w-[55%] max-md:w-full'>
            {t("manage_task_with_planjet_title")}
          </h4>
          <button className='border-1 border-custom_gray bg-custom_gray25 w-[160px] h-[54px] rounded-2xl backdrop-blur-[50px] shadow-custom-3 flex items-center justify-center cursor-pointer mt-7'>
            <p className="text-white font-semibold text-base font-sfpro">{t("contact")}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Manage;

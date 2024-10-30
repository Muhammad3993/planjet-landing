import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Create = () => {
  const t = useTranslations("Create");
  return (
    <section className='container'>
      <div className='w-full h-[564px] bg-custom_gray mt-40 rounded-72 border-x-6 border-custom_gray12 backdrop-blur-125 flex flex-row-reverse items-center justify-between max-md:h-auto max-md:flex-col max-sm:rounded-35'>
        <div className='relative flex justify-end items-end max-md:w-full'>
          <Image
            src='/images/create.svg'
            alt=''
            className="w-[422px] h-[621px] max-sm:w-[295px] max-sm:h-[432px] max-md:mt-[-140px] max-sm:mt-[-90px] relative top-[-35px]"
            width={422}
            height={621}
          />
          <Image 
            src="/images/create1.svg"
            alt=""
            width={280}
            height={142}
            className="absolute bottom-[26%] left-[-28%] max-md:left-[25%] max-md:bottom-[35%] max-sm:w-[173px] max-xs:left-[30px]"
          />
        </div>
        <div className='w-[70%] pl-20 flex flex-col gap-8 max-md:w-full max-md:py-8 max-md:px-6 max-md:gap-4 max-md:mt-[-40px] max-lg:gap-4'>
          <h2 className='text-56 font-semibold font-sfpro leading-67 text-white max-md:text-2xl max-md:leading-6 max-lg:text-4xl'>
            {t("create_task")}
          </h2>
          <div className='flex gap-3 w-[80%] max-md:w-full'>
            <div>
              <div className='w-[6px] h-[6px] rounded-full bg-white relative top-[12px]' />
            </div>
            <h4 className='font-normal text-white text-2xl font-sfpro max-md:text-15 max-md:leading-5'>
              {t("ability_create")}
            </h4>
          </div>
          <div className='flex gap-3 w-[80%]'>
            <div>
              <div className='w-[6px] h-[6px] rounded-full bg-white relative top-[12px]' />
            </div>
            <h4 className='font-normal text-white text-2xl font-sfpro max-md:text-15 max-md:leading-5'>
              {t("convenient_input")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;

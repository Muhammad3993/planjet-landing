import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SelfHosted = () => {
  const t = useTranslations("Self-hosted");
  return (
    <section className='container' id="self-hosted">
      <h1 className='font-sfpro font-semibold text-56 leading-67 text-center text-white max-md:text-4xl'>
        {t("self_hosted")}
      </h1>
      <h4 className='text-white text-center text-2xl font-sfpro font-normal mt-4 max-md:text-xl'>
        {t("self_hosted_text")}
      </h4>
      <div className='flex flex-wrap gap-6 mt-28 max-md:mt-10'>
        <div className='p-10 bg-custom_gray rounded-35 border-y-1 border-x-4 border-custom_gray12 shadow-custom-2 backdrop-blur-125 flex-1 min-w-[406px] max-xsl:min-w-[300px]'>
          <div className='flex gap-4'>
            <div>
              <div className='w-10 h-10 flex items-center justify-center bg-custom_gray35 rounded-xl border-2 border-custom_gray12 relative top-[4px] max-md:w-7 max-md:h-7 max-md:rounded-lg max-md:top-[3px]'>
                <Image src='/images/coin.svg' alt='' width={24} height={24} className="max-md:w-4 max-md:h-4" />
              </div>
            </div>
            <h3 className='font-sfpro text-32 font-semibold text-white max-md:text-22'>
              {t("data_control")}
            </h3>
          </div>
          <h4 className='text-17 font-sfpro text-white font-normal mt-5 max-md:text-15'>
            {t("data_control_title")}
          </h4>
        </div>
        <div className='p-10 bg-custom_gray rounded-35 border-y-1 border-x-4 border-custom_gray12 shadow-custom-2 backdrop-blur-125 flex-1 min-w-[406px] max-xsl:min-w-[300px]'>
          <div className='flex gap-4'>
            <div>
              <div className='w-10 h-10 flex items-center justify-center bg-custom_gray35 rounded-xl border-2 border-custom_gray12 relative top-[4px] max-md:w-7 max-md:h-7 max-md:rounded-lg max-md:top-[3px]'>
                <Image src='/images/code.svg' alt='' width={24} height={24} className="max-md:w-4 max-md:h-4" />
              </div>
            </div>
            <h3 className='font-sfpro text-32 font-semibold text-white max-md:text-22'>
              {t("customizability")}
            </h3>
          </div>
          <h4 className='text-17 font-sfpro text-white font-normal mt-5 max-md:text-15'>
            {t("customizability_title")}
          </h4>
        </div>
        <div className='p-10 bg-custom_gray rounded-35 border-y-1 border-x-4 border-custom_gray12 shadow-custom-2 backdrop-blur-125 flex-1 min-w-[406px] max-xsl:min-w-[300px]'>
          <div className='flex gap-4'>
            <div>
              <div className='w-10 h-10 flex items-center justify-center bg-custom_gray35 rounded-xl border-2 border-custom_gray12 relative top-[4px] max-md:w-7 max-md:h-7 max-md:rounded-lg max-md:top-[3px]'>
                <Image src='/images/cube.svg' alt='' width={24} height={24} className="max-md:w-4 max-md:h-4" />
              </div>
            </div>
            <h3 className='font-sfpro text-32 font-semibold text-white max-md:text-22'>
              {t("independence")}
            </h3>
          </div>
          <h4 className='text-17 font-sfpro text-white font-normal mt-5 max-md:text-15'>
            {t("independence_title")}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SelfHosted;

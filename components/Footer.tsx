import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='container'>
      <div className='mt-[130px] max-md:mt-[100px]'>
        <div className='flex justify-between items-center flex-wrap gap-2 max-md:flex-col max-md:items-start'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              alt=''
              className='w-[159px] h-[40px] max-md:w-[120px] max-md:h-[30px]'
              width={159}
              height={40}
            />
          </Link>
          <div className='flex gap-7 max-md:flex-col my-7'>
            <Link
              href=''
              className='font-medium text-17 font-sfpro text-white '
            >
              Support
            </Link>
            <Link
              href=''
              className='font-medium text-17 font-sfpro text-white '
            >
              Terms of use
            </Link>
            <Link
              href=''
              className='font-medium text-17 font-sfpro text-white '
            >
              Privacy and cookie policy
            </Link>
            <Link
              href=''
              className='font-medium text-17 font-sfpro text-white '
            >
              Payment policy
            </Link>
          </div>
          <div className='flex gap-9'>
            <Link href=''>
              <Image src='/images/telegram.svg' alt='' width={32} height={32} />
            </Link>
            <Link href=''>
              <Image
                src='/images/instagram.svg'
                alt=''
                width={32}
                height={32}
              />
            </Link>
            <Link href=''>
              <Image src='/images/linkedin.svg' alt='' width={32} height={32} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between mt-4 max-md:flex-col">
          <h5 className="text-17 text-custom_white opacity-50 font-sfpro font-medium">2024 © Dedicated.agency 2023. All Rights Reserved</h5>
          <h5 className="text-17 text-custom_white opacity-50 font-sfpro font-medium">Product by dedicated.agency</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

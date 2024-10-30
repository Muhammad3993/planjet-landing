"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();

  const lang = pathname.slice(1, 3);

  const handleLanguageChange = (lang: string) => {
    const newLocale = lang;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <nav className='container h-14 flex items-center justify-between'>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt=''
          className='w-[159px] h-[40px] max-md:w-[120px] max-md:h-[30px]'
          width={159}
          height={40}
        />
      </Link>
      <div className='flex gap-12 max-md:hidden'>
        <Link
          href={""}
          className='text-18 font-medium font-sfpro leading-5 text-white'
        >
          {t("about_project")}
        </Link>
        <Link
          href={`/${lang}/#open-source`}
          className='text-18 font-medium font-sfpro leading-5 text-white'
        >
          {t("open_source")}
        </Link>
        <Link
          href={`/${lang}/#self-hosted`}
          className='text-18 font-medium font-sfpro leading-5 text-white'
        >
          {t("self_hosted")}
        </Link>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <div
          className={`text-18 max-md:text-base font-medium font-sfpro leading-5 text-white cursor-pointer ${
            lang === "ru" && "opacity-60"
          }`}
          onClick={() => handleLanguageChange("ru")}
        >
          RU
        </div>
        <div className='w-[3px] h-5 bg-white'></div>
        <div
          className={`text-18 max-md:text-base font-medium font-sfpro leading-5 text-white cursor-pointer ${
            lang === "en" && "opacity-60"
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

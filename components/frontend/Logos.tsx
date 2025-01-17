import Image from "next/image";
import KindeLogo from "@/public/kinde.svg";
import VercelLogo from "@/public/vercel.svg";
import NextLogo from "@/public/logo.svg";

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7">Trusted</h2>
      <div className="mt-10 grid mx-auto max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:grid-cols-5">
        <Image
          src={KindeLogo}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
          alt="Kinde"
          width={100}
          height={100}
        />
        <Image
          src={VercelLogo}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
          alt="Kinde"
          width={100}
          height={100}
        />
        <Image
          src={KindeLogo}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
          alt="Kinde"
          width={100}
          height={100}
        />
        <Image
          src={VercelLogo}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
          alt="Kinde"
          width={100}
          height={100}
        />
        <Image
          src={KindeLogo}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert"
          alt="Kinde"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

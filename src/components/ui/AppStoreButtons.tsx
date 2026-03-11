import { clsx } from "clsx";
import { siteConfig } from "@/lib/constants";

interface AppStoreButtonsProps {
  className?: string;
}

export function AppStoreButtons({ className }: AppStoreButtonsProps) {
  return (
    <div className={clsx("flex flex-wrap gap-4", className)}>
      <a
        href={siteConfig.appStore.ios}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-[14px] bg-white px-5 py-3 text-black transition-opacity hover:opacity-90"
        aria-label="Download on the App Store"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] leading-none">Download on the</span>
          <span className="text-lg font-semibold leading-tight">App Store</span>
        </div>
      </a>
      <a
        href={siteConfig.appStore.android}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-[14px] bg-white px-5 py-3 text-black transition-opacity hover:opacity-90"
        aria-label="Get it on Google Play"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M3.60886 1.26465C3.22695 1.6685 3 2.30537 3 3.12768V20.8724C3 21.6947 3.22695 22.3316 3.60886 22.7354L3.68677 22.8095L13.6934 12.8028V12.197L3.68677 2.19043L3.60886 2.26465V1.26465ZM3.60886 1.26465L3.68677 1.19043L3.60886 1.26465Z" />
          <path d="M17.0268 16.1465L13.6934 12.8028V12.197L17.0268 8.85339L17.1226 8.90904L21.0612 11.1539C22.1726 11.7869 22.1726 12.813 21.0612 13.446L17.1226 15.6909L17.0268 15.7465V16.1465Z" />
          <path d="M17.1227 15.691L13.6934 12.5L3.60889 22.7354C3.99889 23.1585 4.6422 23.2103 5.36943 22.7956L17.1227 15.691Z" />
          <path d="M17.1227 8.90903L5.36943 1.80441C4.6422 1.38971 3.99889 1.44149 3.60889 1.86466L13.6934 12.1L17.1227 8.90903Z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] leading-none">GET IT ON</span>
          <span className="text-lg font-semibold leading-tight">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
}

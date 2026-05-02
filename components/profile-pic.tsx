import Image from "next/image";
import profile from "../public/images/hero-1.png";

function PixelMascot() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 96"
      className="absolute bottom-12 left-6 z-20 hidden w-28 drop-shadow-[0_12px_0_rgba(32,17,11,0.18)] sm:block"
    >
      <ellipse cx="48" cy="82" rx="24" ry="5" fill="#20110b" opacity="0.22" />
      <rect x="28" y="6" width="40" height="10" fill="#e52521" />
      <rect x="22" y="16" width="52" height="10" fill="#e52521" />
      <rect x="18" y="26" width="60" height="18" fill="#f6b27a" />
      <rect x="26" y="30" width="8" height="8" fill="#20110b" />
      <rect x="52" y="30" width="8" height="8" fill="#20110b" />
      <rect x="36" y="38" width="10" height="4" fill="#7c3418" />
      <rect x="34" y="42" width="28" height="8" fill="#f6b27a" />
      <rect x="26" y="48" width="44" height="20" fill="#049cd8" />
      <rect x="22" y="50" width="10" height="16" fill="#e52521" />
      <rect x="64" y="50" width="10" height="16" fill="#e52521" />
      <rect x="20" y="62" width="14" height="10" fill="#f8f8f8" />
      <rect x="62" y="62" width="14" height="10" fill="#f8f8f8" />
      <rect x="30" y="68" width="10" height="16" fill="#20110b" />
      <rect x="52" y="68" width="10" height="16" fill="#20110b" />
      <rect x="24" y="82" width="18" height="6" fill="#7c3418" />
      <rect x="50" y="82" width="18" height="6" fill="#7c3418" />
      <rect x="68" y="54" width="8" height="8" fill="#f8f8f8" />
      <rect x="16" y="54" width="8" height="8" fill="#f8f8f8" />
    </svg>
  );
}

function PixelStar({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M12 2l2.8 5.7L21 9l-4.5 4.4L17.6 20 12 17l-5.6 3 1.1-6.6L3 9l6.2-1.3L12 2z"
        fill="#fbd000"
        stroke="#7c3418"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProfilePic() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="absolute inset-x-8 bottom-0 h-1/2 rounded-full bg-mario-green/25 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-mario-brickDark bg-mario-brick p-3 shadow-[0_44px_120px_rgba(32,17,11,0.38)] md:p-5">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(90deg,#7c3418_0_12.5%,#b85a24_12.5%_25%,#7c3418_25%_37.5%,#b85a24_37.5%_50%,#7c3418_50%_62.5%,#b85a24_62.5%_75%,#7c3418_75%_87.5%,#b85a24_87.5%_100%)]" />
        <div className="absolute right-8 top-8 grid grid-cols-3 gap-2">
          <span className="size-7 rounded-full border-2 border-mario-brickDark bg-mario-coin shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)]" />
          <span className="size-7 rounded-full border-2 border-mario-brickDark bg-mario-coin shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)]" />
          <span className="size-7 rounded-full border-2 border-mario-brickDark bg-mario-coin shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)]" />
        </div>

        <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[1.35rem] border-[10px] border-mario-shell bg-[linear-gradient(180deg,#5c94fc_0%,#5c94fc_58%,#43b047_58%,#2fa346_100%)]">
          <PixelStar className="absolute left-10 top-6 z-20 h-8 w-8 rotate-[-8deg] drop-shadow-[0_4px_0_rgba(32,17,11,0.2)]" />
          <PixelStar className="absolute right-16 top-10 z-20 h-7 w-7 rotate-[10deg] drop-shadow-[0_4px_0_rgba(32,17,11,0.2)]" />
          <div className="absolute left-8 top-18 h-10 w-28 rounded-full bg-mario-cloud shadow-[34px_0_0_#f8f8f8,17px_-18px_0_#f8f8f8]" />
          <div className="absolute right-10 top-36 h-8 w-24 rounded-full bg-mario-cloud/95 shadow-[28px_0_0_rgba(248,248,248,0.95),14px_-15px_0_rgba(248,248,248,0.95)]" />
          <div className="absolute left-10 top-28 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((coin) => (
              <span
                key={coin}
                className="grid size-8 place-items-center rounded-full border-[3px] border-mario-brickDark bg-mario-coin text-[10px] font-black text-mario-brickDark shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)]"
              >
                $
              </span>
            ))}
          </div>
          <div className="absolute left-20 top-6 h-10 w-10 rotate-45 bg-mario-coin shadow-[18px_20px_0_#fbd000,-22px_68px_0_#fbd000]" />
          <div className="absolute left-20 top-6 h-10 w-10 -rotate-45 bg-mario-coin" />
          <div className="absolute right-24 top-48 grid size-16 place-items-center border-4 border-mario-brickDark bg-mario-question text-4xl font-black text-mario-brickDark shadow-[inset_0_-5px_0_rgba(0,0,0,0.18)]">
            ?
          </div>
          <div className="absolute bottom-0 right-10 h-28 w-24 rounded-t-3xl border-4 border-mario-brickDark bg-mario-pipe shadow-[inset_10px_0_0_rgba(255,255,255,0.18)]" />
          <div className="absolute bottom-24 right-5 h-10 w-32 rounded-xl border-4 border-mario-brickDark bg-mario-green" />
          <PixelMascot />
          <Image
            src={profile}
            priority
            quality={90}
            sizes="(max-width: 768px) 88vw, 620px"
            alt="Foto de perfil de Luis Felipe Guilhao"
            className="relative z-10 h-auto w-[94%] object-contain drop-shadow-[0_30px_34px_rgba(32,17,11,0.48)]"
          />
        </div>
      </div>
    </div>
  );
}

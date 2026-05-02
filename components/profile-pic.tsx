import Image from "next/image";
import profile from "../public/images/hero-1.png";

function MarioCoin({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      shapeRendering="crispEdges"
    >
      <rect x="10" y="2" width="12" height="2" fill="#fff6a4" />
      <rect x="6" y="4" width="20" height="4" fill="#fff06a" />
      <rect x="4" y="8" width="24" height="16" fill="#f7d51d" />
      <rect x="6" y="24" width="20" height="4" fill="#c97800" />
      <rect x="10" y="28" width="12" height="2" fill="#8f4b00" />
      <rect x="6" y="8" width="4" height="16" fill="#fff06a" />
      <rect x="22" y="8" width="4" height="16" fill="#d89000" />
      <rect x="14" y="6" width="4" height="20" fill="#fff9b8" />
      <rect x="18" y="8" width="2" height="16" fill="#b96b00" />
      <rect x="8" y="4" width="2" height="4" fill="#8f4b00" />
      <rect x="22" y="4" width="2" height="4" fill="#8f4b00" />
      <rect x="4" y="10" width="2" height="12" fill="#8f4b00" />
      <rect x="26" y="10" width="2" height="12" fill="#8f4b00" />
    </svg>
  );
}

export function ProfilePic() {
  const coins = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[620px] place-items-center overflow-visible">
      <div className="absolute inset-[13%] rounded-full bg-mario-coin/18 blur-3xl" />

      <div className="mario-coin-orbit absolute inset-[8%] sm:inset-[9%]">
        {coins.map((coin) => (
          <span
            key={coin}
            className="absolute left-1/2 top-1/2 block"
            style={{
              transform: `rotate(${coin * 60}deg) translateX(clamp(9.5rem, 26vw, 15.5rem)) rotate(-${coin * 60}deg)`,
            }}
          >
            <MarioCoin className="mario-coin-spin size-9 drop-shadow-[0_7px_0_rgba(32,17,11,0.22)] sm:size-11" />
          </span>
        ))}
      </div>

      <Image
        src={profile}
        priority
        quality={90}
        sizes="(max-width: 768px) 88vw, 560px"
        alt="Foto de perfil de Luis Felipe Guilhao"
        className="relative z-10 h-auto w-[82%] object-contain drop-shadow-[0_30px_42px_rgba(32,17,11,0.36)]"
      />
    </div>
  );
}

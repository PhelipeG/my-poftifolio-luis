import Image from "next/image";
import profile from "../public/images/hero-1.png";

const stars = [
  "left-[8%] top-[14%] size-12 sm:size-14",
  "right-[10%] top-[10%] size-10 sm:size-12",
  "left-[3%] top-[48%] size-10 sm:size-12",
  "right-[4%] top-[46%] size-12 sm:size-14",
  "left-[18%] bottom-[10%] size-9 sm:size-11",
  "right-[20%] bottom-[8%] size-10 sm:size-12",
  "left-[35%] top-[3%] size-8 sm:size-10",
  "right-[36%] bottom-[2%] size-8 sm:size-10",
];

export function ProfilePic() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[620px] place-items-center overflow-visible">
      <div className="absolute inset-[13%] rounded-full bg-mario-coin/18 blur-3xl" />

      {stars.map((position) => (
        <Image
          key={position}
          src="/images/estrelas.gif"
          alt=""
          width={56}
          height={56}
          unoptimized
          aria-hidden="true"
          sizes="56px"
          className={`pointer-events-none absolute z-0 object-contain opacity-90 mix-blend-multiply [contain:layout_paint] dark:mix-blend-screen ${position}`}
        />
      ))}

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

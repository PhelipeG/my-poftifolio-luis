import Image from "next/image";
import profile from "../public/images/hero-1.png";

export function ProfilePic() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute inset-x-8 bottom-0 h-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-[#050505] p-4 shadow-[0_44px_120px_rgba(29,185,84,0.16)] md:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(29,185,84,0.22),rgba(255,255,255,0.03)_34%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute left-4 top-4 h-20 w-px bg-accent/60" />
        <div className="absolute left-4 top-4 h-px w-20 bg-accent/60" />
        <div className="absolute bottom-4 right-4 h-20 w-px bg-accent/60" />
        <div className="absolute bottom-4 right-4 h-px w-20 bg-accent/60" />

        <div className="relative grid aspect-square place-items-center rounded-[1.45rem] bg-black">
          <div className="absolute inset-[9%] rounded-full border border-accent/25" />
          <div className="absolute inset-[17%] rounded-full border border-white/10" />
          <Image
            src={profile}
            priority
            quality={90}
            sizes="(max-width: 768px) 88vw, 620px"
            alt="Foto de perfil de Luis Felipe Guilhao"
            className="relative z-10 h-auto w-[96%] object-contain drop-shadow-[0_30px_42px_rgba(0,0,0,0.56)]"
          />
        </div>
      </div>
    </div>
  );
}

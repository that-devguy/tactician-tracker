import Image from "next/image";

export default function Set10Release() {
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col lg:pt-8">
      <div className="relative flex min-h-[16rem] select-none justify-center md:max-h-[28rem] lg:rounded-lg">
        <Image
          src="/remix-rumble.png"
          height="204"
          width="477"
          alt="Remix Rumble Logo"
          className="absolute z-20 pt-24 drop-shadow-lg"
        />
        <Image
          src="/set10-Promo.jpg"
          height="1298"
          width="2560"
          alt="Remix Rumble Promo"
          className="rounded-lg object-cover object-top"
        />
        <div className="via-brand-bg/65 absolute inset-0 rounded-md bg-gradient-to-t from-brand-bg from-15% to-brand-bg/10"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-black drop-shadow-md  group-hover:text-brand-secondary sm:text-2xl md:text-3xl mb-3">
          WELCOME TO REMIX RUMBLE
        </p>
        <p className="text-white/50 w-2/3 text-center">
        Remix Rumble marks the tenth installment in Teamfight Tactics, introducing a smorgasbord of changes that mix it up. These include a fresh interpretation of the chosen mechanic, an innovative immersive music system, and various other enhancements.
        </p>
      </div>
    </div>
  );
}

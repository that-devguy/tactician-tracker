import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="max-w-5xl">
      <div className="relative">
        <Image
          src="/layer-1.png"
          height={1298}
          width={2560}
          alt="layer-1"
          className="absolute top-0 left-0"
        />
        <Image
          src="/layer-2.png"
          height={1298}
          width={2560}
          alt="layer-2"
          className="absolute top-0 left-0"
        />
        <Image
          src="/layer-3.png"
          height={1298}
          width={2560}
          alt="layer-3"
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
}

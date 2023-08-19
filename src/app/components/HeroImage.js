import Image from "next/image";

export default function heroImage() {
  return (
    <div className="relative max-h-[28rem] select-none bg-gradient-to-t from-[#ff571d] to-[#F8A634]">
      <Image
        src="/layer-3.png"
        height="1298"
        width="2560"
        alt="layer-3"
        className="absolute top-10 z-30"
      />
      <Image
        src="/layer-2.png"
        height="1298"
        width="2560"
        alt="layer-2"
        className="absolute top-10 z-20"
      />
      <Image
        src="/layer-1.png"
        height="1298"
        width="2560"
        alt="layer-1"
        className="absolute top-10 z-10"
      />
      <Image
        src="/layer-background.png"
        height="1298"
        width="2560"
        alt="layer-1"
        className=""
      />
    </div>
  );
}

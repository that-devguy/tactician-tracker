import Image from "next/image";

export default function heroImage() {
  return (
    <div className="relative flex min-h-[18rem] items-end overflow-hidden bg-gradient-to-t from-[#ff571d] to-[#F8A634] lg:max-h-[28rem]">
      <Image
        src="/layer-3.png"
        height="1298"
        width="2560"
        alt="layer-3"
        className="bottom absolute z-20 md:-bottom-10"
      />
      <Image
        src="/layer-2.png"
        height="1298"
        width="2560"
        alt="layer-2"
        className="bottom absolute z-10 md:-bottom-10"
      />
      <Image
        src="/layer-1.png"
        height="1298"
        width="2560"
        alt="layer-1"
        className="bottom absolute md:-bottom-10"
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

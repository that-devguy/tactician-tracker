/* eslint-disable @next/next/no-img-element */
export default function heroImage() {
  return (
    <div className="relative flex min-h-[16rem] select-none items-end overflow-hidden bg-gradient-to-t from-[#ff571d] to-[#F8A634] md:max-h-[28rem] lg:rounded-lg">
      <img
        src="/layer-3.png"
        height="1298"
        width="2560"
        alt="layer-3"
        className="bottom absolute -bottom-12 z-20 md:-bottom-24 lg:-bottom-36"
      />
      <img
        src="/layer-2.png"
        height="1298"
        width="2560"
        alt="layer-2"
        className="bottom absolute -bottom-12 z-10 md:-bottom-24 lg:-bottom-36"
      />
      <img
        src="/layer-1.png"
        height="1298"
        width="2560"
        alt="layer-1"
        className="bottom absolute -bottom-12 md:-bottom-24 lg:-bottom-36"
      />
      <img
        src="/layer-background.png"
        height="1298"
        width="2560"
        alt="layer-1"
        className=""
      />
    </div>
  );
}

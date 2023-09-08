import Image from "next/image";

export default function Champion({ params: { name } }) {
  return (
    <section className="mx-auto max-w-7xl px-2 pt-4 text-lg md:px-10 md:pt-8">
      <div className="profile-headerCard flex flex-col items-center gap-1 p-2 md:flex-row md:gap-5 md:p-4">
        <div className="flex flex-col justify-center py-2">
          <Image
            className="rounded-full border-4 border-transparent ring-4 ring-brand-main"
            src={`https://raw.communitydragon.org/latest/game/assets/characters/tft9_aatrox/hud/tft9_aatrox_square.tft_set9.png`}
            alt={`Aatrox`}
            height="100"
            width="100"
          />
        </div>
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold md:text-4xl">Aatrox</h1>
          </div>
          <div className="flex gap-2 text-[.6rem] font-black leading-[.8rem] text-brand-bg md:gap-2 md:text-xs">

            {/* Traits */}
            <div
              key={`trait1`}
              className={`bg-brand-secondary h-fit w-fit rounded-full p-1`}
            >
              <Image
                className={`z-10 invert`}
                src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_darkin.tft_set9.png`}
                alt={`darkin`}
                height="20"
                width="20"
              />
            </div>

            <div
              key={`trait2`}
              className={`bg-brand-secondary h-fit w-fit rounded-full p-1`}
            >
              <Image
                className={`z-10 invert`}
                src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_juggernaut.tft_set9.png`}
                alt={`juggernaut`}
                height="20"
                width="20"
              />
            </div>

            <div
              key={`trait3`}
              className={`bg-brand-secondary h-fit w-fit rounded-full p-1`}
            >
              <Image
                className={`z-10 invert`}
                src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_slayer.png`}
                alt={`slayer`}
                height="20"
                width="20"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

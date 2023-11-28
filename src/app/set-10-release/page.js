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
          className="absolute z-20 max-w-xs pt-24 drop-shadow-lg md:max-w-none"
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
      <div className="flex flex-col px-4 sm:items-center sm:justify-center">
        <h1 className="mb-3 text-center text-2xl font-black drop-shadow-md sm:text-4xl md:text-5xl">
          WELCOME TO <br />
          <span className="text-3xl text-brand-secondary sm:text-5xl md:text-6xl">
            REMIX RUMBLE
          </span>
        </h1>
        <h2 className="text-sm text-white/50 sm:w-2/3 sm:text-center">
          Remix Rumble marks the tenth installment in Teamfight Tactics,
          introducing a smorgasbord of changes that mix it up. These include a
          fresh interpretation of the chosen mechanic, an innovative immersive
          music system, and various other enhancements.
        </h2>
      </div>

      {/* Systems Sections */}
      <section className="px-2 pt-8 md:px-6 lg:px-6">
        <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              SYSTEMS
            </h3>
            <p className="text-sm text-white sm:hidden">
              Detailed breakdown of new mechanics
            </p>
            <p className="hidden text-sm text-white sm:block md:text-sm">
              Detailed breakdown of set 10 mechanics including, Headliner,
              Portals, Leveling, and more.
            </p>
          </div>
          <Image
            src="/teemo_base_banner.png"
            height="200"
            width="200"
            alt="Base Teemo Chibi"
            className="h-fill select-none overflow-hidden"
          />
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Ranked Changes
          </h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            In the this new set, climbing in the lower ranks up to Platinum will
            be slightly easier and faster. Higher ranks may take longer due to a
            longer season with no mid-set reset, and adjustments are made to fit
            the new season length, though not in a 1:1 ratio. <br />
            <br /> Emerald tier has officially arrived to TFT! Players will now
            progress from Platinum to Emerald before moving on to Diamond tier.{" "}
          </p>
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Headliner
          </h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            2-star Headliners can be purchased from the shop with an additional
            plus one to one of their traits, along with a unique bonus.
            <br />
            <br />A Headliner will appear in every shop when the player does not
            have a Headliner and only once in every four shops when they do have
            a Headliner. A player can only have one Headliner at a time,
            requiring you to sell your current Headliner before purchasing a new
            one. Now, the good thing about this is that Headliners have a small
            amount of bad luck protection built in, meaning you won&apos;t see
            the same ones showing up in your shops consecutively.{" "}
          </p>
          <Image
            src="/headliner-nami.png"
            height="1298"
            width="2560"
            alt="Headliner Nami"
            className="mx-auto my-4 w-full max-w-3xl rounded-lg object-cover object-top"
          />
        </div>

        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">Portals</h4>
          <p className="pt-2 text-sm text-white/50 md:text-sm">
            Protals are back! This time they are toned down a bit. Players will
            vote for 1 of 3 Portals at the start of the game to modify the
            rules. Portal categories are Augments, Gold, Champions, Items,
            Combat, Unique, and Headliner.
          </p>
        </div>
        <div className="divide-y divide-brand-bg3 p-4">
          <h4 className="text-base font-bold text-white md:text-lg">
            Leveling Changes
          </h4>
          <div className="flex flex-col gap-2 pt-2 text-sm text-white/50 md:text-sm">
            Fast 10? Level 10 is now the max level. No augment needed!
            <li>Level 5 to 6: 24 ⇒ 20xp</li>
            <li>Level 6 to 7: 40 ⇒ 36xp</li>
            <li>Level 7 to 8: 60 ⇒ 48xp</li>
            <li>Level 8 to 9: 84 ⇒ 80xp</li>
            <li>Level 9 to 10: 100 ⇒ 84xp</li>
            <li>Total XP need to hit max: 228 ⇒ 288</li>
          </div>
        </div>
      </section>

      {/* Traits Section */}
      <section className="px-2 pt-8 md:px-6 lg:px-6">
        <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
          <div className="flex flex-col justify-center px-4 py-2 md:p-4">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              TRAITS
            </h3>
            <p className="text-sm text-white">
              Detailed breakdown of set 10 Traits
            </p>
          </div>
          <Image
            src="/teemo_base_banner.png"
            height="200"
            width="200"
            alt="Base Teemo Chibi"
            className="h-fill select-none overflow-hidden"
          />
        </div>
        {/* Traits Grid */}
        <div className="grid gap-3 py-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Trait 1 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_bigshot.tft_set10.png`.toLowerCase()}
                  alt="Big Shot Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">Big Shot</p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Big Shots gain Attack Damage, which increases for 3 seconds
                  when they use their Ability.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      10% Attack Damage, 40% after casting
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      15% Attack Damage, 60% after casting
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      25% Attack Damage, 100% after casting
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_corki/hud/tft10_corki_square.tft_set10.png"
                      alt="Corki"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Corki
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_kaisa/hud/tft10_kaisa_square.tft_set10.png"
                      alt="Kai'sa"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Kai&apos;sa
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_missfortune/hud/tft10_missfortune_square.tft_set10.png"
                      alt="Miss Fortune"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Miss Fortune
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_ezreal/hud/tft10_ezreal_square.tft_set10.png"
                      alt="Ezreal"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Ezreal
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_jhin/hud/tft10_jhin_square.tft_set10.png"
                      alt="Jhin"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Jhin
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 2 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_3_brawler.png`}
                  alt="Bruiser Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">Bruiser</p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Your team gains 100 Health. Bruisers gain bonus max Health.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      20% max Health
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      40% max Health
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      80% max Health
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_olaf/hud/tft10_olaf_square.tft_set10.png"
                      alt="Olaf"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Olaf
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_tahmkench/hud/tft10_tahmkench_square.tft_set10.png"
                      alt="Tahm Kench"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Tahm Kench
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_gragas/hud/tft10_gragas_square.tft_set10.png"
                      alt="Gragas"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Gragas
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_sett/hud/tft10_sett_square.tft_set10.png"
                      alt="Sett"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Sett
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_zac/hud/tft10_zac_square.tft_set10.png"
                      alt="Zac"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Zac
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_illaoi/hud/tft10_illaoi_square.tft_set10.png"
                      alt="Illaoi"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Illaoi
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 3 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_crowddiver.tft_set10.png`}
                  alt="Crowd Diver Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">
                  Crowd Diver
                </p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  After Crowd Divers die, they leap onto the furthest enemy,
                  dealing 300 magic damage. Enemies within 1 hex are Stunned for
                  1.5 seconds. <br />
                  <br />
                  They also deal bonus damage, increased by 1% each second.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      5% bonus damage
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      30% bonus damage
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      70% bonus damage
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_evelynn/hud/tft10_evelynn_square.tft_set10.png"
                      alt="Evelynn"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Evelynn
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_katarina/hud/tft10_katarina_square.tft_set10.png"
                      alt="Katarina"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Katarina
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_yone/hud/tft10_yone_square.tft_set10.png"
                      alt="Yone"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Yone
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_zed/hud/tft10_zed_square.tft_set10.png"
                      alt="Zed"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Zed
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_qiyana/hud/tft10_qiyana_square.tft_set10.png"
                      alt="Qiyana"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Qiyana
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 4 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_dazzler.png`}
                  alt="Dazzler Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">Dazzler</p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Dazzler&apos;s Abilities reduce their target&apos;s damage by
                  15% and deal bonus magic damage over 2 seconds.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      20% magic damage
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      60% magic damage
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      100% magic damage
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_nami/hud/tft10_nami_square.tft_set10.png"
                      alt="Nami"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Nami
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_bard/hud/tft10_bard_square.tft_set10.png"
                      alt="Bard"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Bard
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_lux/hud/tft10_lux_square.tft_set10.png"
                      alt="Lux"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Lux
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_twistedfate/hud/tft10_twistedfate_square.tft_set10.png"
                      alt="Twisted Fate"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Twisted Fate
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_ziggs/hud/tft10_ziggs_square.tft_set10.png"
                      alt="Ziggs"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Ziggs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 5 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_edgelord.tft_set10.png`}
                  alt="Edgelord Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">Edgelord</p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Edgelords gain Attack Speed, which doubles when their target
                  drops below 50% Health. Edgelords with 1-hex range also dash
                  through them on their next attack.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      30% Attack Speed
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      45% Attack Speed
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      70% Attack Speed
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_yasuo/hud/tft10_yasuo_square.tft_set10.png"
                      alt="Yasuo"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Yasuo
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_kayle/hud/tft10_kayle_square.tft_set10.png"
                      alt="Kayle"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Kayle
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_riven/hud/tft10_riven_square.tft_set10.png"
                      alt="Riven"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Riven
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_yone/hud/tft10_yone_square.tft_set10.png"
                      alt="Yone"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Yone
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_viego/hud/tft10_viego_square.tft_set10.png"
                      alt="Viego"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Viego
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_kayn/hud/tft10_kayn_square.tft_set10.png"
                      alt="Kayn"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Kayn
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 6 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_executioner.png`}
                  alt="Executioner Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">
                  Executioner
                </p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Executioner Abilities can critically strike and they gain
                  Critical Strike Damage. Their Critical Strike Chance is
                  increased based on their target&apos;s missing Health.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      15% Crit Damage, Up to 15% Crit Chance
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      30% Crit Damage, Up to 35% Crit Chance
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">
                      45% Crit Damage, Up to 55% Crit Chance
                    </p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_twitch/hud/tft10_twitch_square.tft_set10.png"
                      alt="Twitch"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Twitch
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_samira/hud/tft10_samira_square.tft_set10.png"
                      alt="Samira"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Samira
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_vex/hud/tft10_vex_square.tft_set10.png"
                      alt="Vex"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Vex
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_akali/hud/tft10_akali_square.tft_set10.png"
                      alt="Akali"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Akali
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_karthus/hud/tft10_karthus_square.tft_set10.png"
                      alt="Karthus"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Karthus
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Trait 7 */}
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3">
              <div className="flex items-start gap-3">
                <Image
                  className={`green-filter z-10 pb-2`}
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_guardian.png`}
                  alt="Guardian Icon"
                  height="26"
                  width="26"
                />
                <p className="text-base font-semibold lg:text-lg">Guardian</p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-white/50 lg:pr-5 lg:text-sm">
                  Once per combat at 50% Health, Guardians shield themselves and
                  their closest ally for a percent of their max Health.
                </p>
                {/* Trait Count List */}
                <ul className="flex flex-col gap-2 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">2</span>
                    <p className="text-xs text-white/50 lg:text-sm">30%</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">4</span>
                    <p className="text-xs text-white/50 lg:text-sm">50%</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-fit rounded-md bg-brand-bg px-2">6</span>
                    <p className="text-xs text-white/50 lg:text-sm">70%</p>
                  </li>
                </ul>
                {/* Champion List */}
                <ul className="flex gap-2">
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_kennen/hud/tft10_kennen_square.tft_set10.png"
                      alt="Kennen"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Kennen
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="one-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_taric/hud/tft10_taric_square.tft_set10.png"
                      alt="Taric"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Taric
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="two-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_pantheon/hud/tft10_pantheon_square.tft_set10.png"
                      alt="Pantheon"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Pantheon
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_amumu/hud/tft10_amumu_square.tft_set10.png"
                      alt="Amumu"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Amumu
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="three-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_neeko/hud/tft10_neeko_square.tft_set10.png"
                      alt="Neeko"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Neeko
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="four-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_thresh/hud/tft10_thresh_square.tft_set10.png"
                      alt="Thresh"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Thresh
                    </p>
                  </li>
                  <li className="my-1 w-11 flex-col items-center justify-center pt-4 md:w-12">
                    <Image
                      className="five-cost mx-auto rounded-full md:mb-2"
                      src="https://raw.communitydragon.org/latest/game/assets/characters/tft10_yorick/hud/tft10_yorick_square.tft_set10.png"
                      alt="Yorick"
                      height="40"
                      width="40"
                    />
                    <p className="hidden truncate text-center text-xs md:block">
                      Yorick
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-2 flex w-full max-w-lg flex-col rounded-md bg-brand-bg2 p-4 md:max-w-none md:p-4">
            <div className="flex h-full w-full flex-col divide-y divide-brand-bg3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

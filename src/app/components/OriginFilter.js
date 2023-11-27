"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

function OriginFilter({ selectedOrigin, onOriginChange }) {
  return (
    <div className="flex h-fit w-full gap-4 px-1">
      <Select value={selectedOrigin} onValueChange={onOriginChange}>
        <SelectTrigger>
          <SelectValue placeholder="Origin" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Origin</SelectItem>
          <SelectItem value="8-bit">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_8bit.tft_set10.png"
                className="select-none"
                alt="8-bit Icon"
                height="18"
                width="18"
              />
              8-bit
            </div>
          </SelectItem>
          <SelectItem value="Breakout">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_breakout.tft_set10.png"
                className="select-none"
                alt="Breakout Icon"
                height="18"
                width="18"
              />
              Breakout
            </div>
          </SelectItem>
          <SelectItem value="Country">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_country.tft_set10.png"
                className="select-none"
                alt="Country Icon"
                height="18"
                width="18"
              />
              Country
            </div>
          </SelectItem>
          <SelectItem value="Disco">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_funk.tft_set10.png"
                className="select-none"
                alt="Disco Icon"
                height="18"
                width="18"
              />
              Disco
            </div>
          </SelectItem>
          <SelectItem value="EDM">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_edm.tft_set10.png"
                className="select-none"
                alt="EDM Icon"
                height="18"
                width="18"
              />
              EDM
            </div>
          </SelectItem>
          <SelectItem value="Emo">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_bigsad.tft_set10.png"
                className="select-none"
                alt="Emo Icon"
                height="18"
                width="18"
              />
              Emo
            </div>
          </SelectItem>
          <SelectItem value="HEARTSTEEL">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_heartsteel.tft_set10.png"
                className="select-none"
                alt="HEARTSTEEL Icon"
                height="18"
                width="18"
              />
              HEARTSTEEL
            </div>
          </SelectItem>
          <SelectItem value="Hyperpop">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_hyperpop.tft_set10.png"
                className="select-none"
                alt="Hyperpop Icon"
                height="18"
                width="18"
              />
              Hyperpop
            </div>
          </SelectItem>
          <SelectItem value="ILLBEATS">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_illbeats.tft_set10.png"
                className="select-none"
                alt="ILLBEATS Icon"
                height="18"
                width="18"
              />
              ILLBEATS
            </div>
          </SelectItem>
          <SelectItem value="Jazz">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_jazz.tft_set10.png"
                className="select-none"
                alt="Jazz Icon"
                height="18"
                width="18"
              />
              Jazz
            </div>
          </SelectItem>
          <SelectItem value="K/DA">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_kda.tft_set10.png"
                className="select-none"
                alt="K/DA Icon"
                height="18"
                width="18"
              />
              K/DA
            </div>
          </SelectItem>
          <SelectItem value="Maestro">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_classical.tft_set10.png"
                className="select-none"
                alt="Maestro Icon"
                height="18"
                width="18"
              />
              Maestro
            </div>
          </SelectItem>
          <SelectItem value="Mixmaster">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_dj.tft_set10.png"
                className="select-none"
                alt="Mixmaster Icon"
                height="18"
                width="18"
              />
              Mixmaster
            </div>
          </SelectItem>
          <SelectItem value="Pentakill">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_pentakill.tft_set10.png"
                className="select-none"
                alt="Pentakill Icon"
                height="18"
                width="18"
              />
              Pentakill
            </div>
          </SelectItem>
          <SelectItem value="Punk">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_punk.tft_set10.png"
                className="select-none"
                alt="Punk Icon"
                height="18"
                width="18"
              />
              Punk
            </div>
          </SelectItem>
          <SelectItem value="True Damage">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_truedamage.tft_set10.png"
                className="select-none"
                alt="True Damage Icon"
                height="18"
                width="18"
              />
              True Damage
            </div>
          </SelectItem>
          <SelectItem value="Wildcard">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_wildcard.tft_set10.png"
                className="select-none"
                alt="Wildcard Icon"
                height="18"
                width="18"
              />
              Wildcard
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default OriginFilter;

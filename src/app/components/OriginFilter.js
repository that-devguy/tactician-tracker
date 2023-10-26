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
          <SelectItem value="Bilgewater">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_bilgewater.tft_set9_stage2.png"
                className="select-none"
                alt="Bilgewater Icon"
                height="18"
                width="18"
              />
              Bilgewater
            </div>
          </SelectItem>
          <SelectItem value="Darkin">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_darkin.tft_set9.png"
                className="select-none"
                alt="Darkin Icon"
                height="18"
                width="18"
              />
              Darkin
            </div>
          </SelectItem>
          <SelectItem value="Demacia">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_demacia.tft_set9.png"
                className="select-none"
                alt="Demacia Icon"
                height="18"
                width="18"
              />
              Demacia
            </div>
          </SelectItem>
          <SelectItem value="Freljord">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_freljord.tft_set9.png"
                className="select-none"
                alt="Freljord Icon"
                height="18"
                width="18"
              />
              Freljord
            </div>
          </SelectItem>
          <SelectItem value="Ionia">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_ionia.tft_set9.png"
                className="select-none"
                alt="Ionia Icon"
                height="18"
                width="18"
              />
              Ionia
            </div>
          </SelectItem>
          <SelectItem value="Ixtal">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_ixtal.tft_set9_stage2.png"
                className="select-none"
                alt="Ixtal Icon"
                height="18"
                width="18"
              />
              Ixtal
            </div>
          </SelectItem>
          <SelectItem value="Noxus">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_noxus.tft_set9.png"
                className="select-none"
                alt="Noxus Icon"
                height="18"
                width="18"
              />
              Noxus
            </div>
          </SelectItem>
          <SelectItem value="Piltover">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_piltover.tft_set9.png"
                className="select-none"
                alt="Piltover Icon"
                height="18"
                width="18"
              />
              Piltover
            </div>
          </SelectItem>
          <SelectItem value="Shurima">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_shurima.tft_set9.png"
                className="select-none"
                alt="Shurima Icon"
                height="18"
                width="18"
              />
              Shurima
            </div>
          </SelectItem>
          <SelectItem value="Targon">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_targon.tft_set9.png"
                className="select-none"
                alt="Targon Icon"
                height="18"
                width="18"
              />
              Targon
            </div>
          </SelectItem>
          <SelectItem value="Void">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_void.tft_set9.png"
                className="select-none"
                alt="Void Icon"
                height="18"
                width="18"
              />
              Void
            </div>
          </SelectItem>
          <SelectItem value="Wanderer">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_wanderer.tft_set9.png"
                className="select-none"
                alt="Wanderer Icon"
                height="18"
                width="18"
              />
              Wanderer
            </div>
          </SelectItem>
          <SelectItem value="Zaun">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_zaun.tft_set9.png"
                className="select-none"
                alt="Zaun Icon"
                height="18"
                width="18"
              />
              Zaun
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default OriginFilter;

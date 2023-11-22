"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

function ClassFilter({ selectedClass, onClassChange }) {
  return (
    <div className="flex h-fit w-full gap-4 px-1">
      <Select value={selectedClass} onValueChange={onClassChange}>
        <SelectTrigger>
          <SelectValue placeholder="Class" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Class</SelectItem>
          <SelectItem value="Big Shot">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_bigshot.tft_set10.png"
                className="select-none"
                alt="Big Shot Icon"
                height="18"
                width="18"
              />
              Big Shot
            </div>
          </SelectItem>
          <SelectItem value="Bruiser">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_6_bruiser.png"
                className="select-none"
                alt="Bruiser Icon"
                height="18"
                width="18"
              />
              Bruiser
            </div>
          </SelectItem>
          <SelectItem value="Crowd Diver">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_crowddiver.tft_set10.png"
                className="select-none"
                alt="Crowd Diver Icon"
                height="18"
                width="18"
              />
              Crowd Diver
            </div>
          </SelectItem>
          <SelectItem value="Dazzler">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_dazzler.png"
                className="select-none"
                alt="Dazzler Icon"
                height="18"
                width="18"
              />
              Dazzler
            </div>
          </SelectItem>
          <SelectItem value="Edgelord">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_edgelord.tft_set10.png"
                className="select-none"
                alt="Edgelord Icon"
                height="18"
                width="18"
              />
              Edgelord
            </div>
          </SelectItem>
          <SelectItem value="Executioner">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_executioner.png"
                className="select-none"
                alt="Executioner Icon"
                height="18"
                width="18"
              />
              Executioner
            </div>
          </SelectItem>
          <SelectItem value="Guardian">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_guardian.png"
                className="select-none"
                alt="Guardian Icon"
                height="18"
                width="18"
              />
              Guardian
            </div>
          </SelectItem>
          <SelectItem value="Mosher">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_mosher.tft_set10.png"
                className="select-none"
                alt="Mosher Icon"
                height="18"
                width="18"
              />
              Mosher
            </div>
          </SelectItem>
          <SelectItem value="Rapidfire">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_rapidfire.tft_set10.png"
                className="select-none"
                alt="Rapidfire Icon"
                height="18"
                width="18"
              />
              Rapidfire
            </div>
          </SelectItem>
          <SelectItem value="Sentinel">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_warden.tft_set10.png"
                className="select-none"
                alt="Sentinel Icon"
                height="18"
                width="18"
              />
              Sentinel
            </div>
          </SelectItem>
          <SelectItem value="Spellweaver">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_sorcerer.png"
                className="select-none"
                alt="Spellweaver Icon"
                height="18"
                width="18"
              />
              Spellweaver
            </div>
          </SelectItem>
          <SelectItem value="Superfan">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_10_superfan.tft_set10.png"
                className="select-none"
                alt="Superfan Icon"
                height="18"
                width="18"
              />
              Superfan
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ClassFilter;

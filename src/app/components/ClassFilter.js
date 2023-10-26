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
          <SelectItem value="Bastion">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_bastion.tft_set9.png"
                className="select-none"
                alt="Bastion Icon"
                height="18"
                width="18"
              />
              Bastion
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
          <SelectItem value="Challenger">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_6_challenger.png"
                className="select-none"
                alt="Challenger Icon"
                height="18"
                width="18"
              />
              Challenger
            </div>
          </SelectItem>
          <SelectItem value="Empress">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_empress.tft_set9.png"
                className="select-none"
                alt="Empress Icon"
                height="18"
                width="18"
              />
              Empress
            </div>
          </SelectItem>
          <SelectItem value="Gunner">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_gunner.tft_set9.png"
                className="select-none"
                alt="Gunner Icon"
                height="18"
                width="18"
              />
              Gunner
            </div>
          </SelectItem>
          <SelectItem value="Invoker">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_preserver.tft_set9.png"
                className="select-none"
                alt="Invoker Icon"
                height="18"
                width="18"
              />
              Invoker
            </div>
          </SelectItem>
          <SelectItem value="Juggernaut">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_juggernaut.tft_set9.png"
                className="select-none"
                alt="Juggernaut Icon"
                height="18"
                width="18"
              />
              Juggernaut
            </div>
          </SelectItem>
          <SelectItem value="Multicaster">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_multicaster.tft_set9.png"
                className="select-none"
                alt="Multicaster Icon"
                height="18"
                width="18"
              />
              Multicaster
            </div>
          </SelectItem>
          <SelectItem value="Reaver King">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_reaverking.tft_set9_stage2.png"
                className="select-none"
                alt="Reaver King Icon"
                height="18"
                width="18"
              />
              Reaver King
            </div>
          </SelectItem>
          <SelectItem value="Rogue">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_rogue.tft_set9.png"
                className="select-none"
                alt="Rogue Icon"
                height="18"
                width="18"
              />
              Rogue
            </div>
          </SelectItem>
          <SelectItem value="Slayer">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_slayer.png"
                className="select-none"
                alt="Slayer Icon"
                height="18"
                width="18"
              />
              Slayer
            </div>
          </SelectItem>
          <SelectItem value="Sorcerer">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_3_sorcerer.png"
                className="select-none"
                alt="Sorcerer Icon"
                height="18"
                width="18"
              />
              Sorcerer
            </div>
          </SelectItem>
          <SelectItem value="Strategist">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_strategist.tft_set9.png"
                className="select-none"
                alt="Strategist Icon"
                height="18"
                width="18"
              />
              Strategist
            </div>
          </SelectItem>
          <SelectItem value="Technogenius">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_technogenius.tft_set9.png"
                className="select-none"
                alt="Technogenius Icon"
                height="18"
                width="18"
              />
              Technogenius
            </div>
          </SelectItem>
          <SelectItem value="Vanquisher">
            <div className="flex gap-2">
              <Image
                src="https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_vanquisher.tft_set9_stage2.png"
                className="select-none"
                alt="Vanquisher Icon"
                height="18"
                width="18"
              />
              Vanquisher
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ClassFilter;

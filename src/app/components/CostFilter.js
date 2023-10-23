"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

function CostFilter({ selectedCost, onCostChange }) {
  return (
    <div className="flex h-fit w-full gap-4 px-1">
      <Select value={selectedCost} onValueChange={onCostChange}>
        <SelectTrigger>
          <SelectValue placeholder="Cost" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            <Image
              src="/coin.svg"
              className="select-none"
              alt="Cost Icon"
              height="18"
              width="18"
            />
          </SelectItem>
          <SelectItem value="1">
            <div className="flex gap-2">
              <Image
                src="/coin.svg"
                className="select-none"
                alt="Cost Icon"
                height="18"
                width="18"
              />
              1
            </div>
          </SelectItem>
          <SelectItem value="2">
            <div className="flex gap-2">
              <Image
                src="/coin.svg"
                className="select-none"
                alt="Cost Icon"
                height="18"
                width="18"
              />
              2
            </div>
          </SelectItem>
          <SelectItem value="3">
            <div className="flex gap-2">
              <Image
                src="/coin.svg"
                className="select-none"
                alt="Cost Icon"
                height="18"
                width="18"
              />
              3
            </div>
          </SelectItem>
          <SelectItem value="4">
            <div className="flex gap-2">
              <Image
                src="/coin.svg"
                className="select-none"
                alt="Cost Icon"
                height="18"
                width="18"
              />
              4
            </div>
          </SelectItem>
          <SelectItem value="5">
            <div className="flex gap-2">
              <Image
                src="/coin.svg"
                className="select-none"
                alt="Cost Icon"
                height="18"
                width="18"
              />
              5
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CostFilter;

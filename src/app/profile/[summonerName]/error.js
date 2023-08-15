"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Return the user to the home page
  function GoToHomePage() {
    window.location = "/";
  }

  return (
    <div className="mt-10 flex flex-col justify-center px-10">
      <div className="flex items-center justify-center text-9xl font-black">
        <p className="relative left-16">O</p>
        <Image
          className=""
          src="/Everything_is_Okay_Emote.png"
          alt="Everything is Okay Emote"
          height={256}
          width={256}
          layout="fixed"
        />
        <p className="relative right-14">PS</p>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-center text-xl font-bold">Something went wrong!</h2>
        <p className="mx-auto max-w-md text-center text-sm">
          Make sure the summoner you&apos;re trying to search exists and that
          there are no spelling mistakes.
        </p>
        <button
          className="mx-auto w-fit rounded-lg bg-brand-main px-6 py-1 font-bold text-brand-bg"
          onClick={() => reset(GoToHomePage())}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

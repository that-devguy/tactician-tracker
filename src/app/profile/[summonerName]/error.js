"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

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
    <div className="mt-10 flex flex-col justify-center px-4 md:px-10">
      <div className="flex items-center justify-center">
        <Image
          className="px-5 md:px-0"
          src="/Soraka_Oops.png"
          alt="Everything is Okay Emote"
          height={256}
          width={413}
          layout="fixed"
        />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-center text-xl font-bold">Something went wrong!</h2>
        <p className="mx-auto max-w-md text-center text-sm">
          Make sure the summoner you&apos;re trying to search exists and that
          there are no spelling mistakes.
        </p>
        <button
          className="mx-auto flex w-fit items-center gap-2 rounded-lg bg-brand-secondary px-6 py-1 font-bold text-brand-bg"
          onClick={() => window.location.reload()}
        >
          Try Again
          <FontAwesomeIcon icon={faRefresh} className="text-brand-bg" />
        </button>
        <button
          className="mx-auto w-fit rounded-lg bg-brand-main px-6 py-1 font-bold text-brand-bg"
          onClick={() => reset(GoToHomePage())}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

"use client";

import { useFormState } from "react-dom";
import Image from "next/image";

import { createArt } from "@/utils/actions";

import SubmitButton from "@/components/SubmitButton";

const LABEL =
  "Describe a famous painting without saying its name or the artist!";

const initialState = {
  message: "",
  url: "",
};

// TODO: read the breakpoints from nextconfig
// TODO: add loading indicator with useFormStatus
// TODO: reset the form data
// TODO: add error handling
export default function Home() {
  const [state, formAction] = useFormState(createArt, initialState);

  return (
    <main className="px-5 py-6 flex flex-col items-center h-full">
      <h1 className="text-2xl sm:text-5xl mb-5 py-3 font-bold">ArtMatch 👩‍🎨</h1>
      <div className="bg-black border-solid border-[5vmin] rounded-sm border-x-stone-600 border-y-stone-700 w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 aspect-square flex items-center mb-5 shadow-2xl relative">
        {state.url ? (
          <Image
            src={state.url}
            alt="art"
            fill={true}
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, (max-width: 1536px) 33vw, 25vw"
          />
        ) : (
          <h2 className="text-base sm:text-2xl tracking-wider mx-10 text-center">
            {LABEL}
          </h2>
        )}
      </div>
      <form
        action={formAction}
        className="flex flex-col items-center w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4"
      >
        <label htmlFor="instruction" className="sr-only">
          {LABEL}
        </label>
        <textarea
          id="instruction"
          name="instruction"
          rows={4}
          placeholder="A woman with long brown hair..."
          required
          className="w-full mb-5 rounded-md text-base sm:text-2xl text-black py-2 px-4"
        ></textarea>
        <SubmitButton />
      </form>
    </main>
  );
}

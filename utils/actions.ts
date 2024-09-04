"use server";

import { openai } from "./openai";

export async function createArt(prevState: any, formData: FormData) {
  // TODO: use zod to validate the input
  const prompt = formData.get("instruction");

  if (!prompt || typeof prompt !== "string") {
    return { message: "Failed to generate art!" };
  }

  try {
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt,
    });

    return {
      message: "Art generated",
      url: image.data[0].url,
    };
  } catch (error) {
    return { message: "Failed to generate art!" };
  }
}

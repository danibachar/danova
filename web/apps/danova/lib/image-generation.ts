/**
 * Image generation via Nano Banana API (Gemini image generation)
 * https://nanobananaapi.dev/ or Google AI Studio
 *
 * To use: Set NANO_BANANA_API_KEY or GOOGLE_AI_API_KEY in .env.local
 *
 * Example usage (server-side):
 * const imageUrl = await generateImage("Professional interior painting...");
 */

const NANO_BANANA_API_URL = "https://api.nanobananaapi.dev/v1/images/generations";

export async function generateImageWithNanoBanana(
  prompt: string,
  options?: { width?: number; height?: number }
): Promise<string | null> {
  const apiKey = process.env.NANO_BANANA_API_KEY ?? process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.warn("Nano Banana / Google AI API key not configured");
    return null;
  }

  try {
    const response = await fetch(NANO_BANANA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gemini-2.5-flash-image",
        prompt,
        n: 1,
        ...options,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = (await response.json()) as { data?: { url?: string }[] };
    return data.data?.[0]?.url ?? null;
  } catch (error) {
    console.error("Nano Banana image generation failed:", error);
    return null;
  }
}

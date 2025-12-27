import { Launch } from "@/types/launch";

export async function getLaunches(): Promise<Launch[]> {
  const res = await fetch("https://api.spacexdata.com/v5/launches", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("An error ocurred trying to retrieve launches.");

  return res.json();
}

import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function meme(res: NextRequest) {
  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-center text-3xl font-bold p-20 bg-white">
        <p>Nice argument, however</p>
        <p tw="text-8xl">{res.ip}</p>
      </div>
    ),
    {
      width: 1000,
      height: 500,
    }
  );
}

import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";
// import { request } from "@octokit/request";

export const config = {
  runtime: "edge",
};

export default function render(res: NextRequest) {
  // will be something like "https://github.com/mozzius/dynamic-readme"
  const referrer = res.referrer;
  const referrerArray = referrer.split("/");
  const owner = referrerArray[3] as string;
  const repo = referrerArray[4] as string;

  console.log(process.version);

  // const { data } = await request("GET /repos/{owner}/{repo}", {
  //   owner,
  //   repo,
  // });

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-center text-lg font-bold p-4">
        {/* <p tw="text-2xl">{data.name}</p>
        <p tw="text-xl">{data.description}</p>
        <p tw="text-sm">{data.language}</p> */}
        {process.version}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";

const Test: NextPage = () => {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <img src="/api/render" alt="Hello world!" />
    </div>
  );
};

export default Test;

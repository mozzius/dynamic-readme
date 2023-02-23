/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen grid place-items-center">

    <img src="/api/render" alt="Hello world!" />
    </div>
  );
};

export default Home;

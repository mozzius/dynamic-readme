/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <img src="/api/nice-argument" alt="It broken :(" />
    </div>
  );
};

export default Home;

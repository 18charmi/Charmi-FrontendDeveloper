import { useEffect } from "react";
import logo from "../logo.svg";
import { getCompanyInfo } from "../services/axios";

export default function HeroSection() {
  useEffect(() => {
    async function getDetails() {
      const data = await getCompanyInfo();
      console.log({ data });
    }

    getDetails();
  }, []);
  return (
    <section className="py-10 flex flex-col md:flex-row justify-center items-start">
      <div className="pt-10 w-full md:w-2/5 text-center md:text-start">
        <h1 className="text-4xl font-bold text-gray-800">
          Powerful tag line for product
        </h1>
        <h3 className="text-base my-4 text-gray-500">
          Supporting statement for your product's primary tag line
        </h3>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={logo} alt="App Logo" width={300} height={300} />
      </div>
    </section>
  );
}

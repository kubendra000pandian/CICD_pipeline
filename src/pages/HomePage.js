import React from "react";
import Chart from "../components/Chart/Chart";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Announcements from "../components/Announcements/Announcements"
import Promotion from "../components/Promotion/Promotion";

const HomePage = () => {
  return (
    <>
      <section className="flex   ">

        <Navbar />
        <div className="  w-full bg-lavendarLace_   ">
          <SearchBar />
          <div className="hidden md:flex justify-end w-1186  ">
            <p className="pl-2 pr-30_ py-2  font-roboto_ font-medium text-xs ">
              Coming Soon
            </p>
            <p className=" ml-4 px-5 py-2  font-roboto_  font-medium text-xs">
              End Soon
            </p>
            <p className="mr-30_ ml-4 px-5 py-2  font-roboto_  font-medium  text-xs">
              Promotion List
            </p>
          </div>
          <div className="flex w-380_ md:w-full flex-wrap-reverse ">
            <div className=" mx-6 w-363_  md:w-751_">
              <Chart />
              <Announcements />
            </div>
            <div className="w-363_">
            <Promotion />

            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default HomePage;

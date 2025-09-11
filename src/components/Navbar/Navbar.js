import React, { useState } from "react";


export const menuItems = [
  { name: "Overview", path: "./images/navbar/apps__overview.svg", altText: "Overview Icon" },
  { name: "Produts", path: "./images/navbar/grip-horizontal__products.svg", altText: "Products Icon" },
  { name: "Orders", path: "./images/navbar/tag__orders.svg", altText: "Orders Icon" },
  { name: "Reports", path: "./images/navbar/brand-google-analytics__reports.svg", altText: "Reports Icon" },
  { name: "Setting", path: "./images/navbar/settings.svg", altText: "Reports Icon" },
  { name: "Adminstration", path: "./images/navbar/user__administration.svg", altText: "Adminstration Icon" },
  { name: "Maintenance", path: "./images/navbar/tool__Maintenance.svg", altText: "Maintenance Icon" },
  { name: "Help", path: "./images/navbar/aperture__Help.svg", altText: "Help Icon" },
]

const Navbar = () => {
  const [open, setOpen] = useState(true)


  return (
    <>
       


      <div className={`hidden md:block bg-blackRock min-h-screen ${open ? `min-w-max` : `w-88`} duration-500`}>
        <div className="pt-6 pb-102 flex  mx-4 ">

          <img src="./images/navbar/align-justified_menu.svg" alt="Menu button" className="h-6" onClick={() => setOpen(!open)} />

          <img src="./images/navbar/Logo.svg" alt="Seller Center Logo" className={`pl-5  w-44 h-8 ${!open && ` hidden translate-x-28`}`} />
        </div>
        {
          menuItems.map((menu) =>
            <div className={"flex group  hover:bg-midBlack"}>
              <div className="pl-0.5 bg-white  invisible group-hover:visible ">
              </div>
              <div className="flex w-full justify-between mb-1  bg-mildGrey mx-3.5 py-4 ">
                <div className=" flex">
                  <img src={`${menu.path}`} alt={`${menu.altText}`} className="pl-5 pr-2  " />
                  <p className={`text-white pl-2  ${!open && `opacity-0`}`} >{menu.name}</p>
                </div>
                <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
              </div>
            </div>
          )
        }
      </div>




    </>

  );
};

export default Navbar;

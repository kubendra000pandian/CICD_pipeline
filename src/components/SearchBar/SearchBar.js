import React, { useState } from 'react';
import { menuItems } from '../Navbar/Navbar';

const SearchBar = () => {
    const [open, setOpen] = useState(false)

    return (
        < >

            <div className='hidden md:block w-1186 '>

                <div className='mx-6 mt-2 h-60 px-6 py-3 flex justify-between rounded-lg drop-shadow-4ds@ bg-white'>
                    <div className='border-solid border w-742@ border-grayLight@ rounded-lg flex'>

                        <img src="./images/searchbar/search.svg" alt="Search button" className=" w-26_ h-26_ my-1 ml-2.5" />
                        <p className='font-normal font-roboto_ text-base text-grayMedium_  py-7_  px-2.5  self-center'>Search </p>
                    </div>

                    <div className='    w-213_   flex justify-between '>
                        <img src="./images/searchbar/bell.svg" alt="bell button" className=" w-26_ h-26_ my-1  " />
                        <div className='flex flex-col'>
                            <p className='font-bold text-xs font-roboto_ text-purpleTaupe_' >Puma Official Store </p>
                            <p className='font-bold text-xs font-roboto_ text-grayMedium_ self-end'>Change Seller</p>
                        </div>
                        <img src="./images/searchbar/status.svg" alt="status pic" className=" w-36_ h-36_  m-0 p-0  " />

                    </div>
                </div>
            </div>
            <div className=' flex justify-between md:hidden h-62_ bg-blackRock mb-6'>
                <div>

                    <div className={`block md:hidden bg-blackRock  md:min-h-screen ${open ? `min-w-max absolute z-50` : `w-88 h-6`} duration-500`}>
                        <div className="pt-6 pb-6 flex  mx-4 ">

                            <img src="./images/navbar/align-justified_menu.svg" alt="Menu button" className="h-6" onClick={() => setOpen(!open)} />

                            <img src="./images/navbar/Logo.svg" alt="Seller Center Logo" className={`pl-5  w-44 h-8 ${!open && ` hidden translate-x-28`}`} />
                        </div>
                        {
                            menuItems.map((menu) =>
                                <div className={` ${open ? `flex` : `hidden`} group  hover:bg-midBlack`}>
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
                </div>

                <div className='flex  '>
                    <img src="./images/searchbar/searchWhite.svg" alt="Search button" className="  my-auto mr-66_" />
                    <img src="./images/searchbar/bellWhite.svg" alt="bell button" className=" mr-4 my-auto  " />
                    <div className='mt-4 mr-4'>
                        <p className='text-xs text-white font-semibold leading-3'>
                            Puma Official Store
                        </p>
                        <p className='text-10_ text-mildSandal font-semibold text-right'>
                            Change Seller
                        </p>
                    </div>
                    <div className='mt-13_  pr-6 '>
                        <img src="./images/searchbar/status.svg" alt="status pic" className=" w-36_ h-36_  m-0 p-0  " />
                    </div>
                </div>
            </div>
        </>

    )
}

export default SearchBar
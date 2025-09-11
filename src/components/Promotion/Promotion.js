import React from 'react';
import Carousel from 'nuka-carousel'


const Promotion = () => {



  const promoData = [
    {
      id: 1,
      title: 'Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10',
      new: true,
      countdown: '05:16:21',
      validTill: '28 Feb - 07 Mar 22',
      vouchDisc: 10,
      regUntil: ' 22 Feb 22',
      imageName:'Group_345',
      sellerFunded: 100,
      sellers: 0,
      products: 0,
      approvedDeals: 1,
      pendingDeals: 0,
      rejectedDeals: 0
    },
    {
      id: 2,
      title: 'Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10',
      new: false,
      countdown: '17:21:47',
      validTill: '28 Feb - 07 Mar 22',
      vouchDisc: 10,
      regUntil: ' 22 Feb 22',
      imageName:'Group_346',
      sellerFunded: 100,
      sellers: 0,
      products: 0,
      approvedDeals: 1,
      pendingDeals: 0,
      rejectedDeals: 0
    },
    {
      id: 3,
      title: '[CRM Campaign] Sports 30% + 10% Cash Back  (TGIF30) ',
      new: false,
      countdown: '03:16:21',
      validTill: '18 Feb  22',
      vouchDisc: 30,
      imageName:'Group_347',
      regUntil: ' 22 Feb 22',
      sellerFunded: 85,
      sellers: 0,
      products: 0,
      approvedDeals: 1,
      pendingDeals: 0,
      rejectedDeals: 0
    }

  ]


  const renderData = promoData.map((data) =>
    <div className=' px-6  bg-white rounded-lg mb-4'>
      <p className='py-4 font-roboto_ font-bold  text-xs'>
        {data.title}
      </p>
      <div className='flex'>
        {/* <img src="./images/promotions/large_image.svg" alt="bell button" className=" w-157_ h-full my-1  " /> */}
        <img src={`./images/promotions/${data.imageName}.svg`} alt="bell button" className=" w-157_ h-full my-1  " />
        
        
        <div className='ml-3 mt-2.5'>
          <div className='flex flex-col '>
            <div className='flex  '>
              <img src="./images/promotions/calendar_stats.svg" alt="bell button" className=" w-5 h-5  " />
              <p className='pl-2 font-normal text-9_ pt-0.5   leading-4    '>{data.validTill}</p>
            </div>
            <div className='flex  '>
              <img src="./images/promotions/discount.svg" alt="bell button" className=" w-5 h-5  " />
              <p className='pl-2 font-normal text-9_   pt-0.5 leading-4 '> Voucher discount: {data.vouchDisc} %</p>
            </div>
            <div className='flex  '>
              <img src="./images/promotions/checkup_list.svg" alt="bell button" className=" w-5 h-5  " />
              <p className='pl-2 font-normal text-9_   pt-0.5 leading-4 '> Registration until:   {data.regUntil}</p>
            </div>
            <div className='flex  '>
              <img src="./images/promotions/tags.svg" alt="bell button" className=" w-5 h-5 self-center   " />
              <p className='pl-2 font-normal text-9_   pt-0.5 leading-4 '> Seller funded portion: {data.sellerFunded} % out of the discount </p>
            </div>
          </div>
          <div className=' mt-3 flex flex-row h-5'>
            <p className='text-9_ w-16     text-center  pt-0.5'>
              Sellers : {data.sellers}
            </p>
            <p className='text-9_ ml-5  pt-0.5'>
              Products : {data.products}
            </p>
          </div>
        </div>
      </div>


      <button value="submit" className="my-5 h-35_  w-full h-full py-1.5  rounded-lg font-roboto_    text-white bg-purpleTaupe_  text-sm">Join the Promotion</button>
      <div className='flex pb-4'>
        <div className='flex mr-4'>
          <p className='text-10_ text-mildGreen font-medium leading-3'>Approved Deals</p>
          <p className='text-10_ font-mulish_ leading-3 font-normal border border-solid border-mildGreen rounded-sm w-18_ h-18_ text-center ml-1  '>{data.approvedDeals}</p>
        </div>
        <div className='flex mr-4'>
          <p className='text-10_ text-mildOrange font-medium leading-3'>Pending Deals</p>
          <p className='text-10_ font-mulish_ leading-3 font-normal border border-solid border-mildOrange rounded-sm w-18_ h-18_ text-center ml-1   '>{data.pendingDeals}</p>
        </div>
        <div className='flex'>
          <p className='text-10_ text-mildRed font-medium leading-3'>Rejected Deals</p>
          <p className='text-10_ font-mulish_ leading-3 font-normal border border-solid border-mildRed rounded-sm w-18_ h-18_ text-center ml-1    leading-3'>{data.rejectedDeals}</p>
        </div>

      </div>
    </div>
  )

  return (
    < >
      <div className =" w-380_ ">
        <div className="ml-6 md:hidden  ">
          <Carousel wrapAround={true}
            renderCenterLeftControls={() => (
              <> </>
            )}

            renderCenterRightControls={() => (
              <> </>
            )}
          >
            {renderData}
          </Carousel>
        </div>

      </div>
      <div className='hidden md:block'>
        {renderData}
      </div>

    </ >
  )
}

export default Promotion
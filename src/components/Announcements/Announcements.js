import React from 'react'

const Announcements = () => {

  const displayData = [
    {
      id: 1,
      date: "Feb 11",
      contentTitle: "Zalora- Seller Communication Prioritization.",
      contentMsg: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ..."
    },
    {
      id: 2,
      date: "Feb 11",
      contentTitle: "[IMPORTANT] Update to API endponit limit.  ",
      contentMsg: "Dear Seller, Follewing up from our previous announcement, please note a slight change ..."
    },
    {
      id: 3,
      date: "Feb 07",
      contentTitle: "Covid-19 Impact on Your Operations.  ",
      contentMsg: "Dear Seller, please immediately inform your Account. Manage or SHD if your operations are impacted by ... "
    },
    {
      id: 4,
      date: "Feb 26",
      contentTitle: "[IMPORTANT] API endponit limit. please forward.",
      contentMsg: "Dear Seller, As part of our continuous efforts to improve system response time and reliability ... "
    },

  ]
  return (
    < >
      <div className='h-373_ bg-white rounded-lg   '>

        <div className='h-58_ flex items-center   flex justify-between '>
          <p className='pl-6 text-xl font-bold'>
            Announcements
          </p>
          <div className='flex'>
            <div className='h-35_ w-100_ md:w-330_ flex items-center   my-auto border border-mildSandal rounded'>
              <p className='pl-2.5  text-13_'>
                Search
              </p>
            </div>
            <div className='h-full flex items-center  ml-26_ mr-22_ '>
              <img src="./images/announcements/vector.svg" alt="bell button" className="  h-5    " />
            </div>
          </div>
        </div>

        {displayData.map((data) =>
          <div className='w-full h-104_ md:h-68_ border border-y-mildSandal flex justify-between'>
            <div className='flex pl-6 py-4'>
              <p className='text-13_ w-10 text-mildSandal'>
                {data.date}
              </p>
              <p className='ml-3 text-xs text-blackRock font-medium'>
                {data.contentTitle} <br /> {data.contentMsg}
              </p>

            </div>
            <img src="./images/announcements/mail.svg" alt="bell button" className=" w-26_ h-26_ my-auto  ml-3 mr-6 " />

          </div>
        )}

        <div className='flex justify-between my-3 ml-6'>
          <p className='text-13_ font-normal text-grayMedium_'>
            Showing 1 to 4 of 17
          </p>
          <div className='mr-6 flex '>
            <button className='w-26_ h-6   bg-purpleTaupe_ text-white rounded'>
              <img src="./images/announcements/path.svg" alt="bell button" className="   mx-auto my-auto   " />

            </button>
            <button className='ml-5 w-26_ h-6   bg-purpleTaupe_ text-white rounded'>

              <img src="./images/announcements/path_1.svg" alt="bell button" className="   mx-auto my-auto   " />

            </button>

          </div>
        </div>

      </div>
    </ >
  )
}

export default Announcements
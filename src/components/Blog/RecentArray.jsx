import React from 'react'

const RecentArray = () => {
    const recentPosts = [
        {
            image:"/images/Binitie.jpg",
            title:"Mofe Binitie Used to Advise Startups. Now He’s Helping Build One",
              },//#endregion

               {
            image:"/images/desi.jpg",
            title:"Building Wealth in Your 20s: Practical Money-Saving Strategies for Young Nigerians",
              },

               {
            image:"/images/Piggyvest-Wellness.png",
            title:"Mofe Binitie Used to Advise Startups. Now He’s Helping Build One",
              },

            ]
  return (


    <div className='w-[100%] flex justify-between items-center gap-x-[2px] '>
       {recentPosts.map((post, index) => (
        <div key={index} className="flex flex-col gap-y-[20px] w-[30%]">
        <img src={post.image} alt="" className='my-[30px]'/>
        <p className='text-[18px] font-[400] text-gray-700'>{post.title}</p>
        <button className='self-start text-white bg-blue-700 px-5 py-2 rounded-[20px]'>Money Tips</button>
        
        </div>
    
    ))}
        </div>
  )
}

export default RecentArray
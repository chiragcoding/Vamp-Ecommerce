
// import { Footer, Navbar } from 'flowbite-react'
import Title from '../components/Title'
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
function About() {
    return (
        <div>
         <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
         </div>
         <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero at suscipit soluta. Impedit, explicabo ipsa incidunt omnis labore exercitationem dolorem dolores sunt sint officia corrupti neque laborum quam repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio laudantium sit, cum asperiores illo tempora excepturi saepe facilis amet sint rem in ut fuga recusandae deserunt nisi. Soluta, et?</p>

            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reprehenderit!</p>
            </div>
         </div>

         <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
         </div>

         <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam neque repellat dignissimos sit veritatis?</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam neque repellat dignissimos sit veritatis?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam neque repellat dignissimos sit veritatis?</p>
            </div>
         </div>

         <NewsletterBox/>
         

        </div>
    )
}

export default About

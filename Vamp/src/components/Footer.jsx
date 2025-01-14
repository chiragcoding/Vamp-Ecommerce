import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
function Footer() {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo officia veritatis nihil adipisci in accusantium dolor harum delectus non porro esse, aliquam architecto obcaecati facere deserunt illum possimus libero!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+98477204</li>
                    <li>chiragmaheshwari675@gmail.com</li>
                    <li>Instagram</li>

                </ul>
            </div>

            {/* <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
            </div> */}

            <div className='col-span-3 flex flex-col items-center'>
                <hr className='w-full' />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer

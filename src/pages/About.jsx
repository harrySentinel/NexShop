import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Hi, I'm Aditya Srivastava, a passionate Full Stack MERN Developer. This project is an e-commerce platform designed to provide a seamless shopping experience 
              for fashion enthusiasts. Here, you can explore and purchase a variety of stylish and high-quality clothing items. With a user-friendly interface and secure payment 
              options, my goal is to make online shopping effortless and enjoyable. Thank you for visiting, and happy shopping!</p>

            <p>At the heart of this project is a commitment to delivering a smooth and efficient online shopping experience. Built with the MERN stack, this platform ensures fast 
              performance, secure transactions, and an intuitive design. Whether you're looking for trendy outfits or everyday essentials, this store has something for everyone. 
              As a developer, I strive to continuously improve and enhance the platform, bringing you the best in fashion and technology.</p>

            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to create a seamless and enjoyable shopping experience by combining technology with fashion. We aim to provide a user-friendly platform where customers 
              can explore the latest trends, shop with ease, and enjoy a hassle-free checkout process. With a focus on quality, convenience, and customer satisfaction, we are dedicated 
              to making online shopping more accessible and enjoyable for everyone.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border-t border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent</p>
         </div>
         <div className='border-t border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg'>
           <b>Convenience:</b>
           <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
         </div>
         <div className='border-t border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
         </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
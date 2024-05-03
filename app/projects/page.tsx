'use client'

import React from 'react'
import { ProjectsDemo } from '../components/projectSlider/page'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="grid pr-[10px] pl-[50px] pt-[20px] grid-cols-1  md:grid-cols-2 gap-[32px]">
        <div className='bg-slate-100 rounded-lg'>
        <p className='my-6 mx-2'>At our esteemed research and consulting centre, we pride ourselves on our diverse portfolio, encompassing an array of impactful projects spanning from the development of cutting-edge port infrastructure to ensuring global food security. Our adept team excels in conducting comprehensive environmental impact assessments, providing invaluable insights to safeguard ecological integrity while fostering sustainable development. Moreover, we undertake rigorous audits, meticulously examining organizational processes and systems to optimize efficiency and compliance. With a commitment to excellence and innovation, we tackle each project with unwavering dedication, delivering tailored solutions that transcend conventional boundaries. Join us in our journey to redefine industry standards and drive positive change on a global scale.</p>
        </div>
        
        {/* Accordion section */}
        <div className='pl-[20px]'><ProjectsDemo/></div>
       
        
      </div>


    </div>
  )
}

export default page
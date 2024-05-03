"use client"
import React from 'react';
import { AccordionDemo } from '../accordion/AccordionDemo';
import { CardW, CardWith, CardWithForm } from '../Cards/CardDemo';
import General from '../General/General';

const Hero = () => {
  return (
    <div className="grid gap-[32px] ">
      {/* General component */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-[32px]">
        <General />
        {/* Accordion section */}
        <div className="grid mt-[20px] bg-transparent w-[500px] md:w-[400px] pl-[20px] md:pl-[60px] gap-[32px]">
          <AccordionDemo />
        </div>
      </div>
      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:pl-[20px] md:pl-[40px] gap-[32px]">
        <CardWithForm />
        <CardWith />
        <CardW />
      </div>
    </div>
  );
};

export default Hero;

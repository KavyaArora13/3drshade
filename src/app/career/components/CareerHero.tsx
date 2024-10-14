import React from 'react';
import Image from 'next/image';

const CareerHero = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-start mb-12">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[50px] font-bold mb-6 leading-tight">
            Kavya work at 3RD SHADE!
          </h1>
          <div className="inline-block relative p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-border-move bg-[length:200%_200%]">
            <button className="relative bg-black text-white text-lg font-semibold py-3 px-8 rounded-full">
              Explore our jobs
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[525px] 2xl:h-[558px]">
        <Image 
          src="/career-hero.webp" 
          alt="3RD SHADE team" 
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute -top-[131px] right-8 md:right-12 w-[262px] h-[262px] group">
          <div className="relative w-full h-full bg-black rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
            <div className="text-white text-center">
              <span className="block text-7xl font-light">↓</span>
            </div>
            <div className="absolute inset-0 rounded-full">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="9">
                  <textPath xlinkHref="#circle" startOffset="0%" className="fill-white" >
                  Our Culture &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Culture &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Culture &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
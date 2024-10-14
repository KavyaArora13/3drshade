import React from 'react';
import Image from 'next/image';

const WorkCulture = () => {
  return (
    <section className="work-culture-section py-16 bg-white mt-[30px]">
      <div className="container mx-auto px-4">
        <div className="work-culture-top mb-16">
          <h2 className="text-5xl font-bold mb-6">Family, not company</h2>
          <p className="text-xl mb-8 max-w-lg">
            Like our design, the qualities that sets us apart are simple and yet amazing. We won't promise you the world when you come to work with us, but we will commit to uphold the values that make 3rd shade a great place to work at.
          </p>
          <div className="relative w-[75%] h-[500px]">
            <Image
              src="/work1.png"
              alt="Smiling colleagues"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        <div className="work-culture-bottom flex flex-col lg:flex-row items-center mt-[100px]">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-6">Family, not company</h2>
            <p className="text-xl">
              Like our design, the qualities that sets us apart are simple and yet amazing. We won't promise you the world when you come to work with us, but we will commit to uphold the values that make 3rd shade a great place to work at.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/work2.png"
                alt="Colleagues working together"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
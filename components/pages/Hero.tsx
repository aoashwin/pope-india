import React from 'react'
import { ImagesSliderDemo } from '../hero-imageslider'
import { WobbleCardDemo } from '../hero-wobblecard'
import { GlareCardDemo } from '../hero-glarecard'
import Image from "next/image";
import { WobbleCard } from '../ui/Wobble-card';
import { InfiniteMovingCardsDemo } from '../hero-movingcards';


export const Hero = () => {
  return (
    <div className='flex-auto'>
      <ImagesSliderDemo />
      <div className='py-24'>
        <h1 className="heading text-zinc-700">
          The Vision & Mission of {'  '}
          <span className="text-blue-400">Pope</span>
        </h1>
        <div className='py-16 p-10'>
          <WobbleCardDemo />
        </div>
        <div className="container-xxl pt-8 bg-gradient-to-r from-cyan-950 via-cyan-700 to-cyan-950 ">
          <h1 className='heading text-white py-10'>
             Our Honourable {' '}
            <span className="text-cyan-300">chief </span>
          </h1>
         <div className='py-16 px-8 md:py-16 md:px-20 lg:px-40'>
  <WobbleCard
    containerClassName="h-full bg-cyan-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
  >
    <div className="max-w-xs md:max-w-md lg:max-w-lg p-4 md:p-8 lg:p-12">
      <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
        R.L. Rosario <br/>Director of Pope
      </h2>
      <span className="block text-left text-base md:text-xl lg:text-2xl font-light tracking-tight text-white mt-2">
        M.A., B.L.
      </span>
      <p className="mt-4 text-left text-sm md:text-base lg:text-lg text-neutral-200">
         I was 16 and I didnt know anything about law. Not just as a Dalit, but as a human being I wanted to do something.
      </p>
    </div>
    <Image
      src="/rosario.jpg"
      width={400}
      height={500}
      alt="linear demo image"
      className="absolute right-0 bottom-0 object-contain rounded-2xl max-w-[40%] md:max-w-[30%] lg:max-w-[50%] max-h-full"
    />
  </WobbleCard>
</div>

        </div>
        <h1 className="heading text-slate-900 py-4 mt-16 mb-0">
            Kind words from {' '}
            <span className="text-slate-500">Our members</span>
          </h1>
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  )
}

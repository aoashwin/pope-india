"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/Wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pope is a registered non-profit making secular voluntary organisation !
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Is to establish an egalitarian society with social justice, harmony and peace where the vulnerable, voiceless, and oppressed groups live in dignity and demand their rights through social action and community development activities.
          </p>
        </div>
        <Image
          src="/heromain2.jpg"
          width={700}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        The mission of Pope is to enhance the capacity of the vulnerable poor and marginalized !

        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        through community based organization and community participation for their sustainable livelihood.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          To develop resource base for the community living and empowerment process !
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          to recognize their legal rights, privileges, duties and prevent human rights violation, women rights violation, consumers right violation and ensuring the fulfillments of their basic needs.
          </p>
        </div>
        <Image
          src="/heromain1.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[1%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

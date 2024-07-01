"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 w-auto">
      <div className="max-w-4xl mx-auto antialiased pt-8  relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-16">
            <h2 className="bg-black text-white rounded-full text-xl w-fit px-3 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 text-black")}>
              {item.title}
            </p>

            <div className="text-l prose prose-sm dark:prose-invert text-black">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "POPE - People Organisation for Planning and Education",
    description: (
      <>
        <p>
        Pope is a registered non-profit making secular voluntary organisation, founded in 1987 at Tiruvannamalai District for the development of the Dalits in India. Mr. R.L. Rosario is the Founder President/ Director of POPE. POPE was established to promote the welfare of the Dalits. But we found out that the caste Hindu suppressed the Dalits without allowing them to come up in life. They have been treated as sub-human. But the Indian constitution says that all Indians irrespective of their caste, religion, and language are equal. But the equality status has never been achieved by the Dalits. In order to obtain equal rights to Dalits, on par with other people, the Founder President Mr. R.L. Rosario went for his legal training. In the year 1993, he became an advocate to protect Dalit rights. Since then, POPE has been standing to protect the rights of Dalits.
        </p>
       
      </>
    ),
    badge: "Who we are",
    image:
      "/pope1.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/herocover2.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "/herocover3.jpg",
  },
];

import Image from "next/image";
import { TracingBeamDemo } from "./about-content";

export default function AboutPage() {
  return (
    <main>
        <div className="p-12 w-full">
            <h1 className="text-cyan-900 text-8xl text-center font-medium mt-12 ">POPE</h1>
            <h1 className="text-cyan-700 text-5xl text-center font-medium mt-0 ">INDIA</h1>
            <TracingBeamDemo />
        </div>
    </main>
  );
}
import Image from "next/image";
import { TracingBeamDemo } from "./about-content";

export default function AboutPage() {
  return (
    <main>
        <div className="p-12 w-full">
            <h1 className="heading text-slate-800 p-10">Who we are</h1>
            <TracingBeamDemo />
        </div>
    </main>
  );
}
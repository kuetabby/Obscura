"use client";
import React from "react";
import { motion } from "framer-motion";
import shape2 from "@/public/image/shape/shape_section_divider_2.svg";
import shape1 from "@/public/image/shape/shape_section_divider_1.svg";
import Image from "next/image";

const steps = [
  {
    title: "Design",
    date: "Q1 2025",
    description: "Define the foundation of the protocol.",
    subpoints: [
      "Establish the Model Context Protocol (MCP).",
      "Outline architecture for decentralized context-aware storage.",
      "Design schemas and modeling standards.",
    ],
  },
  {
    title: "Grow",
    date: "Q2 2025",
    description: "Evolve system design and expand protocol components.",
    subpoints: [
      "Build partnerships and expand the ecosystem.",
      "Test interoperability across chains.",
    ],
  },
  {
    title: "Build",
    date: "Q3 2025",
    description: "Develop, test, and validate with the community.",
    subpoints: [
      "Launch testnet with storage providers.",
      "Validate ZK-based access control.",
      "Integrate with AI inference engines.",
    ],
  },
  {
    title: "Launch",
    date: "Q4 2025",
    description: "Release MVP and begin onboarding.",
    subpoints: [
      "Mainnet deployment.",
      "Early adopter onboarding and feedback loop.",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmaps">
      <div>
        <Image src={shape2} alt="Shape Divider" className="w-full " priority />
      </div>
      <div className="bg-[#070710] text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ✨ Our Roadmaps
        </h2>
        <p className="text-center text-sm md:text-base text-gray-400 font-normal max-w-md mx-auto mb-16">
          A timeline overview of our journey from ideas to execution.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative p-6 rounded-3xl bg-[#9637c4]/20 backdrop-blur-md border border-[#9637c4]/40 shadow-[0_8px_30px_rgba(150,55,196,0.3)] pt-12 text-center
              flex-grow basis-full sm:basis-[calc(50%-1.5rem)] lg:basis-[calc(25%-1.5rem)] max-w-full sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-1.5rem)]"
            >
              {/* Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#9637c4] text-white rounded-full shadow-[0_4px_12px_rgba(150,55,196,0.4)] border border-black text-center z-10">
                <div className="text-sm font-semibold leading-tight">
                  {index + 1}. {step.title}
                </div>
                <div className="text-[11px] text-white/80">{step.date}</div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Subpoints */}
              {step.subpoints && (
                <ul className="list-disc text-[11px] text-gray-400 space-y-2 text-left w-full max-w-sm mx-auto pl-5">
                  {step.subpoints.map((point, i) => (
                    <li
                      key={i}
                      className="leading-snug font-normal"
                      style={{ textIndent: "-0.1em", paddingLeft: "1em" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-[80px]">
        <Image src={shape1} alt="Shape Divider" className="w-full " priority />
      </div>
    </section>
  );
}

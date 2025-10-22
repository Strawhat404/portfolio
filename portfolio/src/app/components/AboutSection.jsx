"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Development</li>
        <li>Django</li>
        <li>Node</li>
        <li>Next</li>
        <li>Vue</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>SEO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering, Arbaminch University & Mekelle University</li>
    <li>Zsecurity Ethical Hacking and CyberSecurity</li>
    <li>Hedera Hashgraph Development</li>
    <li>MeliaCred AI Mastery</li>
    <li>Awaki Digital Marketing and Social Media Algorithms</li>
    <li>2025 Art School in Photography and PhotoEditing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>MeliaCred AI Mastery</li>
        <li>CASE  Innovator of 2024, Arbaminch Ethiopia</li>
        <li >ICDFA Cybersecurity and Forensics..coming soon</li>
        <li>Hedera Hashgraph Developer</li>
        <li>First ever Ethiopian NID Hackathon Finalist</li>
        <li>Awaki Digital Marketing and Social Media Algorithms</li>
        <li>10Academy AI mastery ..coming soon</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero.jpg" width={500} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm an innovative software engineer with a deep interest in leveraging technology to solve real world problems. My work is centered around creating impactful digital solutions.
          </p>
          <p className="pt-4">
            I am driven by a desire to share knowledge, empower others, and create meaningful change through technology and finance. I'm always looking for opportunities to collaborate, innovate, and push the boundaries of what's possible in both technology and leads.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

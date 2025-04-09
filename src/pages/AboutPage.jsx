import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 pl-24 pr-8 bg-base-100 text-base-content">
      <h1 className="text-4xl font-bold mb-6">About ChatSync</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">My Vision</h2>
        <p className="text-base leading-relaxed">
          ChatSync is a personal project I built to create a secure, responsive, and real-time messaging platform. 
          The goal is to make digital communication seamless, efficient, and customizable for everyone.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>Real-time messaging with online status indicators</li>
          <li>32 customizable themes for a personalized experience</li>
          <li>Privacy-focused backend with secure storage</li>
          <li>Simple, modern UI built using React and Tailwind</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About the Developer</h2>
        <p className="text-base leading-relaxed">
          Hi! I'm the solo developer behind ChatSync — passionate about full-stack development, UI/UX design, and building 
          secure, modern web applications. This project is the result of continuous learning and love for tech.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-base leading-relaxed">
          Have any questions , suggestions , or just want to connect ? Feel free to reach out at {" "}
          <a
            href="mailto:yourname@gmail.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            codewithme333@gmail.com
          </a>.
        </p>
      </section>

      <footer className="text-sm text-gray-500 mt-10">
        Built with dedication by a solo developer | ChatSync v1.0
      </footer>
    </div>
  );
};

export default AboutPage;
'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionNavigation from '@/components/SectionNavigation';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [spotlight, setSpotlight] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out', once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="content-wrapper mt-8"
        onMouseMove={(e) => setSpotlight({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setSpotlight({ x: window.innerWidth / 2, y: window.innerHeight / 2 })}
      >
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `radial-gradient(700px at ${spotlight.x}px ${spotlight.y}px, rgba(70, 95, 20, 0.22), transparent 70%)`,
            transition: 'background 150ms ease-out',
          }}
        />
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Fixed Left Section */}
          <section
            className="fixed-section w-full lg:w-[30%] lg:h-screen lg:fixed p-8 lg:ml-17 flex flex-col justify-between"
            id="home"
          >
            <div className="left-content">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#F4F5E3] mb-2 tracking-tight">
                Janzen Go.
              </h1>
              <div className="text-lg md:text-xl font-normal text-[#D4D6A8] mb-8 tracking-wide">
                AWS Learning Club Lead <br/> Aspiring Full Stack Developer
              </div>
              <p className="text-md text-[#D4D6A8] mb-8 leading-relaxed">
                A current AWS Learning Club Lead and Cloud Advocate, I'm an Aspiring Full Stack Developer passionate about building simple, minimal, yet useful software solutions.
              </p>
            </div>

            {/* Section Navigation */}
            <SectionNavigation activeSection={activeSection} />

            {/* Social Links */}
            <div className="space-y-4 left-content">
              <div className="flex flex-row space-x-4">
                <a
                  href="https://github.com/janzengo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-[#D4D6A8] hover:text-[#8EA832] px-1 transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/janzengo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-[#D4D6A8] hover:text-[#8EA832] px-1 transition-colors"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com/janzengogrowglow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-[#D4D6A8] hover:text-[#8EA832] px-1 transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://bsky.app/profile/janzengo.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-[#D4D6A8] hover:text-[#8EA832] px-1 transition-colors"
                >
                  <i className="fa-brands fa-bluesky text-2xl"></i>
                </a>
              </div>
              <p className="text-sm text-[#D4D6A8] mt-6 opacity-50">© 2025 Janzen Go. All rights reserved.</p>
            </div>
          </section>

          {/* Scrollable Right Section */}
          <section className="scrollable-section w-full lg:w-[65%] lg:ml-[45%] lg:mr-[5%] min-h-screen p-8 custom-scrollbar text-sm md:text-[15px] leading-relaxed">
            <div data-aos="fade-in">
              <About />
            </div>
            <div data-aos="fade-in" data-aos-delay="50">
              <Skills />
            </div>
            <div data-aos="fade-in" data-aos-delay="100">
              <Experience />
            </div>
            <div data-aos="fade-in" data-aos-delay="150">
              <Projects />
            </div>
            <div data-aos="fade-in" data-aos-delay="200">
              <Contact />
            </div>

            {/* Credits Section */}
            <div className="text-left mt-16 mb-6 py-4">
              <p className="text-sm text-[#D4D6A8]/60 max-w-xl">
                Designed and built by yours truly. Coded in{" "}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8EA832]/60 hover:text-[#8EA832] transition-colors"
                >
                  Visual Studio Code
                </a>
                . Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8EA832]/60 hover:text-[#8EA832] transition-colors"
                >
                  Next.js
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8EA832]/60 hover:text-[#8EA832] transition-colors"
                >
                  Tailwind CSS
                </a>
                , and{" "}
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8EA832]/60 hover:text-[#8EA832] transition-colors"
                >
                  TypeScript
                </a> 
                .<br/>
                Design inspired by{" "}
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8EA832]/60 hover:text-[#8EA832] transition-colors"
                >
                  Brittany Chiang
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

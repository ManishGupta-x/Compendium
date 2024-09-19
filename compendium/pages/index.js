import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Header from '@/components/Header';
import ProfileInfo from '@/components/ProfileInfo';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const heroElement = heroRef.current;
      const timelineElement = timelineRef.current;

      if (heroElement && timelineElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        const timelineBottom = timelineElement.offsetTop + timelineElement.offsetHeight;

        if (scrollPosition < heroBottom) {
          setCurrentSection('hero');
        } else if (scrollPosition >= heroBottom && scrollPosition < timelineBottom) {
          setCurrentSection('timeline');
        }

        setIsAtBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight - 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle initial hash
    const hash = window.location.hash.slice(1);
    if (hash === 'timeline') {
      const timelineElement = timelineRef.current;
      if (timelineElement) {
        timelineElement.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection('timeline');
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="overflow-hidden">
      <Header currentSection={currentSection} />
      <Navbar onNavClick={scrollToSection} />
      <main className="relative">
        <section id="hero" ref={heroRef} className="min-h-screen max-w-screen-2xl relative">
          <ProfileInfo />
        </section>
        <section id="timeline" ref={timelineRef} className="min-h-screen">
          <Timeline />
        </section>
      </main>
      <ScrollToTopButton isAtBottom={isAtBottom} />
    </div>
  );
};

export default Home;
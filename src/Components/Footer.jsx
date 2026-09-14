import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-md py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-mono font-bold text-lg text-zinc-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Personal Portfolio &bull; Web Team (Vols) Task
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-zinc-500 hover:text-blue-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-zinc-500 hover:text-rose-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center text-xs text-zinc-400 dark:text-zinc-500 flex items-center justify-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} Harshitha Reddy. Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>using React & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

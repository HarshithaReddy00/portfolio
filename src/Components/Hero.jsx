import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Mail, 
  FileText, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

function Hero({ onOpenResumeModal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      // Pause when full word is typed
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayedText(
          currentRole.substring(0, isDeleting ? displayedText.length - 1 : displayedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-indigo-500/5 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                Hi there! Welcome to my portfolio 👋
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              
              {/* Typewriter Dynamic Role */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-700 dark:text-zinc-200 h-10 flex items-center justify-center lg:justify-start gap-1">
                <span>Passionate</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono underline decoration-indigo-400/40 decoration-wavy">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-6 bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
              </div>
            </div>

            {/* Tagline / Bio Summary */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-500" />
                React • Vite • Node • Tailwind
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="px-6 py-3 rounded-xl font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700/90 border border-zinc-200 dark:border-zinc-700 hover:-translate-y-0.5 transition-all text-sm sm:text-base flex items-center gap-2 shadow-xs"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Resume / CV</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all text-sm sm:text-base"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-zinc-100 dark:bg-zinc-800/70 hover:bg-indigo-50 dark:hover:bg-zinc-700 transition-all hover:scale-110 shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 bg-zinc-100 dark:bg-zinc-800/70 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-all hover:scale-110 shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 bg-zinc-100 dark:bg-zinc-800/70 hover:bg-rose-50 dark:hover:bg-zinc-700 transition-all hover:scale-110 shadow-xs"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code & Skill Card Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20 transform -rotate-3 scale-95" />
              
              {/* Glass Code Card */}
              <div className="relative glass-panel rounded-2xl p-6 shadow-2xl border border-zinc-200/80 dark:border-zinc-800 space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    <span>developer.json</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 space-y-1.5 overflow-x-auto leading-relaxed">
                  <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-indigo-600 dark:text-indigo-400">candidate</span> = &#123;</div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">name:</span> <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">targetTeam:</span> <span className="text-emerald-600 dark:text-emerald-400">"Web Team (Vols)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">primaryStack:</span> [
                    <span className="text-amber-600 dark:text-amber-400">"React"</span>, <span className="text-amber-600 dark:text-amber-400">"Vite"</span>, <span className="text-amber-600 dark:text-amber-400">"Tailwind"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">hardWorker:</span> <span className="text-blue-600 dark:text-blue-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">quickLearner:</span> <span className="text-blue-600 dark:text-blue-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">commitment:</span> <span className="text-rose-600 dark:text-rose-400">"100% Impact & Quality"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Highlights pill tags */}
                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                    <CheckCircle2 className="w-3 h-3" /> Fully Responsive
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-800/60">
                    <Sparkles className="w-3 h-3" /> Clean Code
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-800/60">
                    <ExternalLink className="w-3 h-3" /> Ready to Deploy
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl glass-panel hover:-translate-y-1 transition-transform">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;

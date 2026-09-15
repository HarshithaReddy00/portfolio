import React from 'react';
import { 
  User, 
  GraduationCap, 
  HeartHandshake, 
  Layers, 
  Lightbulb, 
  GitPullRequest, 
  Cpu, 
  Award,
  Sparkles
} from 'lucide-react';
import { personalInfo, educationData, volunteerHighlights } from '../data/portfolioData';

function About() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      title: "Web Development",
      desc: "Designing, building, and deploying structured webpages using semantic HTML, C++, and JavaScript fundamentals."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: "On-Page SEO",
      desc: "Implementing essential On-Page SEO strategies, content optimization, and keyword integration for higher search visibility."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      title: "Academic Excellence (9.8 Pointer)",
      desc: "Strong computer engineering foundation at SIES Nerul, combined with 91%tile in CET and 92.4% in CBSE Class X."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      title: "Sports & Leadership",
      desc: "Competitive badminton player and outdoor trekker with proven team collaboration, discipline, and sharp focus."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About Me & My Passion
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
            A blend of technical problem-solving, aesthetic design, and dedicated community volunteering.
          </p>
        </div>

        {/* Top Grid: Bio Story + Vols Dedication */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Bio Story Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between border border-zinc-200/80 dark:border-zinc-800">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span>Passionate Developer with an Eye for Craft</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                My journey began with a curiosity for how websites work under the hood. Since then, I've spent hundreds of hours writing code, building practical tools, reading documentation, and contributing to collaborative student projects.
              </p>
            </div>

            {/* Quick badges */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-zinc-100 dark:bg-zinc-800/60 p-3 rounded-xl text-center">
                <div className="text-xs text-zinc-400 font-medium">Location</div>
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Thane, MH</div>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800/60 p-3 rounded-xl text-center">
                <div className="text-xs text-zinc-400 font-medium">Degree</div>
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">B.Tech CE (9.8)</div>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800/60 p-3 rounded-xl text-center col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400 font-medium">Goal</div>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">Web Team Excellence</div>
              </div>
            </div>
          </div>

          {/* Vols / Web Team Dedication Card */}
          <div className="lg:col-span-5 relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-zinc-900 text-white shadow-xl flex flex-col justify-between overflow-hidden border border-indigo-500/20">
            {/* Glow effect */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                <HeartHandshake className="w-4 h-4 text-pink-400" />
                <span>Web Team & Volunteer Spirit</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {volunteerHighlights.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {volunteerHighlights.statement}
              </p>
            </div>

            <div className="pt-6 relative z-10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold">
                What I bring to Vols:
              </div>
              <div className="flex flex-wrap gap-2">
                {volunteerHighlights.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-indigo-500" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Education & Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div 
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800 space-y-3 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {edu.duration}
                  </span>
                </div>

                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Academic Performance: {edu.gpa}
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Core Technical Pillars
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              The foundational skills and mindset I bring to software development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800 space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-base">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

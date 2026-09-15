import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Search, 
  Sparkles, 
  Check, 
  Terminal, 
  Layers, 
  Database, 
  Wrench, 
  Cpu,
  Flame
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Development', 'Search Engine Optimization', 'Core Concepts'];

  // Flatten and filter skills
  const filteredSkills = useMemo(() => {
    let list = [];
    if (activeCategory === 'All') {
      skillsData.forEach(cat => {
        cat.skills.forEach(skill => list.push({ ...skill, category: cat.category }));
      });
    } else {
      const found = skillsData.find(cat => cat.category === activeCategory);
      if (found) {
        list = found.skills.map(skill => ({ ...skill, category: found.category }));
      }
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        s => s.name.toLowerCase().includes(q) || 
             s.desc.toLowerCase().includes(q) ||
             s.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
            A comprehensive overview of the tools, frameworks, and programming languages I use to build scalable products.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, C++, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800 space-y-3 hover:border-indigo-500/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                      {skill.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                    {skill.experience}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 glass-panel rounded-2xl">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                No skills found matching "{searchQuery}". Try a different keyword.
              </p>
            </div>
          )}
        </div>

        {/* Quick Tech Badges Marquee / Stack summary */}
        <div className="mt-14 p-6 glass-panel rounded-2xl border border-zinc-200/80 dark:border-zinc-800 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>Daily Driver Tech Stack</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['HTML', 'C++', 'JavaScript (Basic)', 'On-Page SEO', 'Content Optimization', 'Keyword Integration', 'Foundations of Computer Engineering', 'Programming Logic'].map((tech, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 shadow-xs hover:border-indigo-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

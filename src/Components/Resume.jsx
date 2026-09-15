import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Briefcase, 
  GraduationCap,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, resumeData, educationData, experienceData, volunteerHighlights } from '../data/portfolioData';

function Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    // Open printable resume in new tab for user to save as PDF or view
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Resume & Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">
            Detailed snapshot of my academic journey, core competencies, certifications, and volunteer leadership.
          </p>
        </div>

        {/* Resume Presentation Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-zinc-800 shadow-xl max-w-5xl mx-auto space-y-8">
          
          {/* Top Bar with Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                {personalInfo.name} — Resume
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                Full Stack Developer & Volunteer Contributor &bull; Updated September 2026
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>View Full Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download / Print CV</span>
              </button>
            </div>
          </div>

          {/* Success Toast / Notification */}
          {downloadSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Resume opened!</span> You can save it as PDF directly using your browser's Print dialog (<kbd className="bg-white/40 px-1 py-0.5 rounded text-xs">Ctrl + P</kbd>).
              </div>
            </div>
          )}

          {/* Resume Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Summary, Education & Volunteering */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Executive Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Executive Summary</span>
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/60 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60">
                  {resumeData.summary}
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </h4>
                {experienceData && experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 space-y-2"
                  >
                    <div className="flex justify-between items-baseline flex-wrap">
                      <div>
                        <span className="font-bold text-zinc-900 dark:text-white text-sm">
                          {exp.role}
                        </span>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 ml-2">
                          &bull; {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">{exp.duration}</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </h4>
                <div className="space-y-3">
                  {educationData.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5"
                    >
                      <div className="flex justify-between items-baseline flex-wrap">
                        <span className="font-bold text-zinc-900 dark:text-white text-sm">
                          {item.degree}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono">{item.duration}</span>
                      </div>
                      <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {item.institution} &bull; <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer & Leadership */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Leadership & Volunteer Roles</span>
                </h4>
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 space-y-2">
                  <div className="font-bold text-zinc-900 dark:text-white text-sm">
                    Web Team Volunteer & Event Tech Coordinator
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Spearheaded frontend portal development for university fests, mentored junior volunteers, and ensured 99.9% uptime during peak event registrations.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Certifications, Interests, Tech Focus */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </h4>
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 space-y-2.5">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Interests */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                  Core Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Print Tip */}
              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300">
                  <Printer className="w-4 h-4" />
                  <span>Need an ATS-Friendly PDF?</span>
                </div>
                <p>
                  Clicking "Download / Print CV" opens the standalone printable version formatted specifically to pass automated applicant tracking systems (ATS).
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;

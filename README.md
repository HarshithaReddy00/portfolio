# 🚀 Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, fully responsive, high-performance personal portfolio built for the **Web Team (Vols)** task. Designed to showcase real-world full-stack web applications, technical skill proficiencies, volunteer leadership, an interactive ATS-friendly resume, and functional contact capabilities.

---

## 🌐 Live Demo & Important Links

- 🔗 **Live Portfolio Website:** [https://harshithareddy-portfolio.vercel.app](https://harshithareddy-portfolio.vercel.app) *(or your deployed Vercel/Netlify URL)*
- 📄 **Interactive & Printable CV:** [View ATS-Friendly Resume](public/resume.html)
- 🐙 **Public GitHub Repository:** [https://github.com/harshithareddy/portfolio](https://github.com/harshithareddy/portfolio)
- 💼 **LinkedIn Profile:** [https://linkedin.com/in/harshithareddy](https://linkedin.com/in/harshithareddy)
- 📧 **Direct Contact:** [harshithareddy5965@gmail.com](mailto:harshithareddy5965@gmail.com)

---

## ✨ Key Features

### 1. 📱 Responsive & Glassmorphism UI/UX
- Designed mobile-first, ensuring fluid layouts across smartphones, tablets, laptops, and ultra-wide displays.
- Sleek modern developer aesthetics: backdrop blur glass cards, glowing accent gradients, smooth hover transitions, and refined typography (`Inter` & `JetBrains Mono`).

### 2. 🌓 Dark & Light Mode Support
- Instant theme toggle with system preference autodetection (`prefers-color-scheme`).
- State saved to `localStorage` so the user's preferred theme persists across browser sessions.

### 3. 🎯 High-Impact Hero Section
- Live status pill: *"🟢 Available for Web Team & Full Stack Roles"*.
- Dynamic animated typewriter role rotator: cycling between *Full Stack Developer*, *Frontend Specialist*, *Web Team Volunteer*, and *Problem Solver*.
- Direct action buttons (Projects, Resume, Contact) and quick-access social links (GitHub, LinkedIn, Email).
- Key metrics summary bar (10+ Projects, 12+ Tech Stacks, 500+ Commits, 100% Team Spirit).

### 4. 👨‍💻 About Me & Vols Dedication
- Personal story and technical journey.
- **Web Team / Volunteer Section**: Highlights commitment to campus initiatives, peer mentoring, and hackathons.
- Academic background and Computer Science engineering coursework.
- 4 foundational pillars: Frontend Engineering, Core CS & DSA, Collaborative Git Workflows, and Rapid Learning.

### 5. ⚡ Categorized & Searchable Skills Matrix
- Category tabs: **All**, **Frontend**, **Backend & DB**, **Languages**, **Tools & DevOps**, and **Core CS**.
- **Real-time search bar**: Type any keyword (e.g. *React*, *C++*, *Git*, *Mongo*) to instantly filter matching skills.
- Skill cards feature proficiency percentage bars and experience context.

### 6. 🛠️ Featured Projects & Interactive Architecture Modal
- Curated real-world project cards with tech tags, descriptions, live demo links, and GitHub source links:
  - **CampusConnect**: Volunteer shift & campus event coordination portal.
  - **DevPulse**: Developer productivity suite with offline snippet storage.
  - **TaskFlow**: Agile Kanban board with drag-and-drop task tracking.
  - **AlgoScope**: Interactive algorithm and data structure visualizer.
- **Deep-Dive Architecture Modal**: Clicking "View Architecture" displays in-depth implementation details, challenge solutions, and stack breakdowns.

### 7. 📄 Printable ATS-Friendly Resume & Confetti Feedback
- Built-in curriculum vitae overview with academic performance, certifications, and leadership roles.
- 1-click **Download / Print CV** button with celebratory confetti animation (`canvas-confetti`).
- Dedicated standalone printable HTML resume (`public/resume.html`) that prints perfectly or exports to PDF (`Ctrl + P`).

### 8. 📬 Interactive Contact Form & 1-Click Email Copy
- Validated contact form (Name, Email, Subject, Message) with instant visual feedback and confetti celebration.
- **1-Click Copy Email button** with interactive tooltip toast (`Copied!`).
- Direct communication channel cards for GitHub, LinkedIn, and Email.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) + Custom SVG Brand Badges |
| **Delightful Animations** | CSS Keyframes & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Data Layer** | Centralized, easily customizable data in `src/data/portfolioData.js` |
| **Deployment Options** | Vercel, Netlify, and GitHub Pages (Automated GitHub Actions workflow) |

---

## 📁 Project Directory Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── _redirects            # Netlify SPA routing rules
│   ├── favicon.svg           # Custom website favicon
│   └── resume.html           # Standalone print-ready ATS-friendly resume
├── src/
│   ├── assets/               # Static assets & logos
│   ├── Components/
│   │   ├── About.jsx         # Story, education, and volunteer spirit
│   │   ├── Contact.jsx       # Interactive validated form & copy-email action
│   │   ├── Footer.jsx        # Quick links, copyright, and scroll-to-top
│   │   ├── Hero.jsx          # Typewriter hero, CTAs, and status badge
│   │   ├── Icons.jsx         # Clean SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx        # Glassmorphic header, mobile menu, theme switch
│   │   ├── Projects.jsx      # Project showcase & deep dive modal
│   │   ├── Resume.jsx        # Resume presentation & download trigger
│   │   └── Skills.jsx        # Searchable, categorized skills grid
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio content (Single Source of Truth)
│   ├── App.css               # Utility keyframes (float, pulse)
│   ├── App.jsx               # App shell, theme state, and component assembly
│   ├── index.css             # Tailwind v4 import & custom scrollbar
│   └── main.jsx              # React DOM entrypoint
├── index.html                # HTML template with SEO tags & Google Fonts
├── package.json              # Project dependencies and npm scripts
├── vercel.json               # Vercel deployment configuration
├── vite.config.js            # Vite + Tailwind plugin + base path config
└── README.md                 # Project documentation
```

---

## ⚡ Quick Start (Local Setup)

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `git` installed.

### 2. Clone the Repository
```bash
git clone https://github.com/harshithareddy/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## 🎨 Easy Customization Guide

All personal details, text, projects, and skills are decoupled from the UI and live in a single file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To customize:
1. **Name & Tagline:** Edit `personalInfo.name`, `personalInfo.tagline`, and `personalInfo.roles`.
2. **Social Links:** Update `personalInfo.github`, `personalInfo.linkedin`, and `personalInfo.email`.
3. **Projects:** Add or edit entries in `projectsData` (title, description, tags, GitHub link, demo link).
4. **Skills:** Modify `skillsData` categories, skill levels, and descriptions.
5. **Resume:** Edit `resumeData` and the standalone `public/resume.html` file.

---

## 🚀 Free Deployment Guide (Step-by-Step)

You can host this portfolio **100% free** on any of these platforms:

### Option A: Deploy on Vercel (Recommended - Fastest ⚡)
1. Push your code to a public GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Your site will be live on a `*.vercel.app` URL in under 60 seconds!

### Option B: Deploy on Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
2. Connect your GitHub repository.
3. Build Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Click **Deploy Site**.

### Option C: Deploy on GitHub Pages (Automated via Actions)
This project comes pre-configured with a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push any commit to the `main` branch: GitHub Actions will automatically build and deploy your site to `https://<your-username>.github.io/<repo-name>/`.

---

## 🌐 Pushing to a Public GitHub Repository

Run the following commands in your terminal to publish this project to GitHub:

```bash
# 1. Initialize git (if not already done)
git init -b main

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: Initial commit - complete responsive personal portfolio for web team"

# 4. Create a new public repository on GitHub (e.g. named 'portfolio')

# 5. Link your local repository to GitHub
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git

# 6. Push code to main branch
git push -u origin main
```

---

## 👨‍💻 Author

**Harshitha Reddy**
- 🐙 GitHub: [@harshithareddy](https://github.com/harshithareddy)
- 💼 LinkedIn: [Harshitha Reddy](https://linkedin.com/in/harshithareddy)
- 📧 Email: [harshithareddy5965@gmail.com](mailto:harshithareddy5965@gmail.com)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - you are free to use, modify, and distribute it.

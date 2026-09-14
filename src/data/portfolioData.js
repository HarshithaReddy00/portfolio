export const personalInfo = {
  name: "Harshitha Reddy",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Frontend Specialist",
    "Web Team Volunteer",
    "Open Source Enthusiast",
    "Creative Problem Solver"
  ],
  tagline: "Crafting modern, accessible, and high-performance digital experiences with passion & precision.",
  bio: "I am a proactive Computer Science student and software developer passionate about modern web technologies, responsive user experiences, and collaborative open-source engineering. Whether developing full-stack web platforms, optimizing frontend performance, or contributing as an enthusiastic volunteer in tech teams, I take pride in turning creative ideas into scalable, beautiful realities.",
  status: "Available for Web Team & Full Stack Roles",
  location: "Hyderabad, India",
  email: "harshithareddy.dev@gmail.com",
  github: "https://github.com/harshithareddy",
  linkedin: "https://linkedin.com/in/harshithareddy",
  resumeUrl: "/resume.html", // printable & downloadable interactive CV
};

export const stats = [
  { label: "Projects Completed", value: "10+", detail: "Full stack & web apps" },
  { label: "Tech Stacks Mastered", value: "12+", detail: "React, Node, Tailwind, etc." },
  { label: "Git Commits", value: "500+", detail: "Consistent open-source activity" },
  { label: "Team Spirit", value: "100%", detail: "Dedicated volunteer & leader" }
];

export const volunteerHighlights = {
  title: "Why the Web Team? (Vols Dedication)",
  statement: "Being part of the Web Team is about more than just writing code — it's about driving real campus impact, empowering student communities through smooth digital tools, and collaborating seamlessly under deadlines. I bring clean coding habits, fast learning adaptability, and boundless enthusiasm to every team endeavor.",
  badges: [
    "🚀 Rapid Prototyping",
    "🤝 Collaborative Teammate",
    "📱 Mobile-First Responsive Design",
    "⚡ High-Performance Code",
    "🎨 UI/UX Detail Oriented"
  ]
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90, experience: "Advanced", desc: "Component architecture, hooks, state management, context" },
      { name: "JavaScript (ES6+)", level: 92, experience: "Advanced", desc: "Async/await, DOM manipulation, closures, modern syntax" },
      { name: "Tailwind CSS", level: 95, experience: "Mastery", desc: "Responsive design, utility-first styling, custom theme config" },
      { name: "HTML5 & CSS3", level: 95, experience: "Mastery", desc: "Semantic markup, CSS Grid, Flexbox, keyframe animations" },
      { name: "Next.js / Vite", level: 85, experience: "Proficient", desc: "Fast build tooling, SSR/SSG concepts, asset optimization" }
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", level: 82, experience: "Proficient", desc: "REST APIs, event loop, middleware architecture" },
      { name: "Express.js", level: 85, experience: "Proficient", desc: "API routing, authentication, request handling, CORS" },
      { name: "MongoDB & Mongoose", level: 80, experience: "Proficient", desc: "NoSQL schema design, aggregation pipelines, CRUD" },
      { name: "RESTful APIs", level: 88, experience: "Advanced", desc: "Stateless architecture, JSON formatting, HTTP status codes" }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 92, experience: "Advanced", desc: "Core language, modular architecture, browser APIs" },
      { name: "C / C++", level: 84, experience: "Proficient", desc: "Pointers, memory allocation, STL, competitive coding" },
      { name: "Python", level: 78, experience: "Intermediate", desc: "Scripting, basic automation, data handling" },
      { name: "SQL", level: 80, experience: "Proficient", desc: "Relational queries, joins, indexes, schema design" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90, experience: "Advanced", desc: "Version control, branching, PR reviews, merge workflows" },
      { name: "VS Code", level: 95, experience: "Mastery", desc: "Debugging, extensions, snippet productivity" },
      { name: "Vercel / Netlify", level: 88, experience: "Proficient", desc: "Continuous deployment, preview deployments, domain setup" },
      { name: "Postman", level: 85, experience: "Proficient", desc: "API testing, environment variables, collection documentation" }
    ]
  },
  {
    category: "Core CS",
    skills: [
      { name: "Data Structures", level: 88, experience: "Advanced", desc: "Arrays, Linked Lists, Trees, Graphs, Stacks, Queues" },
      { name: "Algorithms", level: 85, experience: "Proficient", desc: "Sorting, Searching, Greedy, Dynamic Programming, Two-Pointers" },
      { name: "Object Oriented Design", level: 86, experience: "Proficient", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
      { name: "Database Management", level: 82, experience: "Proficient", desc: "Normalization, ACID properties, transactions, indexing" }
    ]
  }
];

export const projectsData = [
  {
    id: "campus-connect",
    title: "CampusConnect - Volunteer & Event Hub",
    category: "Full Stack",
    featured: true,
    tagline: "Empowering volunteer coordination & campus event discovery",
    description: "A comprehensive event and volunteer management platform built for college societies and clubs. Streamlines volunteer registration, shift assignment, digital ticketing, and announcements with instant mobile notifications.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Role-based authentication for Event Organizers and Student Volunteers",
      "Interactive volunteer shift sign-up with real-time slot counter",
      "Automated QR-code pass generation for seamless event check-ins",
      "Event analytics dashboard showing participant turnout and feedback"
    ],
    liveUrl: "https://campus-connect-vols.vercel.app",
    githubUrl: "https://github.com/harshithareddy/campus-connect",
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "dev-pulse",
    title: "DevPulse - Developer Productivity & Snippet Hub",
    category: "Frontend",
    featured: true,
    tagline: "All-in-one developer companion with offline snippet storage",
    description: "An ultra-fast client-side productivity suite designed for web developers. Provides categorized code snippet archiving, markdown notes previewer, regex tester, and instant JSON validator.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Lucide React"],
    highlights: [
      "Zero-latency offline storage using structured LocalStorage persistence",
      "Multi-language code snippet library with instant copy-to-clipboard",
      "Interactive JSON formatter, diff checker, and live regex playground",
      "Customizable tags, search query filter, and light/dark theme switcher"
    ],
    liveUrl: "https://devpulse-hub.vercel.app",
    githubUrl: "https://github.com/harshithareddy/dev-pulse",
    accentColor: "from-purple-600 to-pink-600"
  },
  {
    id: "taskflow",
    title: "TaskFlow - Agile Kanban Studio",
    category: "Frontend",
    featured: false,
    tagline: "Minimalist drag-and-drop workflow tracking tool",
    description: "An intuitive Kanban board application for engineering sprint management. Features smooth drag-and-drop card movements, priority indicators, subtask progress tracking, and productivity analytics.",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "HTML5 Drag & Drop", "Lucide Icons"],
    highlights: [
      "Fluid drag-and-drop card interaction across backlog, in-progress, and done columns",
      "Color-coded priority badges (Urgent, High, Medium, Low)",
      "Card search filtering and due-date countdown warnings",
      "Detailed activity log tracking card transitions and timestamps"
    ],
    liveUrl: "https://taskflow-kanban.vercel.app",
    githubUrl: "https://github.com/harshithareddy/taskflow-kanban",
    accentColor: "from-emerald-600 to-teal-600"
  },
  {
    id: "algoscope",
    title: "AlgoScope - Algorithm & DSA Visualizer",
    category: "Core CS",
    featured: false,
    tagline: "Interactive educational visualization for sorting & tree algorithms",
    description: "An interactive computer science visualizer designed to demystify complex algorithms. Animates Bubble Sort, Merge Sort, Quick Sort, and Binary Search Trees with step-by-step playback controls.",
    image: "https://images.unsplash.com/photo-1516116211227-bbc13c733359?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript (ES6)", "React", "Tailwind CSS", "DSA", "Algorithms"],
    highlights: [
      "Real-time visual bar comparisons and swap animations with audio pitch feedback",
      "Adjustable speed slider and random array generator",
      "Side-by-side time & space complexity breakdown for each algorithm",
      "Step forward and backward execution to analyze edge cases"
    ],
    liveUrl: "https://algoscope-dsa.vercel.app",
    githubUrl: "https://github.com/harshithareddy/algoscope-visualizer",
    accentColor: "from-amber-500 to-orange-600"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Engineering College / University",
    duration: "2023 - 2027",
    gpa: "8.8 / 10.0",
    highlights: [
      "Core Courses: Data Structures, Algorithms, Web Technologies, Database Systems, Computer Networks",
      "Active Member of Technical Club & Web Development Volunteer Team",
      "Participated in regional hackathons and technical symposiums"
    ]
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "State Board / CBSE",
    duration: "2021 - 2023",
    gpa: "94.5%",
    highlights: ["Majors: Mathematics, Physics, Chemistry, Computer Science"]
  }
];

export const resumeData = {
  summary: "Motivated Computer Science undergraduate with a solid foundation in full-stack web development (React, Node.js, Tailwind CSS) and core CS fundamentals. Demonstrated volunteer spirit, leadership, and rapid problem-solving abilities.",
  certifications: [
    "Meta Frontend Developer Professional Certificate (Coursera)",
    "Responsive Web Design (freeCodeCamp)",
    "HackerRank Problem Solving (Intermediate)"
  ],
  interests: [
    "Full-Stack Web Development",
    "Open Source Collaboration",
    "UI/UX Accessibility & Aesthetics",
    "Competitive Programming & DSA",
    "Community & Volunteer Tech Initiatives"
  ]
};

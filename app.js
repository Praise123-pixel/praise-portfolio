const profile = {
  name: "Asiimire Praise",
  title: "Full-Stack Software Developer",
  subtitle:
    "I build responsive interfaces, practical business tools, and reliable backend features with JavaScript, React, Node.js, and NestJS.",
  location: "Kampala, Uganda",
  email: "praiseasiimire11@gmail.com",
  phone: "+256 773 608 073",
  linkedin: "https://www.linkedin.com/in/praise-asiimire-1a0210374/",
  github: "https://github.com/Praise123-pixel",
  vercel: "https://vercel.com/asiimire-praises-projects",
  resume: "./Asiimire_Praise_CV.pdf",
};

const highlights = [
  { value: "3", label: "Live projects featured" },
  { value: "2025", label: "Started hands-on software training" },
  { value: "Web + API", label: "Frontend and backend delivery" },
];

const strengths = [
  "Full-stack software developer with practical experience across web, mobile, and backend product work.",
  "Comfortable building with JavaScript, TypeScript, React, React Native, Node.js, NestJS, PostgreSQL, and MongoDB.",
  "Strong interest in clean user interfaces, reliable APIs, debugging, documentation, and product-focused delivery.",
];

const quickFacts = [
  { label: "Current role", value: "Software Engineering Apprentice at Refactory Academy / Groundbreaker Talent" },
  { label: "Focus", value: "Frontend engineering, API integration, and business-focused software solutions" },
  { label: "Availability", value: "Open to internships, junior roles, freelance work, and collaborative product teams" },
];

const projects = [
  {
    title: "Beyond Sports Organisation",
    kicker: "Full-stack platform",
    description:
      "Contributed to a corporate sports and wellness platform built to reduce fragmented fitness tracking and improve accountability, coaching visibility, and team engagement.",
    impact: [
      "Supported web and mobile experiences for group challenges, activity tracking, and coaching workflows.",
      "Worked with React, React Native, and NestJS-connected services in a real product environment.",
      "Contributed to API documentation, collaboration workflows, and database-backed features.",
    ],
    stack: ["React", "React Native", "NestJS", "TypeScript", "PostgreSQL", "Swagger", "Docker"],
    role: "Frontend, mobile, and backend collaboration",
    live: "https://beyondsports.fitness/",
    coverClass: "cover-beyond",
  },
  {
    title: "Mayondo Wood & Furniture Ltd",
    kicker: "Business management system",
    description:
      "Developed a practical business system for managing inventory, sales, customer records, supplier information, delivery charges, and operational reporting.",
    impact: [
      "Built product, stock, payment, and receipt flows that support day-to-day business operations.",
      "Implemented logic for delivery charge calculation, stock updates, and sales reporting.",
      "Translated a real business process into a usable digital workflow with database-driven features.",
    ],
    stack: ["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS"],
    role: "Full-stack development",
    live: "https://project-jo98.vercel.app/",
    coverClass: "cover-mayondo",
  },
  {
    title: "Weather-AI Dashboard",
    kicker: "API integration project",
    description:
      "Built a weather dashboard that combines forecast data and AI-assisted summaries in a clean, responsive interface designed for quick understanding.",
    impact: [
      "Connected live weather API data to reusable interface components and state-driven views.",
      "Handled loading, error, and data-display states for a smoother user experience.",
      "Published the project online with clear structure for review by employers and collaborators.",
    ],
    stack: ["Next.js", "TypeScript", "API Integration", "Responsive UI", "Vercel"],
    role: "Frontend and integration development",
    live: "https://weather-ai-dashboard-eosin.vercel.app/?lat=0.3476&lon=32.5825&days=7&units=metric&ai=true&label=Kampala&timezone=Africa%2FKampala",
    coverClass: "cover-weather",
  },
];

const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces built with JavaScript, TypeScript, React, HTML, and CSS, with attention to layout, usability, and accessibility.",
    skills: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend Development",
    description:
      "Hands-on experience with Node.js and NestJS for REST APIs, backend debugging, and connecting interfaces to useful data flows.",
    skills: ["Node.js", "NestJS", "REST APIs", "Swagger/OpenAPI", "Authentication concepts"],
  },
  {
    title: "Data & Deployment",
    description:
      "Comfortable working with database-driven features, Git workflows, cloud deployment tools, and product delivery practices.",
    skills: ["PostgreSQL", "MongoDB", "Git", "GitHub", "Docker", "Vercel", "DigitalOcean", "Render"],
  },
  {
    title: "Mobile & Teamwork",
    description:
      "Able to contribute across mobile UI, API consumption, agile collaboration, debugging, documentation, and continuous learning.",
    skills: ["React Native", "API Consumption", "Agile teamwork", "Debugging", "Technical documentation"],
  },
];

const experience = [
  {
    title: "Software Engineering Apprentice",
    org: "Refactory Academy",
    period: "2025 - Present",
    label: "Current",
    points: [
      "Build and contribute to real-world software applications across frontend, backend, and mobile product work.",
      "Develop backend features with Node.js, TypeScript, and NestJS while supporting RESTful workflows and data-driven logic.",
      "Collaborate in agile teams through sprint planning, reviews, Git workflows, debugging, testing, and project presentations.",
    ],
  },
  {
    title: "Advanced Certificate in Software Engineering",
    org: "Refactory Academy",
    period: "2025 - Present",
    label: "Education",
    points: [
      "Practical training in full-stack software development, databases, testing, debugging, and deployment workflows.",
      "Focused on JavaScript, TypeScript, React, Node.js, Git collaboration, and professional product delivery.",
    ],
  },
];

const education = [
  "Certificate in Software Engineering, Refactory Academy (2025)",
  "Uganda Advanced Certificate of Education, St. Matia Mulumba Secondary School (2024)",
];

const certifications = [
  "Software Engineering, Refactory Academy",
  "Introduction to Microsoft Azure: Describe Cloud Concepts, Microsoft Learn (September 2025)",
  "Soft Skills, BrighterMonday Uganda",
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="#top" aria-label="Asiimire Praise home">
          <strong>${profile.name}</strong>
          <span>${profile.title}</span>
        </a>
        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <nav aria-label="Primary">
          <ul class="nav-links" id="site-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content">
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">Open to opportunities</span>
            <h1>${profile.name}<span>.</span></h1>
            <p class="lead-copy">${profile.subtitle}</p>
            <div class="hero-actions">
              <a class="button" href="#work">View selected work</a>
              <a class="button-ghost" href="${profile.resume}" download>Download CV</a>
            </div>
            <div class="hero-metrics">
              ${highlights
                .map(
                  (item) => `
                    <div class="metric">
                      <strong>${item.value}</strong>
                      <span>${item.label}</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div class="hero-visual reveal">
            <img
              src="./images/WhatsApp Image 2026-06-09 at 09.10.44.jpeg"
              alt="Portrait of Asiimire Praise"
            />
            <div class="hero-card-note">
              <strong>${profile.title}</strong>
              <span>${profile.location} - Building practical products with JavaScript, React, Node.js, and NestJS.</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="container">
          <div class="section-heading reveal">
            <span>Professional Snapshot</span>
            <h2>A portfolio designed to feel clear, credible, and ready for hiring conversations.</h2>
            <p>
              I rebuilt this site around the strongest portfolio patterns I found in current professional examples:
              clear project stories, strong typography, restrained motion, and a balance of professionalism and personality.
            </p>
          </div>
          <div class="grid-two">
            <article class="panel reveal">
              <h3>About me</h3>
              <ul>
                ${strengths.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
            <aside class="panel reveal">
              <h3>Quick facts</h3>
              <div class="quick-facts">
                ${quickFacts
                  .map(
                    (fact) => `
                      <div class="fact">
                        <span>${fact.label}</span>
                        <strong>${fact.value}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section" id="work">
        <div class="container">
          <div class="section-heading reveal">
            <span>Selected Work</span>
            <h2>Project stories that show business context, technical choices, and practical outcomes.</h2>
            <p>
              Instead of placeholder thumbnails, each project is framed as a short case study so an employer can quickly see
              what the product was for, what I contributed, and which technologies I used.
            </p>
          </div>
          <div class="projects-grid">
            ${projects
              .map(
                (project) => `
                  <article class="project-card reveal">
                    <div class="project-cover ${project.coverClass}">
                      <div class="project-cover-content">
                        <span class="project-kicker">${project.kicker}</span>
                        <h3>${project.title}</h3>
                      </div>
                    </div>
                    <div class="project-body">
                      <p>${project.description}</p>
                      <div class="project-meta">
                        <strong>Role</strong>
                        <span>${project.role}</span>
                      </div>
                      <ul class="project-list">
                        ${project.impact.map((point) => `<li>${point}</li>`).join("")}
                      </ul>
                      <div class="chips">
                        ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
                      </div>
                      <div class="project-links">
                        <a class="project-link" href="${project.live}" target="_blank" rel="noreferrer">Visit live project</a>
                      </div>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section" id="expertise">
        <div class="container">
          <div class="section-heading reveal">
            <span>Expertise</span>
            <h2>Frontend strength with full-stack range.</h2>
            <p>
              My strongest work sits at the intersection of interface quality, real product needs, and backend-powered functionality.
            </p>
          </div>
          <div class="skills-grid">
            ${capabilities
              .map(
                (area) => `
                  <article class="skill-card reveal">
                    <h3>${area.title}</h3>
                    <p>${area.description}</p>
                    <div class="chips">
                      ${area.skills.map((item) => `<span class="chip">${item}</span>`).join("")}
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section" id="experience">
        <div class="container">
          <div class="section-heading reveal">
            <span>Experience</span>
            <h2>Training and hands-on work grounded in real delivery.</h2>
            <p>
              My background combines structured software training with project work that touches frontend interfaces, backend APIs,
              collaboration practices, and deployment workflows.
            </p>
          </div>
          <div class="timeline-grid">
            ${experience
              .map(
                (item) => `
                  <article class="timeline-item reveal">
                    <div class="timeline-meta">
                      <span class="pill">${item.label}</span>
                      <strong>${item.period}</strong>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.org}</p>
                    <ul class="timeline-points">
                      ${item.points.map((point) => `<li>${point}</li>`).join("")}
                    </ul>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid-two">
          <article class="quote-card reveal">
            <blockquote>
              I enjoy turning real business and community needs into software that feels useful, reliable, and easy to understand.
            </blockquote>
            <p>
              My current interests include JavaScript product development, responsive web interfaces, API-driven features, and clean software teamwork.
            </p>
          </article>
          <article class="panel reveal">
            <h3>Education and certifications</h3>
            <ul>
              ${education.map((item) => `<li>${item}</li>`).join("")}
              ${certifications.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>

      <section class="section" id="resume">
        <div class="container">
          <article class="panel resume-card reveal">
            <div>
              <h3>Resume</h3>
              <p>
                Download my latest CV for a full overview of my software engineering background, technical skills, and project experience.
              </p>
            </div>
            <div class="resume-actions">
              <a class="button" href="${profile.resume}" download>Download CV</a>
              <a class="button-secondary" href="#contact">Contact me</a>
            </div>
          </article>
        </div>
      </section>

      <section class="section" id="contact">
        <div class="container">
          <article class="contact-card reveal">
            <div class="section-heading">
              <span>Contact</span>
              <h2>Let's build something meaningful together.</h2>
              <p>
                I'm open to opportunities where I can contribute to thoughtful frontend work, full-stack product delivery, and teams that value growth.
              </p>
            </div>
            <ul class="contact-list">
              <li><strong>Email:</strong>&nbsp;<a href="mailto:${profile.email}">${profile.email}</a></li>
              <li><strong>Phone:</strong>&nbsp;<a href="tel:${profile.phone.replace(/\s+/g, "")}">${profile.phone}</a></li>
              <li><strong>Location:</strong>&nbsp;<span>${profile.location}</span></li>
              <li><strong>LinkedIn:</strong>&nbsp;<a href="${profile.linkedin}" target="_blank" rel="noreferrer">View profile</a></li>
              <li><strong>GitHub:</strong>&nbsp;<a href="${profile.github}" target="_blank" rel="noreferrer">See repositories</a></li>
              <li><strong>Vercel:</strong>&nbsp;<a href="${profile.vercel}" target="_blank" rel="noreferrer">Project deployments</a></li>
            </ul>
            <div class="contact-actions">
              <a class="button" href="mailto:${profile.email}">Send email</a>
              <a class="button-secondary" href="${profile.linkedin}" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-bar">
        <span>&copy; <span id="year"></span> ${profile.name}. Built in JavaScript.</span>
        <div class="footer-links">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  </div>
`;

document.querySelector("#year").textContent = String(new Date().getFullYear());

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = [...document.querySelectorAll(".nav-links a")];

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

reveals.forEach((item) => revealObserver.observe(item));

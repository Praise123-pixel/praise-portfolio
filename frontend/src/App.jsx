import { useEffect, useState } from "react";

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
  resume: "/assets/Asiimire_Praise_CV.pdf",
  photo: "/assets/WhatsApp Image 2026-06-09 at 09.51.51.jpeg",
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
  {
    label: "Current role",
    value: "Full-Stack and Mobile App Developer",
  },
  {
    label: "Focus",
    value:
      "Frontend engineering, API integration, and business-focused software solutions",
  },
  {
    label: "Availability",
    value:
      "Open to internships, junior roles, freelance work, and collaborative product teams",
  },
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
    stack: [
      "React",
      "React Native",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Swagger",
      "Docker",
    ],
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
    stack: [
      "Next.js",
      "TypeScript",
      "API Integration",
      "Responsive UI",
      "Vercel",
    ],
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
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Hands-on experience with Node.js and NestJS for REST APIs, backend debugging, and connecting interfaces to useful data flows.",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Swagger/OpenAPI",
      "Authentication concepts",
    ],
  },
  {
    title: "Data & Deployment",
    description:
      "Comfortable working with database-driven features, Git workflows, cloud deployment tools, and product delivery practices.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "DigitalOcean",
      "Render",
    ],
  },
  {
    title: "Mobile & Teamwork",
    description:
      "Able to contribute across mobile UI, API consumption, agile collaboration, debugging, documentation, and continuous learning.",
    skills: [
      "React Native",
      "API Consumption",
      "Agile teamwork",
      "Debugging",
      "Technical documentation",
    ],
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
];

const certifications = [
  "Software Engineering, Refactory Academy",
  "Introduction to Microsoft Azure: Describe Cloud Concepts, Microsoft Learn (September 2025)",
  "Soft Skills, BrighterMonday Uganda",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
const contactEndpoint = formspreeEndpoint || "/api/messages";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState("");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));

    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!status.message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const formspreeError = Array.isArray(data.errors)
          ? data.errors[0]?.message
          : undefined;
        throw new Error(
          formspreeError || data.message || "Something went wrong.",
        );
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus({
        type: "success",
        message: "Email address copied successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Could not copy the email address. Please copy it manually.",
      });
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Asiimire Praise home">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav aria-label="Primary">
            <ul className={`nav-links ${menuOpen ? "is-open" : ""}`} id="site-nav">
              {["about", "work", "expertise", "experience", "resume", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a href={`#${section}`} onClick={closeMenu}>
                      {section === "work"
                        ? "Projects"
                        : section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Open to opportunities</span>
              <h1>
                {profile.name}
                <span>.</span>
              </h1>
              <p className="lead-copy">{profile.subtitle}</p>
              <div className="hero-actions">
                <a className="button" href="#work">
                  View selected work
                </a>
                <a className="button-ghost" href={profile.resume} download>
                  Download CV
                </a>
              </div>
              <div className="hero-metrics">
                {highlights.map((item) => (
                  <div className="metric" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal">
              <img src={profile.photo} alt="Portrait of Asiimire Praise" />
              <div className="hero-card-note">
                <strong>{profile.title}</strong>
                <span>
                  {profile.location} - Building practical digital products with
                  JavaScript, React, Node.js, and NestJS.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading reveal">
              <span>Professional Snapshot</span>
              <h2>
                Full-stack developer focused on reliable products, thoughtful
                interfaces, and real business impact.
              </h2>
              <p>
                I bring hands-on experience building responsive frontend
                experiences, backend APIs, and practical digital tools that solve
                real user and business problems.
              </p>
            </div>

            <div className="grid-two">
              <article className="panel reveal">
                <h3>About me</h3>
                <ul>
                  {strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <aside className="panel reveal">
                <h3>Quick facts</h3>
                <div className="quick-facts">
                  {quickFacts.map((fact) => (
                    <div className="fact" key={fact.label}>
                      <span>{fact.label}</span>
                      <strong>{fact.value}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-heading reveal">
              <span>Selected Work</span>
              <h2>
                Project stories that show business context, technical choices, and
                practical outcomes.
              </h2>
              <p>
                Each project highlights the problem addressed, the solution
                delivered, and the technologies used to create measurable value.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <div className={`project-cover ${project.coverClass}`}>
                    <div className="project-cover-content">
                      <span className="project-kicker">{project.kicker}</span>
                      <h3>{project.title}</h3>
                    </div>
                  </div>

                  <div className="project-body">
                    <p>{project.description}</p>
                    <div className="project-meta">
                      <strong>Role</strong>
                      <span>{project.role}</span>
                    </div>

                    <ul className="project-list">
                      {project.impact.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="chips">
                      {project.stack.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        className="project-link"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit live project
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <div className="section-heading reveal">
              <span>Expertise</span>
              <h2>Full-stack and mobile development focused on practical product delivery.</h2>
              <p>
                I build across frontend, backend, and mobile, with a focus on
                usable interfaces, reliable systems, and solutions that support
                real business and user needs.
              </p>
            </div>

            <div className="skills-grid">
              {capabilities.map((area) => (
                <article className="skill-card reveal" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="chips">
                    {area.skills.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading reveal">
              <span>Experience</span>
              <h2>Training and hands-on work grounded in real delivery.</h2>
              <p>
                My background combines structured software training with project
                work that touches frontend interfaces, backend APIs, collaboration
                practices, and deployment workflows.
              </p>
            </div>

            <div className="timeline-grid">
              {experience.map((item) => (
                <article className="timeline-item reveal" key={item.title}>
                  <div className="timeline-meta">
                    <span className="pill">{item.label}</span>
                    <strong>{item.period}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                  <ul className="timeline-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-two">
            <article className="quote-card reveal">
              <blockquote>
                I enjoy turning real business and community needs into software
                that feels useful, reliable, and easy to understand.
              </blockquote>
              <p>
                My current interests include JavaScript product development,
                responsive web interfaces, API-driven features, and clean software
                teamwork.
              </p>
            </article>

            <article className="panel reveal">
              <h3>Education and certifications</h3>
              <ul>
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="container">
            <article className="panel resume-card reveal">
              <div>
                <h3>Resume</h3>
                <p>
                  Download my latest CV for a full overview of my software
                  engineering background, technical skills, and project
                  experience.
                </p>
              </div>
              <div className="resume-actions">
                <a className="button" href={profile.resume} download>
                  Download CV
                </a>
                <a className="button-secondary" href="#contact">
                  Contact me
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-layout">
            <article className="contact-card reveal">
              <div className="section-heading">
                <span>Recruiter Contact</span>
                <h2>Let's build something meaningful together.</h2>
                <p>
                  Recruiters and hiring managers are welcome to get in touch to
                  discuss opportunities, collaborations, or roles where I can
                  contribute as a full-stack and mobile developer.
                </p>
              </div>

              <ul className="contact-list">
                <li>
                  <strong>Email:</strong>&nbsp;
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <strong>Phone:</strong>&nbsp;
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <strong>Location:</strong>&nbsp;<span>{profile.location}</span>
                </li>
                <li>
                  <strong>LinkedIn:</strong>&nbsp;
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    View profile
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>&nbsp;
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    See repositories
                  </a>
                </li>
                <li>
                  <strong>Vercel:</strong>&nbsp;
                  <a href={profile.vercel} target="_blank" rel="noreferrer">
                    Project deployments
                  </a>
                </li>
              </ul>
            </article>

            <form className="message-form reveal" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span className="pill">Message Form</span>
                <h3>Send a hiring inquiry</h3>
                <p>
                  Use this form if you would like to discuss an opportunity,
                  internship, freelance role, or collaboration.
                </p>
              </div>

              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Work email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                />
              </label>

              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company or organisation"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Praise, I would like to discuss..."
                  rows="6"
                  required
                />
              </label>

              {status.message ? (
                <p
                  className={`form-status ${
                    status.type === "success" ? "status-success" : "status-error"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <div className="contact-actions">
                <button className="button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
                <button
                  className="button-secondary"
                  type="button"
                  onClick={handleCopyEmail}
                >
                  Copy email address
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bar">
          <span>
            &copy; {year} {profile.name}. Open to full-stack, backend, and
            mobile software opportunities.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;

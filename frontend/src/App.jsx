import { useEffect, useState } from "react";

const profile = {
  name: "Asiimire Praise",
  role: "Software Engineer",
  tagline: "Asiimire Praise",
  experienceBadge: "2+ Years of Experience",
  blurb:
    "Motivated Software Engineer focused on building backend systems, mobile applications, and web solutions. I specialize in TypeScript and JavaScript, building scalable APIs and reliable applications for real-world products.",
  location: "Kampala, Uganda",
  email: "praiseasiimire11@gmail.com",
  phone: "+256 773 608 073",
  linkedin: "https://www.linkedin.com/in/praise-asiimire-1a0210374/",
  github: "https://github.com/Praise123-pixel",
  resume: "/assets/Asiimire_Praise_CV.pdf",
  portfolioUrl: "https://praise-portfolio-tau.vercel.app/",
  photo: "/assets/profile-praise.jpeg",
};

const introFacts = [
  { label: "Based in", value: "Kampala, Uganda" },
  { label: "Focus", value: "Frontend, backend, mobile" },
  { label: "Open to", value: "Internships, junior roles, freelance" },
];

const aboutPoints = [
  "Build backend systems and scalable APIs.",
  "Deliver web and mobile product interfaces.",
  "Work across practical business-focused software.",
];

const experience = [
  {
    year: "2025 - 2026",
    title: "Software Engineering Apprentice",
    place: "Refactory Academy",
    text: "Built real product features, APIs, interfaces, and team-based delivery work.",
  },
  {
    year: "Project Work",
    title: "Full-Stack Delivery",
    place: "Web + Mobile Products",
    text: "Worked across dashboards, business systems, and customer-facing product flows.",
  },
  {
    year: "2026",
    title: "Lead Software Engineer",
    place: "Aster Consulting Group",
    text: "Supported startup and SME delivery across frontend features, backend workflows, debugging, and documentation.",
  },
];

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.simpleicons.org/nestjs/E0234E",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "DigitalOcean",
    icon: "https://cdn.simpleicons.org/digitalocean/0080FF",
  },
];

const projects = [
  {
    title: "Beetle",
    type: "In Progress",
    summary: "Fast local delivery platform for everyday orders.",
    image: "/assets/beetle.png",
    live: "https://beetle-weld.vercel.app/",
    repo: profile.github,
    featured: true,
    stack: ["React", "JavaScript", "CSS3", "Vercel"],
  },
  {
    title: "Beyond Sports",
    type: "Product Work",
    summary: "Corporate wellness app across web and mobile flows.",
    image: "/assets/beyond-sports.png",
    live: "https://beyondsports.fitness/",
    repo: profile.github,
    stack: ["React", "React Native", "NestJS", "PostgreSQL"],
  },
  {
    title: "Mayondo Wood & Furniture",
    type: "Business System",
    summary: "Inventory, sales, and workflow management for daily operations.",
    image: "/assets/mayondo.png",
    live: "https://project-jo98.vercel.app/",
    repo: profile.github,
    stack: ["React", "Node.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Weather AI Dashboard",
    type: "Dashboard",
    summary: "Forecast views with AI-assisted weather insights.",
    image: "/assets/weather-ai.png",
    live: "https://weather-ai-dashboard-eosin.vercel.app/?lat=0.3476&lon=32.5825&days=7&units=metric&ai=true&label=Kampala&timezone=Africa%2FKampala",
    repo: profile.github,
    stack: ["Next.js", "TypeScript", "React", "Vercel"],
  },
];

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: "github",
  },
  {
    label: "CV",
    href: profile.resume,
    icon: "resume",
    download: true,
  },
];

const navItems = [
  ["home", "Open to work"],
  ["about", "About"],
  ["stack", "Stack"],
  ["projects", "Projects"],
  ["message", "Message"],
  ["contact", "Socials"],
];

const stackLookup = Object.fromEntries(techStack.map((item) => [item.name, item]));
const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
const contactEndpoint = formspreeEndpoint || "/api/messages";
const routeMap = {
  home: "/",
  about: "/about",
  stack: "/stack",
  projects: "/projects",
  message: "/message",
  contact: "/contact",
};

function getRouteFromPath(pathname) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const match = Object.entries(routeMap).find(([, path]) => path === cleanPath);
  return match ? match[0] : "home";
}

function Icon({ name }) {
  const paths = {
    arrow:
      "M5 12h14m-5-5 5 5-5 5",
    mail:
      "M3 6.75 12 13.5l9-6.75M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v9a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 16.5v-9a2.25 2.25 0 0 1 2.25-2.25Z",
    linkedin:
      "M7.5 8.25v8.25m0-11.25v.75M12 16.5v-4.5m0 0c0-1.243 1.007-2.25 2.25-2.25S16.5 10.757 16.5 12v4.5m-9-3.75h0M6.75 5.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.25 3.75h13.5A1.5 1.5 0 0 1 20.25 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z",
    github:
      "M9 19.5c-4.125 1.125-4.125-2.063-5.625-2.625m11.25 5.25v-2.902a2.524 2.524 0 0 0-.712-1.765c2.385-.266 4.887-1.17 4.887-5.325a4.13 4.13 0 0 0-1.125-2.85 3.832 3.832 0 0 0-.067-2.813s-.918-.292-3.008 1.117a10.496 10.496 0 0 0-5.4 0C7.11 6.178 6.192 6.47 6.192 6.47a3.832 3.832 0 0 0-.067 2.813A4.13 4.13 0 0 0 5 12.133c0 4.125 2.49 5.062 4.875 5.325A2.524 2.524 0 0 0 9.163 19.2V22.125",
    resume:
      "M7.5 3.75h6l3 3v11.25A2.25 2.25 0 0 1 14.25 20.25h-6.75A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75Zm6 0v3h3M8.25 11.25h6.75m-6.75 3h6.75m-6.75 3h4.5",
    menu:
      "M4.5 6.75h15m-15 5.25h15m-15 5.25h15",
    location:
      "M12 21s6-5.33 6-11.25a6 6 0 1 0-12 0C6 15.67 12 21 12 21Zm0-8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z",
    qr:
      "M4.5 4.5h5.25v5.25H4.5Zm0 9.75h5.25v5.25H4.5Zm9.75-9.75h5.25v5.25h-5.25Zm0 9.75h2.25v2.25h-2.25Zm3 0h2.25v5.25h-5.25v-2.25h3Zm-1.5-7.5h3.75v3.75h-3.75Zm-4.5 10.5h2.25V19.5h-2.25Zm0-3h2.25v2.25h-2.25Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

function TechIcon({ name }) {
  const item = stackLookup[name];

  if (!item) {
    return null;
  }

  return (
    <span className="stack-mini" title={item.name} aria-label={item.name}>
      <img src={item.icon} alt="" />
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [year, setYear] = useState("");
  const [shareUrl, setShareUrl] = useState(profile.portfolioUrl);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
    setActiveRoute(getRouteFromPath(window.location.pathname));

    const currentUrl = window.location.href;
    const isLocal = /localhost|127\.0\.0\.1/.test(window.location.hostname);
    setShareUrl(isLocal ? profile.portfolioUrl : currentUrl);

    const handlePopState = () => {
      setActiveRoute(getRouteFromPath(window.location.pathname));
      setMenuOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeRoute]);

  useEffect(() => {
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
      { threshold: 0.16 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [activeRoute]);

  useEffect(() => {
    if (!copyStatus && !status.message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyStatus("");
      setStatus({ type: "idle", message: "" });
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [copyStatus, status]);

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
        throw new Error(formspreeError || data.message || "Message not sent.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Message failed.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy failed");
    }
  };

  const navigateTo = (route) => {
    const nextPath = routeMap[route] || routeMap.home;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }
    setActiveRoute(route);
    setMenuOpen(false);
  };

  const renderCurrentSection = () => {
    switch (activeRoute) {
      case "about":
        return (
          <section className="section section-page" id="about">
            <div className="container">
              <div className="about-layout">
                <div className="about-copy reveal">
                  <div className="section-heading">
                    <span>About Me</span>
                    <h2>
                      <span className="about-accent">Driven, practical</span>
                      <br />
                      Software Engineer
                    </h2>
                  </div>
                  <p>
                    Motivated Software Engineer with hands-on experience in software
                    development, API work, web interfaces, and mobile product delivery.
                  </p>
                  <ul className="about-points">
                    {aboutPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="intro-facts">
                    {introFacts.map((item) => (
                      <div key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="experience-column reveal">
                  <div className="experience-heading">
                    <span>Experience</span>
                    <h3>Hands-on work.</h3>
                  </div>

                  <div className="experience-list">
                    {experience.map((item) => (
                      <article className="experience-item" key={item.title}>
                        <span>{item.year}</span>
                        <h3>{item.title}</h3>
                        <strong>{item.place}</strong>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "stack":
        return (
          <section className="section section-page" id="stack">
            <div className="container">
              <div className="section-heading stack-heading reveal">
                <span>Tech Stack</span>
                <h2>A showcase of my technical expertise</h2>
              </div>

              <div className="stack-strip reveal">
                {techStack.map((item) => (
                  <article className="tech-chip" key={item.name}>
                    <div className="tech-chip-icon">
                      <img src={item.icon} alt="" loading="lazy" />
                    </div>
                    <span>{item.name}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );

      case "projects":
        return (
          <section className="section section-page" id="projects">
            <div className="container">
              <div className="section-heading reveal">
                <span>Projects</span>
                <h2>Selected work with real product screens.</h2>
              </div>

              <div className="project-listing">
                {projects.map((project, index) => (
                  <article
                    className={`project-row reveal ${index % 2 === 1 ? "project-row-reverse" : ""}`}
                    key={project.title}
                  >
                    <div className="project-shot">
                      <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
                    </div>

                    <div className="project-copy">
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>

                      <div className="project-stack" aria-label={`${project.title} technologies`}>
                        {project.stack.map((item) => (
                          <TechIcon key={`${project.title}-${item}`} name={item} />
                        ))}
                      </div>

                      <div className="project-actions">
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live
                          <Icon name="arrow" />
                        </a>
                        <a href={project.repo} target="_blank" rel="noreferrer">
                          Code
                          <Icon name="github" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );

      case "message":
        return (
          <section className="section section-page" id="message">
            <div className="container message-layout">
              <div className="message-copy reveal">
                <div className="section-heading compact">
                  <span>Get In Touch</span>
                  <h2>Let&apos;s talk about your next project.</h2>
                </div>
                <p className="message-note">
                  Whether you&apos;re hiring, building, or just want to connect, I&apos;d love to hear from you.
                </p>
              </div>

              <form className="message-form reveal" onSubmit={handleSubmit}>
                <label>
                  Name
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
                  Email
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
                    placeholder="Company"
                    required
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Praise..."
                    rows="5"
                    required
                  />
                </label>

                {status.message ? (
                  <p className={`form-status ${status.type === "success" ? "status-success" : "status-error"}`}>
                    {status.message}
                  </p>
                ) : null}

                <button className="button button-primary form-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="section section-page" id="contact">
            <div className="container contact-grid">
              <article className="contact-links reveal">
                <div className="section-heading compact">
                  <span>Socials</span>
                  <h2>Quick links.</h2>
                </div>

                <div className="contact-actions-grid">
                  {contactLinks.map((item) => (
                    <a
                      className="contact-action"
                      href={item.href}
                      key={item.label}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      download={item.download}
                    >
                      <Icon name={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>

                <button className="copy-button" type="button" onClick={handleCopyEmail}>
                  Copy email
                </button>
                <p className={`copy-status ${copyStatus ? "is-visible" : ""}`}>{copyStatus}</p>
              </article>

              <aside className="qr-card reveal">
                <div className="qr-heading">
                  <span>
                    <Icon name="qr" />
                    Scan portfolio
                  </span>
                  <p>Open on phone.</p>
                </div>

                <img
                  className="qr-image"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shareUrl)}`}
                  alt="QR code linking to the portfolio"
                />

                <a className="qr-link" href={shareUrl} target="_blank" rel="noreferrer">
                  Open link
                </a>
              </aside>
            </div>
          </section>
        );

      case "home":
      default:
        return (
          <section className="hero" id="top">
            <div className="container hero-grid">
              <div className="hero-visual reveal">
                <img src={profile.photo} alt="Portrait of Asiimire Praise" />
                <div className="hero-experience-badge">{profile.experienceBadge}</div>
              </div>

              <div className="hero-copy reveal">
                <p className="hero-overline">Hello, I&apos;m</p>
                <h1>
                  <span className="hero-name-accent">Asiimire</span>{" "}
                  <span className="hero-name-main">Praise</span>
                </h1>
                <p className="hero-role-line">{profile.role}</p>
                <p className="hero-text">{profile.blurb}</p>

                <div className="hero-actions">
                  <button className="button button-primary" type="button" onClick={() => navigateTo("projects")}>
                    Projects
                    <Icon name="arrow" />
                  </button>
                  <button className="button button-ghost" type="button" onClick={() => navigateTo("message")}>
                    Message me
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav">
          <button
            className="brand brand-button"
            type="button"
            aria-label="Asiimire Praise home"
            onClick={() => navigateTo("home")}
          >
            <span className="brand-mark">AP</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name="menu" />
          </button>

          <nav aria-label="Primary">
            <ul className={`nav-links ${menuOpen ? "is-open" : ""}`} id="site-nav">
              {navItems.map(([route, label]) => (
                <li key={route}>
                  <button
                    className={activeRoute === route ? "is-active" : ""}
                    type="button"
                    onClick={() => navigateTo(route)}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  className="nav-cta"
                  href={profile.resume}
                  download
                  onClick={() => setMenuOpen(false)}
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {renderCurrentSection()}
      </main>

      <footer className="site-footer">
        <div className="container footer-bar">
          <span>
            &copy; {year} {profile.name}. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;

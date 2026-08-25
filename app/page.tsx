const services = [
  {
    number: "01",
    title: "Web Experiences",
    description:
      "Modern, responsive websites and web applications designed around real business needs.",
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Android and iOS application solutions, from concept and interface design through implementation.",
  },
  {
    number: "03",
    title: "Digital Solutions",
    description:
      "Practical technology solutions, integrations and digital workflows for organisations worldwide.",
  },
];

const projects = [
  {
    label: "Publishing",
    title: "SpaceOne Times",
    description:
      "A modern space journal focused on stories, discoveries and developments from across the space sector.",
    accent: "space",
  },
  {
    label: "Professional Presence",
    title: "Portfolio Building",
    description:
      "Digital portfolio experiences for professionals and graduates who want to present their work, skills and story clearly.",
    accent: "portfolio",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Neuron Innovations home">
          <img
            src="/neuron-innovations-horizontal.png"
            alt="Neuron Innovations"
            className="brand-logo"
          />
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#services">Solutions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Technology · Products · Digital Experiences
          </div>

          <h1>
            The Signal Behind
            <span> Smart Solutions</span>
          </h1>

          <p className="hero-text">
            Neuron Innovations builds digital products, web experiences and mobile solutions while developing independent projects with global reach.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore our work
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#contact">
              Discuss a project
            </a>
          </div>

          <div className="hero-meta" aria-label="Company highlights">
            <div>
              <strong>Worldwide</strong>
              <span>Technology solutions</span>
            </div>
            <div>
              <strong>Web + Mobile</strong>
              <span>Product capabilities</span>
            </div>
            <div>
              <strong>Independent</strong>
              <span>Products & initiatives</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-large" />
          <div className="orb orb-small" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-card">
            <div className="visual-icon"><SparkIcon /></div>
            <span>Neuron Innovations</span>
            <strong>Build what matters.</strong>
            <p>Digital products designed for practical use and meaningful reach.</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Our projects</span>
            <h2>Products with their own purpose.</h2>
          </div>
          <p>
            A focused portfolio of digital initiatives built around information, professional identity and useful technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-topline">
                <span>{project.label}</span>
                <span className="project-arrow"><ArrowIcon /></span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="services-panel">
          <div className="section-heading services-heading">
            <div>
              <span className="section-kicker">IT solutions</span>
              <h2>Technology support, wherever you are.</h2>
            </div>
            <p>
              We work with businesses and individuals worldwide on clear, practical digital solutions — from a new website to a mobile product.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell contact-section" id="contact">
        <div className="contact-card">
          <span className="section-kicker">Start a conversation</span>
          <h2>Have an idea, product or technology requirement?</h2>
          <p>
            Neuron Innovations works with clients worldwide. Tell us what you are trying to build, improve or solve.
          </p>
          <a className="button button-primary" href="#contact-details">
            Contact Neuron Innovations
            <ArrowIcon />
          </a>
          <div id="contact-details" className="contact-note">
            Add your preferred company email, contact form or social links here.
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand">
          <img
            src="/neuron-innovations-horizontal.png"
            alt="Neuron Innovations"
            className="brand-logo"
          />
        </div>
        <p>Digital products and technology solutions.</p>
        <span>© {new Date().getFullYear()} Neuron Innovations</span>
      </footer>
    </main>
  );
}

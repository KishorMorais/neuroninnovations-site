import ContactForm from "./components/ContactForm";
import SiteHeader from "./components/SiteHeader";

const expertise = [
  {
    title: "Business & Transformation",
    items: ["Business Analysis", "Requirements Elicitation", "Process Mapping", "Workflow Optimisation", "Change Management", "Project Management", "Negotiation", "Stakeholder Engagement"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Power Query", "SQL", "R", "Microsoft Office", "Data Analysis", "Data Visualisation", "Performance Monitoring"],
  },
  {
    title: "Technology",
    items: ["Java", "Kotlin", "REST APIs", "Next.js", "React", "MongoDB", "Git", "Cloud Deployment"],
  },
  {
    title: "Platforms & Operations",
    items: ["Jira", "Salesforce", "SAP", "ERP", "CRM", "Google Ads", "Meta Ads Manager", "Inventory & Service Operations"],
  },
];

const featuredExperience = [
  {
    period: "2024 — Present",
    company: "Heartinz Technologies Pvt Ltd",
    role: "Android Developer · Remote",
    summary:
      "Support Android product development, feature enhancement, testing, debugging and performance optimisation using Java and Kotlin, while contributing to UX improvement and ad monetisation planning.",
    highlights: ["Charge Meter product lifecycle and optimisation", "5M+ Google Play installs", "4.5★ rating", "NEGO Bill POS application support"],
  },
  {
    period: "2025 — Present",
    company: "Lagardère Travel Retail",
    role: "Customer Service Representative · Christchurch",
    summary:
      "Support high-volume airport retail operations, handling customer enquiries, transactions, inventory procedures and service delivery for travellers from diverse backgrounds.",
    highlights: ["200+ customers assisted daily", "Cash and electronic transactions", "Operational prioritisation during peak travel periods"],
  },
  {
    period: "2022 — 2023",
    company: "Pizza Hut",
    role: "Duty Manager · Nelson",
    summary:
      "Led shift operations, task allocation, service standards, cash reconciliation, inventory control and customer escalations in a fast-paced service environment.",
    highlights: ["Led teams of 8–12", "Daily reporting and reconciliation", "Inventory and service operations"],
  },
  {
    period: "2019 — 2020",
    company: "PACKIS",
    role: "Dispatch Coordinator · Trivandrum",
    summary:
      "Coordinated online supermarket order processing, dispatch records, inventory accuracy and fulfilment workflows between warehouse and delivery teams.",
    highlights: ["Maintained operations during COVID-19 lockdown", "Resolved fulfilment bottlenecks", "Excel and custom order-management workflows"],
  },
];

const additionalExperience = [
  ["2025", "OneStaff", "Metal Fabricator · Rolleston"],
  ["2024", "MacLab NZ", "Machine Operator · Nelson"],
  ["2020 — 2022", "Heartinz Technologies Pvt Ltd", "Android Developer · Coimbatore"],
  ["2017 — 2019", "Fiverr & Upwork", "Freelancer · Remote"],
];

const projects = [
  {
    number: "01",
    title: "SpaceOne Times",
    type: "Digital publishing platform",
    year: "2026",
    statement:
      "Ideated, built and launched a responsive space-journal platform with a public news experience and secure administration workflow for creating, reviewing, scheduling and managing articles.",
    outcome: "From product concept to production deployment",
    tools: ["Next.js", "React", "MongoDB", "Mongoose", "GitHub", "Vercel"],
    visual: "journal",
  },
  {
    number: "02",
    title: "Charge Meter",
    type: "Android product",
    year: "2024 — Present",
    statement:
      "Contributed across concept, feature development, UX improvements, performance and ad monetisation for a global Android battery-monitoring application.",
    outcome: "5M+ installs · 4.5★ rating",
    tools: ["Android Studio", "Java", "Android Services", "Product UX"],
    visual: "mobile",
  },
  {
    number: "03",
    title: "Exchange Rate Forecasting",
    type: "Business analytics study",
    year: "2023",
    statement:
      "Compared forecasting techniques for NZD exchange rates against major trading-partner currencies to evaluate predictive accuracy and implications for financial planning and risk management.",
    outcome: "Regression · Moving Average · Holt’s · Naive",
    tools: ["Power BI", "Power Query", "Excel", "Forecasting"],
    visual: "chart",
  },
  {
    number: "04",
    title: "NEGO Bill",
    type: "Cloud POS & billing application",
    year: "2024 — Present",
    statement:
      "Supported an Android POS product for retail businesses, contributing to billing, transaction handling, reporting and mobile feature development through API-connected workflows.",
    outcome: "Retail operations translated into mobile workflows",
    tools: ["Android Studio", "Java", "Kotlin", "REST APIs"],
    visual: "pos",
  },
  {
    number: "05",
    title: "Digital Menu",
    type: "Restaurant ordering system",
    year: "Professional project",
    statement:
      "Worked on the Android applications used for restaurant order taking and kitchen order viewing, supporting the workflow from order capture to kitchen preparation.",
    outcome: "Order taking · Kitchen order viewing · Order printing",
    tools: ["Android Studio", "Java", "Order Workflows", "Printing Integration"],
    visual: "menu",
  },
  {
    number: "06",
    title: "Studio",
    type: "Digital photo album platform",
    year: "Professional project",
    statement:
      "Worked on the Android application for photographers and studio owners, enabling them to manage digital photo albums and organise album content for sharing with customers.",
    outcome: "Album management for photographers and studio owners",
    tools: ["Android Studio", "Java", "Album Management", "Mobile UX"],
    visual: "studio",
  },
  {
    number: "07",
    title: "NetStore",
    type: "E-commerce store builder",
    year: "Professional project",
    statement:
      "Worked on the Android application for an e-commerce platform similar to Shopify, enabling shop owners to create, configure and manage their online stores from mobile devices.",
    outcome: "Store creation · Store management · Mobile commerce workflows",
    tools: ["Android Studio", "Java", "E-commerce", "Store Management"],
    visual: "store",
  },
  {
    number: "08",
    title: "NEGO Card",
    type: "Digital visiting card application",
    year: "Professional project",
    statement:
      "Worked on an Android application that allows users to create and manage digital visiting cards for professional sharing and contact presentation.",
    outcome: "Create · Manage · Share digital visiting cards",
    tools: ["Android Studio", "Java", "Profile Management", "Mobile UX"],
    visual: "card",
  },
];

const education = [
  ["2023", "Master of Applied Management", "Business Analytics · Nelson Marlborough Institute of Technology"],
  ["2019", "Bachelor of Technology", "Mechanical Engineering · PRIST University"],
];

const certifications = [
  ["2026", "BCS Foundation Certificate in Business Analysis"],
  ["2026", "Change Management Foundation · APMG International"],
  ["2026", "AgilePM Foundation · APMG International"],
  ["2026", "Using Generative AI in Project Management: Risk Management"],
  ["2026", "Introduction to Generative AI for Project Managers"],
  ["2026", "Ethics in an AI World"],
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <div className="heading-grid">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "journal") {
    return (
      <div className="project-visual journal-visual" aria-hidden="true">
        <div className="browser-top"><span /><span /><span /></div>
        <div className="journal-brand">SPACEONE <b>TIMES</b></div>
        <div className="journal-lines"><i /><i /><i /></div>
        <div className="journal-grid"><span /><span /><span /></div>
      </div>
    );
  }
  if (kind === "mobile") {
    return (
      <div className="project-visual mobile-visual" aria-hidden="true">
        <div className="phone-shell">
          <div className="phone-speaker" />
          <p>CHARGE</p><strong>84%</strong><div className="battery"><span /></div><small>Battery monitor</small>
        </div>
        <div className="metric-card"><span>5M+</span><small>installs</small></div>
      </div>
    );
  }
  if (kind === "chart") {
    return (
      <div className="project-visual chart-visual" aria-hidden="true">
        <div className="chart-label"><span>NZD</span><span>FORECAST</span></div>
        <svg viewBox="0 0 520 260" role="presentation">
          <path d="M15 220H500M15 170H500M15 120H500M15 70H500" className="grid-line" />
          <polyline points="22,202 92,166 150,180 212,110 270,142 328,82 384,106 444,52 493,69" className="chart-line" />
          <polyline points="22,211 92,190 150,160 212,149 270,125 328,113 384,92 444,86 493,62" className="chart-line-secondary" />
        </svg>
      </div>
    );
  }
  if (kind === "menu") {
  return (
    <div className="project-visual menu-visual" aria-hidden="true">
      <div className="menu-order-panel">
        <div className="menu-order-head">
          <span>TABLE 08</span>
          <strong>ORDER #124</strong>
        </div>

        <div className="menu-order-item">
          <span>2×</span>
          <b>Margherita Pizza</b>
          <em>$34</em>
        </div>

        <div className="menu-order-item">
          <span>1×</span>
          <b>Pasta Alfredo</b>
          <em>$21</em>
        </div>

        <div className="menu-order-item">
          <span>2×</span>
          <b>Lime Soda</b>
          <em>$12</em>
        </div>

        <div className="menu-order-total">
          <span>Total</span>
          <strong>$67</strong>
        </div>
      </div>

      <div className="kitchen-ticket">
        <small>KITCHEN</small>
        <strong>#124</strong>
        <span>2 Pizza</span>
        <span>1 Pasta</span>
        <em>PRINTED</em>
      </div>
    </div>
  );
}

if (kind === "studio") {
  return (
    <div className="project-visual studio-visual" aria-hidden="true">
      <div className="studio-window">
        <div className="studio-topbar">
          <span>STUDIO</span>
          <small>Albums</small>
        </div>

        <div className="studio-album-main">
          <div />
          <span>Wedding Collection</span>
          <small>184 photos</small>
        </div>

        <div className="studio-thumbnails">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="studio-floating-card">
        <span>SHARED</span>
        <strong>Client Album</strong>
        <small>Ready to view</small>
      </div>
    </div>
  );
}

if (kind === "store") {
  return (
    <div className="project-visual store-visual" aria-hidden="true">
      <div className="store-sidebar">
        <b>N</b>
        <span />
        <span />
        <span />
      </div>

      <div className="store-dashboard">
        <div className="store-head">
          <strong>My Store</strong>
          <span>LIVE</span>
        </div>

        <div className="store-stats">
          <div>
            <small>Orders</small>
            <b>128</b>
          </div>

          <div>
            <small>Products</small>
            <b>42</b>
          </div>
        </div>

        <div className="store-products">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="store-preview">
        <small>STORE PREVIEW</small>
        <strong>New arrivals</strong>
        <span>View shop →</span>
      </div>
    </div>
  );
}

if (kind === "card") {
  return (
    <div className="project-visual card-visual" aria-hidden="true">
      <div className="digital-card">
        <div className="digital-card-mark">KE</div>

        <div>
          <strong>Kishor Eugin</strong>
          <span>Digital Visiting Card</span>
        </div>

        <small>nego.card/profile</small>
      </div>

      <div className="card-actions">
        <span>SHARE</span>
        <span>CONTACT</span>
        <span>QR</span>
      </div>

      <div className="card-qr">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
  return (
    <div className="project-visual pos-visual" aria-hidden="true">
      <div className="receipt">
        <b>NEGO BILL</b><span /><span /><span /><span /><em>TOTAL</em><strong>$248.40</strong>
      </div>
      <div className="pos-panel"><p>Sales</p><strong>24.8K</strong><div><i /><i /><i /><i /></div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="kishor-portfolio">
      <SiteHeader />

      <section id="home" className="hero section-shell">
        <div className="hero-art reveal">
          <div className="portrait-frame">
            <div className="portrait-grid" />
            <img
              className="portrait-photo"
              src="/portfolio/kishoreugin/kishor-profile.jpeg"
              alt="Kishor Eugin"
            />
            <div className="portrait-caption">
              <span>Christchurch</span>
              <span>New Zealand</span>
            </div>
          </div>
        </div>
        <div className="hero-copy reveal">
          <p className="eyebrow">Business · Technology · Analytics</p>
          <h1>Kishor<br /><span>Eugin.</span></h1>
          <p className="hero-role">Business Analysis, Data & Digital Transformation</p>
          <p className="hero-intro">
            Technology-driven professional combining application development, business analytics and operational leadership to improve products, processes and decision-making.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/portfolio/kishoreugin/Kishor-Eugin-CV.pdf" download>Download CV <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta">
            <a href="mailto:kishoreugin@gmail.com">kishoreugin@gmail.com</a>
            <span>Open to Business Analysis, Change, Risk, Data & Digital Transformation roles</span>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span>Scroll</span><i /></a>
      </section>

      <section id="about" className="section-shell content-section">
        <SectionHeading
          eyebrow="01 · About"
          title="Connecting technology with structured business outcomes."
          intro="My background spans software development, analytics, digital product support, customer operations and team leadership. That combination helps me understand both how systems work and how people use them."
        />

        <div className="profile-grid">
          <article className="profile-copy reveal">
            <p className="lead">
              I hold a Master of Applied Management in Business Analytics and professional certifications across Business Analysis, Change Management, Agile Project Management and Generative AI in Project Management.
            </p>
            <p>
              My career direction is focused on Business Analysis, Change, Risk, Data Analysis and Digital Transformation — roles where technology, process clarity, evidence and stakeholder needs need to work together.
            </p>
            <div className="profile-facts">
              <div><span>Location</span><strong>Christchurch, New Zealand</strong></div>
              <div><span>Languages</span><strong>English · Tamil · Malayalam</strong></div>
              <div><span>Membership</span><strong>British Computer Society</strong></div>
            </div>
          </article>

          <div className="stats-grid reveal">
            <div className="stat"><strong>5M+</strong><span>Global app installs</span></div>
            <div className="stat"><strong>4.5★</strong><span>Google Play rating</span></div>
            <div className="stat"><strong>200+</strong><span>Customers assisted daily</span></div>
            <div className="stat"><strong>8–12</strong><span>Team members led</span></div>
          </div>
        </div>

        <div className="expertise-block">
          <div className="subheading reveal"><p className="eyebrow">Capabilities</p><h3>Focused expertise, not arbitrary percentages.</h3></div>
          <div className="expertise-grid">
            {expertise.map((group, index) => (
              <article className="expertise-card reveal" key={group.title}>
                <span>0{index + 1}</span>
                <h4>{group.title}</h4>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell content-section section-tint">
        <SectionHeading
          eyebrow="02 · Experience"
          title="Technical depth with operational context."
          intro="Selected experience is prioritised around technology, product, workflow, service operations and leadership. Earlier roles remain visible without overpowering the career narrative."
        />

        <div className="timeline">
          {featuredExperience.map((item) => (
            <article className="timeline-item reveal" key={`${item.company}-${item.period}`}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-main">
                <p className="timeline-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <div className="tag-row">{item.highlights.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="additional-experience reveal">
          <p className="eyebrow">Additional experience</p>
          {additionalExperience.map(([period, company, role]) => (
            <div className="compact-role" key={`${company}-${period}`}>
              <span>{period}</span><strong>{company}</strong><p>{role}</p>
            </div>
          ))}
        </div>

        <div className="credentials-grid">
          <div className="credential-column reveal">
            <p className="eyebrow">Education</p>
            {education.map(([year, title, detail]) => (
              <article className="credential" key={title}><span>{year}</span><div><h3>{title}</h3><p>{detail}</p></div></article>
            ))}
          </div>
          <div className="credential-column reveal">
            <p className="eyebrow">Professional certifications</p>
            {certifications.map(([year, title]) => (
              <article className="credential cert" key={title}><span>{year}</span><div><h3>{title}</h3></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell content-section">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Work that shows how I think and build."
          intro="These projects span digital publishing, Android products, restaurant technology, photography workflows, e-commerce, forecasting and retail systems — demonstrating how I work across both technical implementation and real business processes."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <ProjectVisual kind={project.visual} />
              <div className="project-body">
                <div className="project-topline"><span>{project.number}</span><span>{project.year}</span></div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.statement}</p>
                <p className="project-outcome">{project.outcome}</p>
                <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell content-section contact-section">
        <SectionHeading
          eyebrow="04 · Contact"
          title="Interested in business, data and digital transformation opportunities."
          intro="For roles, projects or professional conversations, email is the most direct way to reach me."
        />
        <div className="contact-grid">
          <div className="contact-details reveal">
            <div><span>Email</span><a href="mailto:kishoreugin@gmail.com">kishoreugin@gmail.com</a></div>
            <div><span>Location</span><strong>Christchurch, New Zealand</strong></div>
            <div><span>CV</span><a href="/portfolio/kishoreugin/Kishor-Eugin-CV.pdf" download>Download latest CV ↗</a></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand" href="#home"><span className="brand-mark">KE</span><span>Kishor Eugin</span></a>
        <p>Business Analysis · Data · Digital Transformation</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

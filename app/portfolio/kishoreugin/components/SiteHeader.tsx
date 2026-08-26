"use client";

import { useEffect, useState } from "react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["contact", "Contact"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="mobile-header">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label="Kishor Eugin home">
          <span className="brand-mark">KE</span>
          <span>Kishor Eugin</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <aside className="desktop-nav" aria-label="Primary navigation">
        {links.map(([id, label], index) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-label={label}>
            <span className="nav-index">0{index + 1}</span>
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </aside>

      <div className={`mobile-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

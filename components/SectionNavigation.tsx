interface SectionNavigationProps {
  activeSection: string;
}

export default function SectionNavigation({ activeSection }: SectionNavigationProps) {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="section-nav">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          role="button"
          tabIndex={0}
        >
          <div className="nav-dot"></div>
          <span className="nav-text">{section.label}</span>
        </div>
      ))}
    </nav>
  );
}

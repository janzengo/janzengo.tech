const experiences = [
  {
    title: 'Yearbook Graphic Designer',
    company: 'Immaculate Conception Archdiocesan School de Calarian (ICAS de Calarian)',
    period: '2017 - Present',
    description: [
      'Designed and produced school yearbooks using Adobe InDesign and Photoshop',
      'Transitioned to Canva for yearbook creation, adapting to modern design tools',
      'Delivered visually appealing and well-organized yearbooks for a diverse student body',
    ],
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
  },
  {
    title: 'Frontend Developer',
    company: 'AGGTEDeck WPC Cladding & Decking',
    period: '2020 - Present',
    description: [
      'Developed and launched a construction landing page website for a company selling and installing WPC products',
      'Responsible for ongoing maintenance and updates to ensure optimal website performance',
      'Supported the company\'s online presence by keeping the site current and fully functional',
    ],
    skills: ['PHP', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'Freelance Capstone System Developer',
    company: 'NekoTech',
    period: '2024 - Present',
    description: [
      'Collaborated with graduating students to design, develop, and deploy custom full-stack web and mobile applications for academic capstone projects',
      'Translated complex research requirements into functional technical specifications and user-friendly interfaces',
      'Provided end-to-end technical support, including database schema design, API integration, and troubleshooting during final defense demonstrations',
    ],
    skills: ['Full-stack Development', 'API Integration', 'Database Design', 'React', 'Node.js'],
  },
];

export default function Experience() {
  return (
    <div className="mb-24" id="experience">
      <h2 data-aos="fade-in" className="text-xl font-semibold text-[#F4F5E3] mb-8 tracking-tight">
        &lt; experience /&gt;
      </h2>
      <div className="space-y-12 relative">
        <div className="experience-line absolute left-0 top-0 h-full"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            data-aos="fade-in"
            data-aos-delay={idx * 80}
            className="experience-item relative pl-8"
          >
            <div className="experience-dot"></div>
            <h3 className="text-lg font-semibold text-[#F4F5E3] mb-2">{exp.title}</h3>
            <h4 className="text-md font-regular text-[#F4F5E3] mb-2">{exp.company}</h4>
            <p className="text-[#8EA832] text-xs mb-4">{exp.period}</p>
            <ul className="space-y-2 text-[#D4D6A8]">
              {exp.description.map((item, i) => (
                <li key={i} className="flex text-sm items-start">
                  <span className="text-[#8EA832] mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-[#8EA832] text-xs bg-[#1B2B1B]/50 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFFFF0] text-xs hover:text-[#8EA832] hover:underline transition-all"
      >
        View Full Resume <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
}

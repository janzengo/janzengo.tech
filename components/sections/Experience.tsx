const experiences = [
  {
    title: 'Freelance Yearbook Designer',
    company: 'Immaculate Conception Archdiocesan School de Calarian (ICAS de Calarian)',
    period: '2017 - 2025',
    description: [
      'Designed and produced school yearbooks using InDesign and Photoshop (2017-2019)',
      'Transitioned to Canva for yearbook creation, adapting to modern design tools (2020-2025)',
      'Delivered visually appealing and well-organized yearbooks for a diverse student body',
    ],
    skills: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Graphic Design'],
  },
  {
    title: 'Freelance Web Developer & Web Master',
    company: 'AGGTEDeck Enterprises Incorporated',
    period: '2022 - 2025',
    description: [
      'Developed and enhanced the company website',
      'Implemented new features and functionality to improve user experience',
      'Managed all technical aspects of web presence and digital operations',
    ],
    skills: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Full-stack Development'],
  }
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
        href="/JanneilJanzenGo-Resume2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFFFF0] text-xs hover:text-[#8EA832] hover:underline transition-all"
      >
        View Full Resume <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const projects = [
  {
    title: 'Balagtas SocialCare',
    description: 'An enterprise-grade system made for the MSWDO of Balagtas Bulacan to digitally transform their paper-based services-related transactions and data management.',
    skills: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Python'],
    thumb: '/images/project-images/balagtas-social-care.png',
    links: [
      {
        url: '',
        icon: 'fas fa-external-link-alt',
      },
    ],
  },
  {
    title: 'NekoTech',
    description: 'A business-project led by two IT student leaders to help capstone students and leaders to build their first working software solution.',
    skills: ['Next.js', 'Tailwind CSS', 'Supabase'],
    thumb: '/images/project-images/nekotech.png',
    links: [{ url: 'https://neko.tech', icon: 'fas fa-external-link-alt' }],
  },
  {
    title: 'E-Halal BTECHenyo',
    description:
      'A full-featured e-voting platform with pre-voting, voting, and post-voting modules tailored for campus elections.',
    skills: ['PHP', 'AdminLTE', 'Bootstrap', 'MySQL'],
    stat: 'Live',
    statIcon: 'fas fa-external-link-alt',
    thumb: '/images/project-images/e-halal.png',
    links: [{ url: 'https://ehalal.tech', icon: 'fas fa-external-link-alt' }],
  },
  {
    title: 'Yamaha Motors TMS',
    description:
      'An inventory management system built with Next.js 16, TypeScript, and Supabase. It includes barcode scanning, case tracking, multi-stage workflows, and role-based access for warehouse operations.',
    skills: ['Next.js', 'Tailwind CSS', 'Supabase'],
    thumb: '/images/project-images/yamaha-tms.png',
    links: [
      {
        url: 'https://yamaha-tms.tech',
        icon: 'fas fa-external-link-alt',
      },
    ],
  },
  {
    title: 'GreenTech',
    description: 'A full-featured exam management system built for digitalization and efficiency of Pinagbarilan High School students.',
    skills: ['Next.js', 'Tailwind CSS', 'Firebase', 'Firestore'],
    thumb: '/images/project-images/greentech.png',
    links: [
      { url: 'https://github.com/ws-jammify/ws-jammify.github.io', icon: 'fab fa-github' },
      { url: 'https://jammify.me', icon: 'fas fa-external-link-alt' },
    ],
  },
  {
    title: 'Triple A Game',
    description: 'Rooster Management System that was built for efficiency and eliminate paper-based transactions.',
    skills: ['Next.js', 'Tailwind CSS', 'Firebase', 'Supabase'],
    thumb: '/images/project-images/triple-a.png',
    links: [{ url: 'https://sciencequizzards.space', icon: 'fas fa-external-link-alt' }],
  },
  {
    title: 'ICAS De Calarian Website',
    description: 'A modern institutional website designed to streamline information dissemination and the admission process for ICAS De Calarian. It serves as a central hub for academic news, school updates, and student engagement.',
    skills: ['WordPress', 'Elementor'],
    thumb: '/images/project-images/icas-dc.png',
    links: [{ url: 'https://sciencequizzards.space', icon: 'fas fa-external-link-alt' }],
  },
];

export default function Projects() {
  return (
    <div className="mb-24" id="projects">
      <h2 className="text-xl font-semibold text-[#F4F5E3] mb-8 tracking-tight">
        &lt; projects /&gt;
      </h2>
      <div className="space-y-2">
        {projects.map((project, idx) => {
          const primaryLink = project.links?.[0]?.url;

          return (
            <Card
              data-aos="fade-in"
              key={idx}
              className={cn(
                'skill-tag group flex flex-col md:flex-row gap-6 overflow-hidden rounded-sm border-none bg-transparent transition-all duration-200 p-4 md:p-6 cursor-pointer'
              )}
            >
              <div
                className="shrink-0 w-full md:w-52 lg:w-[230px] aspect-[16/10] rounded-md overflow-hidden bg-[#1B2B1B] transition-all duration-200 border border-transparent group-hover:border-[#8EA832]/50"
              >
                <Image
                  src={project.thumb}
                  alt={`${project.title} thumbnail`}
                  width={230}
                  height={160}
                  sizes="(max-width: 768px) 100vw, 230px"
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2.5 md:py-1 md:ml-6">
                <CardHeader className="p-0 gap-2">
                  <CardTitle
                    className="text-base md:text-md font-semibold text-[#F4F5E3] tracking-tight flex items-start gap-2"
                  >
                    {primaryLink ? (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-[#8EA832] transition-colors"
                      >
                        <span>{project.title}</span>
                        <span className="inline-block align-middle text-[#8EA832] text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        {project.title}
                        <span className="inline-block align-middle text-[#8EA832] text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 text-[#D4D6A8] space-y-3">
                  <CardDescription
                    className="text-[#D4D6A8] leading-relaxed text-xs md:text-sm"
                  >
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {project.skills.map((skill, skillIdx) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-[#233423]/80 text-[#D4D6A8] font-mono text-[10px] md:text-xs tracking-wide border border-[#374D37]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

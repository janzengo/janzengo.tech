const skills = [
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  {
    name: 'Next.js',
    iconType: 'svg',
    path: 'M512 0c-282.4 0-512 229.6-512 512s229.6 512 512 512c89.6 0 173.6-23.2 246.4-63.2l-371.2-518.4v292.8h-54.4v-400.8h54.4l404 606.4c140-91.2 232.8-248.8 232.8-428.8 0-282.4-229.6-512-512-512zM688.8 676.8l-60-90.4v-252h60v342.4z',
  },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'WordPress', icon: 'fab fa-wordpress' },
  { name: 'Elementor', 
    iconType: 'svg',
    path: 'M512-0c-282.798 0-512 229.202-512 512 0 282.703 229.202 512 512 512s512-229.202 512-512c-0.092-282.798-229.297-512-512-512zM384.023 725.263h-85.286v-426.619h85.286v426.619zM725.263 725.263h-255.954v-85.286h255.954v85.286zM725.263 554.596h-255.954v-85.286h255.954v85.286zM725.263 383.931h-255.954v-85.286h255.954v85.286z'
  }
];

export default function Skills() {
  return (
    <div className="mb-24" id="skills">
      <h2 data-aos="fade-in" className="text-xl font-semibold text-[#F4F5E3] mb-8 tracking-tight">
        &lt; skills /&gt;
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            data-aos="fade-in"
            data-aos-delay={idx * 50}
            className="skill-tag p-4 bg-[#2A3C2A] rounded-lg text-center text-[#D4D6A8] hover:text-[#8EA832]"
          >
            {skill.iconType === 'svg' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="w-8 h-8 mx-auto mb-3 fill-current"
              >
                <path d={skill.path} />
              </svg>
            ) : (
              <i className={`${skill.icon} text-3xl mb-3`}></i>
            )}
            <h3 className="text-sm">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

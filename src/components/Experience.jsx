import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';

const experiences = [
  {
    title: 'Mentor',
    company: 'GDG on Campus',
    subtitle: 'Abant Izzet Baysal University',
    date: 'Sep 2026 – Present',
    desc: 'Mentor community members and the technical team on software development projects across different technologies.'
  },
  {
    title: 'Software & Technical Team Lead',
    company: 'GDG on Campus',
    subtitle: 'Abant Izzet Baysal University',
    date: 'Sep 2025 – Sep 2026',
    desc: 'Led a technical team of 5+ members and coordinated project development lifecycles. Co-organized 48 workshops, study groups and coding events reaching 1,500+ participants, and taught a Python 101 workshop as instructor.'
  },
  {
    title: 'Web Design Intern',
    company: 'Serbay Interactive',
    subtitle: '',
    date: 'Jan 2026 – Feb 2026',
    desc: 'Developed CMS-based websites on Kod8 CMS with responsive, brand-consistent design; edited vector graphics with Inkscape and created QR menus for restaurant clients. Wrote Python scripts to extract web data into CSV and validate SQL database records.'
  },
  {
    title: 'Software Development Intern',
    company: 'Armada Yazılım / Bilişim Vadisi',
    subtitle: '',
    date: 'Aug 2025 – Sep 2025',
    desc: 'Labeled about 1,000 3D intraoral scans for AI model training, color-coding each tooth by defined criteria in a Python-based viewer (VTK, Vedo), and processed 3D mesh data into training-ready datasets.'
  },
  {
    title: 'Site Accountant (Volunteer)',
    company: 'Residential Site Management',
    subtitle: '',
    date: 'Jun 2022 – Present',
    desc: 'Manage the finances of a 60-resident complex: monthly financial reports and analysis in Excel, payment records and bank reconciliation.'
  }
];

const education = [
  {
    level: "Bachelor's Degree",
    field: 'Mathematics (English)',
    school: 'Abant Izzet Baysal University',
    desc: 'Mathematical modeling, statistics, probability and linear algebra.'
  },
  {
    level: 'Associate Degree',
    field: 'Computer Programming',
    school: 'Anadolu University',
    desc: 'SQL and Python, database design, query optimization and data-driven application development.'
  }
];

const certifications = [
  { name: 'Web Build Program (Full-Stack)', org: 'YOBODOBO', date: '2026' },
  { name: 'GitHub Workshop', org: 'Management Information Society', date: '2026' },
  { name: 'SQL / PostgreSQL Bootcamp', org: 'TurkStudentCo', date: '2025' },
  { name: 'SQL Excellence Bootcamp', org: 'Techcareer.net', date: '2024' },
  { name: 'Python & AI Fundamentals', org: 'Global AI Hub', date: '2024' }
];

const languages = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'French', level: 'A2' }
];

const SubHeading = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-[var(--color-text-light)]">
    <Icon className="w-4 h-4 text-[var(--color-accent)]" />
    {children}
  </div>
);

const TimelineItem = ({ exp, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start w-full mb-12 md:mb-0">
      {/* Mobile layout: all items left-aligned with left border */}
      <div className="md:hidden w-full pl-8 border-l-2 border-[var(--color-accent)]/30 ml-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Dot on the line */}
          <div className="absolute -left-[2.35rem] top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] border-2 border-[var(--color-dark-bg)]" />
          
          <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-2 tracking-widest uppercase">
            {exp.date}
          </span>
          <div className={`border rounded-2xl p-5 transition-colors duration-300 group relative overflow-hidden ${
            isLeft 
              ? 'bg-[var(--color-card-bg)] border-[var(--color-border-color)] hover:border-[var(--color-accent)]' 
              : 'bg-[var(--color-accent)] border-transparent'
          }`}>
            {isLeft && <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />}
            <h3 className={`text-base mb-0.5 ${isLeft ? 'font-semibold text-white' : 'font-bold text-black'}`}>{exp.title}</h3>
            <div className={`text-sm ${isLeft ? 'text-[var(--color-accent)] font-medium' : 'text-black/60 font-semibold'}`}>{exp.company}</div>
            {exp.subtitle && <div className={`text-xs mt-0.5 ${isLeft ? 'text-[var(--color-text-light)]' : 'text-black/50 font-medium'}`}>{exp.subtitle}</div>}
            <p className={`text-xs leading-relaxed mt-3 ${isLeft ? 'text-[var(--color-text-light)]' : 'text-black/80'}`}>{exp.desc}</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop layout: alternating left/right */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] w-full items-start gap-0">
        {/* Left side */}
        <div className={`pr-10 ${isLeft ? 'flex justify-end' : ''}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full max-w-sm text-right"
            >
              <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-3 tracking-widest uppercase">
                {exp.date}
              </span>
              <div className="group relative bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-2xl p-6 hover:border-[var(--color-accent)] transition-colors duration-300 text-left overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-base font-semibold text-white mb-0.5">{exp.title}</h3>
                <div className="text-[var(--color-accent)] text-sm font-medium">{exp.company}</div>
                {exp.subtitle && <div className="text-[var(--color-text-light)] text-xs mt-0.5">{exp.subtitle}</div>}
                <p className="text-[var(--color-text-light)] text-xs leading-relaxed mt-3">{exp.desc}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            className="w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_14px_var(--color-accent)] border-2 border-[var(--color-dark-bg)] mt-7 z-10 relative"
          />
        </div>

        {/* Right side */}
        <div className={`pl-10 ${!isLeft ? 'flex justify-start' : ''}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full max-w-sm"
            >
              <span className="inline-block text-xs font-mono text-[var(--color-accent)] mb-3 tracking-widest uppercase">
                {exp.date}
              </span>
              <div className="group relative bg-[var(--color-accent)] border border-transparent rounded-2xl p-6 transition-colors duration-300 text-left overflow-hidden">
                <h3 className="text-base font-bold text-black mb-0.5">{exp.title}</h3>
                <div className="text-black/60 text-sm font-semibold">{exp.company}</div>
                {exp.subtitle && <div className="text-black/50 text-xs mt-0.5 font-medium">{exp.subtitle}</div>}
                <p className="text-black/80 text-xs leading-relaxed mt-3">{exp.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="Experience" className="py-20 px-5 text-center bg-gradient-to-br from-[var(--color-dark-bg)] to-[#0a0e1a] relative scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl uppercase font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Experience & Education
          </h2>
        </motion.div>

        {/* Experience container */}
        <h3 className="text-xl uppercase font-semibold text-[var(--color-accent)] tracking-widest mb-10">Experience</h3>
        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/20"
            />
          </div>

          {/* Items */}
          <div className="relative flex flex-col gap-0 md:gap-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Education & certifications container */}
        <h3 className="text-xl uppercase font-semibold text-[var(--color-accent)] tracking-widest mt-24 md:mt-28 mb-10">Education & Certifications</h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-left"
        >
          {/* Education */}
          <div className="flex flex-col">
            <SubHeading icon={GraduationCap}>Education</SubHeading>
            <div className="flex flex-col gap-4 flex-1">
              {education.map((edu) => (
                <div
                  key={edu.field}
                  className="group relative flex-1 bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-2xl p-6 hover:border-[var(--color-accent)] transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="block text-xs font-mono text-[var(--color-accent)] mb-2 tracking-widest uppercase">{edu.level}</span>
                  <h4 className="text-base font-semibold text-white">{edu.field}</h4>
                  <div className="text-[var(--color-text-light)] text-sm">{edu.school}</div>
                  <p className="text-[var(--color-text-light)] text-xs leading-relaxed mt-3">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & languages */}
          <div className="flex flex-col">
            <SubHeading icon={Award}>Certifications</SubHeading>
            <ul className="bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-2xl px-6 py-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline gap-4 py-3 border-b border-white/5 last:border-b-0">
                  <span className="text-xs font-mono text-[var(--color-accent)] w-10 shrink-0">{c.date}</span>
                  <span className="text-sm">
                    <span className="text-white font-medium">{c.name}</span>
                    <span className="block text-xs text-[var(--color-text-light)]">{c.org}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <SubHeading icon={Languages}>Languages</SubHeading>
              <div className="bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-2xl px-6 py-4 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="text-sm text-white bg-[var(--color-dark-bg)] border border-[var(--color-border-color)] rounded-full px-4 py-1.5"
                  >
                    {lang.name} <span className="text-[var(--color-accent)] font-medium">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(188,124,14,0.5)] to-transparent" />
    </section>
  );
};

export default Experience;

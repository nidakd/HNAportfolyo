import { motion } from 'framer-motion';
import { SiPython, SiPandas, SiNumpy, SiPostgresql, SiReact, SiTypescript, SiDocker, SiGit, SiDotnet } from 'react-icons/si';
import { BiCube } from 'react-icons/bi';

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'pandas', icon: SiPandas },
  { name: 'NumPy', icon: SiNumpy },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: '.NET', icon: SiDotnet },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'VTK & Vedo', icon: BiCube },
];

const SkillMarquee = () => {
  // Duplicate array to create seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-darker-bg)] py-8 border-y border-[var(--color-border-color)] opacity-70">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center px-12 text-[#666666] hover:text-[var(--color-accent)] transition-colors cursor-pointer shrink-0"
            title={skill.name}
          >
            <skill.icon className="w-14 h-14" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillMarquee;

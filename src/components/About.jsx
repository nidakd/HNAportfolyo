import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HighlightText = ({ children, delay }) => (
  <span className="relative inline-block px-2 py-0.5 mx-1 z-10 whitespace-nowrap">
    <motion.span
      className="absolute inset-0 bg-[var(--color-accent)] rounded-md z-[-1]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "circOut" }}
      style={{ originX: 0 }}
    />
    <motion.span
      initial={{ color: "#ffffff" }}
      whileInView={{ color: "#000000" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.20 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  </span>
);

const About = () => {
  return (
    <section id="About" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 scroll-mt-2">
      {/* Heading on the left */}
      <div className="w-full md:w-3/4 lg:w-full text-left">
        <h2 className="text-lg md:text-3xl uppercase lg:text-6xl font-medium leading-relaxed text-white flex flex-col items-start gap-2 md:gap-3">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Combining <HighlightText delay={0.5}>mathematical thinking</HighlightText>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            with <HighlightText delay={0.9}>software skills</HighlightText>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            to solve problems <HighlightText delay={1.3}>analytically</HighlightText>.
          </motion.span>
        </h2>
      </div>

      {/* Body on the right */}
      <div className="w-full flex justify-end">
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-8 text-left">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
            >
              I am a Software Developer with a B.Sc. in Mathematics (English) from Abant Izzet Baysal University and an
              associate degree in Computer Programming from Anadolu University. I build data-driven applications with
              Python, SQL and FastAPI, combining mathematical thinking with software skills to solve problems analytically.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
            >
              My work ranges from an event-driven, machine-learning-assisted decision engine I designed end to end, to an
              AI legal research assistant built at a 24-hour hackathon and full-stack web applications. At Armada Yazılım
              (Bilişim Vadisi) I labeled and processed about 1,000 3D intraoral scans for AI model training with VTK and
              Vedo, and at Serbay I developed CMS-based websites and wrote Python scripts for data extraction and
              validation. As a volunteer site accountant since 2022, I prepare monthly financial reports for a 60-resident
              complex, which keeps my focus on data accuracy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed"
            >
              As Software & Technical Team Lead at GDG on Campus, I led a team of 5+ and co-organized 48 events reaching
              over 1,500 participants; today I continue as a mentor in the same community. I also mentored in mathematics
              at the NASA International Space Apps Challenge 2025.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#Contact" className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors text-black rounded-full py-2.5 px-6 font-medium text-sm w-fit shadow-[0_0_20px_rgba(223,255,0,0.3)] mt-4">
              <span className="bg-black text-[var(--color-accent)] rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </span>
              Let's connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

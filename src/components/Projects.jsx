import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NDA Trading',
    tag: 'Algorithmic Decision Engine · In development',
    desc: 'An asynchronous, event-driven decision core for crypto futures (Binance USDT-M) that ingests live market data, scores signals across multiple strategies, filters them with machine learning and executes orders under risk rules. Built on a hexagonal (ports and adapters) architecture with a NumPy-vectorized indicator engine, an online logistic-regression signal filter, a backtesting pipeline and a paper-trading simulator, plus a JWT-secured FastAPI REST/WebSocket API, a React + TypeScript dashboard, PostgreSQL (SQLAlchemy, Alembic) and 187 automated pytest tests.',
    stack: 'Python · FastAPI · NumPy · PostgreSQL · React · TypeScript',
    links: [
      { text: 'Private repository' }
    ]
  },
  {
    title: 'Site Accounting App',
    tag: 'Financial transparency for residential sites',
    desc: 'An accounting system for residential site management, designed to increase financial transparency and prevent misuse of funds. Tracks dues, fuel costs and carry-over debts per building block with FIFO-based payment allocation, automated receipt generation and CSV import on a modular architecture.',
    stack: 'Python · Streamlit · PostgreSQL',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/site-accounting-app' },
      { text: 'Download PDF Report ->', url: '/docs/site-accounting-app-report.pdf', download: true }
    ]
  },
  {
    title: 'EmsalAI',
    tag: "AI Legal Research Assistant · GDG Hackathon '26",
    desc: 'Built with a 3-person team in a 24-hour hackathon: an AI assistant that finds relevant statutes and precedent decisions for legal cases. I contributed to both the asynchronous FastAPI backend (Gemini 2.5 Flash Lite with Server-Sent Events streaming) and the React frontend.',
    stack: 'FastAPI · Gemini API · React · Tailwind CSS · Supabase',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/GDGHACKATHON-EMSALAI' }
    ]
  },
  {
    title: 'Product Stock Management',
    tag: 'Capstone project · Web Build Program',
    desc: 'A full-stack inventory application with CRUD operations, search, validation, logging and automatic database setup, exposing a Swagger-documented REST API.',
    stack: 'ASP.NET Core Web API · Entity Framework Core · React · PostgreSQL',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/product-stock-api' }
    ]
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="py-24 px-6 lg:px-12 text-center bg-[var(--color-darker-bg)] relative scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl uppercase font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-[var(--color-accent)] after:rounded-sm">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col border p-8 ${
                index === 0 ? 'md:row-span-2' : ''
              } ${
                index === projects.length - 1 && projects.length % 2 === 0 ? 'md:col-span-2' : ''
              } ${
                index === 2
                  ? 'bg-[var(--color-accent)] border-transparent hover:border-black/20'
                  : 'bg-[var(--color-card-bg)] border-[var(--color-border-color)] hover:border-[var(--color-accent)]'
              }`}
            >
              {index !== 2 && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-3xl" />
              )}
              <div className="flex flex-col h-full relative z-10">
                <h3 className={`text-2xl font-bold mb-1 ${index === 2 ? 'text-black' : 'text-white'}`}>{project.title}</h3>
                {project.tag && (
                  <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${index === 2 ? 'text-black/60' : 'text-[var(--color-accent)]'}`}>{project.tag}</p>
                )}
                <p className={`text-sm leading-relaxed flex-grow ${index === 2 ? 'text-black/80' : 'text-[var(--color-text-light)]'}`}>
                  {project.desc}
                </p>
                {project.stack && (
                  <p className={`text-xs mt-5 ${index === 2 ? 'text-black/70 font-medium' : 'text-white/70'}`}>{project.stack}</p>
                )}
                <div className="flex flex-col gap-3 mt-6">
                  {project.links.map((link, i) => !link.url ? (
                    <span key={i} className={`text-sm font-medium ${index === 2 ? 'text-black/60' : 'text-[var(--color-text-light)]'}`}>
                      {link.text}
                    </span>
                  ) : (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-300 w-fit ${
                        index === 2 ? 'text-black hover:text-black/70' : 'text-white hover:text-[var(--color-accent)]'
                      }`}
                    >
                      <span className={`border-b pb-0.5 transition-colors ${
                        index === 2 ? 'border-transparent hover:border-black/40' : 'border-transparent hover:border-[var(--color-accent)]'
                      }`}>
                        {link.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NDA Trading',
    tag: 'Algorithmic Decision Engine · In development',
    desc: 'An asynchronous, event-driven decision core for crypto futures (Binance USDT-M). A genetic strategy factory evolves strategies from 34 indicators and puts every candidate through a nine-test anti-overfitting pipeline (holdout, Monte Carlo, cost stress). Two independent backtesting engines model fees, slippage, funding and liquidation; candidates are forward-tested in shadow mode and run with real orders on Binance testnet. A read-only monitoring dashboard with a FastAPI backend and a multi-page React + TypeScript frontend shows bots, trades, the strategy factory and tests. About 29,700 lines of Python and 717 pytest tests.',
    stack: 'Python · FastAPI · NumPy · PostgreSQL · SQLAlchemy · React · TypeScript · pytest',
    links: [
      { text: 'Private repository' }
    ]
  },
  {
    title: 'Site Yönetim',
    tag: 'Multi-tenant dues and accounting platform for residential sites',
    desc: 'A multi-tenant SaaS for site, apartment and management-company dues, collections and accounting. Tenant isolation is enforced twice: in the application layer and with PostgreSQL row-level security. An immutable double-entry ledger with period locking, a tamper-proof audit trail, 2FA, and a resident portal with SMS login. Money logic lives in a framework-independent domain layer, backed by pytest and hypothesis tests that guarantee no cent is lost in allocation. Evolved from my earlier Streamlit prototype.',
    stack: 'Python · Django · PostgreSQL (RLS) · HTMX · Alpine.js · Tailwind CSS · pytest',
    links: [
      { text: 'View Project ->', url: 'https://github.com/nidakd/site-yonetim' }
    ]
  },
  {
    title: 'GDG on Campus AİBÜ',
    tag: 'Community website & admin panel · Live',
    desc: 'The official website and management panel of the Google Developer Group at Bolu Abant İzzet Baysal University. Members can browse events, register and check in with QR codes, apply for membership and explore the project showcase and workshop resources, while the core team manages events, applications and announcements from a role-based admin panel. Events are synced automatically from the GDG Community platform, and access control is enforced with Supabase row-level security policies.',
    stack: 'Next.js · TypeScript · Tailwind CSS · Supabase (RLS) · GSAP · Vercel',
    links: [
      { text: 'Visit Website ->', url: 'https://gdgoncampusaibu.vercel.app' }
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

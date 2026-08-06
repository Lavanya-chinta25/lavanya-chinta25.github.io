import React from 'react';

const projects = [
  {
    title: "iDhrona",
    subtitle: "Agentic AI Learning & Assessment Platform",
    description: "Built a full-stack LLM-powered academic platform integrating coding, quizzes, and an intelligent doubt-resolution chat agent. Implemented a RAG-driven semantic retrieval system with persistent memory.",
    tech: ["React", "Node.js", "PostgreSQL", "LLMs", "RAG"],
    link: "https://app.idhrona.com/",
    color: "bg-black text-white"
  },
  {
    title: "Telugu LLM",
    subtitle: "Large Language Model for Regional Language",
    description: "Developed a domain-specific LLM for Telugu, fine-tuned on billions of tokens with literature and news datasets. Built comprehensive tokenization and evaluation pipelines for text generation.",
    tech: ["Python", "PyTorch", "Hugging Face Transformers"],
    link: "#",
    color: "bg-[#ff2a2a] text-white"
  },
  {
    title: "Teckzite Platform",
    subtitle: "IIIT Nuzvid's Tech Fest Portal",
    description: "Engineered a scalable full-stack MERN platform for university tech fest event registration and result publishing, handling high real-time traffic with smooth cloud deployment.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://teckzite.org/",
    color: "bg-gray-100 text-black"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-32 px-6 md:px-12 w-full font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
            Selected <span className="text-transparent [-webkit-text-stroke:2px_#ff2a2a]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">
            A showcase of my recent work in AI systems, Agentic architectures, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${project.color} rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 shadow-2xl relative overflow-hidden`}
            >
              {/* Optional background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform duration-500"></div>

              <div>
                <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">
                  {project.subtitle}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="opacity-90 leading-relaxed font-medium mb-8 text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 font-bold group/link"
                >
                  <span>View Project</span>
                  <svg 
                    className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

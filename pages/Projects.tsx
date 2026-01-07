
import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import GlassModal from '../components/GlassModal';
import { CheckCircle2, ChevronRight, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Technical Case Studies</h1>
        <p className="text-zinc-400 text-lg">
          A selection of projects demonstrating full-stack AI and hardware integration capability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`
              group relative glass rounded-3xl overflow-hidden cursor-pointer transition-all duration-300
              hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10
              ${project.isHero ? 'md:col-span-2' : ''}
            `}
          >
            <div className={`relative ${project.isHero ? 'aspect-[21/9]' : 'aspect-video'} overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">{project.category}</span>
                {project.isHero && <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase rounded">Top Project</span>}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-zinc-400 line-clamp-2">{project.shortDescription}</p>
              <div className="pt-4 flex items-center text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                Read full case study <ChevronRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <GlassModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Overview</h4>
                  <p className="text-xl text-white leading-relaxed font-light">{selectedProject.fullDescription}</p>
                </section>

                <section className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <CheckCircle2 size={18} className="text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Solved Challenges</h4>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((chall, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 italic">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 mt-2" />
                          <span className="text-sm">{chall}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <div className="p-6 glass rounded-2xl bg-white/5 border-white/10 space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Live Demo</h4>
                  <p className="text-sm text-zinc-400">The backend service for this project is running on a private GPU instance.</p>
                  <button className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-all">
                    <Play size={16} fill="currentColor" />
                    Launch Analyzer
                  </button>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden glass">
                  <img src={selectedProject.image} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                </div>
              </div>
            </div>
            
            {selectedProject.id === 'maize-analyzer' && (
              <div className="pt-8 border-t border-zinc-800">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">Pipeline Architecture</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { step: '01', title: 'Image Stream', desc: '4K Camera Input' },
                    { step: '02', title: 'Detection', desc: 'YOLOv8 Inference' },
                    { step: '03', title: 'Classification', desc: 'MobileNet Maturity' },
                    { step: '04', title: 'Command', desc: 'JSON Output' }
                  ].map((p, i) => (
                    <div key={i} className="p-4 glass rounded-xl border-l-2 border-cyan-500">
                      <div className="text-xs font-mono text-cyan-500 mb-1">{p.step}</div>
                      <div className="text-sm font-bold text-white mb-1">{p.title}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </GlassModal>
    </div>
  );
};

export default Projects;

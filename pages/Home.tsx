
import React from 'react';
import { PageType } from '../types';
import { PROJECTS } from '../constants';
import { ArrowRight, Cpu, Bot, Code, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const heroProject = PROJECTS.find(p => p.isHero);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase">
            <Zap size={14} fill="currentColor" />
            <span>Available for high-stakes projects</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            I build <span className="text-zinc-500">end-to-end</span> <br />
            AI <span className="text-cyan-500">&</span> Robotics Systems.
          </h1>
          <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed">
            Bridging the gap between research and reality. From computer vision models to custom hardware interfaces and scalable backends.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate(PageType.PROJECTS)}
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all flex items-center gap-2 group"
            >
              View Work 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate(PageType.ABOUT)}
              className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
            >
              The Methodology
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 glass rounded-3xl space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
            <Cpu size={28} />
          </div>
          <h3 className="text-xl font-bold">Model Engineering</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Training and optimizing deep learning models for deployment on edge devices and production servers.</p>
        </div>
        <div className="p-8 glass rounded-3xl space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
            <Bot size={28} />
          </div>
          <h3 className="text-xl font-bold">Robotic Control</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Designing precision control systems, kinematics, and sensor fusion for autonomous hardware.</p>
        </div>
        <div className="p-8 glass rounded-3xl space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
            <Code size={28} />
          </div>
          <h3 className="text-xl font-bold">Software Infrastructure</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Architecting robust backends and modern web interfaces to make technical data accessible.</p>
        </div>
      </section>

      {/* Featured Project Teaser */}
      {heroProject && (
        <section className="space-y-8">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-bold">Featured Showcase</h2>
            <button 
              onClick={() => onNavigate(PageType.PROJECTS)}
              className="text-sm font-bold text-zinc-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              See all projects
            </button>
          </div>
          <div 
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => onNavigate(PageType.PROJECTS)}
          >
            <img 
              src={heroProject.image} 
              alt={heroProject.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 space-y-2">
              <span className="text-cyan-400 font-mono text-sm tracking-tighter uppercase">{heroProject.category}</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">{heroProject.title}</h3>
              <p className="max-w-lg text-zinc-300 text-lg line-clamp-2">{heroProject.shortDescription}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

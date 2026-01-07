
import React from 'react';
import { TIMELINE } from '../constants';
import { Mail, Github, Linkedin, Download, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Bio / Profile Section */}
      <section className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden glass border-white/20">
              <img 
                src="https://picsum.photos/800/1000" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-bold text-lg">Lead AI Engineer</h3>
                    <p className="text-zinc-400 text-xs font-mono">ID: NO-8829-X</p>
                  </div>
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                    <FileText size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">The Engineer</h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              I specialize in autonomous systems where vision meets motion. My mission is to build robust, production-ready AI that performs reliably in real-world messy environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 glass rounded-2xl space-y-2">
              <h4 className="text-xs font-mono uppercase text-zinc-500">Primary Stack</h4>
              <p className="text-white font-medium">PyTorch, YOLOv8, ROS2, FastAPI, React</p>
            </div>
            <div className="p-6 glass rounded-2xl space-y-2">
              <h4 className="text-xs font-mono uppercase text-zinc-500">Location</h4>
              <p className="text-white font-medium">Paris / Tokyo / Remote</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all flex items-center gap-2">
              <Download size={18} /> Download CV
            </button>
            <div className="flex gap-2">
              <a href="#" className="p-3 glass rounded-xl hover:text-cyan-400 transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-3 glass rounded-xl hover:text-cyan-400 transition-all"><Github size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4">Career Timeline</h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-950 text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl group-hover:border-cyan-500/30 transition-all">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-lg">{item.title}</div>
                  <time className="font-mono text-xs text-cyan-500 font-bold bg-cyan-500/10 px-2 py-1 rounded">{item.year}</time>
                </div>
                <div className="text-zinc-400 font-medium mb-2">{item.company}</div>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

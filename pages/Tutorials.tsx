
import React, { useState } from 'react';
import { Tutorial } from '../types';
import { TUTORIALS } from '../constants';
import GlassModal from '../components/GlassModal';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

const Tutorials: React.FC = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Technical Knowledge</h1>
        <p className="text-zinc-400 text-lg">
          Sharing insights on AI deployment, hardware integration, and UX for industrial robotics.
        </p>
      </div>

      <div className="grid gap-6">
        {TUTORIALS.map((tutorial) => (
          <div 
            key={tutorial.id}
            onClick={() => setSelectedTutorial(tutorial)}
            className="group p-8 glass rounded-3xl cursor-pointer hover:border-cyan-500/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {tutorial.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {tutorial.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{tutorial.title}</h3>
                <p className="text-zinc-400 max-w-3xl leading-relaxed">{tutorial.excerpt}</p>
              </div>
              <div className="shrink-0">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-zinc-500 group-hover:text-cyan-400 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GlassModal 
        isOpen={!!selectedTutorial} 
        onClose={() => setSelectedTutorial(null)}
        title={selectedTutorial?.title || ''}
      >
        {selectedTutorial && (
          <article className="prose prose-invert max-w-none">
            <div className="flex items-center gap-6 text-sm text-zinc-500 font-mono mb-8 pb-8 border-b border-white/5">
              <span className="flex items-center gap-2"><Calendar size={16} /> {selectedTutorial.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {selectedTutorial.readTime} read</span>
            </div>
            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              {selectedTutorial.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="p-8 bg-zinc-950 rounded-3xl border border-white/5 font-mono text-sm overflow-x-auto text-cyan-400">
                {`# Example Backend Structure
from fastapi import FastAPI, File, UploadFile
import torch

app = FastAPI()
model = torch.load("corn_detector.pt")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Inference logic here...
    return {"status": "success", "detections": []}`}
              </div>
            </div>
          </article>
        )}
      </GlassModal>
    </div>
  );
};

export default Tutorials;

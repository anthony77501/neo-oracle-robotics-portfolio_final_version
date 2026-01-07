
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import { PageType } from './types';
import { Send, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>(PageType.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case PageType.HOME:
        return <Home onNavigate={setActivePage} />;
      case PageType.PROJECTS:
        return <Projects />;
      case PageType.TUTORIALS:
        return <Tutorials />;
      case PageType.ABOUT:
        return <About />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-cyan-500/30">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen} 
        // Fixed: Use the correct state setter name setIsSidebarOpen
        setIsOpen={setIsSidebarOpen} 
      />

      <main className="lg:ml-72 min-h-screen transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:px-12 lg:py-24">
          {/* Main Page Area */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            {renderPage()}
          </div>

          {/* Persistent Footer / Contact Section */}
          <footer className="mt-24 pt-24 border-t border-zinc-900 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-cyan-500 font-bold tracking-tighter uppercase text-sm">
                <Terminal size={18} />
                <span>Contact Module</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Let's discuss your next mission-critical system.</h2>
              <p className="text-zinc-500 text-lg">
                Currently open to select freelance opportunities and full-time senior engineering roles in AI, robotics, or computer vision.
              </p>
            </div>
            
            <form 
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Project Brief / Message" 
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-all group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </footer>
          
          <div className="mt-24 text-center">
            <p className="text-xs font-mono text-zinc-700 tracking-widest uppercase">
              © 2024 Neo Oracle Robotics — Built for the Future
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

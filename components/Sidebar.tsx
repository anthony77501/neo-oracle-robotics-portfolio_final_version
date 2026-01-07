
import React from 'react';
import { PageType } from '../types';
import { Menu, X, Home, Briefcase, BookOpen, User, Github, Linkedin, Mail } from 'lucide-react';

interface SidebarProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const navItems = [
    { id: PageType.HOME, label: 'Home', icon: <Home size={20} /> },
    { id: PageType.PROJECTS, label: 'Projects', icon: <Briefcase size={20} /> },
    { id: PageType.TUTORIALS, label: 'Tutorials', icon: <BookOpen size={20} /> },
    { id: PageType.ABOUT, label: 'About', icon: <User size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 glass rounded-lg text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-zinc-950 border-r border-zinc-800 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full sidebar-scroll overflow-y-auto">
          {/* Logo / Header */}
          <div className="p-8 pb-4">
            <h1 className="text-xl font-bold tracking-tight text-white mb-1">
               <span className="text-cyan-500">NEO ORACLE ROBOTICS</span>
            </h1>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Robotics & AI Lab</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                      ${activePage === item.id 
                        ? 'bg-zinc-900 text-white border-l-2 border-cyan-500 shadow-lg' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}
                    `}
                  >
                    <span className={activePage === item.id ? 'text-cyan-400' : 'text-zinc-500'}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Footer Info */}
          <div className="p-8 border-t border-zinc-900">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:contact@neooracle.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group">
                <Mail size={16} className="text-zinc-600 group-hover:text-cyan-400" />
                <span>contact@neooracle.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-2 glass rounded-lg text-zinc-400 hover:text-white hover:text-cyan-400 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 glass rounded-lg text-zinc-400 hover:text-white hover:text-cyan-400 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import brandData from './data/brandData.json';
import { BrandOverview } from './components/BrandOverview';
import { TopicIntensityChart } from './components/TopicIntensityChart';
import { StrategicInsights } from './components/StrategicInsights';
import { LayoutDashboard, Users, Activity, ImageIcon } from 'lucide-react';

const INFOGRAPHIC_URL = "https://lh3.googleusercontent.com/notebooklm/ANHLwAy4feAIJlN6apBL-NsJ5nlw2Uj-OIBfEb8XFSggQ-jA0bpni18rCdePXWMK6Z1KoAx994QXHc7bUj7djHnGzPh9_UaNB3_Q4TD7X5McGl6Ep0zmMOgC6B6qnF5bChqsYFq0Er1f1brufOPwdVj7L5X65dp96UI=w2752-d-h1536-mp2?authuser=0";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(brandData);
  }, []);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark">
      <div className="text-teclab animate-pulse text-xl font-bold">Cargando Dashboard...</div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#0f172a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-900 text-slate-200 font-sans pb-20 selection:bg-teal-500 selection:text-white">
      
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-white/10 bg-brand-dark/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teclab to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-teclab/20">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Brand Battle</h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">COMPETITIVE BRAND INTELLIGENCE</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <span className="flex items-center text-teclab"><Activity className="w-4 h-4 mr-2" /> Live Analysis</span>
            <span className="flex items-center text-slate-400"><Users className="w-4 h-4 mr-2" /> 5 Brands</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        
        {/* Intro Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 drop-shadow-sm">
            Brand Kumite
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Análisis de posicionamiento narrativo extraído vía NotebookLM. 
            Comparativa detallada de fortalezas, debilidades y oportunidades para 
            el <span className="text-teclab font-semibold">Brand Manager de Teclab</span>.
          </p>
        </section>

        {/* Overview Row */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-white">Panorama General de Marcas</h2>
          </div>
          <BrandOverview data={data} />
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <TopicIntensityChart data={data} />
          </div>
          <div className="lg:col-span-5 h-[500px]">
             {/* Overlap Card */}
             <div className="glass rounded-2xl p-6 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <Activity className="w-5 h-5 text-indigo-400 mr-2" />
                  Puntos de Solapamiento
                </h3>
                <p className="text-slate-400 text-sm">Zonas comunes narrativas (El océano rojo)</p>
              </div>
              <ul className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {data.overlap.map((item, idx) => (
                  <li key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl text-sm text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="pt-8">
           <StrategicInsights data={data} />
        </section>

        {/* Infographic Generation */}
        <section className="pt-8">
          <div className="flex items-center mb-6">
            <div className="h-8 w-1.5 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <ImageIcon className="w-5 h-5 text-emerald-400 mr-2" />
              Infografía: Panorama Educación Tecnológica 2026
            </h2>
          </div>
          <div className="glass rounded-2xl p-2 w-full mx-auto relative group overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
            <img 
              src={INFOGRAPHIC_URL} 
              alt="Infografía generada por NotebookLM" 
              className="w-full h-auto rounded-xl shadow-lg ring-1 ring-white/10"
              loading="lazy"
            />
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/10 pt-8 pb-12 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-2">
          <LayoutDashboard className="w-5 h-5 text-teclab" />
          <span className="text-lg font-bold text-white tracking-tight">Brand Battle</span>
        </div>
        <p className="text-sm text-slate-400">
          2026 - Grupo R'Evolution TM - Powered by MktLab
        </p>
      </footer>
    </div>
  );
}

export default App;

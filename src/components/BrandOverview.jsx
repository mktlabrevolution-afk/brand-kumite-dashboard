import React from 'react';
import { Target, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';

const bgColorMap = {
  "Digital House": "bg-digitalhouse/10 border-digitalhouse/20",
  "Platzi": "bg-platzi/10 border-platzi/20",
  "Teclab": "bg-teclab/10 border-teclab/20",
  "Coderhouse": "bg-coderhouse/10 border-coderhouse/20"
};

const textColorMap = {
  "Digital House": "text-digitalhouse",
  "Platzi": "text-platzi",
  "Teclab": "text-teclab",
  "Coderhouse": "text-coderhouse"
};

export function BrandOverview({ data }) {
  if (!data || !data.brands) return null;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-12">
      {Object.entries(data.brands).map(([brand, info]) => {
        const bgClass = bgColorMap[brand] || "bg-white/5 border-white/10";
        const textClass = textColorMap[brand] || "text-white";

        return (
          <div key={brand} className={`glass rounded-2xl p-6 border ${bgClass} hover:border-white/30 transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-2xl font-bold ${textClass}`}>{brand}</h3>
            </div>
            
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              {info.status_quo}
            </p>

            <div className="space-y-4">
              {/* Fortalezas */}
              <div>
                <h4 className="flex items-center text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Fortalezas
                </h4>
                <ul className="space-y-2">
                  {info.strengths.map((s, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start">
                      <span className="mr-2 text-emerald-500">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Debilidades */}
              <div>
                <h4 className="flex items-center text-sm font-semibold text-rose-400 mb-2 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 mr-2" /> Debilidades
                </h4>
                <ul className="space-y-2">
                  {info.weaknesses.map((w, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start">
                      <span className="mr-2 text-rose-500">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diferenciador */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="flex items-center text-sm font-semibold text-amber-400 mb-2 uppercase tracking-wide">
                  <Target className="w-4 h-4 mr-2" /> Diferenciador Clave
                </h4>
                <p className="text-sm text-slate-300 italic flex items-start">
                  <Zap className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  {info.differentiators}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

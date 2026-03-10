import React from 'react';
import { Lightbulb } from 'lucide-react';

export function StrategicInsights({ data }) {
  if (!data || !data.insights) return null;

  return (
    <div className="glass rounded-2xl p-6 mb-12">
      <div className="flex items-center mb-6">
        <Lightbulb className="w-8 h-8 text-amber-400 mr-3" />
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Insights Estratégicos para Teclab</h3>
          <p className="text-slate-400 text-sm">Actionable learnings para el Brand Manager basados en fortalezas/debilidades cruzadas.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.insights.map((insight, idx) => {
          // Extraer número si existe
          const match = insight.match(/^(\d+)\.\s*(.+)/);
          const text = match ? match[2] : insight;
          const num = match ? match[1] : idx + 1;

          return (
            <div key={idx} className="bg-brand-card/50 hover:bg-brand-card/80 border border-white/5 p-5 rounded-xl transition-colors flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teclab/20 text-teclab flex items-center justify-center font-bold mr-4 group-hover:bg-teclab group-hover:text-white transition-colors">
                {num}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

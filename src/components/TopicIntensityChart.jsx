import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function TopicIntensityChart({ data }) {
  if (!data || !data.intensity) return null;

  return (
    <div className="glass rounded-2xl p-6 mb-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Matriz de Intensidad de Tópicos</h3>
        <p className="text-slate-400 text-sm">Comparativa de dominio narrativo por marca (escala 1-10)</p>
      </div>

      <div className="h-[500px] w-full bg-brand-card/30 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.intensity}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="topic" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#64748b' }} axisLine={false} />
            
            <Radar
              name="Digital House"
              dataKey="Digital House"
              stroke="#f43f5e"
              fill="#f43f5e"
              fillOpacity={0.4}
            />
            <Radar
              name="Platzi"
              dataKey="Platzi"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.4}
            />
            <Radar
              name="Teclab"
              dataKey="Teclab"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.6}
            />
            <Radar
              name="Coderhouse"
              dataKey="Coderhouse"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.4}
            />
            
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
              itemStyle={{ fontSize: '14px' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

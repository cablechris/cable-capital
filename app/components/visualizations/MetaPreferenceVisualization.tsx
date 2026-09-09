"use client";

import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MetaPreferenceData, MetaPreferenceProps } from '@/lib/types/visualizations';

const MetaPreferenceVisualization: React.FC<MetaPreferenceProps> = ({
  title = "H4: Meta-Preference Convergence",
  description = "Analyzing convergence of meta-preferences across agent populations."
}) => {
  const generateMetaPreferenceData = (): MetaPreferenceData[] => {
    return Array(50).fill(0).map((_, epoch) => ({
      epoch,
      alignmentScore: 1 / (1 + Math.exp(-0.2 * (epoch - 25))),
      entropyScore: Math.exp(-0.1 * epoch),
      diversityScore: 1 - (1 / (1 + Math.exp(-0.2 * (epoch - 25))))
    }));
  };

  const [data] = useState<MetaPreferenceData[]>(generateMetaPreferenceData());

  return (
    <div className="research-chart">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart accessibilityLayer margin={{ top: 8, right: 14, bottom: 25, left: 8 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="epoch" name="Epoch" label={{ value: 'Simulation Epochs', position: 'insideBottom', offset: -12 }} />
          <YAxis type="number" dataKey="value" domain={[0, 1]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Scatter name="Alignment Score" data={data.map(point => ({ epoch: point.epoch, value: point.alignmentScore }))} fill="#8884d8" />
          <Scatter name="Entropy Score" data={data.map(point => ({ epoch: point.epoch, value: point.entropyScore }))} fill="#82ca9d" />
          <Scatter name="Diversity Score" data={data.map(point => ({ epoch: point.epoch, value: point.diversityScore }))} fill="#ff7300" />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="research-chart-caption">
        {description}
      </p>
    </div>
  );
};

export default MetaPreferenceVisualization; 
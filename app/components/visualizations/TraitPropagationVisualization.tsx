"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TraitPropagationData, TraitPropagationProps } from '@/lib/types/visualizations';

const TraitPropagationVisualization: React.FC<TraitPropagationProps> = ({
  title = "H3: Hybrid Trait Innovation",
  description = "Tracking the emergence and propagation of hybrid cultural traits."
}) => {
  const generateTraitPropagationData = (): TraitPropagationData[] => {
    return Array(50).fill(0).map((_, index) => ({
      epoch: index,
      originalTraits: 100 * Math.exp(-0.05 * index),
      hybridTraits: 50 * Math.exp(-0.03 * index) * Math.sin(index / 5 + 1),
      subculturalTraits: 75 * Math.exp(-0.04 * index) * Math.cos(index / 5),
      metaPreferenceTraits: 25 * Math.exp(-0.02 * index) * Math.sin(index / 3)
    }));
  };

  const [data] = useState<TraitPropagationData[]>(generateTraitPropagationData());

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" label={{ value: 'Simulation Epochs', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Number of Traits', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="originalTraits" stroke="#FF6B6B" strokeWidth={3} name="Original Traits" />
          <Line type="monotone" dataKey="hybridTraits" stroke="#4ECDC4" strokeWidth={3} name="Hybrid Traits" />
          <Line type="monotone" dataKey="subculturalTraits" stroke="#45B7D1" strokeWidth={3} name="Subcultural Traits" />
          <Line type="monotone" dataKey="metaPreferenceTraits" stroke="#FDCB6E" strokeWidth={3} name="Meta-Preference Traits" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default TraitPropagationVisualization; 
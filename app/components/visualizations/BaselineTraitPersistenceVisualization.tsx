"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BaselineTraitData, BaselineTraitProps } from '@/lib/types/visualizations';

const BaselineTraitPersistenceVisualization: React.FC<BaselineTraitProps> = ({
  title = "Baseline: Trait Persistence under Random Imitation",
  description = "Figure 2: Baseline measurement showing trait persistence under random imitation conditions."
}) => {
  const baselineData: BaselineTraitData[] = [
    { traitId: 0, lifespan: 10.5 },
    { traitId: 1, lifespan: 9.9 },
    { traitId: 2, lifespan: 10.0 },
    { traitId: 3, lifespan: 9.7 },
    { traitId: 4, lifespan: 9.6 },
    { traitId: 5, lifespan: 10.2 },
    { traitId: 6, lifespan: 10.2 },
    { traitId: 7, lifespan: 9.7 },
    { traitId: 8, lifespan: 9.9 },
    { traitId: 9, lifespan: 10.4 },
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={baselineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="traitId" label={{ value: 'Trait ID', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Average Lifespan (Epochs)', angle: -90, position: 'insideLeft' }} domain={[0, 12]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="lifespan" fill="#888888" name="Lifespan" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default BaselineTraitPersistenceVisualization; 
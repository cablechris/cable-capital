"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TraitData, TraitSurvivalProps } from '@/lib/types/visualizations';

const TraitSurvivalVisualization: React.FC<TraitSurvivalProps> = ({ 
  title = "H1: Non-Functional Trait Persistence",
  description = "Demonstrates trait survival independent of direct utility optimization."
}) => {
  const generateTraitSurvivalData = (): TraitData[] => {
    return Array(50).fill(0).map((_, index) => ({
      epoch: index,
      totalTraits: 100 * Math.exp(-0.05 * index),
      functionalTraits: 100 * Math.exp(-0.03 * index),
      nonFunctionalTraits: 100 * Math.exp(-0.07 * index)
    }));
  };

  const [data] = useState<TraitData[]>(generateTraitSurvivalData());

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" label={{ value: 'Epochs', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Number of Traits', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="totalTraits" 
            stroke="#8884d8" 
            strokeWidth={3}
            name="Total Traits"
          />
          <Line 
            type="monotone" 
            dataKey="functionalTraits" 
            stroke="#82ca9d" 
            strokeWidth={3}
            name="Functional Traits"
          />
          <Line 
            type="monotone" 
            dataKey="nonFunctionalTraits" 
            stroke="#ff7300" 
            strokeWidth={3}
            name="Non-Functional Traits"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default TraitSurvivalVisualization; 
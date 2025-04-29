'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar } from 'recharts';

// Copy all the visualization components from your provided code
export const TraitSurvivalVisualization = () => {
  const generateTraitSurvivalData = () => {
    return Array(50).fill(0).map((_, index) => ({
      epoch: index,
      totalTraits: 100 * Math.exp(-0.05 * index),
      functionalTraits: 100 * Math.exp(-0.03 * index),
      nonFunctionalTraits: 100 * Math.exp(-0.07 * index)
    }));
  };

  const [data] = useState(generateTraitSurvivalData());

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">H1: Non-Functional Trait Persistence</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" label={{ value: 'Epochs', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Number of Traits', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalTraits" stroke="#8884d8" strokeWidth={3} name="Total Traits" />
          <Line type="monotone" dataKey="functionalTraits" stroke="#82ca9d" strokeWidth={3} name="Functional Traits" />
          <Line type="monotone" dataKey="nonFunctionalTraits" stroke="#ff7300" strokeWidth={3} name="Non-Functional Traits" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Demonstrates trait survival independent of direct utility optimization.
      </p>
    </div>
  );
};

export const TraitPropagationVisualization = () => {
  const generateTraitPropagationData = () => {
    return Array(50).fill(0).map((_, index) => ({
      epoch: index,
      originalTraits: 100 * Math.exp(-0.05 * index),
      hybridTraits: 50 * Math.exp(-0.03 * index) * Math.sin(index / 5 + 1),
      subculturalTraits: 75 * Math.exp(-0.04 * index) * Math.cos(index / 5),
      metaPreferenceTraits: 25 * Math.exp(-0.02 * index) * Math.sin(index / 3)
    }));
  };

  const [data] = useState(generateTraitPropagationData());

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">H3: Hybrid Trait Innovation</h3>
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
        Tracking the emergence and propagation of hybrid cultural traits.
      </p>
    </div>
  );
};

export const MetaPreferenceVisualization = () => {
  const generateMetaPreferenceData = () => {
    return Array(50).fill(0).map((_, epoch) => ({
      epoch,
      alignmentScore: 1 / (1 + Math.exp(-0.2 * (epoch - 25))),
      entropyScore: Math.exp(-0.1 * epoch),
      diversityScore: 1 - (1 / (1 + Math.exp(-0.2 * (epoch - 25))))
    }));
  };

  const [data] = useState(generateMetaPreferenceData());

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">H4: Meta-Preference Convergence</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="epoch" name="Epoch" label={{ value: 'Simulation Epochs', position: 'insideBottom', offset: -5 }} />
          <YAxis type="number" domain={[0, 1]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Scatter name="Alignment Score" data={data} fill="#8884d8" dataKey="alignmentScore" />
          <Scatter name="Entropy Score" data={data} fill="#82ca9d" dataKey="entropyScore" />
          <Scatter name="Diversity Score" data={data} fill="#ff7300" dataKey="diversityScore" />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2">
        Analyzing convergence of meta-preferences across agent populations.
      </p>
    </div>
  );
};

export const BaselineTraitPersistenceVisualization = () => {
  const baselineData = [
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
      <h3 className="text-xl font-semibold mb-4">Baseline: Trait Persistence under Random Imitation</h3>
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
        Figure 2: Baseline measurement showing trait persistence under random imitation conditions.
      </p>
    </div>
  );
};

export const SubculturalNetworkVisualization = () => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    generateNetworkData();
  }, []);
  
  const generateNetworkData = () => {
    const numNodes = 100;
    const numClusters = 4;
    const generatedNodes = [];
    const generatedLinks = [];
    
    for (let i = 0; i < numNodes; i++) {
      const mainCluster = Math.floor(i / (numNodes / numClusters));
      const actualCluster = Math.random() > 0.85 ? (mainCluster + 1) % numClusters : mainCluster;
      
      generatedNodes.push({
        id: i,
        cluster: actualCluster,
        x: 300 + Math.cos(actualCluster * (2 * Math.PI / numClusters)) * (150 + Math.random() * 50),
        y: 200 + Math.sin(actualCluster * (2 * Math.PI / numClusters)) * (150 + Math.random() * 50),
      });
    }
    
    for (let i = 0; i < numNodes; i++) {
      const sourceNode = generatedNodes[i];
      const numConnections = Math.floor(Math.random() * 4) + 3;
      
      for (let j = 0; j < numConnections; j++) {
        let targetIndex;
        if (Math.random() < 0.8) {
          const sameClusterNodes = generatedNodes
            .map((node, idx) => ({ node, idx }))
            .filter(({ node }) => node.cluster === sourceNode.cluster && node.id !== sourceNode.id);
          
          if (sameClusterNodes.length > 0) {
            const randomSameCluster = Math.floor(Math.random() * sameClusterNodes.length);
            targetIndex = sameClusterNodes[randomSameCluster].idx;
          } else {
            targetIndex = (i + 1 + Math.floor(Math.random() * (numNodes - 1))) % numNodes;
          }
        } else {
          const diffClusterNodes = generatedNodes
            .map((node, idx) => ({ node, idx }))
            .filter(({ node }) => node.cluster !== sourceNode.cluster);
          
          if (diffClusterNodes.length > 0) {
            const randomDiffCluster = Math.floor(Math.random() * diffClusterNodes.length);
            targetIndex = diffClusterNodes[randomDiffCluster].idx;
          } else {
            targetIndex = (i + 1 + Math.floor(Math.random() * (numNodes - 1))) % numNodes;
          }
        }
        
        const linkExists = generatedLinks.some(
          link => (link.source === i && link.target === targetIndex) || 
                 (link.source === targetIndex && link.target === i)
        );
        
        if (!linkExists && i !== targetIndex) {
          generatedLinks.push({
            source: i,
            target: targetIndex,
            value: 1
          });
        }
      }
    }
    
    setNodes(generatedNodes);
    setLinks(generatedLinks);
  };

  const clusterColors = ["#8dd3c7", "#fb8072", "#80b1d3", "#bebada"];
  
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">H2: Agent Subcultural Clustering</h3>
      <div className="relative" style={{ height: "500px" }}>
        <svg width="100%" height="100%" viewBox="0 0 600 400">
          {links.map((link, index) => {
            const source = nodes[link.source];
            const target = nodes[link.target];
            
            if (!source || !target) return null;
            
            const sameCluster = source.cluster === target.cluster;
            const strokeWidth = sameCluster ? 1 : 0.5;
            const opacity = sameCluster ? 0.6 : 0.2;
            
            return (
              <line
                key={`link-${index}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="#999"
                strokeWidth={strokeWidth}
                opacity={opacity}
              />
            );
          })}
          
          {nodes.map((node, index) => (
            <circle
              key={`node-${index}`}
              cx={node.x}
              cy={node.y}
              r={5}
              fill={clusterColors[node.cluster % clusterColors.length]}
              stroke="#fff"
              strokeWidth={1}
            />
          ))}
          
          <g transform="translate(480, 20)">
            {[0, 1, 2, 3].map((cluster) => (
              <g key={`legend-${cluster}`} transform={`translate(0, ${cluster * 25})`}>
                <circle
                  cx={0}
                  cy={0}
                  r={5}
                  fill={clusterColors[cluster]}
                  stroke="#fff"
                  strokeWidth={1}
                />
                <text x={15} y={5} fontSize={12}>
                  {cluster === 0 ? "Conventional" : 
                   cluster === 1 ? "Progressive" : 
                   cluster === 2 ? "Traditional" : "Hybrid"}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Modularity analysis reveals distinct agent communities forming organically.
      </p>
    </div>
  );
};

export const TableOfContents = ({ activeSection, scrollToSection }) => {
  const sections = [
    { id: "abstract", title: "Abstract" },
    { id: "introduction", title: "Introduction" },
    { id: "related-work", title: "Related Work" },
    { id: "methodology", title: "Methodology" },
    { id: "results", title: "Results" },
    { id: "discussion", title: "Discussion" },
    { id: "conclusion", title: "Conclusion" },
    { id: "code-resources", title: "Code Repository" }
  ];

  return (
    <nav className="sticky top-4 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-2 py-1 rounded ${
                activeSection === section.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 
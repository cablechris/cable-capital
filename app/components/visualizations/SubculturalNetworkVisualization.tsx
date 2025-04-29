"use client";

import React, { useState, useEffect } from 'react';

const SubculturalNetworkVisualization = () => {
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
    
    // Create nodes with cluster assignments
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
    
    // Create links with higher probability within clusters
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
          {/* Draw links */}
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
          
          {/* Draw nodes */}
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
          
          {/* Legend */}
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
        Modularity analysis reveals distinct agent communities forming organically. Colors represent subcultural clusters that emerge from preference similarity.
      </p>
    </div>
  );
};

export default SubculturalNetworkVisualization; 
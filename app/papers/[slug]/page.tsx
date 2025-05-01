'use client';

import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar } from 'recharts';

// Import components with error boundaries
const TraitSurvivalVisualization = dynamic(() => import('@/app/components/visualizations/TraitSurvivalVisualization'), {
  ssr: false,
  loading: () => <div>Loading visualization...</div>
});

const TraitPropagationVisualization = dynamic(() => import('@/app/components/visualizations/TraitPropagationVisualization'), {
  ssr: false,
  loading: () => <div>Loading visualization...</div>
});

const MetaPreferenceVisualization = dynamic(() => import('@/app/components/visualizations/MetaPreferenceVisualization'), {
  ssr: false,
  loading: () => <div>Loading visualization...</div>
});

const BaselineTraitPersistenceVisualization = dynamic(() => import('@/app/components/visualizations/BaselineTraitPersistenceVisualization'), {
  ssr: false,
  loading: () => <div>Loading visualization...</div>
});

const SubculturalNetworkVisualization = dynamic(() => import('@/app/components/visualizations/SubculturalNetworkVisualization'), {
  ssr: false,
  loading: () => <div>Loading visualization...</div>
});

const TableOfContents = dynamic(() => import('@/app/components/TableOfContents'), {
  ssr: false,
  loading: () => <div>Loading table of contents...</div>
});

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ResearchPaper({ params }: PageProps) {
  const [activeSection, setActiveSection] = useState<string>("abstract");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      try {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "abstract";
        
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            const id = section.getAttribute("id");
            if (id) currentSection = id;
          }
        });
        
        setActiveSection(currentSection);
      } catch (err) {
        console.error('Scroll handling error:', err);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
      }
    } catch (err) {
      console.error('Scroll error:', err);
      setError('Failed to scroll to section');
    }
  };

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <p className="text-red-600">Error: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Culture Without Function: Emergent Coordination in Artificial Systems
            </h1>
            <p className="text-xl opacity-90">
              Modeling emergent coordination through costly signals and social learning
            </p>
            <div className="mt-6 text-sm opacity-75">
              <p>Chris Cable | 2025 | Computational Cultural Evolution</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <TableOfContents
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            </div>
            
            <main className="w-full md:w-3/4 lg:w-4/5">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 md:p-8 lg:p-10 space-y-12">
                  {/* ... rest of the JSX content ... */}
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
"use client";

import React from 'react';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const TableOfContents = ({ activeSection, scrollToSection }: TableOfContentsProps) => {
  const sections: Section[] = [
    { id: "abstract", title: "Abstract" },
    { id: "introduction", title: "Introduction" },
    { id: "background", title: "Background" },
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
          <li key={section.id} className={activeSection === section.id ? 'active' : ''}>
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

export default TableOfContents; 
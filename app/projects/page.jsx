'use client';

import Layout from '../../components/Layout';
import { projects } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.demoUrl}
                    className="text-primary hover:text-primary/80 font-medium"
                    target="_blank"
                  >
                    Live Demo →
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="text-primary hover:text-primary/80 font-medium"
                    target="_blank"
                  >
                    GitHub →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 
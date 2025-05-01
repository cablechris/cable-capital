"use client";

import React from 'react';
import Layout from '../components/Layout';
import { talks, Talk } from '../data/talks';
import Image from 'next/image';
import { PageProps } from '@/lib/types';

export default function Talks({ searchParams }: PageProps) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Talks & Presentations</h1>
        
        <div className="space-y-12">
          {talks.map((talk: Talk) => (
            <div key={talk.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video w-full">
                <a 
                  href={`https://youtu.be/${talk.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${talk.id}/maxresdefault.jpg`}
                    alt={talk.title}
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        className="w-8 h-8"
                        style={{ marginLeft: '2px' }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{talk.title}</h2>
                <p className="text-gray-600 mb-4">{talk.description}</p>
                <div className="text-sm text-gray-500">{talk.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 
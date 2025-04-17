import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const projectData = {
  'ai-tools': {
    title: 'AI Tools',
    description: 'AI tools for developers',
    image: '/examples/ai.png',
    technologies: ['React', 'OpenAI', 'Next.js'],
    demoUrl: 'https://ai-on099ho9k-kristers-projects-08d2730d.vercel.app/',
    githubUrl: 'https://github.com/astr0q/AiTools'
  },
  'file-sharing': {
    title: 'File Sharing App',
    description: 'Sharing app that allows you to share files with others to their email',
    image: '/examples/fileshare.png',
    technologies: ['React', 'Firebase', 'Next.js', "Tailwind CSS"],
    demoUrl: 'demohere',
    githubUrl: 'https://github.com/yourusername/file-sharing'
  },
  'e-commerce': {
    title: 'E-commerce Website',
    description: 'E-commerce website with full functionality',
    image: '/examples/ecom.png',
    technologies: ['React', 'Stripe', 'Next.js', 'Tailwind CSS', 'Convex'],
    demoUrl: 'demohere',
    githubUrl: 'https://github.com/yourusername/e-commerce'
  },
  'chat-app': {
    title: 'Chat Application',
    description: 'Real-time chat application',
    image: '/examples/chatapp.png',
    technologies: ['React', 'Socket.io', 'Next.js',"Tailwind CSS"],
    demoUrl: 'demohere',
    githubUrl: 'https://github.com/astr0q/chat-app'
  }
}

export default function ProjectPage({ params }) {
  const project = projectData[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block font-bold">
          ← Back to Projects
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>

        <div className="mb-8 border rounded-lg shadow-md overflow-hidden transform hover:scale-105 ease-in duration-500">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc pl-5 mb-8">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            {project.demoUrl !== 'demohere' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

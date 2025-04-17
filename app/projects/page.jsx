import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectCard({ name, logo, desc }) {
  return (
    <div className="group relative flex flex-col p-4 border border-black rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 bg-white h-full">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain rounded"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      name: 'Ai tools',
      slug: 'ai-tools',
      logo: '/examples/ai.png',
      desc: 'AI tools for developers(Need to find or buy better AI API, for better usage)',
    },
    {
      name: 'File-sharing',
      slug: 'file-sharing',
      logo: '/examples/fileshare.png',
      desc: 'Sharing app that allows you to share files with others to their email',
    },
    {
      name: 'E-commerce',
      slug: 'e-commerce',
      logo: '/examples/ecom.png',
      desc: 'E-commerce website (currently doesn’t work — needs to be fixed)',
    },
    {
      name: 'Chat app',
      slug: 'chat-app',
      logo: '/examples/chatapp.png',
      desc: 'Real-time chat application',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-20"
    >
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Here are some of my recent works
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects

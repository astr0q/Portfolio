import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

function TechnologyCard({ name, logo }) {
  return (
    <div className="flex items-center gap-3 p-4 border rounded-xl shadow-sm hover:shadow-md transition border border-solid border-black">
      <Image src={logo} alt={`${name} logo`} width={30} height={30} />
      <p className="text-sm font-medium">{name}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </div>
    </div>
  );
}

export default function Home() {
  const technologies = [
    {
      name: "React",
      logo: "/logos/react.png",
    },
    {
      name: "Next.js",
      logo: "/logos/nextjs.jpeg",
    },
    {
      name: "Mongo",
      logo: "/logos/mongo.png",
    },
    {
      name: "Tailwind",
      logo: "/logos/tailwind.png",
    },
    {
      name: "Firebase",
      logo: "/logos/fire.png",
    },
    {
      name: "Vite",
      logo: "/logos/vite.png",
    },
    {
      name: "Javascript",
      logo: "/logos/js.png",
    },
    {
      name: "HTML/CSS",
      logo: "/logos/htmlcss.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center py-10 mt-20">
        <h1 className="text-4xl font-bold mb-2 sm:mb-3 text-center">
          Hi, my name is <span className="text-indigo-900">Kristers</span>
        </h1>
        <h2 className="text-xl mb-4 sm:mb-5 text-center">a frontend developer</h2>
        <p className="text-lg text-gray-700 mb-2 text-center">
          Based in <span className="font-semibold">Riga, Latvia</span>
        </p>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Studying at <span className="font-bold text-indigo-900">TSI University</span>. Expected to graduate in <span className="font-bold text-indigo-900">2028</span>.
        </p>
        
        <Link 
          href="/cv.pdf" 
          download="Kristers_CV.pdf"
          className="inline-flex"
          title="Download my CV"
        >
          <Button variant="default" className="cursor-pointer gap-2">
            My CV <FaDownload className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      {/*projects section */}
      <div className="mt-10 px-4 mb-16 ">
        <h1 className="text-2xl font-semibold mb-6 sm:mb-8 flex items-center justify-center p-5">
          One of my Project
        </h1>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/*project cards here */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md items-center flex flex-col border border-solid border-black">
            <Link href="/projects" className="text-s text-indigo-900 underline cursor-pointer">
            <Button variant="default" className="cursor-pointer">Click to see more</Button>
            </Link>
            <Image src="/examples/ai.png" alt="Project Image" width={710} height={110} className="w-[400px]rounded-lg mb-4 scale-90 hover:scale-100 ease-in duration-500" />
            Project "AI tools" with integrated chat AI and image generation
            </div>

        </div>
      </div>

      {/* Technologies section */}
      <div className="mt-10 px-4 mb-16 ">
        <h1 className="text-2xl font-semibold mb-6 sm:mb-8 flex items-center justify-center p-5">
          Technologies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {technologies.map((tech) => {
            return <TechnologyCard key={tech.name} name={tech.name} logo={tech.logo} />;
          })}
        </div>
      </div>

      {/* Footer will be automatically placed at the bottom due to the flex layout */}
    </main>
  );
}

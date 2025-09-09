"use client";
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Waldom",
      subtitle: "Real-Time 3D AI Avatar Assistant",
      description: "Created 3D avatar with MediaPipe, OpenCV, and Three.js for natural interaction. Flask backend + WebSocket.",
      technologies: ["MediaPipe", "OpenCV", "Three.js", "Flask", "WebSocket"],
      githubLink: "https://github.com/skyllpi/Waldom",
      image: "/assets/waldom.png" 
    },
    {
      title: "AstroPi",
      subtitle: "Diffusion-based Cloud Motion Forecasting",
      description: "Forecasting pipeline using diffusion models and PyTorch preprocessing for satellite image sequences.",
      technologies: ["PyTorch", "Diffusion Models", "Satellite Data", "Computer Vision"],
      githubLink: "https://github.com/skyllpi/Astropi",
      image: "/assets/astropi.png"
    },
    {
      title: "PDF Assistant",
      subtitle: "ML-Powered Mobile App",
      description: "Cross-platform mobile app parsing PDFs into structured outlines, integrating OCR + ML analysis.",
      technologies: ["React Native", "FastAPI", "OCR", "ML"],
      githubLink: "https://github.com/skyllpi/hack_1A",
      image: "/assets/ai_assistant.png"
    },
    {
      title: "HoverGPT",
      subtitle: "Real-Time Hover Summarizer",
      description: "Chrome extension generating instant video/article summaries on hover using React + FastAPI.",
      technologies: ["React", "FastAPI", "Chrome Extension", "LLM APIs"],
      githubLink: "https://github.com/skyllpi/Hovergpt",
      image: "/assets/hover_gpt.png"
    }
  ];

  return (
    <section id="projects" className="py-8 bg-black dark:bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg overflow-hidden hover:bg-gray-900 transition cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{project.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-black text-gray-300 px-2 py-1 text-xs rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
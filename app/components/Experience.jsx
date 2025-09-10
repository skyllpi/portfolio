const Experience = () => {
  return (
    <section id="experience" className="py-2 bg-black dark:bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex-grow">
              <h3 className="text-base font-semibold mb-1">Software & AI Developer</h3>
              <p className="text-gray-400 text-sm">Self Employed</p>
              <ul className="text-gray-400 space-y-1 list-disc ml-4 mt-2 text-sm">
                <li>  Participated in National Level Hackathons (Adobe, ISRO, Walmart, Microsoft)</li>
                <li>  Developed diffusion models for cloud prediction using advanced AI techniques</li>
                <li>  Built AI Avatar Assistant integrating MediaPipe, OpenCV, and LangChain</li>
                <li>  Created innovative solutions for real-world AI applications</li>
              </ul>
            </div>
            <div className="text-right mt-4 lg:mt-0">
              <span className="text-gray-500 text-sm">Jan 2023 - Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
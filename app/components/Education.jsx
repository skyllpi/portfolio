const Education = () => {
  return (
    <section id="education" className="py-2 bg-black dark:bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex-grow">
            <h3 className="text-base font-semibold mb-1">Bennett University</h3>
            <p className="text-gray-400 text-sm mb-2">Bachelor of Computer Science</p>
            <ul className="text-gray-400 space-y-1 list-disc ml-4 text-sm">
              <li>- CGPA: 8.3/10</li>
              <li>- Relevant Coursework: Web Programming, System Analysis and Design, Data Structures and Algorithms, Operating Systems, Machine Learning</li>
            </ul>
          </div>
          <div className="text-right mt-4 lg:mt-0">
            <span className="text-gray-500 text-sm">Aug 2023 - Aug 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
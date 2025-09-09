const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-black dark:bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-8">
          Let's connect! Feel free to reach out for collaborations or just to say hello.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-32">
          <a href="mailto:aryan15sharma05@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-black px-4 py-2 rounded transition-colors">
            Email
          </a>
          <a href="https://github.com/skyllpi" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-black px-4 py-2 rounded transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/skyllpi/" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-black px-4 py-2 rounded transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Aryxnshxrmx" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-black px-4 py-2 rounded transition-colors">
            X
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
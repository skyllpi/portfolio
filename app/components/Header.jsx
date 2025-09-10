import Image from 'next/image';

const Header = () => {
  return (
    <section id="home" className="pt-20 pb-4 bg-black dark:bg-black text-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-40 h-40 relative rounded-full overflow-hidden">
            <Image
              src="/assets/profile.png"
              alt="Aryan Sharma"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, I'm Aryan Sharma 👋
          </h1>
        </div>
        <p className="text-md text-gray-300 mt-2">
          Software Developer & AI Enthusiast
        </p>
      </div>
    </section>
  );
};

export default Header;
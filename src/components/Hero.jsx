import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="hero" className="text-gray-800 dark:text-gray-200 fade-in gradient-background">
      <div className="p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-200 dark:border-gray-600">
          <img src="/images/gimage.png" alt="Your Name" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Gokul Kiran</h1>
        <p className="text-xl mt-2 font-medium text-gray-700 dark:text-gray-300">Full-Stack Developer</p>
        <p className="mt-4 max-w-md mx-auto text-black dark:text-white text-lg">
        <TypeAnimation
          sequence={[
            'I innovate, build, and scale fullstack, cloud, and AI solutions. Your vision, my code. I transform your ideas into reality.',
            1000, // Pause for 1 second after typing
          ]}
          wrapper="span"
          speed={50} // Typing speed (lower is faster)
          style={{ display: 'inline-block' }}
          repeat={Infinity} // Loop the animation
        />
      </p>
        <div className="mt-6 space-x-4">
          <a href="#contact" className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200">Contact Me</a>
          <a href="/images/Gokul_Kiran_Resume.pdf" target="_blank" className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200">Resume</a>
        </div>
      </div>
    </section>
  );
}
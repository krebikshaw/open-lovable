import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Apple 特別活動
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            台北時間 9 月 10 日凌晨 1 點線上觀看。
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            加入行事曆
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Products = () => {
  const products = [
    {
      name: "iPhone 16 全系列",
      description: "來看看 iPhone 16 全系列。",
      link: "進一步了解",
      buyLink: "選購 iPhone",
      bgColor: "bg-gray-50"
    },
    {
      name: "MacBook Air",
      description: "全新天藍色，M4 效能沖天。",
      link: "進一步了解",
      buyLink: "購買",
      bgColor: "bg-white"
    },
    {
      name: "Apple Watch Series 10",
      description: "纖薄表率。",
      link: "進一步了解",
      buyLink: "購買",
      bgColor: "bg-gray-50"
    },
    {
      name: "iPad Pro",
      description: "出奇纖薄，出眾強大。",
      link: "進一步了解",
      buyLink: "購買",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className={`\${product.bgColor} rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300`}>
              <h3 className="text-3xl font-bold mb-4 text-black">{product.name}</h3>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {product.link} →
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {product.buyLink} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Shop and Learn': ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    'Account': ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    'Apple Store': ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Financing', 'Order Status', 'Shopping Help'],
    'For Business': ['Apple and Business', 'Shop for Business'],
    'For Education': ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    'For Healthcare': ['Apple in Healthcare', 'Health on Apple Watch'],
    'Apple Values': ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Supplier Responsibility']
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <p className="mb-2">Copyright © 2024 Apple Inc. 保留一切權利。</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-gray-900 transition-colors">隱私權政策</a>
              <a href="#" className="hover:text-gray-900 transition-colors">使用條款</a>
              <a href="#" className="hover:text-gray-900 transition-colors">銷售和退款</a>
              <a href="#" className="hover:text-gray-900 transition-colors">法律資訊</a>
              <a href="#" className="hover:text-gray-900 transition-colors">網站地圖</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
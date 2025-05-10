import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-white text-blue-600 font-bold rounded-full flex items-center justify-center">
        SS
      </div>
      <span className="text-xl font-semibold">SoftSell</span>
    </div>
    {/* You can place navigation or dark mode toggle here */}
  </header>
);

export default Header;

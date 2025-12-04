
import React, { useState } from 'react';

export const ResponsivePlayground: React.FC = () => {
  const [width, setWidth] = useState(100); // Percentage width

  // Determine current breakpoint for display
  const getBreakpoint = (w: number) => {
    if (w < 40) return 'mobile';
    if (w < 70) return 'tablet';
    return 'desktop';
  };

  const breakpoint = getBreakpoint(width);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <div className="flex justify-between items-end mb-4">
          <label className="text-sm font-bold text-gray-300">Viewport Width</label>
          <span className={`text-xs font-mono px-2 py-1 rounded bg-gray-900 ${
            breakpoint === 'mobile' ? 'text-pink-400' :
            breakpoint === 'tablet' ? 'text-blue-400' : 'text-green-400'
          }`}>
             Current State: {breakpoint.toUpperCase()}
          </span>
        </div>
        <input 
          type="range" 
          min="20" 
          max="100" 
          value={width} 
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
          <span>320px</span>
          <span>768px</span>
          <span>1024px+</span>
        </div>
      </div>

      {/* Visualizer Container */}
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex justify-center overflow-hidden relative min-h-[400px]">
        {/* Resizable Device */}
        <div 
          style={{ width: `${width}%` }} 
          className="bg-gray-800 border-x-4 border-t-4 border-gray-600 rounded-t-2xl shadow-2xl transition-all duration-300 ease-out flex flex-col relative"
        >
          {/* Mock Browser Header */}
          <div className="h-8 bg-gray-700 w-full flex items-center gap-2 px-3 border-b border-gray-600">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>

          {/* Content that changes based on width */}
          <div className={`p-6 flex-1 transition-colors duration-500 ${
             breakpoint === 'mobile' ? 'bg-pink-900/20' :
             breakpoint === 'tablet' ? 'bg-blue-900/20' : 'bg-green-900/20'
          }`}>
             <div className="flex flex-col gap-4">
                {/* Header */}
                <div className={`h-12 rounded-lg flex items-center px-4 font-bold text-white transition-all ${
                    breakpoint === 'mobile' ? 'bg-pink-600 justify-center' : 
                    breakpoint === 'tablet' ? 'bg-blue-600 justify-between' : 'bg-green-600 justify-start gap-4'
                }`}>
                    <span>LOGO</span>
                    <div className="flex gap-2 text-xs opacity-80">
                         {breakpoint !== 'mobile' && <span>Home</span>}
                         {breakpoint !== 'mobile' && <span>About</span>}
                         {breakpoint === 'desktop' && <span>Services</span>}
                    </div>
                    {breakpoint === 'mobile' && <div className="absolute right-8">☰</div>}
                </div>

                {/* Grid Content */}
                <div className={`grid gap-4 transition-all ${
                    breakpoint === 'mobile' ? 'grid-cols-1' :
                    breakpoint === 'tablet' ? 'grid-cols-2' : 'grid-cols-3'
                }`}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 bg-gray-700/50 rounded-lg animate-pulse"></div>
                    ))}
                </div>
                
                <div className="mt-auto p-4 bg-gray-900/50 rounded-lg border border-gray-600/50">
                    <p className="font-mono text-sm text-gray-300">
                        @media (min-width: <span className="text-yellow-400">
                            {breakpoint === 'mobile' ? '0px' : breakpoint === 'tablet' ? '768px' : '1024px'}
                        </span>)
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>

       {/* Explanation */}
       <div className="grid md:grid-cols-3 gap-4">
           <div className={`p-4 rounded-lg border ${breakpoint === 'mobile' ? 'bg-pink-900/20 border-pink-500' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
               <h4 className="font-bold text-pink-400 mb-1">Mobile First</h4>
               <p className="text-xs text-gray-400">Default styles apply here. No media query needed. Stack content vertically.</p>
           </div>
           <div className={`p-4 rounded-lg border ${breakpoint === 'tablet' ? 'bg-blue-900/20 border-blue-500' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
               <h4 className="font-bold text-blue-400 mb-1">Tablet (≥768px)</h4>
               <p className="text-xs text-gray-400">Expand grid to 2 columns. Show simple navigation.</p>
           </div>
           <div className={`p-4 rounded-lg border ${breakpoint === 'desktop' ? 'bg-green-900/20 border-green-500' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
               <h4 className="font-bold text-green-400 mb-1">Desktop (≥1024px)</h4>
               <p className="text-xs text-gray-400">Full 3-column layout. Expanded navigation menu.</p>
           </div>
       </div>
    </div>
  );
};

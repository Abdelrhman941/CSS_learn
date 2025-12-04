import React, { useState } from 'react';

export const BoxModel: React.FC = () => {
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(10);
  const [padding, setPadding] = useState(20);
  const [width, setWidth] = useState(200);

  const totalWidth = width + (padding * 2) + (border * 2) + (margin * 2);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase text-gray-400 font-semibold">Margin (px)</label>
          <input 
            type="range" min="0" max="50" value={margin} 
            onChange={(e) => setMargin(Number(e.target.value))} 
            className="accent-orange-500"
          />
          <span className="text-right text-sm font-mono text-orange-400">{margin}px</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase text-gray-400 font-semibold">Border (px)</label>
          <input 
            type="range" min="0" max="20" value={border} 
            onChange={(e) => setBorder(Number(e.target.value))} 
            className="accent-yellow-500"
          />
          <span className="text-right text-sm font-mono text-yellow-400">{border}px</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase text-gray-400 font-semibold">Padding (px)</label>
          <input 
            type="range" min="0" max="50" value={padding} 
            onChange={(e) => setPadding(Number(e.target.value))} 
            className="accent-green-500"
          />
          <span className="text-right text-sm font-mono text-green-400">{padding}px</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase text-gray-400 font-semibold">Content Width (px)</label>
          <input 
            type="range" min="50" max="300" value={width} 
            onChange={(e) => setWidth(Number(e.target.value))} 
            className="accent-blue-500"
          />
          <span className="text-right text-sm font-mono text-blue-400">{width}px</span>
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 flex justify-center items-center overflow-auto min-h-[400px] relative">
        <div className="absolute top-2 left-2 text-xs text-gray-500 font-mono">
          Total Width: {totalWidth}px
        </div>
        
        {/* Margin Box */}
        <div 
          style={{ padding: `${margin}px` }} 
          className="bg-orange-900/30 border-2 border-dashed border-orange-500/50 relative transition-all duration-300 rounded-sm"
        >
          <div className="absolute top-0 left-1 text-[10px] text-orange-400 font-mono">MARGIN</div>
          
          {/* Border Box */}
          <div 
            style={{ padding: `${border}px` }} 
            className="bg-yellow-900/30 border-2 border-dashed border-yellow-500/50 relative transition-all duration-300 rounded-sm"
          >
            <div className="absolute top-0 left-1 text-[10px] text-yellow-400 font-mono">BORDER</div>
            
            {/* Padding Box */}
            <div 
              style={{ padding: `${padding}px` }} 
              className="bg-green-900/30 border-2 border-dashed border-green-500/50 relative transition-all duration-300 rounded-sm"
            >
               <div className="absolute top-0 left-1 text-[10px] text-green-400 font-mono">PADDING</div>
               
               {/* Content Box */}
               <div 
                 style={{ width: `${width}px`, height: '100px' }}
                 className="bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 relative rounded-sm"
               >
                 <span className="z-10 text-xs md:text-base">CONTENT</span>
                 <div className="absolute bottom-1 right-2 text-[10px] opacity-75 font-mono">
                   {width} x 100
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-400 mb-1">Box Model Pro Tip</h4>
        <p className="text-sm text-gray-300">
          By default, <code className="bg-gray-900 px-1 rounded text-pink-400">box-sizing</code> is set to <code className="text-green-300">content-box</code>, meaning padding and borders are added <em>outside</em> your defined width. 
          Most modern developers switch this to <code className="bg-gray-900 px-1 rounded text-pink-400">border-box</code> so that padding and border are included <em>inside</em> the width you set.
        </p>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export const FlexPlayground: React.FC = () => {
  const [justify, setJustify] = useState<Justify>('center');
  const [align, setAlign] = useState<Align>('center');
  const [direction, setDirection] = useState<Direction>('row');
  const [wrap, setWrap] = useState<Wrap>('wrap');
  const [itemCount, setItemCount] = useState(4);

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    flexWrap: wrap,
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Controls */}
      <div className="lg:col-span-1 space-y-6 bg-gray-800 p-5 rounded-xl border border-gray-700 h-fit">
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Direction</label>
          <div className="grid grid-cols-2 gap-2">
            {['row', 'column', 'row-reverse', 'column-reverse'].map((d) => (
              <button
                key={d}
                onClick={() => setDirection(d as Direction)}
                className={`px-3 py-2 text-xs rounded transition-colors border ${
                  direction === d 
                    ? 'bg-indigo-600 border-indigo-500 text-white' 
                    : 'bg-gray-900 border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Justify Content</label>
          <select 
            value={justify} 
            onChange={(e) => setJustify(e.target.value as Justify)}
            className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-sm text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Align Items</label>
          <select 
            value={align} 
            onChange={(e) => setAlign(e.target.value as Align)}
            className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-sm text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="stretch">stretch</option>
            <option value="baseline">baseline</option>
          </select>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
           <span className="text-sm font-semibold text-gray-400">Items: {itemCount}</span>
           <div className="flex gap-2">
             <button onClick={() => setItemCount(Math.max(1, itemCount - 1))} className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600">-</button>
             <button onClick={() => setItemCount(Math.min(12, itemCount + 1))} className="w-8 h-8 bg-indigo-600 rounded hover:bg-indigo-500 text-white">+</button>
           </div>
        </div>
      </div>

      {/* Visualizer */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-gray-900 border border-gray-700 rounded-xl h-[400px] overflow-hidden relative">
          <div 
            style={containerStyles}
            className="w-full h-full p-4 gap-2 transition-all duration-300"
          >
            {Array.from({ length: itemCount }).map((_, i) => (
              <div 
                key={i}
                className="bg-indigo-500 border-2 border-indigo-400 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl transition-all hover:scale-105"
                style={{ 
                  width: direction.includes('row') ? '80px' : '80%', 
                  height: direction.includes('row') && align !== 'stretch' ? '80px' : 'auto',
                  minHeight: '60px'
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto">
          <span className="text-pink-500">.container</span> <span className="text-yellow-400">{'{'}</span><br/>
          &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-green-400">flex</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">flex-direction</span>: <span className="text-green-400">{direction}</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">justify-content</span>: <span className="text-green-400">{justify}</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">align-items</span>: <span className="text-green-400">{align}</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">flex-wrap</span>: <span className="text-green-400">{wrap}</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">gap</span>: <span className="text-green-400">0.5rem</span>;<br/>
          <span className="text-yellow-400">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

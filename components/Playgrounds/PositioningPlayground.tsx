
import React, { useState } from 'react';

type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export const PositioningPlayground: React.FC = () => {
  const [position, setPosition] = useState<Position>('static');
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(20);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Controls */}
      <div className="lg:col-span-1 space-y-6 bg-gray-800 p-5 rounded-xl border border-gray-700 h-fit">
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-3">Position Property</label>
          <div className="flex flex-col gap-2">
            {['static', 'relative', 'absolute', 'fixed', 'sticky'].map((pos) => (
              <button
                key={pos}
                onClick={() => setPosition(pos as Position)}
                className={`px-3 py-2 text-sm rounded-lg transition-all text-left border ${
                  position === pos
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg'
                    : 'bg-gray-900 border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                <code className="text-xs mr-2 opacity-50">{pos}</code>
                {pos === 'static' && <span className="text-xs float-right opacity-50">Default</span>}
              </button>
            ))}
          </div>
        </div>

        {position !== 'static' && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs uppercase text-gray-500 mb-1">Top ({top}px)</label>
              <input
                type="range"
                min="0"
                max="150"
                value={top}
                onChange={(e) => setTop(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-500 mb-1">Left ({left}px)</label>
              <input
                type="range"
                min="0"
                max="150"
                value={left}
                onChange={(e) => setLeft(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
          </div>
        )}

        <div className="bg-indigo-900/30 border border-indigo-500/30 p-3 rounded text-sm text-indigo-200">
          <strong>How it works:</strong>
          <ul className="list-disc ml-4 mt-2 space-y-1 text-xs text-gray-300">
            {position === 'static' && <li>Normal flow. Top/Left have no effect.</li>}
            {position === 'relative' && <li>Offset relative to its normal position. Keeps its space in flow.</li>}
            {position === 'absolute' && <li>Removed from flow. Positioned relative to nearest positioned ancestor (the dashed box).</li>}
            {position === 'fixed' && <li>Removed from flow. Positioned relative to the viewport (screen).</li>}
            {position === 'sticky' && <li>Toggles between relative and fixed based on scroll position.</li>}
          </ul>
        </div>
      </div>

      {/* Visualization */}
      <div className="lg:col-span-2 space-y-4">
        {/* Container */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl h-[400px] overflow-auto relative p-8 group">
          <div className="absolute top-2 right-2 text-xs text-gray-600 font-mono">Viewport / Container</div>
          
          <div className="h-[150vh] relative"> {/* Tall content for scrolling */}
            <p className="text-gray-600 text-sm mb-4">Scroll down to test 'sticky'...</p>
            
            {/* Parent Reference Box */}
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 w-64 h-64 bg-gray-800/50 relative mx-auto mt-10">
              <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-xs text-gray-500">Parent (relative)</span>
              
              {/* The Box */}
              <div
                style={{
                  position: position,
                  top: position === 'static' ? 'auto' : `${top}px`,
                  left: position === 'static' ? 'auto' : `${left}px`,
                }}
                className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-xl flex items-center justify-center text-white font-bold text-xs z-10 transition-all duration-300"
              >
                I am {position}
              </div>

              <div className="mt-4 text-gray-600 text-xs">
                Siblings in the parent...
              </div>
            </div>
            
            <div className="space-y-4 mt-12 opacity-30 px-12">
               <div className="h-4 bg-gray-700 rounded w-3/4"></div>
               <div className="h-4 bg-gray-700 rounded w-1/2"></div>
               <div className="h-4 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm">
          <span className="text-pink-500">.element</span> <span className="text-yellow-400">{'{'}</span><br/>
          &nbsp;&nbsp;<span className="text-blue-400">position</span>: <span className="text-green-400">{position}</span>;<br/>
          {position !== 'static' && (
            <>
              &nbsp;&nbsp;<span className="text-blue-400">top</span>: <span className="text-green-400">{top}px</span>;<br/>
              &nbsp;&nbsp;<span className="text-blue-400">left</span>: <span className="text-green-400">{left}px</span>;<br/>
            </>
          )}
          <span className="text-yellow-400">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

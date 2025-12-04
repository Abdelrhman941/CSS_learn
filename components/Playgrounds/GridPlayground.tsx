import React, { useState } from 'react';

export const GridPlayground: React.FC = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [gap, setGap] = useState(10);
  const [rowUnit, setRowUnit] = useState('1fr');
  const [colUnit, setColUnit] = useState('1fr');

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${colUnit})`,
    gridTemplateRows: `repeat(${rows}, ${rowUnit})`,
    gap: `${gap}px`,
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Controls */}
      <div className="lg:col-span-1 space-y-6 bg-gray-800 p-5 rounded-xl border border-gray-700 h-fit">
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Columns: {cols}</label>
          <input 
            type="range" min="1" max="6" value={cols} 
            onChange={(e) => setCols(Number(e.target.value))} 
            className="w-full accent-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Rows: {rows}</label>
          <input 
            type="range" min="1" max="6" value={rows} 
            onChange={(e) => setRows(Number(e.target.value))} 
            className="w-full accent-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-400 mb-2">Gap: {gap}px</label>
          <input 
            type="range" min="0" max="50" value={gap} 
            onChange={(e) => setGap(Number(e.target.value))} 
            className="w-full accent-emerald-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="text-xs text-gray-500 uppercase">Col Width</label>
                <select 
                    value={colUnit}
                    onChange={(e) => setColUnit(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 rounded p-1 text-sm mt-1"
                >
                    <option value="1fr">1fr (Fraction)</option>
                    <option value="100px">100px (Fixed)</option>
                    <option value="auto">auto</option>
                </select>
            </div>
            <div>
                <label className="text-xs text-gray-500 uppercase">Row Height</label>
                <select 
                    value={rowUnit}
                    onChange={(e) => setRowUnit(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 rounded p-1 text-sm mt-1"
                >
                    <option value="1fr">1fr</option>
                    <option value="100px">100px</option>
                    <option value="auto">auto</option>
                </select>
            </div>
        </div>

        <div className="bg-emerald-900/30 border border-emerald-500/30 p-3 rounded text-sm text-emerald-200">
            <strong>Pro Tip:</strong> Use <code>1fr</code> to distribute available space evenly.
        </div>
      </div>

      {/* Visualizer */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-gray-900 border border-gray-700 rounded-xl h-[400px] p-4 overflow-auto">
          <div style={gridStyle} className="w-full h-full transition-all">
            {Array.from({ length: rows * cols }).map((_, i) => (
              <div 
                key={i}
                className="bg-emerald-600 border border-emerald-400/50 rounded flex items-center justify-center text-white font-bold text-lg shadow-sm"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm">
          <span className="text-pink-500">.grid-container</span> <span className="text-yellow-400">{'{'}</span><br/>
          &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-green-400">grid</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">grid-template-columns</span>: <span className="text-green-400">repeat({cols}, {colUnit})</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">grid-template-rows</span>: <span className="text-green-400">repeat({rows}, {rowUnit})</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">gap</span>: <span className="text-green-400">{gap}px</span>;<br/>
          <span className="text-yellow-400">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

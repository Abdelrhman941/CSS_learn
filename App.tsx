
import React, { useState } from 'react';
import { Layout, Box, Grip, Type, Zap, Monitor, Code, Menu, X, Terminal, Layers, Smartphone } from 'lucide-react';
import { BoxModel } from './components/Playgrounds/BoxModel';
import { FlexPlayground } from './components/Playgrounds/FlexPlayground';
import { GridPlayground } from './components/Playgrounds/GridPlayground';
import { PositioningPlayground } from './components/Playgrounds/PositioningPlayground';
import { ResponsivePlayground } from './components/Playgrounds/ResponsivePlayground';
import { GeminiTutor } from './components/GeminiTutor';
import { View, NavItem } from './types';

const navItems: NavItem[] = [
  { id: View.FOUNDATIONS, label: 'Foundations', icon: 'Code' },
  { id: View.BOX_MODEL, label: 'Box Model', icon: 'Box' },
  { id: View.FLEXBOX, label: 'Flexbox', icon: 'Layout' },
  { id: View.GRID, label: 'CSS Grid', icon: 'Grip' },
  { id: View.POSITIONING, label: 'Positioning', icon: 'Layers' },
  { id: View.RESPONSIVE, label: 'Responsive Design', icon: 'Smartphone' },
  { id: View.TYPOGRAPHY, label: 'Typography', icon: 'Type' },
  { id: View.ANIMATIONS, label: 'Animations', icon: 'Zap' },
];

const IconMap: Record<string, React.FC<any>> = {
  Code, Box, Layout, Grip, Type, Zap, Monitor, Layers, Smartphone
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.FOUNDATIONS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for CSS Variables Demo
  const [themeColor, setThemeColor] = useState('#6366f1'); // Indigo-500 default

  const renderContent = () => {
    switch (currentView) {
      case View.BOX_MODEL:
        return (
          <div className="space-y-6 animate-fadeIn">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">The Box Model</h2>
              <p className="text-gray-400 text-lg">Every element in CSS is a box. Understanding how margins, borders, and padding interact with width is crucial.</p>
            </header>
            <BoxModel />
          </div>
        );
      case View.FLEXBOX:
        return (
           <div className="space-y-6 animate-fadeIn">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Flexbox Layout</h2>
              <p className="text-gray-400 text-lg">A one-dimensional layout method for laying out items in rows or columns.</p>
            </header>
            <FlexPlayground />
          </div>
        );
      case View.GRID:
        return (
          <div className="space-y-6 animate-fadeIn">
             <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">CSS Grid</h2>
              <p className="text-gray-400 text-lg">The most powerful two-dimensional layout system for the web.</p>
            </header>
            <GridPlayground />
          </div>
        );
      case View.POSITIONING:
        return (
          <div className="space-y-6 animate-fadeIn">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Positioning</h2>
              <p className="text-gray-400 text-lg">Control exactly where elements appear in the document flow.</p>
            </header>
            <PositioningPlayground />
          </div>
        );
      case View.RESPONSIVE:
        return (
          <div className="space-y-6 animate-fadeIn">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Responsive Design</h2>
              <p className="text-gray-400 text-lg">Using Media Queries to adapt your layout to different device sizes.</p>
            </header>
            <ResponsivePlayground />
          </div>
        );
      case View.FOUNDATIONS:
      default:
        return (
          <div className="space-y-8 animate-fadeIn max-w-4xl">
            <header>
              <h2 className="text-3xl font-bold text-white mb-4">CSS Foundations</h2>
              <p className="text-gray-400 text-lg">Cascading Style Sheets (CSS) controls the presentation of web pages. Here is your quick reference guide.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-pink-900/50 rounded text-pink-400"><Code size={20} /></div>
                        <h3 className="text-xl font-bold text-white">Selectors</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="font-mono text-pink-400">element</span>
                            <span>Targets all instances (e.g., div, p)</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="font-mono text-pink-400">.class</span>
                            <span>Targets class name (Reusable)</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="font-mono text-pink-400">#id</span>
                            <span>Targets unique ID (Specific)</span>
                        </li>
                        <li className="flex justify-between pb-2">
                            <span className="font-mono text-pink-400">*</span>
                            <span>Universal selector (Resetting)</span>
                        </li>
                    </ul>
                </div>

                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-900/50 rounded text-blue-400"><Terminal size={20} /></div>
                        <h3 className="text-xl font-bold text-white">Specificity</h3>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">When multiple rules apply to an element, the most specific one wins.</p>
                    <div className="space-y-2">
                         <div className="flex items-center gap-2">
                             <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                 <div className="bg-red-500 h-full w-[90%]"></div>
                             </div>
                             <span className="text-xs font-mono text-gray-400 w-24">!important</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                 <div className="bg-orange-500 h-full w-[70%]"></div>
                             </div>
                             <span className="text-xs font-mono text-gray-400 w-24">Inline Style</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                 <div className="bg-yellow-500 h-full w-[50%]"></div>
                             </div>
                             <span className="text-xs font-mono text-gray-400 w-24">#ID</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                 <div className="bg-green-500 h-full w-[30%]"></div>
                             </div>
                             <span className="text-xs font-mono text-gray-400 w-24">.Class</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Reset & Pseudo-classes */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* CSS Reset */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-yellow-900/50 rounded text-yellow-400"><Box size={20} /></div>
                        <h3 className="text-xl font-bold text-white">CSS Reset</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                        Browsers apply inconsistent default styles (User Agent Stylesheets). A "Reset" or "Normalize" flattens these differences so your design starts from a blank canvas.
                    </p>
                    <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm relative group">
                        <div className="absolute top-2 right-2 text-xs text-gray-600">reset.css</div>
                        <span className="text-gray-500">/* The "Modern" Reset */</span><br/>
                        <span className="text-pink-400">*</span>, <span className="text-pink-400">*::before</span>, <span className="text-pink-400">*::after</span> {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">margin</span>: <span className="text-green-400">0</span>;<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">padding</span>: <span className="text-green-400">0</span>;<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">box-sizing</span>: <span className="text-green-400">border-box</span>;<br/>
                        {'}'}<br/>
                        <span className="text-pink-400">img</span> {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">max-width</span>: <span className="text-green-400">100%</span>;<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">display</span>: <span className="text-green-400">block</span>;<br/>
                        {'}'}
                    </div>
                </div>

                {/* Pseudo-classes */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-indigo-900/50 rounded text-indigo-400"><Code size={20} /></div>
                        <h3 className="text-xl font-bold text-white">Pseudo-classes</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="group">
                            <div className="flex items-center gap-2 mb-1">
                                <code className="text-pink-400 font-mono text-sm bg-gray-950 px-2 py-0.5 rounded border border-gray-700">:hover</code>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Interaction</span>
                            </div>
                            <p className="text-sm text-gray-300">Triggers when cursor is over the element.</p>
                        </div>
                        
                        <div className="group">
                            <div className="flex items-center gap-2 mb-1">
                                <code className="text-pink-400 font-mono text-sm bg-gray-950 px-2 py-0.5 rounded border border-gray-700">:active</code>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">State</span>
                            </div>
                            <p className="text-sm text-gray-300">Triggers while the element is being activated (clicked/tapped).</p>
                        </div>

                        <div className="group">
                            <div className="flex items-center gap-2 mb-1">
                                <code className="text-pink-400 font-mono text-sm bg-gray-950 px-2 py-0.5 rounded border border-gray-700">:focus</code>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Accessibility</span>
                            </div>
                            <p className="text-sm text-gray-300">Triggers when an element receives keyboard focus (inputs, buttons).</p>
                        </div>

                        <div className="group">
                            <div className="flex items-center gap-2 mb-1">
                                <code className="text-pink-400 font-mono text-sm bg-gray-950 px-2 py-0.5 rounded border border-gray-700">:nth-child(n)</code>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Structure</span>
                            </div>
                            <p className="text-sm text-gray-300">Selects specific siblings based on index or formula (e.g., <span className="font-mono text-xs">2n</span>).</p>
                        </div>

                        <div className="group">
                            <div className="flex items-center gap-2 mb-1">
                                <code className="text-pink-400 font-mono text-sm bg-gray-950 px-2 py-0.5 rounded border border-gray-700">:not()</code>
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Logic</span>
                            </div>
                            <p className="text-sm text-gray-300">Selects elements that do <strong>not</strong> match the selector.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Variables Interactive Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code size={120} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">CSS Variables (Custom Properties)</h3>
                <p className="text-gray-400 mb-6 text-sm max-w-2xl">
                    Variables allow you to store values (like colors or sizes) in one place and reuse them everywhere. 
                    Change the value once, and it updates globally.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Live Demo */}
                    <div className="space-y-4 bg-gray-950/50 p-6 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-semibold text-gray-300">Live Theme Preview</span>
                            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-gray-600">
                                <span className="text-xs text-gray-400 font-mono">--main-color:</span>
                                <input 
                                    type="color" 
                                    value={themeColor}
                                    onChange={(e) => setThemeColor(e.target.value)}
                                    className="w-6 h-6 rounded cursor-pointer bg-transparent border-none"
                                />
                            </div>
                        </div>
                        
                        {/* Elements using the variable */}
                        <div className="space-y-3">
                            <button 
                                style={{ backgroundColor: themeColor }}
                                className="w-full text-white font-bold py-2 rounded shadow-lg transition-colors"
                            >
                                Primary Button
                            </button>
                            <div 
                                style={{ borderColor: themeColor }}
                                className="p-3 border-l-4 bg-gray-800 rounded text-sm text-gray-300"
                            >
                                <span style={{ color: themeColor }} className="font-bold">Alert: </span>
                                This box inherits the border color and text color from the same variable.
                            </div>
                            <div className="flex gap-2">
                                <div style={{ backgroundColor: themeColor }} className="h-2 w-full rounded-full opacity-100"></div>
                                <div style={{ backgroundColor: themeColor }} className="h-2 w-full rounded-full opacity-60"></div>
                                <div style={{ backgroundColor: themeColor }} className="h-2 w-full rounded-full opacity-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Code Explanation */}
                    <div className="space-y-4">
                        <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm shadow-inner">
                            <span className="text-pink-400">:root</span> {'{'}<br/>
                            &nbsp;&nbsp;<span className="text-blue-300">--main-color</span>: <span className="text-green-400" style={{ color: themeColor }}>{themeColor}</span>;<br/>
                            {'}'}<br/><br/>
                            <span className="text-gray-500">/* Usage */</span><br/>
                            <span className="text-pink-400">.button</span> {'{'}<br/>
                            &nbsp;&nbsp;<span className="text-blue-300">background-color</span>: <span className="text-yellow-300">var</span>(<span className="text-blue-300">--main-color</span>);<br/>
                            {'}'}
                        </div>
                        <div className="bg-indigo-900/30 p-4 rounded border-l-4 border-indigo-500 text-sm">
                            <strong className="text-indigo-200 block mb-1">Pro Tip:</strong>
                            <p className="text-indigo-100/70">
                                Define your palette in <code className="bg-black/20 px-1 rounded">:root</code> to make them global. 
                                You can even override them inside specific classes (e.g., <code className="bg-black/20 px-1 rounded">.dark-mode</code>) to easily implement theming!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      case View.TYPOGRAPHY:
          return (
              <div className="space-y-6 animate-fadeIn">
                   <header className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Typography & Units</h2>
                      <p className="text-gray-400 text-lg">Mastering readable text and responsive sizing units.</p>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                          <h3 className="font-bold text-white mb-4">Relative Units (Recommended)</h3>
                          <div className="space-y-4">
                              <div className="p-3 bg-gray-900 rounded border border-gray-600">
                                  <div className="flex justify-between items-center mb-1">
                                      <span className="text-pink-400 font-mono font-bold">rem</span>
                                      <span className="text-xs text-gray-500">Relative to Root (html)</span>
                                  </div>
                                  <p className="text-sm text-gray-300">Best for layout and spacing. 1rem = 16px (usually).</p>
                              </div>
                              <div className="p-3 bg-gray-900 rounded border border-gray-600">
                                  <div className="flex justify-between items-center mb-1">
                                      <span className="text-pink-400 font-mono font-bold">em</span>
                                      <span className="text-xs text-gray-500">Relative to Parent</span>
                                  </div>
                                  <p className="text-sm text-gray-300">Best for components scaling with their own font-size.</p>
                              </div>
                               <div className="p-3 bg-gray-900 rounded border border-gray-600">
                                  <div className="flex justify-between items-center mb-1">
                                      <span className="text-pink-400 font-mono font-bold">ch</span>
                                      <span className="text-xs text-gray-500">Character Width (0)</span>
                                  </div>
                                  <p className="text-sm text-gray-300">Perfect for limiting line length (max-width: 65ch).</p>
                              </div>
                          </div>
                       </div>

                       <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                           <h3 className="font-bold text-white mb-4">Visual Playground</h3>
                           <div className="space-y-6">
                               <div>
                                   <p className="text-xs text-gray-500 mb-1">font-weight: 700</p>
                                   <p className="text-4xl font-bold text-white">Heavy Headline</p>
                               </div>
                               <div>
                                   <p className="text-xs text-gray-500 mb-1">letter-spacing: -0.05em</p>
                                   <p className="text-2xl font-semibold text-white tracking-tighter">Tight Tracking</p>
                               </div>
                               <div>
                                   <p className="text-xs text-gray-500 mb-1">line-height: 1.6 (Perfect for Body)</p>
                                   <p className="text-base text-gray-300 leading-relaxed">
                                       Good typography isn't just about choosing a font; it's about establishing a rhythm. 
                                       Line height (leading) allows the eye to travel comfortably from the end of one line to the beginning of the next.
                                   </p>
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          );
      case View.ANIMATIONS:
        return (
            <div className="space-y-6 animate-fadeIn">
                <header className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Transitions & Animations</h2>
                  <p className="text-gray-400 text-lg">Bringing life to the interface with performant CSS motion.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Transition Playground */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 lg:col-span-1">
                        <h3 className="font-bold text-white mb-4">Transitions</h3>
                        <p className="text-sm text-gray-400 mb-6">Change property values smoothly over a given duration.</p>
                        
                        <div className="group h-32 w-full bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer border border-gray-600 hover:border-indigo-500 transition-colors">
                            <div className="w-16 h-16 bg-indigo-500 rounded transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:bg-indigo-600 group-hover:rounded-lg flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-bold">Hover Me</span>
                            </div>
                        </div>
                        <code className="block mt-4 text-xs bg-gray-950 p-3 rounded text-gray-300 font-mono">
                           transition: all 0.5s ease-out;
                        </code>
                    </div>

                    {/* Keyframe Animation */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 lg:col-span-2">
                        <h3 className="font-bold text-white mb-4">Keyframe Animation</h3>
                        <p className="text-sm text-gray-400 mb-6">Complex sequences of animation steps.</p>
                        
                        <div className="h-40 bg-gray-900 rounded-lg border border-gray-600 relative overflow-hidden flex items-center justify-center">
                            <div className="w-12 h-12 bg-pink-500 rounded-full animate-bounce shadow-[0_0_20px_rgba(236,72,153,0.6)]"></div>
                            <div className="absolute bottom-4 text-gray-500 text-xs">animate-bounce (Tailwind util)</div>
                        </div>

                         <div className="mt-4 grid grid-cols-2 gap-4">
                             <div className="bg-gray-950 p-3 rounded text-xs font-mono text-gray-300">
                                 <span className="text-pink-400">@keyframes</span> float {'{'}<br/>
                                 &nbsp;&nbsp;0% {'{'} <span className="text-blue-300">transform</span>: <span className="text-green-400">translateY(0)</span>; {'}'}<br/>
                                 &nbsp;&nbsp;50% {'{'} <span className="text-blue-300">transform</span>: <span className="text-green-400">translateY(-20px)</span>; {'}'}<br/>
                                 &nbsp;&nbsp;100% {'{'} <span className="text-blue-300">transform</span>: <span className="text-green-400">translateY(0)</span>; {'}'}<br/>
                                 {'}'}
                             </div>
                             <div className="bg-indigo-900/20 p-4 rounded text-sm text-indigo-200">
                                 <strong>Performance Tip:</strong> Only animate <code className="bg-black/30 px-1 rounded">opacity</code> and <code className="bg-black/30 px-1 rounded">transform</code> to ensure 60fps animations that don't trigger browser layout reflows.
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col md:flex-row text-gray-100 font-sans selection:bg-indigo-500/30">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center z-20 sticky top-0">
        <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">CSS Mastery</h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-gray-900 border-r border-gray-800 z-10 transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
           <div className="flex items-center gap-2 mb-8">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="text-white w-5 h-5" />
             </div>
             <h1 className="font-bold text-xl tracking-tight text-white">CSS Mastery</h1>
           </div>

           <nav className="space-y-1">
             {navItems.map((item) => {
               const Icon = IconMap[item.icon];
               return (
                 <button
                   key={item.id}
                   onClick={() => {
                     setCurrentView(item.id);
                     setMobileMenuOpen(false);
                   }}
                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                     currentView === item.id 
                       ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                       : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                   }`}
                 >
                   <Icon className={`w-5 h-5 ${currentView === item.id ? 'text-white' : 'text-gray-500 group-hover:text-white'}`} />
                   <span className="font-medium text-sm">{item.label}</span>
                 </button>
               );
             })}
           </nav>

           <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <p className="text-xs text-gray-400 mb-2">Progress</p>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-2/3"></div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 text-right">Reference Guide v1.1</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 md:h-screen md:overflow-y-auto bg-gray-950">
        <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12 pb-32">
          {renderContent()}
        </div>
      </main>

      {/* AI Assistant */}
      <GeminiTutor />
    </div>
  );
};

export default App;

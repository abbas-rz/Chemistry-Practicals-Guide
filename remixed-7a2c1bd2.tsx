import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function VivaGuide() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'algorithm',
      title: 'Step-by-Step Algorithm',
      emoji: '🎯',
      items: [
        { 
          step: 'Step 1', 
          action: 'Setup',
          detail: 'Get burette, pipette, flask, white tile. Fill burette with NaOH. Write starting number.' 
        },
        { 
          step: 'Step 2', 
          action: 'Measure',
          detail: 'Use pipette. Take exactly 20mL oxalic acid. Put in flask.' 
        },
        { 
          step: 'Step 3', 
          action: 'Add indicator',
          detail: 'Add 2 drops phenolphthalein. Still colorless? Good.' 
        },
        { 
          step: 'Step 4', 
          action: 'Titrate',
          detail: 'Open burette tap slowly. Swirl flask continuously. Watch for pale pink.' 
        },
        { 
          step: 'Step 5', 
          action: 'Stop exactly',
          detail: 'First pale pink that stays for 30 seconds = STOP. Write final number.' 
        },
        { 
          step: 'Step 6', 
          action: 'Repeat',
          detail: 'Do this 2 more times. All three readings should match within 0.1mL.' 
        },
        { 
          step: 'Step 7', 
          action: 'Calculate',
          detail: 'Volume used = Final - Initial. Average the matching readings. Use formula: M₁V₁/2 = M₂V₂' 
        }
      ]
    },
    {
      id: 'cations',
      title: 'Cation Tests',
      emoji: '⚗️',
      items: [
        { 
          ion: 'NH₄⁺ (Ammonium)',
          test: 'Heat salt + concentrated NaOH',
          see: 'Smell ammonia (like pee). Moist red litmus paper turns blue.',
          confirm: 'Add Nessler\'s reagent → brown precipitate appears'
        },
        { 
          ion: 'Pb²⁺ (Lead)',
          test: 'Add dilute HCl',
          see: 'White precipitate forms immediately (PbCl₂)',
          confirm: 'Heat it → dissolves. Cool it → white needle crystals form. OR: Add H₂S in acid → black precipitate (PbS)'
        },
        { 
          ion: 'Al³⁺ (Aluminum)',
          test: 'Add NH₄Cl + NH₄OH',
          see: 'White jelly-like precipitate appears',
          confirm: 'Add MORE NH₄OH → jelly stays (doesn\'t dissolve). Dissolve in HCl, add NaOH → precipitate again. Add excess NaOH → dissolves (makes aluminate)'
        }
      ]
    },
    {
      id: 'anions',
      title: 'Anion Tests',
      emoji: '🧪',
      items: [
        { 
          ion: 'CO₃²⁻ (Carbonate)',
          test: 'Add dilute H₂SO₄',
          see: 'Fizzing (like soda). Colorless, odorless gas.',
          confirm: 'Bubble gas through lime water → turns milky white'
        },
        { 
          ion: 'SO₃²⁻ (Sulphite)',
          test: 'Add dilute H₂SO₄',
          see: 'Pungent smell (like burnt matches). Colorless gas.',
          confirm: 'Gas decolorizes acidified KMnO₄. Lime water turns milky, then clears'
        },
        { 
          ion: 'S²⁻ (Sulphide)',
          test: 'Add dilute H₂SO₄',
          see: 'Rotten egg smell. Gas blackens lead acetate paper.',
          confirm: 'Add sodium nitroprusside → violet color appears'
        },
        { 
          ion: 'CH₃COO⁻ (Acetate)',
          test: 'Add concentrated H₂SO₄',
          see: 'Vinegar smell (acetic acid vapors)',
          confirm: 'Heat with ethanol → fruity smell. Add FeCl₃ → blood red color'
        },
        { 
          ion: 'SO₄²⁻ (Sulphate)',
          test: 'Add BaCl₂ (after adding dilute HCl first)',
          see: 'White precipitate appears (BaSO₄)',
          confirm: 'Try dissolving in concentrated HCl → won\'t dissolve. That\'s sulphate.'
        }
      ]
    },
    {
      id: 'formula',
      title: 'The Math',
      emoji: '🔢',
      items: [
        { 
          what: 'The equation',
          why: '(COOH)₂ + 2NaOH → (COONa)₂ + 2H₂O'
        },
        { 
          what: 'The formula',
          why: 'M₁V₁/2 = M₂V₂ where M₁ = oxalic acid molarity (given), V₁ = 20mL, M₂ = NaOH molarity (what you find), V₂ = average volume you used'
        },
        { 
          what: 'Why divide by 2?',
          why: 'Oxalic acid has 2 hydrogens that react. That\'s what diprotic means.'
        },
        { 
          what: 'What\'s concordant?',
          why: 'Your three readings are within 0.1mL of each other. If one is way off, ignore it and do another trial.'
        },
        { 
          what: 'Endpoint color',
          why: 'Colorless → pale pink (not bright pink, not red). One extra drop = wrong answer.'
        }
      ]
    },
    {
      id: 'viva',
      title: 'Viva Questions',
      emoji: '💬',
      items: [
        { q: 'Why phenolphthalein indicator?', a: 'Works in pH range 8.2-10, perfect for weak acid + strong base titration' },
        { q: 'Why swirl the flask?', a: 'Ensures proper mixing so reaction happens uniformly' },
        { q: 'Why read at eye level?', a: 'Avoid parallax error. Looking up or down gives wrong reading' },
        { q: 'Why use anhydrous oxalic acid?', a: 'Absorbs water from air. Water changes the concentration' },
        { q: 'Why wash burette with NaOH before filling?', a: 'Remove water drops. Water dilutes your solution' },
        { q: 'What if readings don\'t match?', a: 'Ignore the outlier. Use concordant ones. Do more trials if needed' },
        { q: 'How to identify unknown salt?', a: 'Test cation first (flame, group tests). Then test anion (acid tests). Confirm both' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Chemistry Practicals</h1>
          <p className="text-[15px] text-white/60 mt-2 font-normal">Step-by-step guide for perfect execution.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-8">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[28px] p-8 mb-6 border border-white/5">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-[28px] font-semibold mb-3 tracking-tight">30 Marks Breakdown</h2>
          <div className="space-y-2 text-[15px] text-white/70">
            <p>Volumetric Analysis: 10 marks</p>
            <p>Salt Analysis: 10 marks</p>
            <p>Viva Voce: 5 marks</p>
            <p>Record Book: 5 marks</p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="bg-zinc-900/80 rounded-[20px] overflow-hidden border border-white/5">
                <button
                  onClick={() => setActiveSection(isActive ? null : section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between active:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{section.emoji}</span>
                    <div className="text-left">
                      <div className="font-semibold text-[17px] tracking-tight text-white">{section.title}</div>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`text-white/40 transition-transform duration-200 ${isActive ? 'rotate-90' : ''}`} 
                    size={20} 
                  />
                </button>

                {isActive && (
                  <div className="px-6 pb-6 space-y-3">
                    {/* Algorithm format */}
                    {section.id === 'algorithm' && section.items.map((item, idx) => (
                      <div key={idx} className="bg-zinc-800/60 rounded-[16px] p-5 border-l-[3px] border-red-600/80">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-red-500/90 font-semibold text-[15px] shrink-0">{item.step}</span>
                          <span className="text-white/90 font-medium text-[15px]">{item.action}</span>
                        </div>
                        <div className="text-white/60 text-[15px] leading-relaxed font-normal pl-[68px]">{item.detail}</div>
                      </div>
                    ))}

                    {/* Cation format */}
                    {section.id === 'cations' && section.items.map((item, idx) => (
                      <div key={idx} className="bg-zinc-800/60 rounded-[16px] p-5 border-l-[3px] border-red-600/80">
                        <div className="font-semibold text-white/90 mb-3 text-[16px]">{item.ion}</div>
                        <div className="space-y-2 text-[15px]">
                          <div><span className="text-white/50">Test:</span> <span className="text-white/70">{item.test}</span></div>
                          <div><span className="text-white/50">Observe:</span> <span className="text-white/70">{item.see}</span></div>
                          <div><span className="text-white/50">Confirm:</span> <span className="text-white/70">{item.confirm}</span></div>
                        </div>
                      </div>
                    ))}

                    {/* Anion format */}
                    {section.id === 'anions' && section.items.map((item, idx) => (
                      <div key={idx} className="bg-zinc-800/60 rounded-[16px] p-5 border-l-[3px] border-red-600/80">
                        <div className="font-semibold text-white/90 mb-3 text-[16px]">{item.ion}</div>
                        <div className="space-y-2 text-[15px]">
                          <div><span className="text-white/50">Test:</span> <span className="text-white/70">{item.test}</span></div>
                          <div><span className="text-white/50">Observe:</span> <span className="text-white/70">{item.see}</span></div>
                          <div><span className="text-white/50">Confirm:</span> <span className="text-white/70">{item.confirm}</span></div>
                        </div>
                      </div>
                    ))}

                    {/* Formula format */}
                    {section.id === 'formula' && section.items.map((item, idx) => (
                      <div key={idx} className="bg-zinc-800/60 rounded-[16px] p-5 border-l-[3px] border-red-600/80">
                        <div className="font-medium text-white/90 mb-2 text-[15px]">{item.what}</div>
                        <div className="text-white/70 text-[15px] leading-relaxed font-normal">{item.why}</div>
                      </div>
                    ))}

                    {/* Viva format */}
                    {section.id === 'viva' && section.items.map((item, idx) => (
                      <div key={idx} className="bg-zinc-800/60 rounded-[16px] p-5 border-l-[3px] border-red-600/80">
                        <div className="font-medium text-white/90 mb-2 text-[15px]">{item.q}</div>
                        <div className="text-white/70 text-[15px] leading-relaxed font-normal">{item.a}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Tips */}
        <div className="mt-6 space-y-2">
          <div className="bg-zinc-900/80 rounded-[20px] p-6 border border-white/5">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <div className="font-semibold mb-2 text-white text-[17px]">Critical Rules</div>
                <div className="space-y-1 text-[15px] text-white/60 leading-relaxed">
                  <p>Use distilled water only</p>
                  <p>Read burette at eye level</p>
                  <p>Swirl flask constantly during titration</p>
                  <p>Stop at first pale pink that persists</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 rounded-[20px] p-6 border border-white/5">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📝</span>
              <div>
                <div className="font-semibold mb-2 text-white text-[17px]">Record Book</div>
                <p className="text-[15px] text-white/60 leading-relaxed">Neat tables. Clear observations. Proper units. This is 5 marks you control completely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
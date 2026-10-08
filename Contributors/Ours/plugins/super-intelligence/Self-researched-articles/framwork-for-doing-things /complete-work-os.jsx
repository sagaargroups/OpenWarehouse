import { useState } from "react";

const LAYERS = [
  {
    id: 0,
    code: "00",
    label: "THE QUESTION",
    subtitle: "Root of all work",
    accent: "#E8C547",
    dim: "#2A2200",
    depth: "DEEPEST",
    truth: "Your output can never exceed the quality of your opening question. Most people skip this layer entirely. This is why most work is average.",
    expansion: "Einstein said: if he had 1 hour to save the world, he'd spend 55 minutes defining the problem. The question IS the work. Everything else is execution of the question.",
    items: [
      { id: "00a", text: "What is the REAL question here — not the surface one?" },
      { id: "00b", text: "Who has asked this question before, and what did they learn?" },
      { id: "00c", text: "What would the answer look like if it was perfect?" },
      { id: "00d", text: "What am I assuming that might be completely wrong?" },
      { id: "00e", text: "Compress the entire work into one sentence a child understands but an expert respects." },
    ],
  },
  {
    id: 1,
    code: "01",
    label: "INVERSION",
    subtitle: "Map failure before success",
    accent: "#E85447",
    dim: "#220800",
    depth: "ROOT",
    truth: "Before asking how to succeed — ask how this definitely fails. Mapping failure modes first is what experience actually teaches you. Encode it before the experience exists.",
    expansion: "Charlie Munger: 'Invert, always invert.' The Stoics called it premeditatio malorum — premeditation of evils. Every great operator does this instinctively. Build it deliberately.",
    items: [
      { id: "01a", text: "List every way this work could completely fail" },
      { id: "01b", text: "What uncertainty will appear that I am not planning for?" },
      { id: "01c", text: "What assumptions, if wrong, would break everything?" },
      { id: "01d", text: "What has killed similar work done by others?" },
      { id: "01e", text: "What does the worst version of this output look like? Ensure you are not building it." },
    ],
  },
  {
    id: 2,
    code: "02",
    label: "KNOWLEDGE STACK",
    subtitle: "Information → Knowledge → Experience → Wisdom",
    accent: "#A78BFA",
    dim: "#120A22",
    depth: "STRUCTURAL",
    truth: "Information is raw data. Knowledge is patterns from that data. Experience is knowledge tested against real resistance. Wisdom is knowing which knowledge applies when. Most people have information and call it experience.",
    expansion: "The dangerous gap: people act with information-level understanding at wisdom-level stakes. Before starting, be honest about which level you actually hold — and fill the gaps deliberately.",
    items: [
      { id: "02a", text: "What do I have: information, knowledge, experience, or wisdom on this?" },
      { id: "02b", text: "Where are the gaps? What do I need to acquire before executing?" },
      { id: "02c", text: "Who has experience I don't? Can I encode their knowledge before I start?" },
      { id: "02d", text: "Embed the experiment phase FIRST — test the most uncertain element before building the whole" },
      { id: "02e", text: "What would take 5 years to learn by doing? Find a shortcut to that knowledge now." },
    ],
  },
  {
    id: 3,
    code: "03",
    label: "FOUNDATION",
    subtitle: "Copy the proven 80% — move fast",
    accent: "#C8A97E",
    dim: "#1A1208",
    depth: "OPERATIONAL",
    truth: "80% of any work is already solved by others. Finding it, using it, and not reinventing it is not laziness — it is intelligence. Reserve your energy for the 20% that matters.",
    expansion: "Every great agency, researcher, and builder copies the operational skeleton from what already works. The mistake is copying the output too. Copy the system. Own the result.",
    items: [
      { id: "03a", text: "Map the full lifecycle of this work — start to absolute end" },
      { id: "03b", text: "Who has built something close to this? Extract their proven structure" },
      { id: "03c", text: "List every known parameter and hard requirement" },
      { id: "03d", text: "Identify the 80% that is operational — copy it, move fast" },
      { id: "03e", text: "Confirm: can someone new follow this structure and produce consistent output?" },
    ],
  },
  {
    id: 4,
    code: "04",
    label: "CREATIVE CORE",
    subtitle: "The 20% that is entirely yours",
    accent: "#F472B6",
    dim: "#1A0812",
    depth: "DIFFERENTIATOR",
    truth: "Operations can be copied. Output cannot. The world does not need another version of something that already exists. Uniqueness is not a personality trait — it is a repeatable discipline.",
    expansion: "Force a creative constraint. Question every default assumption. Ask: would the best person in this field call this genuinely bold? If the answer is no — you haven't gone far enough.",
    items: [
      { id: "04a", text: "What makes this output UNIQUELY different — not just better, but different in kind?" },
      { id: "04b", text: "What is the default everyone else would do? Do not do that." },
      { id: "04c", text: "Apply breakdown thinking — question every inherited assumption in this field" },
      { id: "04d", text: "Force one creative constraint that separates you from any comparable work" },
      { id: "04e", text: "Would an expert in this field call this genuinely bold? If no — go further." },
    ],
  },
  {
    id: 5,
    code: "05",
    label: "FEEDBACK LOOP",
    subtitle: "Who learns fastest, wins",
    accent: "#34D399",
    dim: "#081A10",
    depth: "VELOCITY",
    truth: "The real competitive advantage is not intelligence or resources. It is whoever learns from reality the fastest. Build the feedback loop before you build the output.",
    expansion: "Darwin did not say the strongest survive. He said the most adaptable. Every system that cannot track, update, and absorb new reality will die — slowly at first, then all at once.",
    items: [
      { id: "05a", text: "Set up a tracking mechanism BEFORE launch — not after" },
      { id: "05b", text: "Define update triggers: what new information would change this work?" },
      { id: "05c", text: "Build the intake for unexpected inputs — new context, new constraints, new reality" },
      { id: "05d", text: "Schedule the first review before the work is done" },
      { id: "05e", text: "Ask: is this system alive, or is it finished? Finished systems die." },
    ],
  },
];

const QUESTION_SYSTEM = [
  { level: "SURFACE", q: "What do I need to do?", note: "Where most people start and stop" },
  { level: "STRUCTURE", q: "Why does this need to exist at all?", note: "First challenge of the assumption" },
  { level: "ROOT", q: "What is the real problem underneath this task?", note: "This changes the entire approach" },
  { level: "INVERSION", q: "What would make this worthless?", note: "Maps the real risk" },
  { level: "COMPRESSION", q: "What is the one-sentence truth of this entire work?", note: "The mastery test — if you can't, you're not ready" },
];

export default function CompleteWorkOS() {
  const [checked, setChecked] = useState({});
  const [activeLayer, setActiveLayer] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [expandedTruth, setExpandedTruth] = useState(false);

  const toggle = (id) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  const totalItems = LAYERS.reduce((a, l) => a + l.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((totalChecked / totalItems) * 100);

  const layer = LAYERS.find((l) => l.id === activeLayer);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "'Georgia', serif",
      color: "#E0D8CC",
    }}>

      {/* Top Bar */}
      <div style={{
        padding: "32px 48px 28px",
        borderBottom: "1px solid #1A1A1A",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <div style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "4px", color: "#444", marginBottom: "6px" }}>
            COMPLETE WORK OS — ROOT TO OUTPUT
          </div>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: "normal", margin: 0, letterSpacing: "-1px" }}>
            The 6-Layer Framework
          </h1>
          <p style={{ fontSize: "12px", color: "#555", marginTop: "6px", fontFamily: "monospace", letterSpacing: "1px", margin: "6px 0 0" }}>
            Deeper layers govern everything above them. Get root wrong — surface doesn't matter.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Question System Toggle */}
          <button
            onClick={() => setShowQuestions(!showQuestions)}
            style={{
              background: showQuestions ? "#E8C54720" : "transparent",
              border: `1px solid ${showQuestions ? "#E8C547" : "#2A2A2A"}`,
              color: showQuestions ? "#E8C547" : "#666",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "11px",
              fontFamily: "monospace",
              letterSpacing: "2px",
              borderRadius: "2px",
            }}
          >
            QUESTION SYSTEM
          </button>

          {/* Progress */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              background: `conic-gradient(${layer.accent} ${progress * 3.6}deg, #1A1A1A 0deg)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "#080808", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "13px", fontWeight: "bold", color: layer.accent, fontFamily: "monospace" }}>{progress}%</span>
              </div>
            </div>
            <div style={{ fontSize: "9px", color: "#444", marginTop: "4px", fontFamily: "monospace", letterSpacing: "1px" }}>
              {totalChecked}/{totalItems}
            </div>
          </div>
        </div>
      </div>

      {/* Question System Panel */}
      {showQuestions && (
        <div style={{
          background: "#0E0C00",
          borderBottom: "1px solid #2A2200",
          padding: "32px 48px",
        }}>
          <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#E8C547", letterSpacing: "3px", marginBottom: "20px" }}>
            THE QUESTION HIERARCHY — Run this on any work before anything else
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {QUESTION_SYSTEM.map((q, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                padding: "14px 0",
                borderBottom: i < QUESTION_SYSTEM.length - 1 ? "1px solid #1A1A00" : "none",
              }}>
                <div style={{
                  width: "100px",
                  flexShrink: 0,
                  fontSize: "9px",
                  fontFamily: "monospace",
                  letterSpacing: "2px",
                  color: i === 0 ? "#444" : i === QUESTION_SYSTEM.length - 1 ? "#E8C547" : `hsl(${45 + i * 20}, 60%, ${35 + i * 8}%)`,
                  paddingTop: "2px",
                }}>
                  {q.level}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "15px", color: "#C8C0B0", marginBottom: "4px" }}>
                    "{q.q}"
                  </div>
                  <div style={{ fontSize: "12px", color: "#555", fontFamily: "monospace" }}>
                    ↳ {q.note}
                  </div>
                </div>
                <div style={{
                  fontSize: "28px",
                  color: "#1A1A00",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: "20px",
            padding: "16px 20px",
            background: "#1A1400",
            border: "1px solid #2A2200",
            borderRadius: "2px",
            fontSize: "13px",
            color: "#A89840",
            fontStyle: "italic",
            lineHeight: "1.7",
          }}>
            The mastery test: if you cannot compress the entire work into one sentence a child understands but an expert respects — you do not fully understand it yet. Run this test before starting. Run it again at the end.
          </div>
        </div>
      )}

      {/* Layer Navigation */}
      <div style={{ display: "flex", borderBottom: "1px solid #1A1A1A", overflowX: "auto" }}>
        {LAYERS.map((l, i) => {
          const layerChecked = l.items.filter(item => checked[item.id]).length;
          const layerTotal = l.items.length;
          const layerPct = Math.round((layerChecked / layerTotal) * 100);
          return (
            <button
              key={l.id}
              onClick={() => { setActiveLayer(l.id); setExpandedTruth(false); }}
              style={{
                flex: "0 0 auto",
                minWidth: "120px",
                background: activeLayer === l.id ? l.dim : "transparent",
                border: "none",
                borderRight: "1px solid #1A1A1A",
                borderBottom: activeLayer === l.id ? `2px solid ${l.accent}` : "2px solid transparent",
                padding: "16px 16px 12px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: "9px", fontFamily: "monospace", color: l.accent, letterSpacing: "2px", marginBottom: "3px" }}>
                {l.code} · {l.depth}
              </div>
              <div style={{ fontSize: "12px", color: activeLayer === l.id ? "#E0D8CC" : "#666", fontWeight: activeLayer === l.id ? "bold" : "normal", marginBottom: "8px" }}>
                {l.label}
              </div>
              <div style={{ height: "2px", background: "#111", borderRadius: "1px" }}>
                <div style={{
                  height: "100%",
                  width: `${layerPct}%`,
                  background: l.accent,
                  borderRadius: "1px",
                  transition: "width 0.3s",
                }} />
              </div>
              <div style={{ fontSize: "9px", color: "#333", marginTop: "4px", fontFamily: "monospace" }}>
                {layerChecked}/{layerTotal}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Layer */}
      <div style={{ display: "flex", minHeight: "420px" }}>

        {/* Left Panel */}
        <div style={{
          width: "300px",
          flexShrink: 0,
          background: layer.dim,
          borderRight: "1px solid #1A1A1A",
          padding: "36px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          <div>
            <div style={{ fontSize: "9px", fontFamily: "monospace", color: layer.accent, letterSpacing: "3px", marginBottom: "14px" }}>
              THE TRUTH
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#B8B0A0", fontStyle: "italic", margin: 0 }}>
              "{layer.truth}"
            </p>
          </div>

          <button
            onClick={() => setExpandedTruth(!expandedTruth)}
            style={{
              background: "transparent",
              border: `1px solid ${layer.accent}30`,
              color: layer.accent,
              padding: "8px 12px",
              cursor: "pointer",
              fontSize: "10px",
              fontFamily: "monospace",
              letterSpacing: "2px",
              textAlign: "left",
              borderRadius: "2px",
            }}
          >
            {expandedTruth ? "− COLLAPSE" : "+ WHY THIS MATTERS"}
          </button>

          {expandedTruth && (
            <p style={{ fontSize: "12px", lineHeight: "1.8", color: "#888", margin: 0 }}>
              {layer.expansion}
            </p>
          )}

          <div style={{ marginTop: "auto", fontSize: "52px", color: "#1A1A1A", fontFamily: "monospace", fontWeight: "bold", lineHeight: 1 }}>
            {layer.code}
          </div>
        </div>

        {/* Checklist */}
        <div style={{ flex: 1, padding: "36px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#444", letterSpacing: "3px" }}>
              COMPLETE BEFORE MOVING TO NEXT LAYER
            </div>
            <div style={{ fontSize: "11px", fontFamily: "monospace", color: layer.accent }}>
              {layer.subtitle}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {layer.items.map((item, i) => (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 22px",
                  borderRadius: "3px",
                  background: checked[item.id] ? "#0F0F0F" : "transparent",
                  border: `1px solid ${checked[item.id] ? layer.accent + "30" : "#141414"}`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: "20px", height: "20px",
                  border: `1.5px solid ${checked[item.id] ? layer.accent : "#222"}`,
                  borderRadius: "2px",
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: checked[item.id] ? layer.accent + "15" : "transparent",
                  transition: "all 0.2s",
                  marginTop: "2px",
                }}>
                  {checked[item.id] && (
                    <span style={{ color: layer.accent, fontSize: "12px" }}>✓</span>
                  )}
                </div>
                <div>
                  <span style={{
                    fontSize: "9px", fontFamily: "monospace",
                    color: layer.accent, opacity: 0.5, marginRight: "8px",
                  }}>
                    {layer.code}.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: "14px",
                    color: checked[item.id] ? "#444" : "#C0B8A8",
                    textDecoration: checked[item.id] ? "line-through" : "none",
                    textDecorationColor: "#333",
                    lineHeight: "1.6",
                    transition: "all 0.2s",
                  }}>
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom — The Hierarchy Stack Visual */}
      <div style={{ borderTop: "1px solid #1A1A1A", padding: "48px" }}>
        <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#444", letterSpacing: "3px", marginBottom: "28px" }}>
          THE HIERARCHY — DEEPER LAYERS GOVERN EVERYTHING ABOVE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {[...LAYERS].reverse().map((l, i) => {
            const w = 40 + i * 10;
            const layerChecked = l.items.filter(item => checked[item.id]).length;
            const layerTotal = l.items.length;
            const done = layerChecked === layerTotal;
            return (
              <div
                key={l.id}
                onClick={() => setActiveLayer(l.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  cursor: "pointer",
                }}
              >
                <div style={{
                  width: `${w}%`,
                  padding: "10px 16px",
                  background: done ? l.dim : "#0C0C0C",
                  border: `1px solid ${done ? l.accent + "40" : "#161616"}`,
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.2s",
                }}>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: done ? l.accent : "#444", letterSpacing: "2px" }}>
                    {l.code} · {l.label}
                  </span>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: done ? l.accent : "#333" }}>
                    {done ? "✓ COMPLETE" : `${layerChecked}/${layerTotal}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 3 Root Laws */}
        <div style={{
          marginTop: "48px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          borderTop: "1px solid #1A1A1A",
          paddingTop: "40px",
        }}>
          {[
            { color: "#E8C547", law: "LAW 01", title: "Question quality is the ceiling.", body: "No output can exceed the quality of the question that generated it. Most people skip the question entirely." },
            { color: "#A78BFA", law: "LAW 02", title: "Knowledge and experience are not the same.", body: "Information without experience is dangerous. Encode experience deliberately before you execute." },
            { color: "#34D399", law: "LAW 03", title: "The fastest learner wins.", body: "Not the most intelligent. Not the most resourced. Whoever builds the tightest feedback loop with reality — wins." },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: "9px", fontFamily: "monospace", color: item.color, letterSpacing: "3px", marginBottom: "10px" }}>
                {item.law}
              </div>
              <div style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "8px", color: "#E0D8CC" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.75", margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

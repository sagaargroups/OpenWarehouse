import { useState } from "react";

const PHASES = [
  {
    id: 1,
    code: "01",
    label: "FOUNDATION",
    subtitle: "Copy What Works",
    color: "#C8A97E",
    bg: "#1A1208",
    rule: "80% of any work is already solved by others. Find it. Use it. Don't reinvent.",
    items: [
      { id: "1a", text: "Map the full lifecycle of this work — start to end" },
      { id: "1b", text: "Research who already built something similar" },
      { id: "1c", text: "Extract the proven operational structure" },
      { id: "1d", text: "List every known parameter and requirement" },
      { id: "1e", text: "Identify the 80% you can copy to move fast" },
    ],
  },
  {
    id: 2,
    code: "02",
    label: "EXPERIENCE LAYER",
    subtitle: "Embed Experiment First",
    color: "#7EB8C8",
    bg: "#080F1A",
    rule: "Years of experience = knowing what can go wrong. Encode it BEFORE starting, not after.",
    items: [
      { id: "2a", text: "List every uncertainty that could appear in this work" },
      { id: "2b", text: "Embed the experiment phase FIRST — not last" },
      { id: "2c", text: "Map scenarios: what if X fails, Y changes, Z appears?" },
      { id: "2d", text: "Pre-encode the knowledge that takes years to earn" },
      { id: "2e", text: "Build the 'what could break this' test before starting" },
    ],
  },
  {
    id: 3,
    code: "03",
    label: "CREATIVE CORE",
    subtitle: "The 20% That Is Yours",
    color: "#C87EA0",
    bg: "#1A0810",
    rule: "Operations can be copied. Output cannot. Your work must think differently, look different, land differently.",
    items: [
      { id: "3a", text: "Define: what makes this output UNIQUELY different?" },
      { id: "3b", text: "Apply breakdown thinking — question every assumption" },
      { id: "3c", text: "Force a creative constraint that separates you" },
      { id: "3d", text: "Ask: would an expert in this field call this bold?" },
      { id: "3e", text: "Make the output rich, not just complete" },
    ],
  },
  {
    id: 4,
    code: "04",
    label: "LIVING SYSTEM",
    subtitle: "Always Ready to Adapt",
    color: "#7EC87E",
    bg: "#081A08",
    rule: "Any system that cannot track, update, and absorb new reality will die. Build the loop from day one.",
    items: [
      { id: "4a", text: "Set up a tracking mechanism before launch" },
      { id: "4b", text: "Define update triggers — what makes this system evolve?" },
      { id: "4c", text: "Build an intake for unexpected inputs (new info, new context)" },
      { id: "4d", text: "Schedule a review — nothing is final" },
      { id: "4e", text: "Confirm: can someone new follow this and produce the same quality?" },
    ],
  },
];

const BUILDS = [
  { label: "Client Agency", icon: "◈" },
  { label: "Research Paper", icon: "◈" },
  { label: "SOP / System", icon: "◈" },
  { label: "Product Launch", icon: "◈" },
  { label: "Business Model", icon: "◈" },
  { label: "New Career", icon: "◈" },
  { label: "Content Strategy", icon: "◈" },
  { label: "Any Work. Anywhere.", icon: "◈" },
];

export default function WorkOS() {
  const [checked, setChecked] = useState({});
  const [activePhase, setActivePhase] = useState(1);

  const toggle = (id) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  const totalItems = PHASES.reduce((a, p) => a + p.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((totalChecked / totalItems) * 100);

  const phase = PHASES.find((p) => p.id === activePhase);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0C0C0C",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E0D0",
      padding: "0",
      overflowX: "hidden",
    }}>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2A2A2A",
        padding: "40px 48px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#666", marginBottom: "8px", fontFamily: "monospace" }}>
            UNIVERSAL WORK FRAMEWORK
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: "normal", margin: 0, letterSpacing: "-1px", lineHeight: 1 }}>
            The Work OS
          </h1>
          <p style={{ color: "#888", fontSize: "14px", marginTop: "10px", fontFamily: "monospace", letterSpacing: "1px" }}>
            Pattern · Cascade · Checklist — For Any Work In Any Field
          </p>
        </div>

        {/* Progress Ring */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            background: `conic-gradient(#C8A97E ${progress * 3.6}deg, #1A1A1A 0deg)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%",
              background: "#0C0C0C", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "#C8A97E", fontFamily: "monospace" }}>{progress}%</span>
            </div>
          </div>
          <div style={{ fontSize: "10px", color: "#555", marginTop: "6px", fontFamily: "monospace", letterSpacing: "1px" }}>
            {totalChecked}/{totalItems} DONE
          </div>
        </div>
      </div>

      {/* The Pattern — Top Cascade Bar */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #2A2A2A",
      }}>
        {PHASES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(p.id)}
            style={{
              flex: 1,
              background: activePhase === p.id ? p.bg : "transparent",
              border: "none",
              borderRight: i < 3 ? "1px solid #2A2A2A" : "none",
              borderBottom: activePhase === p.id ? `2px solid ${p.color}` : "2px solid transparent",
              padding: "20px 16px",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "10px", fontFamily: "monospace", color: p.color, letterSpacing: "2px", marginBottom: "4px" }}>
              {p.code}
            </div>
            <div style={{ fontSize: "13px", color: activePhase === p.id ? "#E8E0D0" : "#888", fontWeight: activePhase === p.id ? "bold" : "normal", letterSpacing: "0.5px" }}>
              {p.label}
            </div>
            <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>
              {p.subtitle}
            </div>
            {/* Mini progress per phase */}
            <div style={{ marginTop: "8px", height: "2px", background: "#1A1A1A", borderRadius: "1px" }}>
              <div style={{
                height: "100%",
                width: `${(p.items.filter(item => checked[item.id]).length / p.items.length) * 100}%`,
                background: p.color,
                borderRadius: "1px",
                transition: "width 0.3s",
              }} />
            </div>
          </button>
        ))}
      </div>

      {/* Active Phase Content */}
      <div style={{ display: "flex", minHeight: "400px" }}>
        {/* Left: Rule */}
        <div style={{
          width: "280px",
          flexShrink: 0,
          padding: "40px 32px",
          borderRight: "1px solid #2A2A2A",
          background: phase.bg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: "11px", fontFamily: "monospace", color: phase.color, letterSpacing: "3px", marginBottom: "20px" }}>
              THE RULE
            </div>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#C8C0B0", fontStyle: "italic", margin: 0 }}>
              "{phase.rule}"
            </p>
          </div>
          <div style={{ fontSize: "48px", color: "#1A1A1A", fontFamily: "monospace", fontWeight: "bold", marginTop: "20px" }}>
            {phase.code}
          </div>
        </div>

        {/* Right: Checklist */}
        <div style={{ flex: 1, padding: "40px 48px" }}>
          <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#555", letterSpacing: "3px", marginBottom: "28px" }}>
            TICK BEFORE YOU MOVE FORWARD
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {phase.items.map((item, i) => (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  cursor: "pointer",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  background: checked[item.id] ? "#111" : "transparent",
                  border: `1px solid ${checked[item.id] ? phase.color + "40" : "#1A1A1A"}`,
                  transition: "all 0.2s",
                }}
              >
                {/* Checkbox */}
                <div style={{
                  width: "22px",
                  height: "22px",
                  border: `1.5px solid ${checked[item.id] ? phase.color : "#333"}`,
                  borderRadius: "2px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: checked[item.id] ? phase.color + "20" : "transparent",
                  transition: "all 0.2s",
                  marginTop: "1px",
                }}>
                  {checked[item.id] && (
                    <span style={{ color: phase.color, fontSize: "14px", fontFamily: "monospace" }}>✓</span>
                  )}
                </div>
                <div>
                  <span style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: phase.color,
                    opacity: 0.6,
                    marginRight: "8px",
                  }}>
                    {phase.code}.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: "15px",
                    color: checked[item.id] ? "#555" : "#C8C0B0",
                    textDecoration: checked[item.id] ? "line-through" : "none",
                    textDecorationColor: "#444",
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

      {/* Divider */}
      <div style={{ height: "1px", background: "#2A2A2A", margin: "0" }} />

      {/* What Can Be Built */}
      <div style={{ padding: "48px" }}>
        <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#555", letterSpacing: "3px", marginBottom: "24px" }}>
          WHAT YOU CAN BUILD WITH THIS PATTERN
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {BUILDS.map((b, i) => (
            <div key={i} style={{
              padding: "10px 20px",
              border: "1px solid #2A2A2A",
              borderRadius: "2px",
              fontSize: "13px",
              color: "#888",
              fontFamily: "monospace",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ color: "#C8A97E", fontSize: "10px" }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: The 3 Laws */}
      <div style={{
        borderTop: "1px solid #2A2A2A",
        padding: "48px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "40px",
      }}>
        <div>
          <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#C8A97E", letterSpacing: "3px", marginBottom: "12px" }}>
            LAW 01
          </div>
          <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#E8E0D0" }}>
            Copy fast. Create slow.
          </div>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.7", margin: 0 }}>
            80% operational speed from copying proven systems. 20% creative output that is entirely yours.
          </p>
        </div>
        <div>
          <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#7EB8C8", letterSpacing: "3px", marginBottom: "12px" }}>
            LAW 02
          </div>
          <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#E8E0D0" }}>
            Experiment before you execute.
          </div>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.7", margin: 0 }}>
            Uncertainty does not appear at the end. It was always there. Encode the experience layer first.
          </p>
        </div>
        <div>
          <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#7EC87E", letterSpacing: "3px", marginBottom: "12px" }}>
            LAW 03
          </div>
          <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#E8E0D0" }}>
            Build alive. Not finished.
          </div>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.7", margin: 0 }}>
            Every system must track, update, and absorb new reality. The day you stop updating is the day it dies.
          </p>
        </div>
      </div>

    </div>
  );
}

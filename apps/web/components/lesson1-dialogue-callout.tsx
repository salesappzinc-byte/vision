import { LESSON1_DIALOGUE_CALLOUTS } from "@/lib/mascot-content";

export function Lesson1DialogueCallout() {
  return (
    <aside className="dialogue-callout" aria-label="Lesson 1 dialogue script preview">
      <p className="eyebrow">Lesson 1 dialogue (script — not recorded)</p>
      <p className="field-note">
        Written pilot for review. No finished lesson video or lip-sync clip is
        attached yet.
      </p>
      <ul className="dialogue-callout__list">
        {LESSON1_DIALOGUE_CALLOUTS.map((entry) => (
          <li key={entry.line.slice(0, 32)}>
            <span className="dialogue-callout__speaker">{entry.speaker}</span>
            <p>{entry.line}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

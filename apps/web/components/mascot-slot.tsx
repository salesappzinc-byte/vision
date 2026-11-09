import Image from "next/image";
import { MASCOT_HERO } from "@/lib/mascot-content";

/** Compact character integration — learner = Pomeranian, guide = ginger cat. */
export function MascotSlot({ compact = true }: { compact?: boolean }) {
  if (!compact) return null;
  return (
    <aside
      className="mascot-slot mascot-slot--with-hero"
      aria-label="Course characters"
      data-learner-role="pomeranian"
      data-guide-role="cat"
    >
      <Image
        src={MASCOT_HERO.src}
        alt={MASCOT_HERO.alt}
        width={320}
        height={180}
        sizes="(max-width: 640px) 100vw, 280px"
        className="mascot-slot__thumb"
      />
      <p className="field-note">
        Guide (ginger cat) and learner (white Pomeranian). Character still—not
        recorded lesson footage.
      </p>
    </aside>
  );
}

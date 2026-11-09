import Image from "next/image";
import { MASCOT_HERO } from "@/lib/mascot-content";

type MascotHeroProps = {
  /** When true, hide on narrow viewports to keep lesson pages compact. */
  compact?: boolean;
};

export function MascotHero({ compact = false }: MascotHeroProps) {
  return (
    <figure
      className={`mascot-hero${compact ? " mascot-hero--compact" : ""}`}
      data-learner="pomeranian"
      data-guide="cat"
    >
      <Image
        src={MASCOT_HERO.src}
        alt={MASCOT_HERO.alt}
        width={MASCOT_HERO.width}
        height={MASCOT_HERO.height}
        sizes="(max-width: 768px) 100vw, (max-width: 1120px) 55vw, 640px"
        className="mascot-hero__img"
        priority={!compact}
      />
      <figcaption className="field-note">
        Character still (review draft). Guide = ginger tabby cat; learner =
        white Pomeranian. Not a recorded software lesson.
      </figcaption>
    </figure>
  );
}

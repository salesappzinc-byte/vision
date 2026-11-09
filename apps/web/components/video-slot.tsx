/** Video + transcript slot. Real files attach later via poster/src props. */

type VideoSlotProps = {
  lessonTitle: string;
  /** When set, a real lesson recording can play. Character previews use label separately. */
  videoSrc?: string;
  posterSrc?: string;
  transcript?: string;
  /** e.g. "Character preview clip" vs lesson recording */
  mediaLabel?: string;
};

export function VideoSlot({
  lessonTitle,
  videoSrc,
  posterSrc,
  transcript,
  mediaLabel = "Lesson recording",
}: VideoSlotProps) {
  const unavailable = !videoSrc;
  return (
    <figure className="video-slot">
      <p className="eyebrow">{mediaLabel} (review draft)</p>
      {unavailable ? (
        <div
          className="video-placeholder"
          role="img"
          aria-label="Video not available yet"
        >
          Video not available yet
        </div>
      ) : (
        <video
          className="video-slot__player"
          controls
          preload="none"
          poster={posterSrc}
          aria-label={`${mediaLabel} for ${lessonTitle}`}
        >
          <source src={videoSrc} />
          Your browser cannot play this video format.
        </video>
      )}
      <figcaption className="video-slot__transcript">
        <span className="eyebrow">Transcript</span>
        <p>
          {transcript ??
            (unavailable
              ? "Video not available yet. Script text is in the lesson sections below (review draft, not final captions)."
              : "Transcript will appear here when provided.")}
        </p>
      </figcaption>
    </figure>
  );
}

"use client";

import { useId, useState } from "react";
import type { LessonVideoConfig } from "@/lib/lesson-media";
import {
  LESSON1_TRANSCRIPT_BODY,
  LESSON1_TRANSCRIPT_INTRO,
} from "@/lib/lesson1-transcript";

type VideoSlotProps = {
  lessonTitle: string;
  lessonSlug: string;
  video?: LessonVideoConfig | null;
};

export function VideoSlot({ lessonTitle, lessonSlug, video }: VideoSlotProps) {
  const unavailable = !video;
  const captionToggleId = useId();
  const [showCaptionTrack, setShowCaptionTrack] = useState(false);

  return (
    <figure className="video-slot">
      {unavailable ? (
        <>
          <p className="eyebrow">Lesson recording (review draft)</p>
          <div
            className="video-placeholder"
            role="img"
            aria-label="Video not available yet"
          >
            Video not available yet
          </div>
          <figcaption className="video-slot__transcript">
            <span className="eyebrow">Transcript</span>
            <p>
              Video not available yet. Use the written sections on this page
              (review draft).
            </p>
          </figcaption>
        </>
      ) : (
        <>
          <p className="eyebrow">{video.reviewLabel}</p>
          <p className="field-note video-slot__notice">{video.reviewNotice}</p>
          <div
            className="video-slot__frame"
            style={{ aspectRatio: `${video.width} / ${video.height}` }}
          >
            <video
              key={showCaptionTrack ? "captions-on" : "captions-off"}
              className="video-slot__player"
              controls
              preload="metadata"
              playsInline
              width={video.width}
              height={video.height}
              aria-label={`${lessonTitle} review draft video`}
            >
              <source src={video.mp4} type="video/mp4" />
              <track
                kind="captions"
                src={video.vtt}
                srcLang="en"
                label="English captions file"
                default={showCaptionTrack}
              />
              Your browser cannot play this video format.
            </video>
          </div>
          <p className="field-note">
            Duration about {Math.round(video.durationSeconds / 60)} minutes (
            {video.durationSeconds}s). No autoplay. Use player controls to play,
            pause, and seek.
          </p>
          <label className="field-label" htmlFor={captionToggleId}>
            <input
              id={captionToggleId}
              type="checkbox"
              checked={showCaptionTrack}
              onChange={(e) => setShowCaptionTrack(e.target.checked)}
            />{" "}
            Show caption file (optional — video already has burned-in captions)
          </label>
          {lessonSlug === "1" ? (
            <details className="video-transcript-details">
              <summary>Full narration transcript (text)</summary>
              <p className="field-note">{LESSON1_TRANSCRIPT_INTRO}</p>
              <pre className="video-transcript-pre">{LESSON1_TRANSCRIPT_BODY}</pre>
              <p className="field-note">
                This transcript matches the video audio. It is{" "}
                <strong>not</strong> the older separate script pilot shown in
                mascot dialogue notes.
              </p>
            </details>
          ) : null}
        </>
      )}
    </figure>
  );
}

/** Lesson-attached review media (only Lesson 1 has video in this prototype). */

export const LESSON1_VIDEO = {
  mp4: "/media/ai-foundations-gateway/lesson-1/lesson1-v2-real-chatgpt-illustrated-pilot.mp4",
  vtt: "/media/ai-foundations-gateway/lesson-1/lesson1-v2-real-chatgpt.vtt",
  sha256: "a8f16d896cf7530d5a49b825f5fe1fadf0f98733ef486ca259bb96473ea7626a",
  bytes: 7_476_228,
  durationSeconds: 218.6,
  width: 1280,
  height: 720,
} as const;

export type LessonVideoConfig = {
  mp4: string;
  vtt: string;
  durationSeconds: number;
  width: number;
  height: number;
  reviewLabel: string;
  reviewNotice: string;
};

export function videoConfigForLesson(slug: string): LessonVideoConfig | null {
  if (slug !== "1") return null;
  return {
    mp4: LESSON1_VIDEO.mp4,
    vtt: LESSON1_VIDEO.vtt,
    durationSeconds: LESSON1_VIDEO.durationSeconds,
    width: LESSON1_VIDEO.width,
    height: LESSON1_VIDEO.height,
    reviewLabel: "Review draft · real ChatGPT screenshots, annotated",
    reviewNotice:
      "Screenshots from once-only logged-out ChatGPT chats—not a continuous live recording, not lip-sync animation, and not live practice on this site. Burned-in captions appear in the picture; the optional caption track is off by default to avoid doubling.",
  };
}

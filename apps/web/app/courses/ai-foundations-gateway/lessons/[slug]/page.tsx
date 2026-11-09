import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonView } from "@/components/lesson-view";
import { lessonBySlug, gatewayCourse } from "@/lib/gateway-course";
import { lessonSectionBySlug } from "@/lib/lesson-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return gatewayCourse.lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessonBySlug(slug);
  const section = lessonSectionBySlug(slug);
  if (!lesson || !section) return { title: "Lesson not found" };
  return {
    title: `Lesson ${lesson.number}. ${lesson.title} · ${gatewayCourse.title}`,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = lessonBySlug(slug);
  const section = lessonSectionBySlug(slug);
  if (!lesson || !section) notFound();
  return <LessonView section={section} />;
}

import type { Metadata } from "next";
import { ToolkitView } from "@/components/toolkit-view";
import { gatewayCourse } from "@/lib/gateway-course";

export const metadata: Metadata = {
  title: `Personal AI Toolkit · ${gatewayCourse.title}`,
};

export default function ToolkitPage() {
  return <ToolkitView />;
}

import { GATEWAY_SLUG } from "@/lib/gateway-course";

export function gatewayPath() {
  return `/courses/${GATEWAY_SLUG}`;
}

export function lessonPath(lessonSlug: string) {
  return `/courses/${GATEWAY_SLUG}/lessons/${lessonSlug}`;
}

export function toolkitPath() {
  return `/courses/${GATEWAY_SLUG}/toolkit`;
}

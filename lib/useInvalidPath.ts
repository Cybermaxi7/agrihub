"use client";

import { usePathname } from "next/navigation";

export default function usePath() {
  const pathname = usePathname();
  const invalidPath = ["admin", "studio"];
  const isInvalid = invalidPath.some((path) => pathname.includes(path));
  return isInvalid;
}

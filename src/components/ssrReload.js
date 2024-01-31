"use client";

import { useRouter } from "next/navigation";

export default function SSRReload() {
  const router = useRouter();
  return <button onClick={() => router.refresh()}>Refresh</button>;
}


// cant use onclick events on ssr 
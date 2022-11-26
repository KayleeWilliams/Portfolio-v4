'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Error({error, reset,}: {error: Error; reset: () => void;}) {
  const router = useRouter();
  router.push("/");

  return (
    <div className="text-white text-xl">
    </div>
  );
}
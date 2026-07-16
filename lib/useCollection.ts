"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "pulp:collection";
const EVENT_NAME = "pulp:collection:change";

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: ids }));
}

/**
 * Lets a visitor "Collect" items into their own personal magazine.
 * Persisted to localStorage on this device — there's no account system,
 * so nothing here syncs across devices or browsers.
 */
export function useCollection() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(readStorage());
    const onChange = (e: Event) => {
      setIds((e as CustomEvent<string[]>).detail);
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const isSaved = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback((id: string) => {
    const current = readStorage();
    const next = current.includes(id)
      ? current.filter((existing) => existing !== id)
      : [...current, id];
    writeStorage(next);
  }, []);

  return { ids, isSaved, toggle };
}

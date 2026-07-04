"use client";

import Link from "next/link";
import { useState } from "react";
import { useStackApp, useUser } from "@stackframe/stack";

interface Props {
  email: string;
  name: string;
  workspaceHref: string;
  workspaceLabel: string;
  signOutLabel: string;
}

export function UserMenu({ email, name, workspaceHref, workspaceLabel, signOutLabel }: Props) {
  const [open, setOpen] = useState(false);
  const app = useStackApp();
  const user = useUser();

  const display = name || email || "";
  const initial = (display[0] || "?").toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 surface px-3 py-2 text-sm hover:bg-ink-800/70 transition"
      >
        <span className="w-6 h-6 rounded-full bg-accent-500 text-ink-900 text-xs flex items-center justify-center font-semibold">
          {initial}
        </span>
        <span className="hidden md:inline max-w-[160px] truncate">{display}</span>
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-56 surface p-2 z-10 text-sm">
          <Link
            href={workspaceHref}
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-ink-800/70"
          >
            {workspaceLabel}
          </Link>
          <button
            onClick={async () => {
              await user?.signOut();
              await app.redirectToAfterSignOut();
            }}
            className="w-full text-start px-3 py-2 rounded-md hover:bg-ink-800/70 text-red-300"
          >
            {signOutLabel}
          </button>
        </div>
      )}
    </div>
  );
}

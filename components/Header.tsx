"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split('/')[1] || 'home';
  const username = 'ramiro';

  return (
    <div className="flex gap-2 border-2 p-2 font-mono font-bold">
      <span>{`${username}@${currentPath}:~$ `}</span>
    </div>
  );
}
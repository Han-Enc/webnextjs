import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div content="container mx-auto">
      <div className="flex justify-between items-center bg-yellow-500">
        <div className="py-2 text-4xl font-bold">Nextjs13</div>
        <ul className="flex justify-between items-center">
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-100">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-100">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-100">
            <Link href={'/project'}>Project</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-100">
            <Link href={'/back'}>Back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

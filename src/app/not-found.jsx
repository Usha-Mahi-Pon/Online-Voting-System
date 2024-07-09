import Link from 'next/link';
import React from 'react'

export default function NotFound(){
  return (
    <div>
      <h2>Not Found!</h2>
      <p>Sorry, the page you are looking for does not exit. </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}


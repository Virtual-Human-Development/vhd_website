import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define an interface for the ImageLink props
interface ImageLinkProps {
  href: string;
  imgSrc: string;
  text: string;
  gridClass?: string; // Make gridClass optional as it might not always be provided
}

// Use the ImageLinkProps interface for the ImageLink component's props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
  <li className={`flex-none ${gridClass}`}>
    <Link href={href} passHref>
        <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg"/>
        <span className="mt-2 text-xl font-bold text-white">{text}</span>
    </Link>
  </li>
);

// Header component
const Header = () => (
  <div className="text-center mt-20">
    <Image src="/steven.png" alt="Steven ten Holder" width={500} height={300} className="rounded-lg"/>
    <h2 className="text-3xl font-bold text-white mt-4">Hello, I&#39;m Steven ten Holder</h2>
  </div>
);

const ImagePanel = () => (
  <div className="max-w-screen-lg mx-auto py-10">
    <ul className="grid grid-rows-2 grid-cols-2 gap-20 m-20">
      {/* First row items with default/auto height */}
      <ImageLink
        href="/bioengineering-ideas"
        imgSrc="/davinci.jpg"
        text="Bioengineering Ideas"
        gridClass="col-span-2 md:col-span-1" // Assuming normal content height here
      />
      <ImageLink
        href="/acorn-biolabs"
        imgSrc="/acorn_biolabs.jpg"
        text="Acorn Biolabs"
        gridClass="col-span-2 md:col-span-1" // Normal content height
      />
      {/* Second row items with explicitly set height to make them shorter */}
      <ImageLink
        href="/podcasts"
        imgSrc="/podcast_conversations.jpg"
        text="Podcast"
        gridClass="col-span-2 md:col-span-1" // Example: set height to 8rem (32 divided by 4)
      />
      <ImageLink
        href="/blog"
        imgSrc="/blog.jpg"
        text="Blog"
        gridClass="col-span-2 md:col-span-1" // This makes the item explicitly shorter
      />
    </ul>
  </div>
);


// Footer component
const Footer = () => (
  <footer className="p-10 mt-4 bg-black w-full text-center text-white">
    the year is 2024
  </footer>
);

// Adjust the main container of your Home component
export default function Home() {
  return (
    <div className="space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <ImagePanel />
      <Footer />
    </div>
  );
}

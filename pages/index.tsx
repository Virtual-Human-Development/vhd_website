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
      <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" />
      <span className="mt-2 text-xl font-bold text-white">{text}</span>
    </Link>
  </li>
);

// Header component
const Header = () => (
  <div className="text-center mt-20">
    <Image src="/steven.png" alt="Steven ten Holder" width={500} height={300} className="rounded-lg" />
    <h2 className="text-3xl font-bold text-white mt-4">Hello, I&#39;m Steven ten Holder</h2>
  </div>
);

// ImagePanel for the first row
const ImagePanelFirstRow = () => (
  <div className="max-w-screen-lg mx-auto py-10">
    <ul className="grid grid-rows-1 grid-cols-2 gap-20 m-10 mb-2">
      <ImageLink
        href="/bioengineering-ideas"
        imgSrc="/bio_eng.jpg"
        text="Bioengineering Ideas"
        gridClass="col-span-2 md:col-span-1"
      />
      <ImageLink
        href="/acorn-biolabs"
        imgSrc="/acorn_biolabs_1950.jpg"
        text="Acorn Biolabs"
        gridClass="col-span-2 md:col-span-1"
      />
    </ul>
  </div>
);

// ImagePanel for the second row with potentially different rules or styles
const ImagePanelSecondRow = () => (
  <div className="max-w-screen-lg mx-auto py-10">
    <ul className="grid grid-rows-1 grid-cols-2 gap-20 m-10 mt-2">
      <ImageLink
        href="/podcasts"
        imgSrc="/podcast_conversations.jpg"
        text="Podcast"
        gridClass="col-span-2 md:col-span-1"
      />
      <ImageLink
        href="/blog"
        imgSrc="/blog.jpg"
        text="Blog"
        gridClass="col-span-2 md:col-span-1"
      />
    </ul>
  </div>
);


// Footer component
const Footer = () => (
  <footer className="italic font-italic p-10 mt-4 bg-black w-full text-center text-white">
    the year is <b> 2024 </b> and I hereby delcare copywrite the content on this site ya&#39;ll
  </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <ImagePanelFirstRow />
      <ImagePanelSecondRow />
      <Footer />
    </div>
  );
}
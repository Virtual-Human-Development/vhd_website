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

// Use the ImageLinkProps interface for the ImageLink component&#39;s props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
    <li className={`flex-none ${gridClass}`}>
        <Link href={href} passHref>
            <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" />
            <span className="">{text}</span>
        </Link>
    </li>
);

// Header component
const Header = () => (
    <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-white mt-4">
            Podcasts are great ways to talk to people!
        </h2>
    </div>
);


const ImageAndTextGrid = () => (
    <div className="max-w-screen-lg mx-auto py-10 px-10">
        <div className="grid grid-cols-3 gap-10">
            <div>
                <Image src="/origin_of_life_1.jpg" alt="Brain Enhancements" height={500} width={500} objectFit="cover" className="rounded-lg" />
                <p className="mt-4 text-right">Earth-life emerged spontaneously and evolved itself into living diversity and brand new phenomenal categories.</p>
            </div>
            <div>
                <Image src="/bio_eng_2.jpg" alt="Brain Enhancements" height={500} width={500} objectFit="cover" className="rounded-lg" />
                <p className="mt-4 text-center">An intelligently-guided, unconstrained version of biology could result in forms and phenomena as yet unimaginable.</p>
            </div>
            <div>
                <Image src="/neurons_background.jpg" alt="Neuron Research" height={500} width={500} objectFit="cover" className="rounded-lg" />
                <p className="mt-4 text-left">We ourselves exist on that same biological operating system. For that reason, it is possibly the ultimate exploration.</p>
            </div>
        </div>
    </div>
);




// ImagePanel for the second row with potentially different rules or styles
const NavPanel = () => (
    <div className="max-w-screen-lg mx-auto py-10">
        <ul className="grid grid-rows-1 grid-cols-5 gap-10 mr-20 ml-20 mt-10 text-sm">
            {[
                { href: "/", imgSrc: "/steven.png", text: "Home" },
                { href: "/bioengineering-ideas", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
                { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
                { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" }
            ].map((item, index) => (
                <ImageLink
                    key={index}
                    href={item.href}
                    imgSrc={item.imgSrc}
                    text={item.text}
                    gridClass="col-span-5 md:col-span-1"
                />
            ))}
        </ul>
    </div>
);


// Footer component
const Footer = () => (
    <footer className="italic p-10 mt-4 bg-black w-full text-center text-white">
        the year is <b>2024</b>
        <p> all images generated via tireless midjourney prompting. </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <Header />
            <ImageAndTextGrid />
            <NavPanel />
            <Footer />
        </div>
    );
}

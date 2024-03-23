// components/ImageLink.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageLinkProps {
    href: string;
    imgSrc: string;
    text: string;
    gridClass?: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
    <li className={`flex-none ${gridClass} w-full sm:w-auto`}>
        <Link href={href} passHref>
            <a>
                <div className="block">
                    <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" layout="responsive" />
                    <span className="block text-center mt-2">{text}</span>
                </div>
            </a>
        </Link>
    </li>
);

export default ImageLink;

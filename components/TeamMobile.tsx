// MobileAccordion.js
import React from 'react';
import Image from 'next/image';
import { MemberListProps } from '../types'; // Adjust the path as necessary

const MobileAccordion: React.FC<{ post: MemberListProps }> = ({ post }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="pb-14">
            <div onClick={() => setIsOpen(!isOpen)} className="rounded-lg overflow-hidden shadow cursor-pointer mx-4" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                boxShadow: `0 2px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                <div className="flex flex-col items-center">
                    <div className="w-full" style={{ overflow: 'hidden' }}>
                        <Image src={post.imgSrc} alt={post.title} width={300} height={300} objectFit="cover" className="rounded-t-lg" layout="responsive" />
                    </div>
                    <div className="flex-grow p-4 text-center">
                        <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)' }}>{post.affiliation}</div>
                        <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '1.25rem' }}>{post.title}</h3>
                        <h2 className="mt-2" style={{ color: 'var(--text-color)' }}>{post.subtitle}</h2>
                        <p className="mt-2" style={{ color: 'var(--secondary-text-color)' }}>{post.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileAccordion;

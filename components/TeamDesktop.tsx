import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MemberListProps } from '../types'; // Adjust the path as necessary

const Accordion: React.FC<{ post: MemberListProps }> = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Only execute in browser environment
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 640);
            }
        };
        // Initialize and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="pb-6">
            <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                margin: 'auto',
                boxShadow: `0 3px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                {/* Adjusted to always use flex-col for a consistent layout */}
                <div className="flex flex-col" style={{ maxHeight: '280px',  minHeight: '278px', overflowY: 'auto' }}>
                    <div className="w-full" style={{ overflow: 'hidden' }}>
                        <Image src={post.imgSrc} alt={post.title} width={300} height={300} className="rounded-t-lg" />
                    </div>
                    <div className="flex-grow p-4">
                        <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)' }}>{post.affiliation}</div>
                        <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '1.0rem' }}>{post.title}</h3>
                        {/*  <p className="mt-2" style={{ color: 'var(--secondary-text-color)' }}>{post.subtitle}</p> */}
                        {/* <p className="mt-2" style={{ color: 'var(--secondary-text-color)' }}>{post.bio}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;

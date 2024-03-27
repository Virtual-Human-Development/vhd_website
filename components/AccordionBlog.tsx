import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BlogPostProps } from '../types'; // Adjust the path as necessary

const Accordion: React.FC<{ post: BlogPostProps }> = ({ post }) => {
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
        <div className="pb-14">
            <div onClick={() => setIsOpen(!isOpen)} className="my-8 rounded-lg overflow-hidden shadow cursor-pointer" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                margin: 'auto',
                boxShadow: `0 2px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-start`}>
                    <div className={`flex-none ${isMobile ? 'w-full' : 'w-64'} ${isMobile ? 'h-48' : 'h-64'}`} style={{ overflow: 'hidden' }}>
                        <Image src={post.imgSrc} alt={post.title} width={300} height={300} objectFit="cover" className={`rounded-t-lg ${isMobile ? '' : 'rounded-l-lg'}`} layout="responsive" />
                    </div>
                    <div className="flex-grow p-4">
                        <div className={`text-sm ${isMobile ? 'mb-2' : 'mb-4'}`} style={{ color: 'var(--secondary-text-color)' }}>{post.date}</div>
                        <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '1.25rem', lineHeight: '1.2' }}>{post.title}</h3>
                        <p className="mt-5 mb-5" style={{ color: 'var(--secondary-text-color)', lineHeight: '1.2' }}>{post.subtitle}</p>
                    </div>
                </div>
                {isOpen && (
                    <div className="p-4" style={{ color: 'var(--secondary-text-color)' }}>{post.content}</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;

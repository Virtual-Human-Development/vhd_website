import React from 'react';
import Image from 'next/image';
import { MemberListProps } from '../types'; // Ensure this is the correct import path

const TeamMobile: React.FC<{ post: MemberListProps }> = ({ post }) => {
    return (
        <div className="pb-0">
            <div className="rounded-lg overflow-hidden shadow mx-1 sm:mx-2" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                boxShadow: `0 1px 5px var(--entry-shadow-color), 0 1px 5px var(--entry-shadow-color)`,
            }}>
                <div className="flex flex-col items-center" style={{ maxHeight: '210px', overflowY: 'auto' }}>
                    <div className="w-full" style={{ overflow: 'hidden' }}>
                        <Image 
                            src={post.imgSrc || '/wizard_4.jpg'} // Fallback to placeholder if imgSrc is falsy
                            alt={post.title} 
                            width={300} 
                            height={300} 
                            objectFit="cover" 
                            className="rounded-t-lg" 
                            layout="responsive" 
                        />
                    </div>
                    <div className="flex-grow px-2 py-2 text-center" style={{ maxHeight: '110px' }}>
                        <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)', fontSize: '0.7rem', lineHeight: '1.0' }}>{post.affiliation}</div>
                        <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '0.9rem', lineHeight: '1.1' }}>{post.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMobile;

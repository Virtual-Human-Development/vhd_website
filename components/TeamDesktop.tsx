import React from 'react';
import Image from 'next/image';
import { MemberListProps } from '../types'; // Ensure this is the correct import path

const TeamDesktop: React.FC<{ post: MemberListProps }> = ({ post }) => {
    return (
        <div className="pb-6">
            <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                boxShadow: `0 3px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                <div className="w-full" style={{ overflow: 'hidden' }}>
                    <Image 
                        src={post.imgSrc || '/wizard_4.jpg'} // Fallback to placeholder if imgSrc is falsy
                        alt={post.title} 
                        width={300} 
                        height={300} 
                        className="rounded-t-lg" 
                    />
                </div>
                <div className="flex-grow p-4">
                    <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)' }}>{post.affiliation}</div>
                    <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '1.0rem' }}>{post.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default TeamDesktop;
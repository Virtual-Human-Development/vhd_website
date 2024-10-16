import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MemberList } from '../data/memberList';
import { useTheme } from '../context/ThemeContext';

const TeamDesktop: React.FC<{ post: MemberList }> = ({ post }) => {
    const { theme } = useTheme();

    return (
        <div className="pb-6">
            <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                boxShadow: `0 3px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                <div className="w-full" style={{ overflow: 'hidden' }}>
                    <Image 
                        src={post.imgSrc || '/wizard_4.jpg'}
                        alt={post.title} 
                        width={300} 
                        height={300} 
                        className="rounded-t-lg" 
                    />
                </div>
                <div className="flex-grow p-4">
                    <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)' }}>{post.affiliation}</div>
                    <h3 className="font-bold mb-2" style={{ color: 'var(--text-color)', fontSize: '1.0rem' }}>{post.title}</h3>
                    {post.email && (
                        <p className="text-xs mb-2">
                            <a href={`mailto:${post.email}`} className="text-blue-500 hover:underline">
                                {post.email}
                            </a>
                        </p>
                    )}
                    {post.bio && <p className="text-xs mb-2" style={{ color: 'var(--text-color)' }}>{post.bio}</p>}
                    <div className="flex space-x-2 mt-2">
                        {post.twitter && (
                            <Link href={post.twitter}>
                                <div className="cursor-pointer">
                                    <Image src={theme === 'light' ? "/icons/twitter-b.png" : "/icons/twitter-w.png"} alt="Twitter" width={20} height={20} />
                                </div>
                            </Link>
                        )}
                        {post.scholar && (
                            <Link href={post.scholar}>
                                <div className="cursor-pointer">
                                    <Image src={theme === 'light' ? "/icons/google-w.png" : "/icons/google-b.png"} alt="Google Scholar" width={20} height={20} />
                                </div>
                            </Link>
                        )}
                        {post.linkedin && (
                            <Link href={post.linkedin}>
                                <div className="cursor-pointer">
                                    <Image src={theme === 'light' ? "/icons/linkedin-b.png" : "/icons/linkedin-w.png"} alt="LinkedIn" width={20} height={20} />
                                </div>
                            </Link>
                        )}
                        {post.website && (
                            <Link href={post.website}>
                                <div className="cursor-pointer">
                                    <Image src={theme === 'light' ? "/icons/p-website-b.png" : "/icons/p-website-w.png"} alt="Personal Website" width={20} height={20} />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDesktop;
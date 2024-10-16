import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MemberList } from '../data/memberList';
import { useTheme } from '../context/ThemeContext';

const TeamMobile: React.FC<{ post: MemberList }> = ({ post }) => {
    const { theme } = useTheme();

    return (
        <div className="pb-0">
            <div className="rounded-lg overflow-hidden shadow mx-1 sm:mx-2" style={{
                backgroundColor: 'var(--entry-background-color)',
                border: '0.1px solid var(--entry-border-color)',
                boxShadow: `0 1px 5px var(--entry-shadow-color), 0 1px 5px var(--entry-shadow-color)`,
            }}>
                <div className="flex flex-col items-center" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <div className="w-full" style={{ overflow: 'hidden' }}>
                        <Image 
                            src={post.imgSrc || '/wizard_4.jpg'}
                            alt={post.title} 
                            width={300} 
                            height={300} 
                            objectFit="cover" 
                            className="rounded-t-lg" 
                            layout="responsive" 
                        />
                    </div>
                    <div className="flex-grow px-2 py-2 text-center" style={{ maxHeight: '200px' }}>
                        <div className="text-sm mb-1" style={{ color: 'var(--secondary-text-color)', fontSize: '0.7rem', lineHeight: '1.0' }}>{post.affiliation}</div>
                        <h3 className="font-bold mb-1" style={{ color: 'var(--text-color)', fontSize: '0.9rem', lineHeight: '1.1' }}>{post.title}</h3>
                        {post.email && (
                            <p className="text-xs mb-1">
                                <a href={`mailto:${post.email}`} className="text-blue-500 hover:underline">
                                    {post.email}
                                </a>
                            </p>
                        )}
                        {post.bio && <p className="text-xs mb-1" style={{ color: 'var(--text-color)' }}>{post.bio}</p>}
                        <div className="flex justify-center space-x-2 mt-1">
                            {post.twitter && (
                                <Link href={post.twitter}>
                                    <div className="cursor-pointer">
                                        <Image src={theme === 'light' ? "/icons/twitter-b.png" : "/icons/twitter-w.png"} alt="Twitter" width={16} height={16} />
                                    </div>
                                </Link>
                            )}
                            {post.scholar && (
                                <Link href={post.scholar}>
                                    <div className="cursor-pointer">
                                        <Image src={theme === 'light' ? "/icons/google-w.png" : "/icons/google-b.png"} alt="Google Scholar" width={16} height={16} />
                                    </div>
                                </Link>
                            )}
                            {post.linkedin && (
                                <Link href={post.linkedin}>
                                    <div className="cursor-pointer">
                                        <Image src={theme === 'light' ? "/icons/linkedin-b.png" : "/icons/linkedin-w.png"} alt="LinkedIn" width={16} height={16} />
                                    </div>
                                </Link>
                            )}
                            {post.website && (
                                <Link href={post.website}>
                                    <div className="cursor-pointer">
                                        <Image src={theme === 'light' ? "/icons/p-website-b.png" : "/icons/p-website-w.png"} alt="Personal Website" width={16} height={16} />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMobile;
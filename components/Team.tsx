// components/Team.tsx
import React, { useState, useEffect } from 'react';
import TeamDesktop from './TeamDesktop';
import TeamMobile from './TeamMobile';
import { MemberList } from '../data/memberList';

const Team: React.FC<{ memberList: MemberList[] }> = ({ memberList }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        // Ensure the grid has two columns on mobile and four columns on larger screens
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4`}>
            {memberList.map((post) => (
                <div key={post.id} className="pb-4">
                    {isMobile ? <TeamMobile post={post} /> : <TeamDesktop post={post} />}
                </div>
            ))}
        </div>
    );
};

export default Team;
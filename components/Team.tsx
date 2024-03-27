// Team.tsx
import React, { useState, useEffect } from 'react';
import TeamDesktop from './TeamDesktop'; // Adjust the path as necessary
import TeamMobile from './TeamMobile'; // Adjust the path as necessary
import { MemberListProps } from '../types'; // Adjust the path as necessary

const Team: React.FC<{ memberList: MemberListProps[] }> = ({ memberList }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check immediately in case the initial load is on mobile
        window.addEventListener('resize', handleResize); // Add event listener for subsequent resize events
        return () => window.removeEventListener('resize', handleResize); // Cleanup to remove event listener on component unmount
    }, []);

    return (
        <div className="grid grid-cols-2 gap-0 sm:gap-4 lg:grid-cols-4 auto-rows-min">
            {memberList.map((post) => (
                <div key={post.id} className="pb-0">
                    {isMobile ? <TeamMobile post={post} /> : <TeamDesktop post={post} />}
                </div>
            ))}
        </div>
    );
    
};

export default Team;

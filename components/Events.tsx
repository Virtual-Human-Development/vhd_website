// Events.tsx
import React, { useState, useEffect } from 'react';
import EventsDesktop from './EventsDesktop';
import EventsMobile from './EventsMobile';
import { EventPostProps } from '../types';

const Events: React.FC<{ eventPost: EventPostProps[] }> = ({ eventPost }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {eventPost.map((post) => (
                <div key={post.id} className="pb-4">
                    {isMobile ? <EventsMobile post={post} /> : <EventsDesktop post={post} />}
                </div>
            ))}
        </div>
    );
};

export default Events;

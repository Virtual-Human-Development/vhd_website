// Blog Types
export type BlogPostProps = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    imgSrc: string;
    date: string;
};


// Team Member Types
export type MemberListProps = {
    id: number;
    title: string;
    imgSrc: string;
    affiliation: string;
    group: string;
};


// Event Types
export type EventPostProps = {
    id: number;
    title: string;
    content: string;
    imgSrc: string;
    date: string;
    past_or_future: string;
};
// data/eventsPosts.ts

export type EventPost = {
    id: number;
    title: string;
    content: string;
    imgSrc: string;
    date: string;
    past_or_future: string;
};

export const eventPost: EventPost[] = [

    // Upcoming Events Here. Give them id: 1

    {
        id: 1,
        title: "Next meeting of the VHD Consortium",
        content: "This is the content for the next meeting. Here we share some interesting insights.",
        imgSrc: "/consortium.jpg",
        date: "May 2, 2024",
        past_or_future: "future"
    },
    {
        id: 1,
        title: "Great consortium get-together.",
        content: "This is the content for the next meeting. Here we share some interesting insights.",
        imgSrc: "/wizard_4.jpg",
        date: "June 8, 2024",
        past_or_future: "future"
    },

    // Past Events Down Here Please. Give them id: 2. 

    {
        id: 2,
        title: "Second meeting of the VHD Consortium",
        content: "This was what happened durin the second meeting.  Here we share some interesting insights.",
        imgSrc: "/bio_eng_img.png",
        date: "March 14, 2023",
        past_or_future: "past"
    },

    {
        id: 2,
        title: "First meeting of the VHD Consortium",
        content: "This was what happened durin the first meeting. Here we share some interesting insights.",
        imgSrc: "/neurons_background.png",
        date: "Jan 2, 2023",
        past_or_future: "past"
    },
];

// data/eventsLists.ts

export type EventPost = {
    id: number;
    title: string;
    content: string;
    imgSrc: string;
    date: string;
    past_or_future: string;
};

export const eventPost: EventPost[] = [

    // Upcoming Events Here. 

    {
        id: 1,
        title: "Next meeting of the VHD Consortium",
        content: "This is the content for the next meeting. Here we share some interesting insights.",
        imgSrc: "/consortium.jpg",
        date: "May 2, 2024",
        past_or_future: "future"
    },

    // Past Events Down Here Please. 

    {
        id: 2,
        title: "First meeting of the VHD Consortium",
        content: "This is the content for the next meeting. Here we share some interesting insights.",
        imgSrc: "/neurons_background.png",
        date: "Jan 2, 2023",
        past_or_future: "past"
    },
];

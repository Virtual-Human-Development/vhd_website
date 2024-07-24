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
        title: "VHD at ISSCR ",
        content: "This workshop will discuss recent progress and advances in reconstructing human development processes utilizing advanced organoid models, mathematical systems, and synthetic systems. It will also highlight the strengths of collaborations from VHD members by showcasing work focused on understanding early embryo development and steps towards creating a model from ongoing team projects.",
        imgSrc: "/isscr_2024.png",
        date: "July 12, 2024",
        past_or_future: "future"
    },

    // Past Events Down Here Please. Give them id: 2. 


    {
        id: 2,
        title: "VHD ideas and vision open for discussion in the Let’s Talk Science Fiction grades 9-12",
        content: "Science fiction writers have inspired many real-life technological advances including artificial intelligence, bionic limbs, self-driving vehicles, space travel, cell phones and the internet. Join us as we explore the development of innovative technologies and the intersection between STEM and science fiction. ",
        imgSrc: "/students_event.png",
        date: "Feb 29, 2023",
        past_or_future: "past"
    },

    {
        id: 2,
        title: "Bridging Theory and Experiments",
        content: "Brite with Janet Rossant “Stem cell-derived embryo models- how close to reality can they be?”",
        imgSrc: "/event_3.png",
        date: "Jan 19, 2023",
        past_or_future: "past"
    },

    {
        id: 2,
        title: "Virtual Human Development Workshop",
        content: "This workshop provided the opportunity to exchange ideas among our international experts in the experimental and theoretical fields to help move our project forward and develop a state-of-the-art Virtual Human Simulator. Thanks to the sponsorship of the stem cell network we will host this workshop as an event at TMM2023.",
        imgSrc: "/event_1.png",
        date: "Oct 25, 2023",
        past_or_future: "past"
    },
];

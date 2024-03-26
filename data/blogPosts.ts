// data/blogPosts.ts

export type BlogPost = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    imgSrc: string;
    date: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Consortium gathering number one went well.",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we're going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/tree_iceberg.png",
        date: "Feb 2, 2023"
    },
    {
        id: 2,
        title: "Notes from the underground!",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we're going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 2. Here we share some interesting insights.",
        imgSrc: "/wizard_AI_creator.png",
        date: "March 9, 2024"
    },
    {
        id: 3,
        title: "Let's make a real simulation of a full human ya'll!",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we're going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 3. Here we share some interesting insights.",
        imgSrc: "/neurons_background.png",
        date: "Jan 28, 2024"
    },
    {
        id: 4,
        title: "Let's make a real simulation of a full human ya'll!",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we're going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 3. Here we share some interesting insights.",
        imgSrc: "/consortium.jpg",
        date: "Jan 28, 2024"
    },
    // Add more blog posts as needed
];

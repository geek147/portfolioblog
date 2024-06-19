export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Ilham Aulia Malik',
    subtitle: 'Software Developer',
    description: '',
    image: {
        src: '/danau.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/maliq147'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/hamlicious'
        }
    ],
    hero: {
        title: 'Welcome to my web',
        text: "I'm **Ilham Aulia Malik**, a Software developer with 10 years experience . My work mostly on Android and Flutter Development. Interested in AI, Computer Vision and VR. Always enjoy learning new things and try to create better product. Feel free to explore some of my coding endeavors on <a href='https://github.com/geek147'>GitHub</a> or follow me on <a href='https://twitter.com/hamlicious'>Twitter/X</a>.",
        image: {
            src: '/danau.jpg',
            alt: 'A person sitting in front of lake'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

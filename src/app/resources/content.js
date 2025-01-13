import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sanjeev',
    lastName:  'Patel',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi', 'Gujarati']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about web development, technology, and share insights on full-stack development and AI.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/sanjeevpatel3007',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sanjeev-patel-12345/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sanjeevpatel18921@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Professional Software Developer</>,
    subline: <>I'm Sanjeev, a full-stack developer specializing in MERN stack and AI, passionate about creating efficient and user-centric web applications.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/sanjeev'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Sanjeev is a full-stack developer with a passion for building scalable and innovative solutions using modern web technologies. He has experience with backend systems, frontend frameworks, and AI integrations.</>
    },
    work: {
        display: true, 
        title: 'Work Experience',
        experiences: [
            {
                company: 'Intellify Edventures Pvt Ltd',
                timeframe: 'Oct 2024 - Present',
                role: 'Full Stack Development Intern',
                achievements: [
                    <>Contributed to developing scalable web applications using the MERN stack.</>,
                    <>Integrated AI and automation features to enhance app functionalities.</>
                ],
                images: []
            },
            {
                company: 'BuildFastWithAI',
                timeframe: '2023 - 2024',
                role: 'Backend Developer',
                achievements: [
                    <>Worked on improving API performance and optimizing database queries for faster responses.</>,
                    <>Collaborated with the team to design and implement new backend features.</>
                ],
                images: []
            },
            {
                company: 'Educhain.in',
                timeframe: '2023 - 2024',
                role: 'Backend Developer',
                achievements: [
                    <>Worked on improving API performance and optimizing database queries for faster responses.</>,
                    <>Collaborated with the team to design and implement new backend features.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'University Institute of Technology, RGPV Bhopal',
                description: <>Bachelor of Technology in Computer Science (Expected in 2026).</>,
            },
            {
                name: 'TCS iON',
                description: <>Certified in Backend Web Development.</>,
            },
            {
                name: 'University Institute of Technology, RGPV Bhopal',
                description: <>Bachelor of Technology in Computer Science (Expected in 2026).</>,
            },
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'JavaScript',
                description: <>Experienced in building full-stack applications using JavaScript and Node.js.</>,
                images: []
            },
            {
                title: 'React',
                description: <>Building dynamic and responsive user interfaces with React.js.</>,
                images: []
            },
            {
                title: 'MongoDB',
                description: <>Skilled in designing and managing NoSQL databases with MongoDB.</>,
                images: []
            },
            {
                title: 'AI/ML',
                description: <>Exploring Artificial Intelligence and Machine Learning in web development.</>,
                images: []
            },
            {
                title: 'MongoDB',
                description: <>Skilled in designing and managing NoSQL databases with MongoDB.</>,
                images: []
            },
            {
                title: 'AI/ML',
                description: <>Exploring Artificial Intelligence and Machine Learning in web development.</>,
                images: []
            }
        ]
    }
}

const blog = {
   
    label: 'Blog',
    title: 'Writing about web development and AI...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Web and software development projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A collection of my personal moments`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };

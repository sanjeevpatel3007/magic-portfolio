export interface Project {
    id: string;
    title: string;
    slug: string;
    publishedAt: string;
    summary: string;
    content: string;
    image: string;
    images?: string[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    tag: string;
    team?: {
        name: string;
        role: string;
        avatar: string;
        linkedIn: string;
    }[];
}

export const projectData: Project[] = [
    {
        id: "1",
        title: "Educhain Learning Platform",
        slug: "educhain-learning-platform",
        publishedAt: "2024-03-01",
        summary: "A comprehensive e-learning platform built with MERN stack and AI integration",
        tag: "Full Stack",
        image: "/images/projects/educhain/cover-01.png",
        images: [
            "/images/projects/educhain/cover-01.png",
            "/images/projects/educhain/cover-02.png",
            "/images/projects/educhain/cover-03.png"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
        liveUrl: "https://educhain.com",
        githubUrl: "https://github.com/username/educhain",
        content: `
            <h2>Project Overview</h2>
            <p>Educhain is a modern e-learning platform that combines blockchain technology with traditional learning management systems. The platform offers:</p>
            <ul>
                <li>Interactive video courses</li>
                <li>Real-time progress tracking</li>
                <li>Blockchain-verified certificates</li>
                <li>AI-powered learning recommendations</li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>The platform was built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript for type safety. Key features include:</p>
            <ul>
                <li>JWT authentication</li>
                <li>Real-time notifications using Socket.io</li>
                <li>Video streaming with AWS S3</li>
                <li>Payment integration with Stripe</li>
            </ul>
        `,
        team: [
            {
                name: "Sanjeev Patel",
                role: "Full Stack Developer",
                avatar: "/images/avatar.jpg",
                linkedIn: "https://linkedin.com/in/sanjeev"
            }
        ]
    },
    {
        id: "2",
        title: "AI-Powered Task Management",
        slug: "ai-task-management",
        publishedAt: "2024-02-15",
        summary: "A smart task management system that uses AI to prioritize and organize tasks",
        tag: "AI/ML",
        image: "/images/projects/taskmanager/cover-01.png",
        images: [
            "/images/projects/taskmanager/cover-01.png",
            "/images/projects/taskmanager/cover-02.png"
        ],
        technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
        liveUrl: "https://ai-taskmanager.demo",
        githubUrl: "https://github.com/username/ai-taskmanager",
        content: `
            <h2>Smart Task Management</h2>
            <p>This project leverages AI to help users manage their tasks more effectively...</p>
        `,
        team: [
            {
                name: "Sanjeev Patel",
                role: "Full Stack Developer",
                avatar: "/images/avatar.jpg",
                linkedIn: "https://linkedin.com/in/sanjeev"
            }
        ]
    },
    {
        id: "3",
        title: "Real-time Collaboration Platform",
        slug: "realtime-collab",
        publishedAt: "2024-01-20",
        summary: "A real-time collaboration platform with video, chat, and document sharing",
        tag: "WebRTC",
        image: "/images/projects/collab/cover-01.png",
        technologies: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
        liveUrl: "https://realtime-collab.demo",
        githubUrl: "https://github.com/username/realtime-collab",
        content: `
            <h2>Seamless Collaboration</h2>
            <p>Built for modern remote teams, this platform enables real-time communication...</p>
        `,
        team: [
            {
                name: "Sanjeev Patel",
                role: "Full Stack Developer",
                avatar: "/images/avatar.jpg",
                linkedIn: "https://linkedin.com/in/sanjeev"
            }
        ]
    },
    {
        id: "4",
        title: "JobLynk: Streamlining Job Application Management",
        slug: "joblynk",
        publishedAt: "2025-01-08",
        summary: "Simplify job hunting with a centralized platform for tracking applications, managing deadlines, and staying organized throughout the job search process.",
        tag: "Full Stack",
        image: "/images/projects/joblynk/cover-01.png",
        images: [
            "/images/projects/joblynk/cover-01.png",
            "/images/projects/joblynk/cover-02.png",
            "/images/projects/joblynk/cover-03.png",
            "/images/projects/joblynk/cover-04.png",
            "/images/projects/joblynk/cover-05.png"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Bootstrap",
            "Tailwind CSS",
            "Postman"
        ],
        content: `
            <h2>Overview</h2>
            <p>JobLynk is a comprehensive job application management platform designed to help users stay on top of their job search. The platform allows users to track applications, manage deadlines, set reminders, and analyze job application progress with ease. By providing a centralized space for job hunting, JobLynk ensures users remain organized and focused.</p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Centralized Job Tracking</strong>: Users can add job applications, set deadlines, and monitor their status from a single dashboard.</li>
                <li><strong>Reminders and Notifications</strong>: Integrated reminders help users stay informed about upcoming deadlines and follow-ups.</li>
                <li><strong>Progress Analytics</strong>: Visualize application trends with charts, helping users understand their success rate and refine their strategies.</li>
                <li><strong>Resume and Document Management</strong>: Upload and manage resumes, cover letters, and other essential documents in one place.</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
                <li><strong>React and Node.js</strong>: For building a seamless front-end experience and scalable back-end services.</li>
                <li><strong>MongoDB</strong>: For managing and storing user data with flexibility.</li>
                <li><strong>Bootstrap and Tailwind CSS</strong>: For responsive and aesthetically pleasing UI design.</li>
                <li><strong>Postman</strong>: For API testing and integration during development.</li>
            </ul>

            <h2>Challenges and Learnings</h2>
            <p>Developing JobLynk required addressing the challenge of ensuring scalability and a seamless user experience. Handling dynamic notifications and reminders without compromising performance was particularly complex. Through this project, I deepened my understanding of state management and real-time updates in full-stack applications.</p>

            <h2>Outcome</h2>
            <p>JobLynk has been well-received for its simplicity and utility, streamlining the job application process for users. It has helped users increase their productivity and effectiveness during job searches by providing a clear, organized approach to managing applications.</p>
        `,
        team: [
            {
                name: "Sanjeev Kumar Patel",
                role: "Full Stack Developer",
                avatar: "/images/avatar.jpg",
                linkedIn: "https://www.linkedin.com/in/sanjeev-kumar-patel/"
            }
        ]
    }
]; 
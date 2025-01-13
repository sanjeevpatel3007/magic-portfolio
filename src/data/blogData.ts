export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    publishedAt: string;
    summary: string;
    content: string;
    image?: string;
    tag?: string;
    author: {
        name: string;
        avatar: string;
    };
}

export const blogData: BlogPost[] = [
    {
        id: "1",
        title: "The Rise of Design Engineering",
        slug: "the-rise-of-design-engineering",
        publishedAt: "2022-03-05",
        summary: "In recent years, the role of design engineering has evolved from a specialized niche to a critical component in the development of innovative products and solutions.",
        tag: "Technology",
        image: "/images/projects/educhain/cover-01.png",
        images: [
            "/images/projects/educhain/cover-01.png",
            "/images/projects/educhain/cover-02.png",
            "/images/projects/educhain/cover-03.png"
        ],
        author: {
            name: "Sanjeev Patel",
            avatar: "/images/avatar.jpg"
        },
        content: `
            <h2>Where Engineering Meets Creativity</h2>
            <p>Traditionally, engineering and design were viewed as separate disciplines. Engineers focused on solving technical problems, while designers were concerned with aesthetics and user experience. However, as products become more complex and user-centered, the need for a unified approach has grown.</p>

            <h2>The User-Centered Revolution</h2>
            <p>One of the biggest factors in the rise of design engineering is the shift toward user-centered design. Whether it's a smartphone, a medical device, or an automotive system, today's products are expected to be intuitive, responsive, and aligned with user needs.</p>

            <h2>Sustainability and Innovation</h2>
            <p>As the world becomes increasingly conscious of environmental impacts, design engineers are at the forefront of creating sustainable solutions. From selecting eco-friendly materials to designing for energy efficiency and minimizing waste, their work is crucial in driving sustainability initiatives across industries.</p>
        `
    },
    {
        id: "2",
        title: "Building Scalable Microservices with Node.js",
        slug: "building-scalable-microservices",
        publishedAt: "2024-02-28",
        summary: "A comprehensive guide to building, deploying, and maintaining microservices architecture using Node.js and Docker.",
        tag: "Backend",
        image: "/images/projects/joblynk/cover-01.png",
        images: [
            "/images/projects/joblynk/cover-01.png",
            "/images/projects/joblynk/cover-02.png",
            "/images/projects/joblynk/cover-03.png"
        ],
        author: {
            name: "Sanjeev Patel",
            avatar: "/images/avatar.jpg"
        },
        content: `
            <h2>Understanding Microservices</h2>
            <p>Microservices architecture has revolutionized how we build and scale applications. This approach breaks down complex applications into smaller, independent services that communicate through well-defined APIs.</p>

            <h2>Key Benefits</h2>
            <ul>
                <li>Improved Scalability</li>
                <li>Better Fault Isolation</li>
                <li>Independent Deployment</li>
                <li>Technology Flexibility</li>
            </ul>

            <h2>Implementation with Node.js</h2>
            <p>Node.js is particularly well-suited for microservices due to its event-driven, non-blocking I/O model. Here's how to implement key patterns:</p>

            <h3>1. Service Discovery</h3>
            <p>Implement service discovery using tools like Consul or etcd to manage service registry and health checks.</p>

            <h3>2. API Gateway</h3>
            <p>Create a unified entry point for clients while handling cross-cutting concerns like authentication and rate limiting.</p>

            <h3>3. Inter-service Communication</h3>
            <p>Use both REST APIs and message queues for synchronous and asynchronous communication between services.</p>
        `
    },
    {
        id: "3",
        title: "Mastering State Management in React Applications",
        slug: "mastering-state-management-react",
        publishedAt: "2024-02-15",
        summary: "Deep dive into modern state management solutions in React, comparing Redux, Context API, and other alternatives.",
        tag: "Frontend",
        image: "/images/projects/portfolio/cover-01.png",
        images: [
            "/images/projects/joblynk/cover-01.png",
            "/images/projects/joblynk/cover-02.png",
            "/images/projects/joblynk/cover-03.png"
        ],
        author: {
            name: "Sanjeev Patel",
            avatar: "/images/avatar.jpg"
        },
        content: `
            <h2>The Evolution of State Management</h2>
            <p>State management in React has evolved significantly since its inception. From simple useState hooks to complex global state solutions, understanding when to use each approach is crucial.</p>

            <h2>Comparing Solutions</h2>
            <h3>1. Redux</h3>
            <ul>
                <li>Predictable state updates</li>
                <li>Powerful developer tools</li>
                <li>Large ecosystem</li>
                <li>Best for complex applications</li>
            </ul>

            <h3>2. Context API</h3>
            <ul>
                <li>Built into React</li>
                <li>Simple to implement</li>
                <li>Perfect for theme/auth state</li>
                <li>Ideal for medium-sized apps</li>
            </ul>

            <h3>3. Modern Alternatives</h3>
            <p>Explore newer solutions like Zustand and Jotai that offer simpler APIs while maintaining powerful features.</p>

            <h2>Best Practices</h2>
            <p>Learn how to structure your state management solution for optimal performance and maintainability.</p>
        `
    },
    {
        id: "4",
        title: "The Rise of Design Engineering",
        slug: "the-rise-of-design-engineering",
        publishedAt: "2025-01-01",
        summary: "In recent years, the role of design engineering has evolved from a specialized niche to a critical component in the development of innovative products and solutions.",
        tag: "Technology",
        image: "/images/projects/educhain/cover-01.png",
        images: [
            "/images/projects/educhain/cover-01.png",
            "/images/projects/educhain/cover-02.png",
            "/images/projects/educhain/cover-03.png"
        ],
        author: {
            name: "Sanjeev Patel",
            avatar: "/images/avatar.jpg"
        },
        content: `
            <h2>Where Engineering Meets Creativity</h2>
            <p>Traditionally, engineering and design were viewed as separate disciplines. Engineers focused on solving technical problems, while designers were concerned with aesthetics and user experience. However, as products become more complex and user-centered, the need for a unified approach has grown.</p>

            <h2>The User-Centered Revolution</h2>
            <p>One of the biggest factors in the rise of design engineering is the shift toward user-centered design. Whether it's a smartphone, a medical device, or an automotive system, today's products are expected to be intuitive, responsive, and aligned with user needs.</p>

            <h2>Sustainability and Innovation</h2>
            <p>As the world becomes increasingly conscious of environmental impacts, design engineers are at the forefront of creating sustainable solutions. From selecting eco-friendly materials to designing for energy efficiency and minimizing waste, their work is crucial in driving sustainability initiatives across industries.</p>
        `
    },
]; 
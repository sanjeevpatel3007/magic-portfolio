"use client"
import { Flex, Text, Heading } from '@/once-ui/components';
import { motion } from 'framer-motion';
import styles from './SkillsPentagon.module.scss';

const skills = [
    {
        category: "Frontend",
        icon: "/images/skills/frontend.svg",
        items: [
            { name: "React", icon: "./images/skills/react.svg" },
            { name: "Next.js", icon: "/images/skills/nextjs.svg" },
            { name: "TypeScript", icon: "./public/images/skills/typescript.svg" },
            { name: "HTML/CSS", icon: "/images/skills/html.svg" },
            { name: "Redux", icon: "/images/skills/redux.svg" }
        ]
    },
    {
        category: "Backend",
        icon: "/images/skills/backend.svg",
        items: [
            { name: "Node.js", icon: "/images/skills/nodejs.svg" },
            { name: "Express", icon: "/images/skills/express.svg" },
            { name: "Python", icon: "/images/skills/python.svg" },
            { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
            { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" }
        ]
    },
    {
        category: "DevOps",
        icon: "/images/skills/devops.svg",
        items: [
            { name: "Docker", icon: "/images/skills/docker.svg" },
            { name: "AWS", icon: "/images/skills/aws.svg" },
            { name: "CI/CD", icon: "/images/skills/cicd.svg" },
            { name: "Git", icon: "/images/skills/git.svg" },
            { name: "Linux", icon: "/images/skills/linux.svg" }
        ]
    },
    {
        category: "Design",
        icon: "/images/skills/design.svg",
        items: [
            { name: "Figma", icon: "/images/skills/figma.svg" },
            { name: "UI/UX", icon: "/images/skills/uiux.svg" },
            { name: "Responsive", icon: "/images/skills/responsive.svg" },
            { name: "Design Systems", icon: "/images/skills/design-systems.svg" }
        ]
    },
    {
        category: "Other",
        icon: "/images/skills/other.svg",
        items: [
            { name: "Agile", icon: "/images/skills/agile.svg" },
            { name: "REST APIs", icon: "/images/skills/api.svg" },
            { name: "Testing", icon: "/images/skills/testing.svg" },
            { name: "Performance", icon: "/images/skills/performance.svg" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0,
        y: 20
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
};

export const SkillsPentagon = () => {
    return (
        <div className={styles.skillsContainer}>
            <Flex direction="column" gap="xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading variant="heading-strong-l" className={styles.sectionTitle}>
                        Technical Skills
                    </Heading>
                </motion.div>
                <motion.div 
                    className={styles.skillsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skillGroup) => (
                        <motion.div 
                            key={skillGroup.category} 
                            className={styles.skillCard}
                            variants={cardVariants}
                        >
                            <div className={styles.cardHeader}>
                                <img 
                                    src={skillGroup.icon} 
                                    alt={skillGroup.category}
                                    className={styles.categoryIcon}
                                />
                                <Heading variant="heading-strong-m" className={styles.categoryTitle}>
                                    {skillGroup.category}
                                </Heading>
                            </div>
                            <motion.div 
                                className={styles.skillsList}
                                variants={containerVariants}
                            >
                                {skillGroup.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className={styles.skillItemWrapper}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className={styles.skillItem}>
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className={styles.skillIcon}
                                            />
                                            <Text variant="body-default-m">
                                                {skill.name}
                                            </Text>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </Flex>
        </div>
    );
}; 
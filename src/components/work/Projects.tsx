"use client"
import { projectData } from '@/data/projectData';
import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsProps {
    range?: [number, number?];
    columns?: string;
    locale?: string;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export const Projects = ({ range, columns = "1", locale = 'en' }: ProjectsProps) => {
    // Sort projects by date
    let sortedProjects = projectData.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // Apply range filter only if range is provided
    if (range) {
        sortedProjects = sortedProjects.slice(range[0] - 1, range[1] || range[0]);
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Flex
                fillWidth 
                gap="xl" 
                marginBottom="40" 
                paddingX="l"
                direction="column"
            >
                <AnimatePresence>
                    {sortedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            layout
                        >
                            <ProjectCard
                                href={`/${locale}/work/${project.slug}`}
                                images={project.images || [project.image]}
                                title={project.title}
                                description={project.summary}
                                content={project.content}
                                avatars={project.team?.map((member) => ({ 
                                    src: member.avatar 
                                })) || []}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Flex>
        </motion.div>
    );
};
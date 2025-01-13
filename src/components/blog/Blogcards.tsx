"use client"
import { Flex, Grid } from '@/once-ui/components';
import { BlogCard } from './BlogCard';
import { blogData } from '@/data/blogData';
import styles from './BlogCards.module.scss';

interface BlogCardsProps {
    range?: [number, number];
    variant?: 'trending' | 'list';
    columns?: string;
    locale: string;
}

export const BlogCards = ({ 
    range = [0, -1], 
    variant = 'list',
    columns = "1",
    locale 
}: BlogCardsProps) => {
    const [start, end] = range;
    const posts = blogData
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(start, end === -1 ? undefined : end + 1);

    if (variant === 'trending') {
        return (
            <Grid columns={columns} mobileColumns="1" gap="xl">
                {posts.map((post) => (
                    <BlogCard
                        key={post.id}
                        {...post}
                        variant="trending"
                        locale={locale}
                    />
                ))}
            </Grid>
        );
    }

    return (
        <Flex direction="column" gap="m">
            {posts.map((post) => (
                <BlogCard
                    key={post.id}
                    {...post}
                    variant="list"
                    locale={locale}
                />
            ))}
        </Flex>
    );
};
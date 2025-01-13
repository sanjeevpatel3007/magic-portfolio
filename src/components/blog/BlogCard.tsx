"use client"
import { Flex, Heading, Text, SmartLink } from '@/once-ui/components';
import { BlogImage } from './BlogImage';
import { formatDate } from '@/app/utils/formatDate';
import styles from './BlogCard.module.scss';

interface BlogCardProps {
    id: string;
    title: string;
    slug: string;
    publishedAt: string;
    summary?: string;
    tag?: string;
    image?: string;
    author: {
        name: string;
        avatar: string;
    };
    variant?: 'trending' | 'list';
    locale: string;
}

export const BlogCard = ({ 
    id,
    title,
    slug,
    publishedAt,
    summary,
    tag,
    image,
    author,
    variant = 'list',
    locale
}: BlogCardProps) => {
    if (variant === 'trending') {
        return (
            <SmartLink
                href={`/${locale}/blog/${slug}`}
                className={styles.trendingCard}
            >
                <Flex gap="xl" alignItems="center">
                    <Flex direction="column" className={styles.content} gap="m" flex={1}>
                        {tag && (
                            <Text variant="label-strong-s" className={styles.tag}>
                                {tag}
                            </Text>
                        )}
                        <Heading variant="heading-strong-l" className={styles.title}>
                            {title}
                        </Heading>
                        {summary && (
                            <Text 
                                variant="body-default-m" 
                                onBackground="neutral-weak" 
                                className={styles.summary}
                            >
                                {summary.length > 160 ? `${summary.slice(0, 160)}...` : summary}
                            </Text>
                        )}
                        <Flex gap="m" alignItems="center" className={styles.meta}>
                            <div className={styles.authorAvatar}>
                                <BlogImage
                                    src={author.avatar}
                                    alt={author.name}
                                    variant="small"
                                />
                            </div>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                {formatDate(publishedAt)}
                            </Text>
                        </Flex>
                    </Flex>
                    {image && (
                        <div className={styles.imageWrapper}>
                            <BlogImage
                                src={image}
                                alt={title}
                                variant="trending"
                            />
                        </div>
                    )}
                </Flex>
            </SmartLink>
        );
    }

    return (
        <SmartLink
            href={`/${locale}/blog/${slug}`}
            className={styles.listCard}
        >
            <Flex gap="l" alignItems="center">
                {image && (
                    <BlogImage
                        src={image}
                        alt={title}
                        variant="list"
                    />
                )}
                <Flex direction="column" gap="xs" className={styles.content}>
                    <Heading variant="heading-strong-s" className={styles.title}>
                        {title}
                    </Heading>
                    {tag && (
                        <Text variant="label-strong-s" className={styles.tag}>
                            {tag}
                        </Text>
                    )}
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        {formatDate(publishedAt)}
                    </Text>
                </Flex>
            </Flex>
        </SmartLink>
    );
}; 
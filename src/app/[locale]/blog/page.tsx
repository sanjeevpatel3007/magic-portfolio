import { Suspense } from 'react';
import { 
	Flex, 
	Heading, 
	Text, 
	Grid, 
	Button, 
	SmartImage, 
	SmartLink 
} from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { blogData } from '@/data/blogData';
import { formatDate } from '@/app/utils/formatDate';
import styles from './blog.module.scss';
import { BlogImage } from '@/components/blog/BlogImage';
import { BlogCards } from '@/components/blog/BlogCards';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
	const { blog } = renderContent(t);

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Blog(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { person, blog } = renderContent(t);

	// Get trending posts (most recent 2)
	const trendingPosts = blogData
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
		.slice(0, 2);

	// Get all posts for the list
	const allPosts = blogData
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

	return (
		<Flex
			fillWidth maxWidth="s"
			direction="column"
			gap="xl">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						author: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			
			{/* Hero Section */}
			<div className={styles.heroSection}>
				<Flex direction="column" gap="m" className={styles.heroContent}>
					<Heading variant="display-strong-xl">
						{blog.title}
					</Heading>
					{blog.description && (
						<Text
							variant="body-default-xl"
							onBackground="neutral-weak">
							{blog.description}
						</Text>
					)}
				</Flex>
			</div>

			{/* Trending Section */}
			<section className={styles.trendingSection}>
				<Flex direction="column" gap="xl">
					<Heading variant="heading-strong-l">
						Trending Posts
					</Heading>
					<BlogCards range={[0, 1]} variant="trending" columns="1" locale={locale} />
				</Flex>
			</section>

			{/* Categories Section */}
			<section className={styles.categoriesSection}>
				<Flex direction="column" gap="l">
					<Heading variant="heading-strong-l">
						Categories
					</Heading>
					<Flex gap="m" wrap>
						{['All', 'Technology', 'Frontend', 'Backend', 'DevOps', 'Career'].map((category) => (
							<Button
								key={category}
								variant="secondary"
								size="m"
								className={styles.categoryButton}>
								{category}
							</Button>
						))}
					</Flex>
				</Flex>
			</section>

			{/* All Posts Section */}
			<section className={styles.allPostsSection}>
				<Flex direction="column" gap="xl">
					<Heading variant="heading-strong-l">
						All Posts
					</Heading>
					<BlogCards locale={locale} />
				</Flex>
			</section>
		</Flex>
	);
}
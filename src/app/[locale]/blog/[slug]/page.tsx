import { notFound } from 'next/navigation';
import { Flex, Heading, Text, Button, SmartImage, Grid } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { blogData } from '@/data/blogData';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { formatDate } from '@/app/utils/formatDate';
import styles from './blog-post.module.scss';

export async function generateStaticParams() {
	return blogData.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata(
	{ params: { slug, locale } }: { params: { slug: string; locale: string } }
) {
	const post = blogData.find((p) => p.slug === slug);
	if (!post) return {};

	const ogImage = post.image 
		? `https://${baseURL}${post.image}`
		: `https://${baseURL}/og?title=${post.title}`;

	return {
		title: post.title,
		description: post.summary,
		openGraph: {
			title: post.title,
			description: post.summary,
			type: 'article',
			url: `https://${baseURL}/${locale}/blog/${post.slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.summary,
			images: [ogImage],
		},
	};
}

export default function BlogPost(
	{ params: { slug, locale } }: { params: { slug: string; locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { person } = renderContent(t);

	const post = blogData.find((p) => p.slug === slug);
	if (!post) notFound();

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
						'@type': 'BlogPosting',
						headline: post.title,
						datePublished: post.publishedAt,
						description: post.summary,
						image: post.image
							? `https://${baseURL}${post.image}`
							: `https://${baseURL}/og?title=${post.title}`,
						url: `https://${baseURL}/${locale}/blog/${slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>

			{/* Back Button */}
			<Button
				href={`/${locale}/blog`}
				variant="tertiary"
				size="s"
				prefixIcon="chevronLeft">
				Back to Blog
			</Button>

			{/* Hero Image */}
			{/* {post.image && (
				<div className={styles.heroImage}>
					<SmartImage
						src={post.image}
						alt={post.title}
						aspectRatio="21/9"
						radius="xl"
					/>
				</div>
			)} */}

			{/* Post Header */}
			<Flex direction="column" gap="m">
				<Text variant="label-strong-s" className={styles.tag}>
					{post.tag}
				</Text>
				<Heading variant="display-strong-l">
					{post.title}
				</Heading>
				<Flex gap="12" alignItems="center">
					<div className={styles.authorAvatar}>
						<SmartImage
							src={post.author.avatar}
							alt={post.author.name}
							aspectRatio="1/1"
							radius="full"
						/>
					</div>
					<Text variant="body-default-s" onBackground="neutral-weak">
						{post.author.name} • {formatDate(post.publishedAt)}
					</Text>
				</Flex>
			</Flex>

			{/* Image Gallery */}
			{post.images && post.images.length > 0 && (
				<Grid columns="2" mobileColumns="1" gap="m" className={styles.gallery}>
					{post.images.slice(1).map((image, index) => (
						<SmartImage
							key={index}
							src={image}
							alt={`${post.title} - Image ${index + 2}`}
							aspectRatio="16/9"
							radius="l"
							className={styles.galleryImage}
						/>
					))}
				</Grid>
			)}

			{/* Post Content */}
			<Flex
				as="article"
				direction="column"
				fillWidth
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</Flex>
	);
}
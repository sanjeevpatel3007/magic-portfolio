import { notFound } from 'next/navigation'
import { Flex, Heading, Text, Button, Avatar } from '@/once-ui/components'
import { baseURL, renderContent } from '@/app/resources'
import { projectData } from '@/data/projectData'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { formatDate } from '@/app/utils/formatDate'

export async function generateStaticParams() {
	return projectData.map((project) => ({
		slug: project.slug,
	}))
}

export async function generateMetadata(
	{ params: { slug, locale } }: { params: { slug: string; locale: string } }
) {
	const project = projectData.find((p) => p.slug === slug)
	if (!project) return {}

	const ogImage = project.image 
		? `https://${baseURL}${project.image}`
		: `https://${baseURL}/og?title=${project.title}`

	return {
		title: project.title,
		description: project.summary,
		openGraph: {
			title: project.title,
			description: project.summary,
			type: 'article',
			url: `https://${baseURL}/${locale}/work/${project.slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title: project.title,
			description: project.summary,
			images: [ogImage],
		},
	}
}

export default function Project({ params }: { params: { slug: string; locale: string } }) {
	unstable_setRequestLocale(params.locale)
	const project = projectData.find((p) => p.slug === params.slug)

	if (!project) {
		notFound()
	}

	const t = useTranslations()
	const { person } = renderContent(t)

	return (
		<Flex
			as="section"
			fillWidth maxWidth="xs"
			direction="column"
			gap="m">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Article',
						headline: project.title,
						datePublished: project.publishedAt,
						description: project.summary,
						image: project.image
							? `https://${baseURL}${project.image}`
							: `https://${baseURL}/og?title=${project.title}`,
						url: `https://${baseURL}/${params.locale}/work/${project.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			<Button
				href={`/${params.locale}/work`}
				variant="tertiary"
				size="s"
				prefixIcon="chevronLeft">
				Projects
			</Button>
			<Heading variant="display-strong-s">
				{project.title}
			</Heading>
			<Flex gap="12" alignItems="center">
				{project.team?.map((member) => (
					<Avatar key={member.name} size="s" src={member.avatar}/>
				))}
				<Text variant="body-default-s" onBackground="neutral-weak">
					{formatDate(project.publishedAt)}
				</Text>
			</Flex>
			<Flex
				as="article"
				direction="column"
				fillWidth
				dangerouslySetInnerHTML={{ __html: project.content }}
			/>
		</Flex>
	)
}
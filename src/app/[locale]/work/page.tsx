import { Suspense } from 'react';
import { Flex, Heading, Text } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const { work } = renderContent(t);

    const title = work.title;
    const description = work.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/work`,
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

export default function Work(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, work } = renderContent(t);

    return (
        <Flex
            fillWidth maxWidth="s"
            direction="column"
            gap="xl"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: work.title,
                        description: work.description,
                        url: `https://${baseURL}/work`,
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
            <Flex direction="column" gap="m">
                <Heading
                    variant="display-strong-s">
                    {work.title}
                </Heading>
                {work.description && (
                    <Text
                        variant="body-default-l"
                        onBackground="neutral-weak">
                        {work.description}
                    </Text>
                )}
            </Flex>
            <Suspense 
                fallback={
                    <Flex fillWidth justifyContent="center" paddingY="xl">
                        <Text>Loading projects...</Text>
                    </Flex>
                }
            >
                <Projects locale={locale} />
            </Suspense>
        </Flex>
    );
}
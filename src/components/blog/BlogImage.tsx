"use client"
import { SmartImage } from '@/once-ui/components';
import styles from './BlogImage.module.scss';

interface BlogImageProps {
    src: string;
    alt: string;
    variant?: 'trending' | 'list' | 'small';
    className?: string;
}

export const BlogImage = ({ src, alt, variant = 'list', className = '' }: BlogImageProps) => {
    return (
        <div className={`${styles.imageContainer} ${styles[variant]} ${className}`}>
            <SmartImage
                src={src}
                alt={alt}
                fill
            />
        </div>
    );
}; 
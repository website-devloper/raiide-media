'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

type ImageLightboxProps = {
    imageSrc: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
};

const ImageLightbox = ({ imageSrc, alt, isOpen, onClose }: ImageLightboxProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="image-lightbox-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
        >
            <button
                className="lightbox-close"
                onClick={onClose}
                aria-label="Close lightbox"
            >
                <i className="bi bi-x-lg"></i>
            </button>
            <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageSrc}
                    alt={alt}
                    className="lightbox-image"
                />
            </div>
        </div>
    );
};

export default ImageLightbox;

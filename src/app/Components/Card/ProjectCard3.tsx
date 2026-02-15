import Link from 'next/link';
import React from 'react';

type ProjectCard3Props = {
    img: string;
    title: string;
    content: string;
    onPreview?: () => void;
};

const ProjectCard3 = ({ img, title, content, onPreview }: ProjectCard3Props) => {
    const handlePreview = (event?: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        onPreview?.();
    };

    return (
        <div className="agenko-project-item style-four mb-30 pf_fadeup">
            <div
                className="thumbnail project-preview-trigger"
                onClick={() => onPreview?.()}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onPreview?.();
                    }
                }}
            >
                <img src={img} alt="Project Image" decoding="async" />
                <div className="hover-content">
                    <div className="content">
                        <a className="category-btn" href="#" onClick={handlePreview}>{title}</a>
                        <h4>
                            <Link href="/project/project-details" onClick={handlePreview}>
                                {content}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3;

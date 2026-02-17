import React from 'react';

type ProjectCard3Props = {
    img: string;
    title: string;
    content: string;
};

const ProjectCard3 = ({ img, title, content }: ProjectCard3Props) => {
    return (
        <div className="agenko-project-item style-four mb-30 pf_fadeup">
            <div className="thumbnail">
                <img src={img} alt={`${title} - ${content}`} decoding="async" />
            </div>
        </div>
    );
};

export default ProjectCard3;

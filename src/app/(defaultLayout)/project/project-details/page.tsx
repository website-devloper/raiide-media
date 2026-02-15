import BreadCumb from '../../../Components/Common/BreadCumb';
import ProjectDetails from '../../../Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                Title="Project Details"
                content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
            ></BreadCumb>   
            <ProjectDetails></ProjectDetails>       
    </div>
  );
};

export default page;

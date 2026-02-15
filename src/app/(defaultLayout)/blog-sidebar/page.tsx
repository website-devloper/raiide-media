import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
               <BreadCumb
                Title="Blog Standard"
                content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
            ></BreadCumb>  
            <BlogSidebar></BlogSidebar>         
    </div>
  );
};

export default page;

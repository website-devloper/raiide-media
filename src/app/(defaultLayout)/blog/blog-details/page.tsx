import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import BreadCumb from '../../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
              <BreadCumb
                Title="Blog Details"
                content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>       
    </div>
  );
};

export default page;

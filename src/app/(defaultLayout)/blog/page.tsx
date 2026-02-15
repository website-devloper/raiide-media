import Blog4 from '../../Components/Blog/Blog4';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="Blog Grid"
                content="Raiide Media empowers brands with strategy, content, and performance marketing solutions"
            ></BreadCumb> 
            <Blog4></Blog4>      
    </div>
  );
};

export default page;

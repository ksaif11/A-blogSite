import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {

    const [blogs,setBlogs]=useState([]);

    const [selectedCategory,setSelectedCategory]=useState(null);
    const pageSize=12;
    const [currentPage,setCurrentPage]=useState(1);
    const [activeCategory,setActiveCategory]=useState(null);
    
    useEffect(()=>{
      async function fetchBlog (){
        let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

        if(selectedCategory){
            url+=`&category=${selectedCategory}`
        }
        const response=await fetch(url);
        const data= await response.json();
       setBlogs(data);
      }
      fetchBlog();
    },[currentPage,selectedCategory,pageSize]);

    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange=(category)=>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }



  return (
    <div>
      <div>
       <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} 
       activeCategory={activeCategory} />
      </div>

      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} selectedCategory={selectedCategory} pageSize={pageSize} currentPage={currentPage} />
        <div>
            <SideBar/>
        </div>
      </div>

      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize}/>
      </div>
    </div>
  )
}

export default BlogPage

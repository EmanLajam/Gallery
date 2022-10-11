import React from "react";
import { useState, useEffect } from "react";
import Search from '../Search'
import ReactPaginate from "react-paginate"
import './Pagination.css'


export default function Pagination({pageCount , onPageChange}){
   
    return(
        <div >
          <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={"paginationBttns"}   
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />   

        
        </div>
    )
}
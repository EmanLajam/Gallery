import React from "react";
import { useState, useEffect,useRef} from "react";
import Gallery from "../Pagination";
import Image from './image'
import './Search.css'
import Pagination from "../Pagination";



const Search = (props) => {
    
    //an empty string as it will be used to store the input from the search bar
    const [img, setImg] = useState("");
    //an empty array because it will store the data fetched from the API and then show it in our Result Section
    const [res, setRes] = useState([]);
  //  const [images, setImages]= useState([])

  const [ pageNumber, setPageNumber] = useState(0)
    

    useEffect(()=>{
        const fetchImages = async () =>{
            const response = await fetch(
                `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}`
            )

            const data =await response.json()

            setRes(data)
            console.log(data)
            }
        
        fetchImages()
        


    }, [])
    
    const SerchImage = async () => {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${process.env.REACT_APP_API_KEY}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
        ref.current.scrollIntoView({behavior: 'smooth'});

      };
      const ref = useRef(null)
        const Submit = () => {
    
        SerchImage();

        setImg("");
        
       
      };

      //Pagination section
      const imagesPerPage = 4;
      const pagesVisited = pageNumber * imagesPerPage;

      const displayImages = res.slice(pagesVisited, pagesVisited + imagesPerPage)
      .map((val) => {
        return (
            <>
            <div className="col ">
            <Image key={val.id} {...val}/>
           </div>
    </>
        );
      })

      const pageCount = Math.ceil(res.length / imagesPerPage)
      const changPage= ({selected}) =>{
        setPageNumber(selected);
      }

       

      
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-3 form-control-sm py-1 fs-4 text-capitalize search"
              type="text"
              placeholder="Search Anything..."
              value={img}
              onChange={(e) => setImg(e.target.value)}

            />
            <button
              type="submit"
              onClick={Submit}
              className="btn bg-dark text-white fs-3 mx-3 btn"
              disabled={!img}
              id="serch"
            >
              Search
            </button>
<div className="text">
            <h1>Welcome to Gallery</h1>
            <p>Browse your favorite photos</p>
            </div>
          </div>
        </div>
      </div>

      
     
        <div className=" pagainate" ref={ref}>
        <Pagination pageCount ={pageCount} onPageChange = {changPage}/>
        </div>
        <div className="gallery" id="gallery" >
    {displayImages}
      
      
    </div>
      
      
    </>
  );
};
export default Search;
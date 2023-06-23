import React, { useState } from "react";
import PortfolioData from './portfolioPage1Api';
import ReactPaginate from "react-paginate";
import '../Portfolio.css';
import './style.css';

function PortfolioPage1() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(PortfolioData);

  // filter data 
  const filter = (categItem) => {
    const afterfilter = PortfolioData.filter((item) => {
      return item.category === categItem
    })
    setUsers(afterfilter)
  }
  // 

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;


  // search data 
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((val) => {
      if (search === "") {
        return val
      }
      else if (val.position.toLowerCase().includes(search.toLowerCase())) {
        return val
      }
    })
    // 
    .map((user, id) => {
      return (
        <div className="cards" key={id}>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
          <img src={user.menImg} alt="" />
          <div className="text"><span>{user.position}</span></div>
          <div className="btns">
            <a href='https://github.com/QaisarRaza' className="git" target="_blank">Github</a>
            <a href={user.live} className="demo" target="_blank">Live Demo</a>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>

      {/* all button  */}
      <div className="alll">
        <div className="filter">
          <button onClick={() => setUsers(PortfolioData)}>All</button>
          <button onClick={() => filter("react")}>React</button>
          <button onClick={() => filter("mearn")}>MERN Project</button>
        </div>

        {/* search method  */}
        <div className="search">
          <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="Search..." />
          {/* <i class="fal fa-search searchbar" id="search"></i> */}
        </div>
        {/*  */}

        <div className="pagination">
          {displayUsers}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
}

export default PortfolioPage1;

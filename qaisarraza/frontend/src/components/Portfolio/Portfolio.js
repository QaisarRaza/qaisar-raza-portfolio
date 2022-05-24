import React, {useEffect} from 'react';
import './Portfolio.css';
import PortfolioPage1 from './portfolioPage/portfolioPage1';

function Portfolio() {
  useEffect(() => {
    document.title="Portfolio"
    }, [])
  return (
    <div id='portfolio'>
        <h1>Portfolio</h1>
        <div className="cardsContainer">
            <PortfolioPage1 />
        </div>
    </div>
  )
}

export default Portfolio
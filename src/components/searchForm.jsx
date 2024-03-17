import Link from 'next/link';
import React from 'react';

const SearchForm = (props) => {
  const keyWord = props?.keyWord;

  return (
    <div className='search-bar-main'>
      <div className='search-bar-cont'>
        <div className='search-bar-cont-img'>
          <Link href="/">
            <img src="/meli.png" width="42px" alt="meli-logo"/>
          </Link>
        </div>
        <div className='search-bar-cont-input'>
          <form action='/items' method='GET'>
            <div className="input-group mb-3">
              <input type="text" name="search" className="form-control" placeholder="Nunca dejes de buscar" defaultValue = {keyWord}/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary btn-bar"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;

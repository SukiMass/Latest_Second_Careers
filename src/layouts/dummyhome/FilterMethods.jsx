import React from "react";

const FilterMethods = () => {


  const [search, setSearch] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleSearchInput(e) {
      setSearch(e.target.value)
  }

  function handleSearchButtonClick() {
    if (search === '') {
        setError(true)
    }
    else {
        setError(false);
    }
}



  return (
    <div className="container-fluid dashboard-menus-container">
      <div className="row mt-5 pt-4 py-2">
        <div className="col-lg-6">
          <ul className="nav justify-content-around bg-white m-1 rounded-2 select-category">
            <li className="nav-item border-bottom border-4 border-warning" data-testid='All'>
              <a className="nav-link active " aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item" data-testid='Recommended'>
              <a className="nav-link" href="#">
                Recommended
              </a>
            </li>
            <li className="nav-item" data-testid='Applied'>
              <a className="nav-link" href="#">
                Applied
              </a>
            </li>
            <li className="nav-item" data-testid='Saved'>
              <a className="nav-link" href="#">
                Saved
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-6">
          <div className="d-flex m-1">            
              <input
                className="form-control form-control-lg w-75 searchInput border-0"
                type="text"
                placeholder="Seach Company, title"
                aria-label="default input example"
                value={search} onChange={handleSearchInput}
                data-testid="searchResult"
              />
              <button type="button" className="btn btn-lg btn-brand-color w-25 ms-3"  data-testid="SearchButton" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
           
          </div>
        </div>
      </div>
    
  );
};

export default FilterMethods;

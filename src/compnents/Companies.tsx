import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import companiseSlice, { fetchData, searchCompany } from './companiseSlice'
import { CompaniesDispatch, RootState } from '../type'
import SortCompany from './sortCompany'
import { Link } from 'react-router-dom'

const Companies = () => {
  const { data, isLoading, error, searchTerm} = useSelector((state: RootState) => state.companiseReducer)

  const dispatch: CompaniesDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])


  if (isLoading) {
    return <p>Loading the data</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value)
    dispatch(searchCompany(Number(event.target.value)));
  };
  //you can use incloude(), to display by one char
  //search with searchterm
 const filterCompanies = searchTerm? data.filter((company) => `${company.id}` ===searchTerm): data;

  return (
    <div>
        <h2>Companies App</h2>
      <div className='action'>
      <input type="text" placeholder="search by company ID" onChange={handleSearch} value={searchTerm}/>
      <SortCompany/>
      </div>
      <section className="companies">
        {filterCompanies.length > 0 &&
          filterCompanies.map((company) => {
            const { id, avatar_url, login, description } = company
            return (
              <article key={id} className="company">
                <img src={avatar_url} alt={login} />
                <h2>{id}</h2>
                <p>{login}</p>
                <p>{description}</p>
                <Link to ={`/Companies/${id}`}>
                <button>Show more</button>
                </Link>
              </article>
            )
          })}
      </section>
    </div>
  )
}

export default Companies;

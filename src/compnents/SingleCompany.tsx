import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCompany, fetchData } from './companiseSlice'
import { CompaniesDispatch, RootState } from '../type'

const SingleCompany = () => {
  // get the id from parameter -> can make the call

  const { id } = useParams()
  const dispatch: CompaniesDispatch = useDispatch()

  const { singleCompany, isLoading, error } = useSelector(
    (state: RootState) => state.companiseReducer
  )

  useEffect(() => {
    if (id) dispatch(fetchCompany(Number(id)))
  }, [dispatch, id])

  if (isLoading) {
    return <p>Loading the data</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {singleCompany && <article>
        <img src={singleCompany.avatar_url} alt={singleCompany.login}/>
        <p>{singleCompany.login}</p>
        <p>{singleCompany.description}</p>
        <p>{singleCompany.issues_url}</p>
        <p>{singleCompany.id}</p>
        </article>}
    </div>
  )
}

export default SingleCompany

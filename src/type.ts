import { ThunkDispatch } from '@reduxjs/toolkit'
import companiseSlice, { fetchCompany, fetchData } from './compnents/companiseSlice'

type Company = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: null
}

export type CompaniesState = {
  data: Company[]
  isLoading: boolean
  error: string | null
  searchTerm: string
  singleCompany: Company | null
}

export type RootState = {
  companiseReducer: ReturnType<typeof companiseSlice>
}

// three actions, which the dispatch will can be one of them
type fetchDataPendingAction = ReturnType<typeof fetchData.pending>
type fetchDataFulfilledAction = ReturnType<typeof fetchData.fulfilled>
type fetchDataRejectedAction = ReturnType<typeof fetchData.rejected>

// three actions, which the dispatch will can be one of them
type fetchCompanyPendingAction = ReturnType<typeof fetchCompany.pending>
type fetchCompanyFulfilledAction = ReturnType<typeof fetchCompany.fulfilled>
type fetchCompanyaRejectedAction = ReturnType<typeof fetchCompany.rejected>

type searchCompanyAction = {
  type: 'companise/searchCompany'
  payload: number
}
type sortCompanyAction = {
  type: 'companise/sortCompany'
  payload: string
}

export type CompaniesAction =
  | fetchDataPendingAction
  | fetchDataFulfilledAction
  | fetchDataRejectedAction
  | searchCompanyAction
  | sortCompanyAction
  | fetchCompanyFulfilledAction
  | fetchCompanyPendingAction
  | fetchCompanyaRejectedAction

export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesAction>

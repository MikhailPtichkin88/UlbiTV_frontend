import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => {
  const slice = createSlice(options)
  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch()
    return useMemo(
      () => bindActionCreators(slice.actions as any, dispatch),
      [dispatch]
    )
  }
  return { ...slice, useActions }
}

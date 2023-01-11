import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'


export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}
type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
  const {children, reducers, removeAfterUnmount } = props
  const store = useStore()  as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(()=>{
    Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry)=>{
      store.reducerManager.add(name, reducer)
      dispatch({type:`@INIT add ${name} reducer`})
    })
    return ()=> {
      if(removeAfterUnmount){
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry)=>{
          store.reducerManager.remove(name)
          dispatch({type:`@DESTROY remove ${name} reducer`})
        })
      }
    }
  },[])
  return (
    <>
      {children}
    </>
  )
}

import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'

import DepartmentGroup from './DepartmentGroup'
import "./styles.css"

import { useCssHandles } from 'vtex.css-handles'
import { SearchBar } from 'vtex.store-components' 

const DepartmentSearch = () => {
  const {data, loading} = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")

  console.log("Mi slug seleccionado es:", slug)

  const CSS_HANDLES = [
    "container__select__searchBar",
    "container__select",
    "container__searchBar"
  ]
  const handles = useCssHandles(CSS_HANDLES) 
  
  return loading 
   ? 
    <div>Loading ...</div>
   : 
    <div className={handles.container__select__searchBar}>
      <div className={handles.container__select}>
        <DepartmentGroup 
          departments={data?.categories[0]?.children}
          handleSetSlug={setSlug}
        />
      </div>
      <div  className={handles.container__searchBar}>
        <SearchBar      
        customSearchPageUrl={slug}
        placeholder=""
        displayMode="search-and-clear-buttons"
        />
      </div>
    </div>   
}

export default DepartmentSearch
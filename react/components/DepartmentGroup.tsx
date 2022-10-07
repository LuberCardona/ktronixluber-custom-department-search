import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({departments, handleSetSlug}: Props)=>{
  console.log("Mi grupo de departamentos es:", departments)
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(event.target.value)
  }
  const CSS_HANDLES = [
    "select__item"
  ]
  const handles = useCssHandles(CSS_HANDLES) 

  const departmentOptions: any = departments.map((department: Category) => {    
   return(
    <option 
     value={department.slug}
     key={department.id}
    >
      {department.name}
    </option>
   )
  })
  return (
    <select 
      onChange={onHandleSetSlug}
      defaultValue="value0"
      className={handles.select__item}
    >
      <option disabled value="value0">Seleccione</option>
      {departmentOptions}
    </select>
  )
  
}

export default DepartmentGroup


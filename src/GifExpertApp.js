import React, {useState} from 'react'
import AddCategory from "./components/AddCategory"
import GifGrid from './GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"])

  

  return (
    <>
        <h2>Git Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
          { 
            categories.map( category =>  (
              <GifGrid 
                category = { category }
                key=  { category }
              />
            ))
          }
        </ol>
    </>
  )
}

export default GifExpertApp
import React, {useEffect, useState} from "react";
import '../css/ReadingForm.css'
import Input from "./Input";
import Select from './Select'
import SubmitButton from "./SubmitButton";


export default function ReadingForm({handleSubmit, readingData}) {

    const [categories, setCategories] = useState([])
  
     const [ reading, setReading] = useState(readingData || [])


    useEffect(() => {
        
    fetch("http://localhost:5000/categories", {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
       // console.log(reading)
        handleSubmit(reading)
    }

    function handleChange(e) {
        setReading({...reading, [e.target.name]: e.target.value })
        console.log(reading)
    }

    function handleCategory(e) {
       setReading({...reading, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
       }})
    }

  

    return (
        <form onSubmit={submit} className="form" >
           <Input type="text" 
               text="Book name:"
                name="name"
                placeholder="Put the book name here."
                handleonChange={handleChange}
                value={reading.name ? reading.name : ''}/>
                       
            <Input type="number" 
               text="Price:"
                name="price"
                placeholder="How much did you pay?"
                handleonChange={handleChange}
                value={reading.price ? reading.price : ''}/>

           <Select
            name="category_id"
            text="Genrer" 
             options={categories}
             handleonChange={handleCategory}
             value={reading.category ? reading.category.id : ''}/>

             <Input
              type="text"
              text="Description:"
              name="description"
               placeholder="Short description's book"
               value={reading.description ? reading.description : ''}
               handleonChange={handleChange}/>

           <SubmitButton  buttonText="Add book"/>
        </form>
    )
}
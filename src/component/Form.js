import {useState} from 'react'

const Form = () => {
    // const [city , setCity] = useState('')

    // const [food, setFood] = useState('')

    // const onCityChange = (e) => {
    //     setCity(e.target.value)
    // }

    // const onFoodChange = (e) => {
    //     setFood(e.target.value)
    // }

    const [formData, setFormData] = useState({
        firstName  : '',
        lastName : '',
        city : ''
    })

    return (
        // <input type='text' placeholder='Enter Your city name' value={city} onChange={onCityChange}/>

        //another way of writing above line
        <>
        <input type='text' placeholder='Enter Your firstName name' value={formData.firstName} onChange={(e)=> setFormData({
            ...formData,
            firstName : e.target.value})}/>
<br /> 
        <input type='text' placeholder='Enter Your lastName name' value={formData.lastName} onChange={(e)=> setFormData({
            ...formData,
            lastName : e.target.value
        })}/>
        <br />
        <input type='text' placeholder='Enter Your city name' value={formData.city} onChange={(e)=> setFormData({
            ...formData,
            city : e.target.value
        })}/>
        </>
        
    )
}

export default Form
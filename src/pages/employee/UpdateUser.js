import { React, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "./UpdateUser.css";
function UpdateUser () {

    const {id}=useParams;
    const navigate = useNavigate();
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        department:""
    
    });

    useEffect(()=>{
        const fetchEmployees = async ()=>{
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`)
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.log("Error fetching user ", error.message);
            }
        }
        fetchEmployees();
    },[id])

    const handleSubmit = async(e) =>{
       e.prevantDefault();

       try {
           const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
            method:"PATCH",
            headers : { 'content-Type' : "application/json" },
                body : JSON.stringify(formData)
            });
            const data = await response.json();
            console.log("User Updated Successfully : " , data);
            navigate("/");
        
       } catch (error) {
        console.log("Error in Updating Employee : " , error.message);
             
       }
    }
    
    const handleInputChange = (event)=>{
        const{name,value}=event.target;
        setFormData({...formData,[name]:value});
    
    }
  return (
    <div className='center-form'>
      <h1>Update Employees</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicName'>
            
            <Form.Control
            type="text"
            name='name'
            placeholder='Enter Name'
            value={formData.name}
            onChange={handleInputChange}
            />

        </Form.Group>

        <Form.Group controlId='formBasicName'>
            
            <Form.Control
            type="text"
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleInputChange}
            />

        </Form.Group>

        <Form.Group controlId='formBasicName'>
            
            <Form.Control
            type="text"
            name='phone'
            placeholder='Enter Phone Number'
            value={formData.phone}
            onChange={handleInputChange}
            />

        </Form.Group>

        <Form.Group controlId='formBasicName'>
            
            <Form.Control
            type="text"
            name='department'
            placeholder='Enter Department'
            value={formData.department}
            onChange={handleInputChange}
            />

        </Form.Group>

        <Button variant='primary' type="submit" className='w-100'>Edit Employee</Button>
    </Form>
    </div>
  )
}

export default UpdateUser
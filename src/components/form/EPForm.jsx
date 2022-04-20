import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select'
const EPForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
    };
    console.log("errors", errors);

    //React Select
    const [skill, setSkill] = useState(null);
    const [gender, setGender] = useState(null);
    const onSkillChange = (value)=>{
        console.log(value);
        setSkill(value);
    }
    const onGenderChange = (value)=>{
        //console.log(value);
        setGender(value.label);
    }
    const skillOptions = [
        {
            label:'React.js',
            value:1
        },
        {
            label:'Angular.js',
            value:2
        },
        {
            label:'Vue.js',
            value:3
        }
    ];
    const genderOptions = [
        {
            label:'male',
            value:1
        },
        {
            label:'female',
            value:2
        },
    ];
    return (
        <form className='mx-auto w-25 container mt-1 p-4' onSubmit={handleSubmit(onSubmit)} style={{backgroundColor:'pink'}}>
             <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input {...register('text')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first Name"/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input {...register('text', {required:true})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input {...register('email', {required:true})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            {
                errors.email &&
                <p className='alert alert-danger mt-2'>Email is required!</p>
            }
            <div className="form-group mt-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input {...register('password', {required:true})} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            {
                errors.password &&
                <p className='alert alert-danger mt-2'>Password is required!</p>
            }
            <Form.Group className="mt-3" controlId='select'>
                <Form.Label>Select Skill (multiple)</Form.Label>
                <ReactSelect options={skillOptions} onChange={onSkillChange} isMulti={true} placeholder="Skills"/>
            </Form.Group>
            {
                skill !== null? 
                <p className='alert alert-primary mt-2'>
                    {
                        skill.map((skillaya, i)=>{
                            return <p>{skillaya.label}</p>
                        })
                    }
                </p>
                :
                <p></p>
            }
             <Form.Group className="mt-3" controlId='select'>
                <Form.Label>Select Gender</Form.Label>
                <ReactSelect options={genderOptions} onChange={onGenderChange} placeholder="Gender"/>
            </Form.Group>
            {
                gender !== null? 
                <p className='alert alert-primary mt-2'>Gender: {gender}</p>
                :
                <p></p>
            }
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    );
}

export default EPForm;
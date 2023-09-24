"use client"
import { useForm } from 'react-hook-form'

const onSubmit = data: any => console.log(data);

export const Form.users.d = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  return (
    <form onSubmit={event => { { handleSubmit(onSubmit); } }}>
      <input {...register('Name', {required: true})}/>
      {errors.email && <span> This field is required</span>}
      <input {...register('Last Name', {required: true})}/>
      {errors.email && <span> This field is required</span>}
      <input {...register('Email', {required: true})}/>
      <button type="submit">Send form</button>
    </form>
  )
}

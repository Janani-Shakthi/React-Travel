 
import './Signingstyles.css';
import Bg from '../assets/j7.jpg';
import { useForm } from 'react-hook-form'

export default function Signing(){

  const{register,handleSubmit,watch,}=useForm()
  const onSubmit = (data) =>console.log(data)

  console.log(watch("username"))
  return( 
    <body className='bg'>
      
    
    <section> 
      <div className="register">
        <div className="col-1">
          <h2>Sign up</h2>
          <span>register and enjoy</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text"{...register("username")} placeholder='Username' />
            <input type="text" {...register("password")}placeholder='Password' />
            <input type="text" {...register("confirmpwd")}placeholder='Confirm Password' />
            
            <input type="text"{...register("mobile",{ required: true})} placeholder='Mobile Number'/>

            <button className='btn'>Sign UP</button>
          </form>
          
        </div>

        <div className="col-2">
          <img src={Bg} alt="" />
        </div>
      </div>
      </section> 

      </body>
  )
}



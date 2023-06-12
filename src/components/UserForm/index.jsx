import { useState, useEffect } from 'react'
import style from './UserForm.module.css'

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser, updateUser } from '../../services/userService';

export default function UserForm({ user, title, id = null }) {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const { register, handleSubmit } = useForm()
   const navigate = useNavigate()

   useEffect(() => {
      setName(user?.name)
      setEmail(user?.email)
   },[user])

   async function handleSignIn(data) {

      if (!id && data.password !== data?.confirm_password) {
         alert('Password does not match!')
         return
      }
      try {
         if(id){
            data.name = name
            data.email = email
            updateUser('',id,data).then(() => {
               navigate('/users')
            }).catch(error => {
               console.log('res',error)
            })
         } else {
            createUser('',data).then(() => {
               navigate('/users')
            }).catch(error => {
               console.log(error)
            })
         }
      } catch (error) {
         console.log(error)
         alert('There was an error recording, please try again!')
      }
   }

   return (
      <div className={style.container}>
         <div className={style.login_container}>
            <h2 className={style.title}>{title}</h2>
            <form onSubmit={handleSubmit(handleSignIn)} className={style.form}>
               <div className={style.input_container}>
                  <label htmlFor="name">
                     Name
                  </label>
                  <input
                     {...register('name')}
                     id="name"
                     name="name"
                     type="text"
                     placeholder="Enter your full name"
                     value={name || ''}
                     onChange={(e) => setName(e.target.value)}
                     required
                  />
               </div>
               <div className={style.input_container}>
                  <label htmlFor="email-address">
                     Email
                  </label>
                  <input
                     {...register('email')}
                     id="email-address"
                     name="email"
                     type="email"
                     placeholder="Enter your email"
                     value={email || ''}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
               </div>
               {id == null &&
                  <>
                     <div className={style.input_container}>
                        <label htmlFor="password">
                           Password
                        </label>
                        <input
                           {...register('password')}
                           id="password"
                           name="password"
                           type="password"
                           placeholder="Password"
                           required
                        />
                     </div>
                     <div className={style.input_container}>
                        <label htmlFor="confirm_password">
                           Confirm Password
                        </label>
                        <input
                           {...register('confirm_password')}
                           id="confirm_password"
                           name="confirm_password"
                           type="password"
                           placeholder="Confirm Password"
                           required
                        />
                     </div>
                  </>
               }
               <div className={style.button_container}>
                  <button type="submit" className={`${style.btn} ${style.green}`}>
                     {id != null ? 'Edit' : 'Save'}
                  </button>
                  <button type="button" onClick={() => navigate(-1)} className={`${style.btn} ${style.gray}`}>
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}
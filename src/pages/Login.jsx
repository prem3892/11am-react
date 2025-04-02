import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { handleAuthLogin } from '../redux/auth.slice';
function Login() {

	const {authenticated} =  useSelector(state=>state.authSlice);
	const dispatch =  useDispatch()
	console.log(authenticated)

    const [email, setEmail] =  useState("");
    const [pass, setPass] =  useState("");

    const navigate=   useNavigate()

    function handleLogin(e){
        e.preventDefault();
		console.log(email, pass)
		dispatch(handleAuthLogin(email))
		
        alert("logged in");
        navigate("/dashboard")
        
    }

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-950 text-gray-50 m-auto my-10">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form onSubmit={handleLogin}  action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input onChange={(e)=>setEmail(e.target.value)} type="text" name="" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input onChange={(e)=>setPass(e.target.value)}  type="password" name="" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>
  )
}

export default Login
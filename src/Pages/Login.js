import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const { login} = useContext(AuthContext);

  function handleLogin(){
    login()
  }

    return (
        <section className="signup">
          <div className="flex flex-row space-x-8 py-12 px-32">
              <div className="left-side w-1/2">
                  <img
                      src="https://images.unsplash.com/photo-1589483232748-515c025575bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDQ1fHxzbWlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt="A group of people happily chatting "
                      className="rounded-3xl h-full object-cover"
                  />
              </div>
    
              <div className="right-side space-y-10 w-1/2 rounded-3xl">
                <div className='bg-black text-white rounded-3xl p-10'>
                  <div className='text-left mb-6 space-y-1.5'>
                    <h1 className='signup__title font-extrabold text-5xl'>Jamii Feed</h1>
                    <p className='font-medium text-lg'>Welcome back! Log in to your account to continue.</p>
                  </div>
    
                  <form className='text-left'>
                    <div className='space-y-1 mb-2.5'>
                      <label className='block'>Username:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-black'  type="text" name="username" placeholder="Username" required/>
                    </div>
                      
                    <div className='space-y-1'>
                      <label className='block'>Password:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-black' type="password" name="password" placeholder="Password" required/>
                    </div>

                    <div className='w-full text-center flex items-center'>
                      <button className='w-full bg-blue-500 rounded p-2 mt-6 text-white lg:text-xl font-bold bottom-0 hover:bg-blue-light' onClick={handleLogin} type="submit">Log In</button>
                    </div>
                    
    
                    <p className='text-center mt-4'>Don't have an account yet? <a className='underline hover:text-orange-dark' href="/signup">Sign up</a></p>
                  </form>
                </div>
              </div>
          </div>
      </section>
        
      );
}

export default Login

function SignUp() {
  return (
    <section className="signup">
        {/* <h1 className='px-32 pt-12  signup__title font-extrabold text-5xl'>Jamii Feed</h1> */}
        <div className="flex flew-row space-x-8 py-12 px-32">
            <div className="left-side w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1632612721400-0a337458b7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg5fHxzbWlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="Three people sitting outside in a discussion"
                    className="rounded-3xl h-full object-cover"
                    loading='lazy'
                />
            </div>

            <div className="right-side space-y-10 w-1/2 bg-black">
                <div className='bg-blue-dark text-white rounded-3xl p-10'>
                    <div className='text-left mb-6 space-y-1.5'>
                    <h1 className='signup__title font-extrabold text-5xl'>Sign Up</h1>
                    <p className='font-medium text-lg'>Welcome to <span className="text-orange-700">Jamii Feed </span>! Start your journey here!</p>
                    </div>

                    <form  className='text-left'>
                        <div className='space-y-1 mb-2.5'>
                        <label className='block'>Full Name:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark'  type="text" name="fullname" placeholder="Fullname" required/>
                        </div>

                        <div className='space-y-1 mb-2.5'>
                        <label className='block'>Username:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark'  type="text" name="username" placeholder="Username" required/>
                        </div>

                        <div className='space-y-1 mb-2.5'>
                        <label className='block'>Email:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark'  type="text" name="email" placeholder="Email" required/>
                        </div>
                        
                        <div className='space-y-1'>
                        <label className='block'>Zip:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' type="password" name="zip" placeholder="Zip" required/>
                        </div>
                        

                    <div className='w-full text-center flex items-center'>
                        <button className='w-full bg-orange-700 rounded p-2 mt-6 text-white lg:text-xl font-bold bottom-0 hover:bg-blue-light' type="submit">Register</button>
                    </div>

                    <p className='text-center mt-4'>Already have an account? <a className='underline hover:text-orange-dark' href="/login">Login</a></p>
                    </form>
                </div>
            
            </div>
      </div>
    </section>
  );
}
export default SignUp;


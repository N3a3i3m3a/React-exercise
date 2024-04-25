

const Signup = () => {
    
    
    return (
    
    <div>           
    <h1 className="text-2xl text-red-600 font-bold">SIGN UP</h1>
    <div className="mt-5 flex flex-col gap-5">
      <div>
      <input
          type="text"
          id="names"
          placeholder="Full names"
          value=''
          className=" bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
        />
      </div>  
      <div>
        <input
          type="text"
          id="username"
          placeholder="Email"
          required
          className=" bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="password"
          value=''
          className=" bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
        />
      </div>
      <div>
        <input
          type="password"
          id="confirm password"
          placeholder="Confirm password"
          value=''
          className=" bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
        />
      </div>
        <button className="bg-blue-300 mx-9 py-2 rounded-md text-white w-[80%] border border-blue-700">Sign Up</button>
      </div>
    </div>
    
            )}
    
export default Signup
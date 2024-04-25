import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const Login = () => {
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Inter p');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
    <div>           
    <h1 className="text-2xl text-red-600 font-bold">SIGN IN</h1>
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
      <div>
        <input
          type="text"
          id="username"
          placeholder="Email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          className=" bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
        />
      </div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          className=" bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
        />
      </div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div>
        <button className="bg-blue-300 px-5 py-2 rounded-md text-white w-[80%] border border-blue-700">Sign In</button>
      </div>
    </form>
    <p className="mt-3">
      Already does not have an account?<span className="text-red-500"><Link to='/SignUp'>Sign Up</Link></span>
      <br/>
      Forgot Password?<span className="text-red-500"><Link to='/Reset'>Reset password</Link></span>
    </p>
    </div>
 

            )}
        </>
    )
}

export default Login
import axios from '../../api/axiosConfig.jsx'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login({handleLoginSuccess}) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            const response = await axios.post("/login", {
                login: login,
                password: password
            },{
                headers: {"Content-Type": "application/json"}
            })
            const token = response.data;
            // console.log(token)
            localStorage.setItem("token", token);
            handleLoginSuccess()
            navigate("/");
        } catch (error) {
            console.log(error)
            setError("Bad credentials")
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-96 p-6 bg-gray-800">
                    <form onSubmit={handleLogin}>
                        <h2 className="text-xl mb-4">Login</h2>
                        <input type="text" placeholder="Enter email/login" className="w-full p-2 mb-2" value={login} onChange={(e) => setLogin(e.target.value)}/>
                        <input type="password" placeholder="Password" className="w-full p-2 mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="w-full bg-pink-500 p-2 rounded" type="submit">Login</button>
                        <p className="mt-2 text-sm">
                            Don't have an account? <Link to="/register" className="text-pink-400">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;
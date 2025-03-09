import axios from '../../api/axiosConfig.jsx'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {

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
            navigate("/");
        } catch (error) {
            console.log(error)
            setError("Bad credentials")
        }
    }

    return (
        <>
            <div>
                <h1>Вход в систему</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required/>
                    </div>
                    <div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </>
    )

}

export default Login;
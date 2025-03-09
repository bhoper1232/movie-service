import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react"
import api from "../api/axiosConfig"

function Layout() {

    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token")
            if (token) {
                try {
                    const response = await api.get(`/auth/check`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    })

                    // console.log(token)

                    if (response.status !== 200) {
                        throw new Error("Failed to get token")
                    }

                    // console.log("response", response)

                } catch (error) {
                    console.error("Failed to get token", error)
                    localStorage.removeItem("token")
                    navigate("/login")
                }
            } else {
                navigate("/login")
            }
        }

        checkToken()
    }, []);

    return(
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout
import React,{createContext,useEffect,useState} from "react";


const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token,setToken] = useState(null);
    

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if(storedToken){
            setToken(storedToken);
        }
        getUser();
    },[])

    const getUser = async ()=>{
        try {
            const res = await fetch("http://localhost:5000/api/user/myprofile", {
                method: "GET",
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                setUser(data);
                console.log("User profile fetched successfully:", data);
            }
        } catch (error) {
            
        }
    }
   

    const login = async (credentials) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", //  Important for receiving the HTTP-only cookie
                body: JSON.stringify(credentials),
            });

            const result = await res.json();
            console.log(result);

            if (res.ok) {
                // Store token only if you're NOT relying solely on HTTP-only cookies
                // Optional: localStorage.setItem("token", result.token);
                setToken(result.token); // If you're using a React state or context
                return true;
            } else {
                throw new Error(result.msg || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.message);
            throw error;
        }
    };
    

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };
    



    return (
        <authContext.Provider value={{ user ,token, login,logout }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return React.useContext(authContext);
}
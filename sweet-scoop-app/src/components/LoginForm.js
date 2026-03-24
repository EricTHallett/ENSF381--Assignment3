import { useState, useEffect } from "react";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

    const handleLogin = () => {
        if (!username || !password) {
            setType("error");
            setMessage("Username and password cannot be empty.");
            return;
        }

        if (password.length < 8) {
            setType("error");
            setMessage("Password must be at least 8 characters.");
            return;
        }

        const user = users.find(
            u => u.username === username && u.email === password
        );

        if (user) {
            setType("success");
            setMessage("Login successful! Redirecting...");
        } else {
            setType("error");
            setMessage("Invalid username or password.");
        }
    };

    useEffect(() => {
        if (type === "success") {
            setTimeout(() => {
                window.location.href = "/flavors";
            }, 2000);
        }
    }, [type]);

    return (
        <form>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <br />

            <button type="button" onClick={handleLogin}>
                Login
            </button>

            <br />

            <a href="#">Forgot Password?</a>

            {message && <DisplayStatus type={type} message={message} />}
        </form>
    );
}

export default LoginForm;
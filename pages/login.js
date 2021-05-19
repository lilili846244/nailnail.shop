import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameCorrect, setIsUserNameCorrect] = useState(true);

  const handleUername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  useEffect(() => {
    console.log(isUsernameCorrect);
    if (username.length < 8) setIsUserNameCorrect(false);
    else setIsUserNameCorrect(true);
  }, [username]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          username:
          <input type="text" value={username} onChange={handleUername} />
        </label>
        {!isUsernameCorrect && (
          <Alert variant="danger"> username lenght shorter than 8....</Alert>
        )}

        <label>
          password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

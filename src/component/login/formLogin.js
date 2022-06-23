import Input from "../form/input";
import Btn from "../form/btn";
import Checkbox from "../form/checkbox";

function formLogin({onSubmit, username, password, usernameEH, passwordEH, clientID, clientIdEH, remember, rememberEH}){
    return (
        <form className='contact-input' onSubmit={onSubmit}>
            <h1>WELCOME </h1>
            <Input label="Username" type="text" value={username} onChange={usernameEH} />
            <Input label="Password" type="password" value={password} onChange={passwordEH} />
            <Input label="Client ID" type="text" value={clientID} onChange={clientIdEH} />
            <Checkbox label="remember me" name="remember" type="checkbox"  className="form-check-input m-1" value={remember} onChange={rememberEH} />
            <Btn type="submit" label="Login" />
        </form>
    )
}

export default formLogin;
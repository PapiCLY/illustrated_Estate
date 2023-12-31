import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Github from '../images/github.png';

const google = () => {
    window.location.href = 'http://localhost:5000/auth/google';
}

const Login = () => {
    return(
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className='icon'/>
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className='icon'/>
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={Github} alt="" className='icon'/>
                        Github
                    </div>
                </div>
                <div className='center'>
                        <div className='line'/>
                        <div className='or'>OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
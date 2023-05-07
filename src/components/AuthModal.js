import { useState } from "react"

const AuthModal = ({setShowModal, isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    
    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError("Password need to match!")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

        return (
            <div className="auth-modal">
                <div className="close-icon" onClick={handleClick}>ⓧ</div>
                <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        id="password"
                        name="email"
                        placeholder="password"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && <input 
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder="confirm password"
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />}
                    <input className="secondary-button" type="submit"/>
                    <p>{error}</p>
                </form>
                <hr/>
                <h2>GET THE APP</h2>
            </div>
        )
}

export default AuthModal
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Logo />
      <LoginForm />
    </div>
  )
}


import { useRouter } from 'next/router'

import Header from '@components/header'

const Login = () => {
  const router = useRouter()
  const onLogin = (e) => {
    e.preventDefault()

    router.push('/dashboard')
  }
  return (
    <>
      <Header />
      <input placeholder='User name' />
      <input placeholder='Password' type='password' />
      <button onClick={onLogin} type='button'>
        Log In
      </button>
    </>
  )
}

export default Login

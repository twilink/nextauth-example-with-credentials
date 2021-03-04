import Head from 'next/head'
import styles from '../styles/pageStyles/login.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginStarted, setIsLoginStarted] = useState(false)
  const [loginError, setLoginError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error)
      setEmail(router.query.email)
    }
  }, [router])

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoginStarted(true)
    signIn('credentials',
      {
        email,
        password,
        callbackUrl: `${window.location.origin}/welcome`
      }
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuth Example</title>
      </Head>
      <main className={styles.loginMain}>
        <div className={styles.loginStep}>
          <h1>Welcome Back</h1>
          <form onSubmit={(e) => handleLogin(e)} className={styles.loginForm}>
            <label htmlFor='loginEmail'>Email</label>
            <input id='loginEmail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className={loginError ? styles.errorInput : ''} />
            <span className={styles.error}>{loginError}</span>
            <label htmlFor='inputPassword'>Password</label>
            <input id='inputPassword' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' disabled={isLoginStarted} className={styles.blueButtonRound}>Log In</button>
          </form>
        </div>
      </main>
    </div>
  )
}

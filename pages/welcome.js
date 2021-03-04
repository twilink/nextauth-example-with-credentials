import { useSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/pageStyles/welcome.module.scss'

export default function Welcome () {
	const [session, loading] = useSession()
	const router = useRouter()

	useEffect(() => {
		if(!loading && !session?.accessToken) {
			router.push('/login')
		}
	}, [loading, session])

	return (
		<div class={styles.container}>
			<h1>Welcome Page</h1>
			<button onClick={() => signOut()}>Log Out</button>
		</div>
	)
}
  
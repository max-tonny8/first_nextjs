import Link from 'next/link'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'

function HomePage(props) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <div>Welcome to Next.js!</div>
            <span onClick={() => router.push('/?counter=1', undefined, { shallow: true })}>Reload</span>
            <br />
            <div>Next stars: { props.stars }</div>
            <img src="/logo.png" alt="dog Logo" />
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
       props: { stars: json.stargazers_count }
    }
 }

export default HomePage
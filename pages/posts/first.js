import Head from "next/head";
import Link from "next/link";
import Container from "../components/container"

export default function FirstPost(props) {
    return (
        <>
            <Container>
                <Head>
                    <title>My First Post</title>
                </Head>
                <h1>My First Post</h1>
                <h2>
                    <Link href="/">
                        Home
                    </Link>
                </h2>
                <br />
                <div>Next stars: { props.stars }</div>
                <img src="/logo.png" alt="TutorialsPoint Logo" />
            </Container>
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
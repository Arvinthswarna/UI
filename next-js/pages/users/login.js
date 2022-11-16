import Link from "next/link"

Link
export default function Login(){
    return (
        <>
    <h2> Login</h2>
    <h2>
        <Link href="/users/signup">
            <a> Sign Up</a>
        </Link>
    </h2>
    </>
    ) 

}
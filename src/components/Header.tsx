import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client";
import styles from '../styles/components/Header.module.css'

export function Header() {
  const [session, loading] = useSession();
  const url = process.env.NEXT_PUBLIC_SITE;

  function Login(){
    console.log(url);
    signin()
  }

  return (
    <header>
      <nav>
        <p>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={Login}
            >
              <button className="signInButton">Sign in</button>
            </a>
          )}
          {session && (
            <>
              <span className="email">{session.user.email}</span>
              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              >
                <button className="signOutButton">Sign out</button>
              </a>
            </>
          )}
        </p>
      </nav>
    </header>
  );
};

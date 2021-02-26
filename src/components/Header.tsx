import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client";
import styles from '../styles/components/Header.module.css'

export function Header() {
  const [session, loading, redirect] = useSession();
  const url = process.env.SITE;

  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">
            <span style={{ color: "#f06292" }}>N</span>
            <span style={{ color: "#29b6f6" }}>A</span>
            <span style={{ color: "#8bc34a" }}>A</span>
          </a>
        </Link>

        <p>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
                redirect(url,'/');
              }}
            >
              <button className="signInButton">Sign in</button>
            </a>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className="avatar"
                  />
                </a>
              </Link>
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

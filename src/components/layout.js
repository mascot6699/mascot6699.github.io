import * as React from 'react'
import { Link } from 'gatsby'
import { container, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/contact" className={navLinkText}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <section className="section-content">
                    <header className="header">
                        <h1 className="centered">{pageTitle}</h1>
                    </header>
                    {children}
                </section>
            </main>
        </div>
    )
}

export default Layout

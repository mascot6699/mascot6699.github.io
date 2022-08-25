import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => (
    <Layout pageTitle="About">
        <section>
            <StaticImage alt="Umang, senior software developer" src="../images/umang.jpeg" className="centered-image" />
            <h1>Who is Umang Shukla?</h1>
            <p>
                Hello there! My name is Umang Shukla, and I’m a software developer experienced in building and scaling
                products from 0 to 1 in high-growth startups.
            </p>
            <p>
                I’m a passionate engineer with hands-on experience across the full software lifecycle—architecture,
                development, deployment, security, on-call, scaling, and maintenance. I’ve led platform initiatives in
                unicorn startups and early-scale organizations, contributing to technical strategy, system design, and
                product innovation.
            </p>
            <p>
                My work spans fintech and e-commerce platforms, where I focus on leveraging technology, engineering
                leadership, and creative problem-solving to drive meaningful, real-world impact. I’m well-versed in
                Python and infrastructure/platform technologies, and I’ve also explored full-stack and cross-platform
                mobile development to build and ship products efficiently.
            </p>
            <p>
                Beyond engineering, I’m deeply interested in the intersection of innovation, design, and humanitarian
                impact.
            </p>

            <h2>Links</h2>
            <ul>
                <li>
                    <a href="https://github.com/mascot6699">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/umangshucool/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://twitter.com/Mascot6699">Twitter</a>
                </li>
            </ul>
        </section>
    </Layout>
)

export const Head = () => <Seo title="About Umang Shukla" />

export default AboutPage

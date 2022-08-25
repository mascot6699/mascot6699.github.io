import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => (
    <Layout pageTitle="Contact">
        <section>
            <p>
                Easiest way to contact me is by DMing me on <a href="https://twitter.com/mascot6699">Twitter</a>. I'll
                try to respond as soon as possible.
            </p>
        </section>
    </Layout>
)

export const Head = () => <Seo title="Contact Umang Shukla" />

export default ContactPage

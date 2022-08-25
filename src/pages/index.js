import * as React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <link
                    href="http://fonts.googleapis.com/css?family=Josefin+Sans&subset=latin,latin-ext"
                    rel="stylesheet"
                    type="text/css"
                />
            </Helmet>
            <Layout pageTitle="Umang Shukla">
                <h2 className="centered">Senior Software Engineer</h2>
                <p className="centered">
                    Welcome!! Here you shall find collection of posts about my thoughts, stories, ideas and experiences
                    as a human, and an engineer working with different technologies.
                </p>
                <p className="centered">
                    Hope you takeaway something useful from here, and if you have any suggestions or feedback, please
                    feel free to contact me.
                </p>
            </Layout>
        </>
    )
}

export const Head = () => <Seo title="Umang Shukla" description="About Umang Shukla" />

export default IndexPage

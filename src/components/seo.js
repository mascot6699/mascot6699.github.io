import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description, children }) => {
    const queryData = useStaticQuery(query)
    const { defaultTitle, defaultDescription, defaultKeywords, defaultAuthor, twitterUsername, siteUrl } =
        queryData.site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: defaultKeywords,
        author: defaultAuthor,
        url: siteUrl,
    }

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="author" content={seo.author} />
            <meta name="keywords" content={seo.keywords} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />

            <meta name="twitter:card" content="summary" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            {children}
        </Helmet>
    )
}

Seo.defaultProps = {
    title: null,
    description: null,
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

const query = graphql`
    query {
        site {
            siteMetadata {
                defaultTitle
                defaultDescription
                defaultKeywords
                defaultAuthor
                twitterUsername
                siteUrl
            }
        }
    }
`

export default Seo

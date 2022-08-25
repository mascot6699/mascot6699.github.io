module.exports = {
    siteMetadata: {
        defaultTitle: 'Blogs from Umang Shukla',
        defaultDescription: 'Blogs from Umang Shukla',
        defaultAuthor: 'Umang Shukla',
        defaultKeywords: 'Umang Shukla, umang, shukla, senior software engineer, mascot6699, umangshucool',
        twitterUsername: '@mascot6699',
        siteUrl: 'https://mascot6699.github.io',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-sharp',
    ],
}

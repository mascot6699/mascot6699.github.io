import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

function getReadTime(text) {
    // Remove image markdown: ![alt](url) or <img ...>
    const noImages = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/<img[^>]*>/g, '')
    const words = noImages.split(/\s+/).filter(Boolean)
    const wordsPerMinute = 200
    const minutes = Math.max(1, Math.round(words.length / wordsPerMinute))
    return `${minutes} min read`
}

function groupByYear(nodes) {
    return nodes.reduce((acc, node) => {
        const year = node.frontmatter.dateRaw.split('-')[0]
        if (!acc[year]) acc[year] = []
        acc[year].push(node)
        return acc
    }, {})
}

const BlogPage = ({ data }) => {
    const grouped = groupByYear(data.allMdx.nodes)
    const years = Object.keys(grouped).sort((a, b) => b - a)
    return (
        <Layout pageTitle="Blog Posts">
            {years.map((year) => (
                <div key={year} style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#aaa', fontWeight: 600 }}>{year}</h3>
                    {grouped[year].map((node) => {
                        return (
                            <div
                                key={node.id}
                                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0.5rem 0' }}
                            >
                                <span style={{ color: '#ff9800', minWidth: 60, fontWeight: 600 }}>
                                    {new Date(node.frontmatter.dateRaw)
                                        .toLocaleString('en-US', { month: 'short', day: 'numeric' })
                                        .toUpperCase()}
                                </span>
                                <span style={{ flex: 1 }}>
                                    <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                                </span>
                                <span style={{ color: '#aaa', minWidth: 80, textAlign: 'right', fontSize: '0.95em' }}>
                                    {getReadTime(node.body)}
                                </span>
                            </div>
                        )
                    })}
                </div>
            ))}
        </Layout>
    )
}

export const data = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    dateRaw: date(formatString: "YYYY-MM-DD")
                    title
                    slug
                }
                id
                body
            }
        }
    }
`

export const Head = () => <Seo title="Posts" />

export default BlogPage

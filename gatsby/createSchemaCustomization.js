module.exports = exports.createSchemaCustomization = async ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      date: Date @dateformat
    }
    type MdxFrontmatter {
      title: String
      date: Date @dateformat
      slug: String
      hero_image: File @fileByRelativePath
      hero_image_alt: String
      hero_image_credit_text: String
      hero_image_credit_link: String
    }
  `)
}

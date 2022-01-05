/**
 * Based on https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/pages/posts/%5Bslug%5D.js
 */
import T from 'prop-types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const BigLink = (props) => (
    <a className="text-xl color-blue-500" {...props}>
        {props.children}
    </a>
)

const PAGES_PATH = path.join(process.cwd(), 'standalone-pages')
const components = {
    a: BigLink,
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const pageFilePaths = fs
    .readdirSync(PAGES_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))

const Page = ({ source, frontMatter }) => {
    return (
        <main className="prose mx-auto min-h-screen flex flex-col items-center justify-center">
            <MDXRemote {...source} />
        </main>
    )
}
Page.propTypes = {
    source: T.object,
}

export default Page

export async function getStaticProps({ params }) {
    const postFilePath = path.join(PAGES_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)
    const mdxSource = await serialize(content, { scope: data })
    return { props: { source: mdxSource, frontMatter: data } }
}

export async function getStaticPaths() {
    const paths = pageFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))
    return {
        paths,
        fallback: false,
    }
}

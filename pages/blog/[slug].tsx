import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { readdir, readFile } from 'fs/promises'
import blogComp from '../../components/blogComp'
import path from 'path'

const components = { blogComp }

const blogPage = ({ source }) => {
    
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className="wrapper">
            <MDXRemote {...source} components={components} />
        </div>
    )
}
export default blogPage

export async function getStaticProps(context) {
    
    const controller = new AbortController()
    const signal = controller.signal
    
    const d = await readFile(path.join(process.cwd(), `blog/${context.params.slug}`), { signal })
    console.log('\n\n\n\nd is:\n',d)
    const mdxSource = await serialize(d)
    return { props: { source: mdxSource } }
}

export async function getStaticPaths() {
    const paths = await (async ()=>{
        const files = await readdir(path.join(process.cwd(), `blog`))
        let paths = []
        files.forEach(file => {
            if(file.substr(file.length-3,3) === 'mdx' && file.length > 5){
                paths.push(`/blog/${file}`)
            }
        });
        return paths
    })()
    console.log(paths)
    return {
        paths:paths,
        fallback: true
    }
}


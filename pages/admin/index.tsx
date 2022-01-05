import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const CMS_CONFIG = {
    "backend": {
        "name": "git-gateway",
        "branch": "main"
    },
    "local_backend": true,
    "publish_mode": "editorial_workflow",
    "media_folder": "public/images",
    "public_folder": "/images",
    "collections": [
        {
            "label": "Globals",
            "name": "globals",
            "files": [
                {
                    "label": "Site Copy",
                    "name": "site_copy",
                    "delete": false,
                    "create": true,
                    "file": "_data/copy.json",
                    "fields": [
                        {
                            "label": "Headline",
                            "name": "headline",
                            "widget": "string"
                        },
                        {
                            "label": "Tagline",
                            "name": "tagline",
                            "widget": "string"
                        }
                    ]
                }
            ]
        },
        {
            "name": "standalone pages",
            "label": "Standalone Pages",
            "folder": "standalone-pages",
            "slug": "{{slug}}",
            "file": "standalone-pages/{{slug}}.mdx",
            "create": true,
            "extension": "mdx",
            "format": "frontmatter",
            "fields": [
                {
                    "label": "Title",
                    "name": "title",
                    "widget": "string"
                },
                {
                    "label": "SEO Meta Title",
                    "name": "metaTitle",
                    "widget": "string",
                    "required": false
                },
                {
                    "label": "SEO Meta Description",
                    "name": "metaDesc",
                    "widget": "string",
                    "required": false
                },
                {
                    "label": "Social Image",
                    "name": "socialImage",
                    "widget": "image",
                    "required": false
                },
                {
                    "label": "Body",
                    "name": "body",
                    "widget": "markdown"
                }
            ]
        }
    ]
}
const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 font-semibold text-xl">Loading...</p>
    </div>
)

const CMS = dynamic(async () => {
    const cms: any = (await import('netlify-cms-app')).default
    cms.init({ CMS_CONFIG })
    return cms
}, { ssr: false, loading: Loading })


const Admin = () => {
    return <Box>
        <h1>hmm</h1>
        <CMS />
    </Box>
}
export default Admin

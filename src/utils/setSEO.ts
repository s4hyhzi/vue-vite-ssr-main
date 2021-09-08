interface SEO {
    title: string;
    author: string;
    description: string;
    keywords: string
}

export default function setSEO({title, author, description, keywords}: SEO) {
    title ? window.document.title = `${title} - 后台管理` : ''
    // @ts-ignore
    keywords ? window.document.querySelector('meta[name="keywords"]').setAttribute('content', keywords) : ''
    // @ts-ignore
    author ? window.document.querySelector('meta[name="author"]').setAttribute('content', author) : ''
    // @ts-ignore
    author ? window.document.querySelector('meta[name="description"]').setAttribute('content', description) : ''
}

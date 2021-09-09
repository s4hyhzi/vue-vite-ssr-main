interface SEO {
    title: string;
    author: string;
    description: string;
    keywords: string
}

export function setMetaSEO({title, author, description, keywords}: SEO) {
    title ? window.document.title = `${title} - 后台管理` : ''
    // @ts-ignore
    keywords ? window.document.querySelector('meta[name="keywords"]').setAttribute('content', keywords) : ''
    // @ts-ignore
    author ? window.document.querySelector('meta[name="author"]').setAttribute('content', author) : ''
    // @ts-ignore
    description ? window.document.querySelector('meta[name="description"]').setAttribute('content', description) : ''
}

export function setStoreSEO({title, author, description, keywords}: SEO, store: any) {
    title ? store.state.title = title : ''
    keywords ? store.state.keywords = keywords : ''
    author ? store.state.author = author : ''
    description ? store.state.description = description : ''
}

export default function setSEO({title, author, description, keywords}: SEO, store: any) {
    store.state.webEnv && setMetaSEO({title, author, description, keywords});
    setStoreSEO({title, author, description, keywords}, store)
}

export function filterContentByLanguage(content, lang) {
    return content.filter((c) => c.slug.split('/')[0] === lang);
}
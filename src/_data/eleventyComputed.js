// Nav items only render if their parent path matches an existing key,
// so every parent folder needs its own index page for this to work.
const parentPath = (path) => {
   const subStrings = path?.split('/')
   return subStrings.length <= 3
      ?  undefined
      : subStrings.slice(0, -2).join('/') +'/'
}

module.exports = {
  eleventyNavigation: {
    key: data => data.page.url,
    title: data => data.title,
    parent: data => parentPath(data.page.url)
  }
};
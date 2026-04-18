// items will not render if parent path does not match an existing key
// as a result all parent folders will need an index for this to work
// this would have been easier if data.collections was not an empty object

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
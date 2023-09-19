module.exports = {
  eleventyComputed: {
    components: data => data.needed_components?.map((c) => {
      const item =
        data.electronics.components.find(i => i.name === c.name) ??
        data.electronics.equipment.find(i => i.name === c.name)
      return {
        ...item,
        count: c.count,
        price: (item.pricePerEach).toFixed(2),
        total: (c.count * item.pricePerEach).toFixed(2)
      }
    })
  }
};
const edges = [
  {
    name: 'site1',
    url: '/image1'
  },
  {
    name: 'site2',
    url: '/image2'
  },
  {
    name: 'site3',
    url: '/image3'
  },
  {
    name: 'site4',
    url: '/image4'
  },
  {
    name: 'social1',
    url: '/social2'
  },
  {
    name: 'social2',
    url: '/social2'
  },
]

const a = edges.filter(image => (image.name != 'site1' && image.name != 'site2'))

console.log(a)

// function serializedNames() {
//   const items = edges.filter(edges.name === 'site1')
//   return items
// }

// serializedNames()
import projectsData from './projectsData'

const headerNavLinks = [
  { href: '/', title: '主页' },
  { href: '/blog', title: '博客' },
  { href: '/tags', title: '标签' },
  { href: '/about', title: '关于' },
]

if (projectsData.length > 0) {
  headerNavLinks.splice(3, 0, { href: '/projects', title: '项目' })
}

export default headerNavLinks

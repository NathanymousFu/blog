import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Welcome from './Welcome'
import LatestBlogs from './LatestBlogs'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <Welcome />
      <LatestBlogs posts={posts} />
    </>
  )
}

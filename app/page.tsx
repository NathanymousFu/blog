import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import FeaturedProjects from './FeaturedProjects'
import Heatmap from './Heatmap'
import LatestBlogs from './LatestBlogs'
import Welcome from './Welcome'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <div className="flex flex-col gap-8">
      <Welcome />
      <Heatmap />
      <FeaturedProjects />
      <LatestBlogs posts={posts} />
    </div>
  )
}

import { getAllPostsSortedByDate } from "@/lib/getPosts";
import LatestSectionContent from "@/components/views/Home/Components/LatestSection";

export default async function Page() {
  const latestPosts = getAllPostsSortedByDate(); 
  return <LatestSectionContent posts={latestPosts} />;
}

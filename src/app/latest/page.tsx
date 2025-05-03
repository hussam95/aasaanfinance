import { getAllPostsSortedByDate } from "@/lib/getPosts";
import LatestSectionContent from "@/components/views/Home/Components/LatestSection";

export default function Page() {
  const latestPosts = getAllPostsSortedByDate(); // server-safe
  return <LatestSectionContent posts={latestPosts} />;
}

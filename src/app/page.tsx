import { getAllPostsSortedByDate } from "@/lib/getPosts";
import HomePage from "@/components/views/Home";

export default function Home() {
  const latestPosts = getAllPostsSortedByDate().slice(0, 2);
  return <HomePage latestPosts={latestPosts} />;
}

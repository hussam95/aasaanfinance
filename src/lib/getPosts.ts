import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date?: string;
  tags: string[];
  thumbnail: string;
}

export const getPostsByCategory = (category: string): BlogFrontmatter[] => {
  const postsDirectory = path.join(process.cwd(), "src/app/blog");

  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as BlogFrontmatter;
    })
    .filter((data) =>
      data.tags
        ?.map((tag) => tag.toLowerCase())
        .includes(category.toLowerCase())
    )
    .filter((data) => !!data.date)
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()); // oldest first
};
export const getAllPostsSortedByDate = (): BlogFrontmatter[] => {
  const postsDirectory = path.join(process.cwd(), "src/app/blog");

  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as BlogFrontmatter;
    })
    .filter((data) => !!data.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
};

export const getAllPosts = (): BlogFrontmatter[] => {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const content = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(content);
      return data as BlogFrontmatter;
    });
};

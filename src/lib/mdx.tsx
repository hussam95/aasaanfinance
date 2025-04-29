import { readFile } from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { type MDXComponents } from 'mdx/types';

export async function getPost(slug: string, components: MDXComponents = {}) {
  const filePath = path.join(process.cwd(), 'src', 'app', 'blog', `${slug}.mdx`);
  const source = await readFile(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
    components,
  });

  return {
    content,
    frontmatter,
  };
}

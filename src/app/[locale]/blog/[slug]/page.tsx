import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

import fs from 'fs';
import path from 'path';

import { getPost } from '@/app/[locale]/lib/getPosts';
import markdownStyles from './markdown.module.css';

// Mark the component as generating static pages
export const dynamic = 'force-static';

type PostProps = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: PostProps) {
  const resolvedParams = await params;
  const { metadata, content } = getPost(resolvedParams.slug);

  const unsafeHtml = await marked(content);
  const safeHtml = DOMPurify.sanitize(unsafeHtml);
  console.log(safeHtml);

  return (
    <article className={markdownStyles.markdown}>
      <header>
        <h1>{metadata.title}</h1>
        {metadata.date && (
          <time dateTime={metadata.date}>
            {new Date(metadata.date).toLocaleDateString()}
          </time>
        )}
      </header>
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </article>
  );
}

export async function generateMetadata({ params }: PostProps) {
  const resolvedParams = await params;
  const { metadata } = getPost(resolvedParams.slug);
  return { title: metadata.title };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

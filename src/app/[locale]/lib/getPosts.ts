import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMetaData = {
    title: string;
    date?: string;
    description?: string;
    slug: string;
}

export function getPost(slug: string){
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        metadata: {...data, slug} as PostMetaData,
        content
    }
}

export function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(postsDirectory);

    return files.map((filename) => {
        const slug = filename.replace('.md', '');
        const { metadata } = getPost(slug);
        return metadata;
    })
}
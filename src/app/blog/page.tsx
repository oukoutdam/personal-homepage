import { getAllPosts } from "@/app/lib/getPosts";
import Link from "next/link";

export default function Blog() {
    const allPosts = getAllPosts();
    return (
        <>
            <h1>Still Building!</h1>
            {allPosts.map((post) => (
                <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
            ))}
        </>
    );
}
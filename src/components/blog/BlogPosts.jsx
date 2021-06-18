import BlogPost from "./BlogPost";

export default function BlogPosts({ post }) {
  return (
    <div>
      {post.map((posts) => (
        <BlogPost key={posts.id} {...posts} />
      ))}
    </div>
  );
}

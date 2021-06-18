export default function BlogPosts({ header, text }) {
  return (
    <>
      <div className=" box blog-posts ">
        <div className="notification is-size-4">{header}</div>

        <div className="mt5">{text}</div>
      </div>
    </>
  );
}

import Search from "../components/Search/Search";
import Blog from "../components/blog/Blog";

export default function Home() {
  return (
    <>
      <div className="main-section-grid">
      <div id="blog-content" className="blog-content box p-2 ">
        <Blog />
        </div>

        <div id="main-section-search" className="main-section-search">
          <div className="search-container">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

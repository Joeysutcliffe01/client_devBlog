import { useEffect } from "react";
import { PostsLayoutRow } from "../../Components/Posts/PostsLayoutRow/PostsLayoutRow";
import { ScrollToTheTop } from "../../utils/ScroolTo/ScrollToTheTop";

export const AllBlogs = () => {
  const showBtnAt = 500

  useEffect(() => {
    // Scroll to top on page load
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="all_blogs_container">
      <PostsLayoutRow />
      <ScrollToTheTop showBtnAt={showBtnAt}/>
    </main>
  );
};

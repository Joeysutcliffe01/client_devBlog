import { PostsLayoutRow } from "../../Components/Posts/PostsLayoutRow/PostsLayoutRow";
import { ScrollToTheTop } from "../../utils/ScroolTo/ScrollToTheTop";

export const AllBlogs = () => {
  const showBtnAt = 500
  return (
    <main className="all_blogs_container">
      <PostsLayoutRow />
      <ScrollToTheTop showBtnAt={showBtnAt}/>
    </main>
  );
};

import { useEffect, useState } from "react";
// import blob5 from "../../src/Assets/Blobs/blob_1.svg";

export const ScrollToTheTop = ({showBtnAt}) => {
  const [showButton, setShowButton] = useState(false);

  console.log("showButton:", showButton)

  // console.log("showBtnAt inside of ScrollToTheTop---", showBtnAt)
  // console.log("showBtnAt typeOf inside of ScrollToTheTop---", typeof showBtnAt)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      // console.log("Inside of handleScrollButtonVisibility")
      window.scrollY > showBtnAt ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (

    <>
        {/* {showButton && (  */}
            <div className="scroll_to_top_btn_container" 
            style={{right: showButton ? "-15rem" : "-25rem"}}
            >
                <span class="material-symbols-outlined scroll_to_top_btn" onClick={handleScrollToTop}>
                stat_2
                </span>
            </div>
        {/* )} */}
    </>
  );
};
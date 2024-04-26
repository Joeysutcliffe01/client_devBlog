import Lottie from "lottie-react";
import pageNotFoundAnimation from "../../Assets/LottieAnimatio/404Page/404_page_1.json";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="page_not_found_container">
      <div className="page_not_found_info_container">
        <h1 className="page_not_found_info_title">Looks like this page cant be found</h1>
        <p className="page_not_found_info_p">Let's go back to the home page</p>
        <Link className="page_not_found_info_btn" to={"/"} >Come home</Link>
      </div>
      <Lottie animationData={pageNotFoundAnimation} className="page_not_found_anmation" />
    </div>
  )
}

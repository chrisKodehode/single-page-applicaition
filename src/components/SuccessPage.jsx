import "./css/global.css"
import "./css/success.css"
import { useEffect } from "react";
import CheckmarkLogo from "../assets/images/checkmark-circle.svg";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="success-page" id="successPage">
      <div className="success">
        <div className="welcome" data-animate-on-scroll>
          WELCOME
        </div>

        <div className="frame">
          <div className="success1">SUCCESS</div>
          <div className="frame1">
          {/* { onClick={() => navigate("/error")} will re-direct the SuccessPage to the ErrorPage */}
            <button className="click-me-btn" onClick={() => navigate("/error")}>
              <div className="click-me">CLICK ME</div>
            </button>

            <img
              className="checkmark-circle-icon"
              alt=""
              src={CheckmarkLogo}
              data-animate-on-scroll
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default SuccessPage;
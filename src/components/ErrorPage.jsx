import "../components/css/global.css";
import "../components/css/error.css";
import { useEffect } from "react";
import ErrorSign from "../assets/images/signerror01-1.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  // Declare and initialize a variable named "navigate" and assign useNavigate function to it
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
    <div className="error-page">
      <div className="error">
        <div className="error1">ERROR</div>
        
        <div className="frame2">
          <img
            className="sign-error-01-1-icon"
            alt=""
            src={ErrorSign}
            data-animate-on-scroll
          />

          <div className="frame3">
            <div
              className="login-failed"
              data-animate-on-scroll
            >{`LOGIN FAILED `}</div>
            {/* onClick={() => navigate("/")} will re-direct the error page to the LoginPage */}
            <button className="try-again-btn" onClick={() => navigate("/")}>
              <div className="try-again">TRY AGAIN</div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
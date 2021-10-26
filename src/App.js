import React, { useRef } from "react";
import "./App.css";
import HeaderComponent from "./components/index";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  const refElemntFile = useRef(null);

  const notify = () =>
    toast.success(
      "Even a function, given you return something that can be rendered",
      {
        icon: ({ theme, type }) => (
          <img
            style={{ width: 20 }}
            src="https://img.icons8.com/office/2x/home.png"
          />
        ),
        theme: "colored",
      }
    );
  return (
    <div className="App">
      <button
        onClick={() => {
          refElemntFile.current.click();
        }}
        style={{
          padding: 10,
          backgroundColor: "#333",
          cursor: "pointer",
          border: "none",
          color: "white",
          fontSize: "20px",
        }}
      >
        Upload image
      </button>
      <input
        style={{ position: "fixed", left: "50px" }}
        ref={refElemntFile}
        type="file"
      />
      <div className="language-item" onClick={() => changeLanguage("vi")}>
        Tiếng Việt
      </div>
      <div className="language-item" onClick={() => changeLanguage("en")}>
        English
      </div>

      <ul>
        <li>{t("home")}</li>
        <li>{t("products")}</li>
        <li>{t("blogs")}</li>
        <li>{t("contact")}</li>
        <li>{t("language")}</li>
      </ul>

      <HeaderComponent />

      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-right"
        style={{ fontSize: 16 }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        transition={Slide}
      />
    </div>
  );
}

export default App;

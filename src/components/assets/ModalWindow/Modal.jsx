import React, { useEffect, useRef, useState } from "react";
import Alert from "./Alert";

export default function Modal() {
  const [alertName, setAlertName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(null);

  const modalContainer = useRef(null);

  const storage = window.localStorage;

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(() => {
    if (storage.getItem("modal") === "false") {
      return console.log("false!!!");
    }

    if (storage.getItem("modal") === null) {
      return storage.setItem("modal", true);
    }
  }, [storage]);

  useEffect(() => {
    if (storage.getItem("modal") === "false") {
      modalContainer.current.classList.remove("is-active");
    }
  }, [storage]);

  useEffect(() => {
    if (storage.getItem("modal") === "true") {
      setInterval(() => {
        modalContainer.current.classList.add("is-active");
      }, 5000);
    }
  }, [storage]);

  const closeModal = () => {
    modalContainer.current.classList.remove("is-active");
  };

  const subscribeSendedMessage = () => {
    if (emailValidate) {
      modalContainer.current.remove();
      storage.setItem("modal", false);
      setAlertName(
        "Вы подписаны на уведомления. \n Мы будем высылать их на ваш email что бы вы ничего не пропустили."
      );
    } else if (!emailValidate) {
      return null;
    }
  };

  const notIntrested = () => {
    modalContainer.current.remove();
    storage.setItem("modal", false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);// eslint-disable-next-line
    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( 
      email
    );
    setEmailValidate(validEmail);
  };

  return (
    <>
      <div ref={modalContainer} className="modal ">
        <div className="modal-background"></div>

        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-dark">
              Хотите узнавать новости как можно скорее?
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <h1 classNameName="is-size-4">
              Оформите новостную рассылку, что бы быть вкурсе новостей!
            </h1>

            <div className="control has-icons-left has-icons-right mt-2">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                {emailValidate ? (
                  <i className="fas fa-check has-text-success"></i>
                ) : (
                  <i className="fas fa-check has-text-danger"></i>
                )}
              </span>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-dark" onClick={subscribeSendedMessage}>
              подписаться
            </button>
            <button className="button is-danger" onClick={notIntrested}>
              не показывать
            </button>
          </footer>
        </div>
      </div>

      {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
    </>
  );
}

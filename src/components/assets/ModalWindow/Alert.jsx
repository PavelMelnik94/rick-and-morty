import React, { useEffect } from "react";

export default function Alert(props) {
  const { alertName = "", closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 4000);

    return () => {
      clearTimeout(timerId);
    }; // eslint-disable-next-line
  }, [alertName]);

  return (
    <div className="alert-container">
      <article className="message is-success ">
        <div className="message-header">
          <p>спасибо!</p>
        </div>
        <div className="message-body alert-body">{alertName}</div>
      </article>
    </div>
  );
}



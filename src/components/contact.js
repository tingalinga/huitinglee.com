import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import ZoojaIcon from "utils/components/zoojaicon";
import useWindowDimensions from "utils/windowdimensions";

import loading_gif from "assets/loading.gif";

import app from "app.module.css";
import contact from "./contact.module.css";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      toastifySuccess();
      setLoading(false);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: contact.toast_success,
      toastId: "notifyToast",
    });
  };

  let firstRow = (
    <>
      {/* Row 1 of form */}
      <div className={contact.form_row}>
        <input
          className={contact.form_input}
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Please enter your name" },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
        />
        <input
          className={contact.form_input}
          type="email"
          name="email"
          placeholder="Email address"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
      </div>
      <div className={contact.form_error_row}>
        <span className={contact.form_error}>
          {errors.name && errors.name.message}
        </span>
        <span className={contact.form_error}>
          {errors.email && "Please enter a valid email address"}
        </span>
      </div>
    </>
  );

  const { width } = useWindowDimensions();
  if (width <= 768) {
    firstRow = (
      <>
        {/* Row 1 of form */}
        <div className={contact.form_row}>
          <input
            className={contact.form_input}
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
          />
        </div>
        <div className={contact.form_error_row}>
          <span className={contact.form_error}>
            {errors.name && errors.name.message}
          </span>
        </div>
        <div className={contact.form_row}>
          <input
            className={contact.form_input}
            type="email"
            name="email"
            placeholder="Email address"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
        </div>
        <div className={contact.form_error_row}>
          <span className={contact.form_error}>
            {errors.email && "Please enter a valid email address"}
          </span>
        </div>
      </>
    );
  }

  return (
    <div id="skills" className={app.page_block}>
      {width > 768 ? (
        <h2 className={app.heading_box}>
          <ZoojaIcon icon="y" sideIcon />
          Contact me
        </h2>
      ) : (
        <>
          <h2 className={app.heading_box}>
            <ZoojaIcon icon="y" sideIcon />
          </h2>
          <h2 className={app.heading_box}>Contact me</h2>
        </>
      )}
      <div className={contact.form_container}>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {firstRow}
          {/* Row 2 of form */}
          <div className={contact.form_row}>
            <input
              className={contact.form_input}
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject", {
                required: { value: true, message: "Please enter a subject" },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
            />
          </div>
          <div className={contact.form_error_row}>
            {errors.subject && (
              <span className={contact.form_error}>
                {errors.subject.message}
              </span>
            )}
          </div>
          {/* Row 3 of form */}
          <div className={contact.form_row}>
            <textarea
              className={contact.form_input}
              rows={3}
              name="message"
              placeholder="Message"
              {...register("message", { required: true })}
            />
          </div>
          <div className={contact.form_error_row}>
            {errors.message && (
              <span className={contact.form_error}>Please enter a message</span>
            )}
          </div>
          <div className={contact.form_button_row}>
            <button className={contact.submit_btn} type="submit">
              {loading ? (
                <img
                  className={contact.submit_btn_loading}
                  alt="loading button"
                  src={loading_gif}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

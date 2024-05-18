import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too short! Please try again.")
    .max(50, "Too long! Please try again.")
    .required("This field is required."),
  email: Yup.string()
    .email("Email is invalid.")
    .required("This field is required."),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number contains number only.")
    .min(10, "Min length of phone number is 10")
    .required("This field is required."),
  event: Yup.string().required("This field is required."),
});

const RegisterEvent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        event: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <Field name="name" placeholder="Enter your name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Field name="email" placeholder="Enter your email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="phone" placeholder="Enter your phone number" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <Field component="select" id="event" name="event">
            <option value="">Select...</option>
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="event3">Event 3</option>
          </Field>
          {errors.event && touched.event ? <div>{errors.event}</div> : null}
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
          {isSubmitting ? null : (
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{values.name}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterEvent;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Schema xác thực cho Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên quá ngắn!")
    .max(50, "Tên quá dài!")
    .required("Bắt buộc nhập"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc nhập"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa số")
    .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
    .required("Bắt buộc nhập"),
  event: Yup.string().required("Bắt buộc chọn sự kiện"),
});

// Component FormikForm
const Signup = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        event: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <Field name="name" placeholder="Tên" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <Field name="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="phone" placeholder="Số điện thoại" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

          <Field name="event" as="select">
            <option value="">Chọn sự kiện</option>
            <option value="event1">Sự kiện 1</option>
            <option value="event2">Sự kiện 2</option>
            <option value="event3">Sự kiện 3</option>
          </Field>
          {errors.event && touched.event ? <div>{errors.event}</div> : null}

          <button type="submit" disabled={isSubmitting}>
            Đăng ký
          </button>

          {/* Tính năng preview thông tin */}
          {isSubmitting ? null : (
            <div class="card">
              <header class="card-header">
                <h3 class="card-header-title">Preview Thông Tin</h3>
              </header>
              <div class="card-content">
                <p>Tên: {values.name}</p>
                <p>Email: {values.email}</p>
                <p>Số điện thoại: {values.phone}</p>
                <p>Sự kiện: {values.event}</p>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Signup;

import React from "react"
import {Form, Formik} from "formik"
import Input from "./form/Input"
import TextArea from "./form/TextArea"
import * as Yup from 'yup';

import Button from "./atoms/Button"

export default ({ title, description }) => {
  return (
    <div className="w-3/6">
      <h2 className="text-lg font-semibold text-white font-sans">{title}</h2>
      <p className="text-sm py-2 font-serif">{description}</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          message: Yup.string()
            .required('Message is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 40000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              label="Name"
              placeholder="Name"
              type="text"
              name="name"
              disabled={isSubmitting}
            />
            <Input
              label="Email"
              placeholder="Email"
              type="text"
              name="email"
              disabled={isSubmitting}
            />
            <TextArea
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              disabled={isSubmitting}
            />
            <Button loading={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

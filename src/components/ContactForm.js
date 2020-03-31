import React from "react"
import {Form, Formik} from "formik"
import Input from "./form/Input"
import TextArea from "./form/TextArea"
import * as Yup from 'yup';

import Button from "./atoms/Button"
import Checkboxes from "./form/Checkboxes"
import Radios from "./form/Radios"

export default ({ title, description }) => {
  return (
    <div className="w-full md:w-3/6 mb-16 grid gap-4">
      <div>
      <h2 className="text-2xl font-semibold text-white font-sans">{title}</h2>
      <p className="text-sm py-2 font-serif">{description}</p>
      </div>
      <Formik
        initialValues={{
          email: '',
          name: '',
          message: '',
          types_of_engagement: '',
          duration_of_engagement: '',
          approximate_product_budget_per_year: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
          message: Yup.string()
            .required('Message is required'),
          types_of_engagement: Yup.array()
            .required('This field is required'),
          duration_of_engagement: Yup.string()
            .required('This field is required'),
          approximate_product_budget_per_year: Yup.string()
            .required('This field is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Checkboxes label="Types of Engagement" name="types_of_engagement" options={[
              'Help imagine a new digital product',
              'Design or redesign an existing digital product',
              'Design and build a new digital product'
            ]}/>
            <Radios label="Duration of Engagement" name="duration_of_engagement" options={[
              '6-12 months',
              '12-18 months',
              '18-24 months'
            ]}/>
            <Radios label="Approximate Product Budget (per year)" name="approximate_product_budget_per_year" options={[
              '$500K-$1M',
              '$1-$2M',
              '$2M+'
            ]}/>
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
              type="email"
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

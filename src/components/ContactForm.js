import React from "react"
import {Form, Formik} from "formik"
import Input from "./form/Input"
import TextArea from "./form/TextArea"
import * as Yup from 'yup';
import axios from 'axios';

import Button from "./atoms/Button"
import Checkboxes from "./form/Checkboxes"
import Radios from "./form/Radios"
import AlertMessage from "./atoms/AlertMessage"

export default ({ title, description }) => {
  return (
    <div className="w-full grid gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-white font-sans">{title}</h2>
        <p className="text-sm py-2 font-serif">{description}</p>
      </div>
      <Formik
        initialValues={{
          email: '',
          name: '',
          message: '',
          types_of_engagement: [],
          duration_of_engagement: '6-12 months',
          approximate_product_budget_per_year: '$500K-$1M'
        }}
        initialStatus={{
          type: 'initial',
          message: null
        }}
        validationSchema={Yup.object({
          types_of_engagement: Yup.array()
            .required('This field is required'),
          duration_of_engagement: Yup.string()
            .required('This field is required'),
          approximate_product_budget_per_year: Yup.string()
            .required('This field is required'),
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
          message: Yup.string()
            .required('Message is required'),
        })}
        onSubmit={(values, formikBag) => {
          axios({
            url: '/.netlify/functions/submit-contact-form',
            data: values,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
          }).then(() => {
              formikBag.resetForm()
              formikBag.setStatus({
                type: 'success',
                message: 'Your inquiry has been submitted successfully! We will write back to you shortly'
              })
            })
            .catch(e => {
              const error = (Object.assign({}, e))
              formikBag.setStatus({
                type: 'error',
                message: error.response && error.response.data || 'Your inquiry was unable to submit, please try again later'
              })
            })
            .then(() => {
              formikBag.setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, values, dirty, status, setStatus}) => {
          if(dirty && status.type === 'success') {
            setStatus({
              type: 'initial'
            })
          }
          return (
            <Form>
              <Checkboxes value={values['types_of_engagement']} label="Types of Engagement" name="types_of_engagement" options={[
                'Help imagine a new digital product',
                'Design or redesign an existing digital product',
                'Design and build a new digital product'
              ]}/>
              <Radios value={values['duration_of_engagement']} label="Duration of Engagement" name="duration_of_engagement" options={[
                '6-12 months',
                '12-18 months',
                '18-24 months'
              ]}/>
              <Radios value={values['approximate_product_budget_per_year']} label="Approximate Product Budget (per year)" name="approximate_product_budget_per_year" options={[
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
              <div className="py-1"/>
              {status.type === 'success' && <AlertMessage className="mt-2" type="success">{status.message}</AlertMessage>}
              {status.type === 'error' && <AlertMessage className="mt-2" type="error">{status.message}</AlertMessage>}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

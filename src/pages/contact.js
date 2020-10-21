import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../templates/DefaultLayout"
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import addToMailchimp from "gatsby-plugin-mailchimp"

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomSelect = ({ label, values, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="input" {...field} {...props}>
        <option value="">Choose...</option>
        {values?.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const Contact = () => {
  const [active, setActive] = useState(0)
  const [action, setAction] = useState(0)
  const [nameState, setNameState] = useState(0)

  useEffect(() => {
    document.getElementById("service").addEventListener("click", e => {
      if (e.target.value === "Other") {
        setActive(1)
      } else {
        setActive(0)
      }
      document.getElementById("service").value = e.target.value
    })
  }, [])
  return (
    <Container>
      <Layout>
        {!action ? (
          <div className="wrp">
            <h1>Feel Free To Contact Us</h1>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                service: "",
                other: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email adddress")
                  .required("Required"),
                service: Yup.string().required("Required"),
                message: Yup.string().required("Required"),
              })}
              onSubmit={async (data, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                setNameState(data.name)
                await addToMailchimp(data.email, {
                  NAME: data.name,
                  MESSAGE: data.message,
                  SERVICE:
                    data.other !== "" && data.service === "Other"
                      ? data.other
                      : data.service,
                })
                  .then(data => {
                    console.log(data)
                  })
                  .catch(() => {})
                resetForm()
                setAction(1)
                setSubmitting(false)
              }}
            >
              {props => (
                <Form>
                  <CustomInput
                    label="Name"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    type=" email"
                  />
                  <CustomSelect
                    label=" I'm Interested In"
                    id="service"
                    name="service"
                    values={[
                      "Sales",
                      "Technical Support",
                      "Security ",
                      "Other",
                    ]}
                  />
                  {active ? (
                    <CustomInput
                      label="Other Services"
                      name="other"
                      id="other"
                      type="text"
                      placeholder="Enter Services"
                    />
                  ) : null}
                  <CustomTextarea
                    label="Message"
                    is="message"
                    placeholder="Write Your Message"
                    name="message"
                  />
                  <button type="submit">
                    {props.isSubmitting ? "Loading..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div className="wrp msg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
            </svg>

            <h2>Thanks!</h2>
            <p>{`Thank you ${nameState} for contacting us, we will reply as soon as we can!`}</p>
          </div>
        )}
      </Layout>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  background: #f2f2f7;
  .wrp {
    max-width: 1100px;
    margin: auto;
    padding: 12em 10px;
    width: 100%;
  }
  h1 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 36px;
    letter-spacing: 1px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input,
  select {
    height: 50px;
    padding-left: 10px;
    border-radius: 7px;
    width: 100%;
    max-width: 500px;
    font-size: 15px;
    font-weight: 500;
    border: 2px solid #f1f1ff;
  }
  select {
    cursor: pointer;
    outline: none;
    background: url(${require("../images/arrow.svg")}) no-repeat right;
    -webkit-appearance: none;
    background-position-x: 98%;
    background-color: #fff;
  }
  textarea {
    height: 200px;
    padding-left: 10px;
    border-radius: 7px;
    width: 100%;
    max-width: 500px;
    font-size: 15px;
    font-weight: 500;
    border: none;
    outline: none;
    border: 2px solid #f1f1ff;
    padding-top: 10px;
  }
  label {
    display: block;
    width: 100%;
    max-width: 500px;
    margin-top: 2em;
    margin-bottom: 0.5em;
    font-size: 15px;
    font-weight: 700;
    color: #2a263d;
  }
  .error {
    width: 100%;
    max-width: 500px;
    font-size: 12px;
    color: red;
    font-weight: 500;
    margin-top: 0.5em;
  }
  button {
    color: #fff;
    background: #625aff;
    border-radius: 100px;
    padding: 12px 32px 13px 32px;
    transition: all 0.5s;
    border: none;
    font-size: 18px;
    margin-top: 2em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #736fb7;
    }
  }
  .msg {
    padding-top: 14em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg {
      fill: #6e66fe;
    }
    h2 {
      font-size: 28px;
      color: #6e66fe;
      margin: 1em;
    }
    p {
      font-size: 16px;
      color: #444;
      font-weight: 600;
      max-width: 340px;
      line-height: 1.6em;
      text-align: center;
    }
  }
`

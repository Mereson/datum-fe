import styles from "./style.module.css"
import schoolchild from "../../assets/schoolchild.png"
import { Link, useNavigate } from "react-router-dom"
import { LuEye, LuEyeOff } from "react-icons/lu"
import { useState } from "react"
import { login } from "../../api"
import { useMutation } from "@tanstack/react-query"
import { Field, Form, Formik } from "formik"
import { FormButton } from "../../components"
import { loginSchema } from "../../api/validationSchema"
import { useStudentsData, useToken } from "../../states/students"

export const Login = () => {
  const { saveToken, clearToken, token } = useToken()
  const {setStudentsData} = useStudentsData()
  const [showPassword, setShowPassword] = useState(false)
  const showeye = () => {
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
  })

  if (mutation.isSuccess) {
    navigate("/students/dashboard")
    setStudentsData(mutation.data)
    saveToken(mutation.data.token)
    console.log(mutation.data.token)
    console.log("Login Successfull")
    console.log(mutation.data)
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error.response.data)
  }

  const onSubmit = (values) => {
    console.log(values.email, values.password)
    mutation.mutate({
      email: values.email,
      password: values.password,
    })
  }

  const clickMe = () => {
    clearToken()
    console.log(`token: ${token}`)
  }
  return (
    <section className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_left}>
          {mutation.isError && (
            <h2 className=" text-[red]">
              {mutation?.error?.response?.data?.message}
            </h2>
          )}
          {mutation.isPending && <h2 className=" text-[green]">Loading</h2>}
          <button onClick={clickMe }>Click Me</button>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="pt-10 grid gap-x-12 gap-y-6">
                <div className={styles.headersection}>
                  <h1>Welcome 🤗</h1>
                </div>
                <div className={styles.label}>
                  <label htmlFor="username"> Email </label>
                  <Field
                    className={`${styles.inputtext} ${
                      errors.email && touched.email
                        ? "border-[1.47px] border-red-500"
                        : ""
                    }`}
                    type="text"
                    placeholder="Enter email"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <div className={"text-red-500 text-[13px] pt-2"}>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* This is the label for Password */}
                <div className={styles.label}>
                  <label htmlFor="Password">Password </label>

                  <div
                    className={`${styles.hide} ${
                      errors.password && touched.password
                        ? "border-[1.47px] border-red-500"
                        : ""
                    }`}
                  >
                    <Field
                      className={styles.inputtext}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      name="password"
                    />
                    {showPassword ? (
                      <LuEyeOff onClick={showeye} className={styles.hideicon} />
                    ) : (
                      <LuEye onClick={showeye} className={styles.hideicon} />
                    )}
                  </div>
                  {errors.password && touched.password && (
                    <div className={"text-red-500 text-[13px] pt-2"}>
                      {errors.password}
                    </div>
                  )}
                </div>

                <Link to="/forgotpassword">
                  <p className={styles.forgotpassword}>Forgot password?</p>
                </Link>
                <div className={styles.buttonsection}>
                  <FormButton
                    type={"submit"}
                    content="Login"
                    className={styles.btn}
                    isPending={mutation.isPending}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className={styles.login_right}>
          <figure className={styles.imagecontainer}>
            <img
              className={styles.image}
              src={schoolchild}
              alt="schoolchild and teacher"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

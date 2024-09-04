import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export const createStudent = async (parentsFormData, studentsFormData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/student/createStudent`, {
      parent: parentsFormData,
      students: studentsFormData,
    })
    return data
  } catch (error) {
    catchErrors(error)
  }
}

export const createTeacher = async (teacher) => {
  try {
    const formData = new FormData()
    console.log(teacher)

    Object.keys(teacher).forEach((key) => {
      formData.append(key, teacher[key])
    })

    console.log("Is hitting", formData)

    const { data } = await axios.post(
      `${baseUrl}/admin/createAdmin`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return data
  } catch (error) {
    catchErrors(error)
  }
}

export const login = async (email, password) => {
  try {
    console.log("is hitting")
    const { data } = await axios.post(`${baseUrl}/parent/login`, {
      email,
      password,
    })
    return data
  } catch (error) {
    catchErrors(error)
  }
}

export const logOut = () => {
  clearToken()
}

export const getAllStudents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/student/getAllStudents`)
    // console.log(data)
    return data
  } catch (error) {
    return catchErrors(error)
  }
}

export const getStudentById = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/student/getStudentById/${id}`)
    // console.log(data)

    // setStudentData(data)
    return data
  } catch (error) {
    catchErrors(error)
  }
}

export const getAllTeachers = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/admin/getAllTeachers`)
    return data
  } catch (error) {
    return catchErrors(error)
  }
}

export const createResult = async (email, file) => {
  try {
    const fileData = new FormData()

    fileData.append("email", email)
    fileData.append("file", file)

    const { data } = await axios.post(
      `${baseUrl}/result/createResult`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

    return data
  } catch (error) {
    catchErrors(error)
  }
}

export const getAllSubjects = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/subject/getAllSubjects`)
    return data
  } catch (error) {
    return catchErrors(error)
  }
}

export const createSubject = async (name, classLevel) => {
  try {
    const { data } = await axios.post(`${baseUrl}/subject/createSubject`, {
      name,
      classLevel,
    })
    return data
  } catch (error) {
    catchErrors(error)
  }
}

const catchErrors = (error) => {
  if (error.response) {
    console.log("ERROR | RESPONSE")
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log("ERROR | REQUEST")
    console.log(error.request)
  } else {
    console.log("Error", error.message)
  }
  console.log(error.config)

  throw error // Optionally re-throw the error for further handling
}

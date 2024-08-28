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

// export const createTeacher = async (teacher) => {
//   try {
//     const { data } = await axios.post(`${baseUrl}/admin/createAdmin`, {
//       teacher,
//     });
//     return data;
//   } catch (error) {
//     catchErrors(error);
//   }
// };

export const createTeacher = async (teacher) => {
  try {
    const formData = new FormData()

    Object.keys(teacher).forEach((key) => {
      formData.append(key, teacher[key])
    })

    console.log(formData)
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
    const res = await axios.post(`${baseUrl}/parent/login`, {
      email,
      password,
    })
    if (res.status === 200) {
      saveToken({ token: res.data.token }) // Assuming saveToken is implemented
    }
    return res.data
  } catch (error) {
    catchErrors(error)
  }
}

export const logOut = () => {
  // Assuming clearToken is implemented
  clearToken()
}

export const getAllStudents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/student/getAllStudents`)
    // console.log(data)
    return data
  } catch (error) {
    catchErrors(error)
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

export const createResult = async (email, file) => {
  try {
    const { data } = await axios.post(`${baseUrl}/result/createResult`, {
      email,
      file,
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

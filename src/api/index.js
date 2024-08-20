const { default: axios } = require("axios");

const baseUrl = "http://localhost:8000/api"

export const createStudent = async (parent, students) => {
  try {
    const { data } = await axios.post(`${baseUrl}/student/createStudent`, {
      parent,
      students
    })
  } catch (error) {
    catchErrors(error)
  }
}

export const createTeacher = async (teacher) => {
  try {
    const data = await axios.post(`${baseUrl}/admin/createAdmin`, {
      teacher
    })
  } catch (error) {
    catchErrors(error)
  }
}

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${baseUrl}/parent/login`, {
      "email": email,
      "password": password
    })
    // No saveToken function yet
    if (res.status == 200) {
      saveToken({ token: res.data.token })
    }
  } catch (error) {
    catchErrors(error)
  }
}

export const logOut = () => {
  // No clearToken function yet
  clearToken()
}

export const getAllStudents = async () => {
  try {
    const res = await axios.get(`${baseUrl}/getAllStudents`)
    const data = await res.json()
    console.log(data)

    // No setAllStudentsList function yet
    setAllStudentsList(data)
  } catch (error) {
    catchErrors(error)
  }
}

export const getStudentById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/getStudentById/${id}`)
    const data = await res.json()
    console.log(data)

    // No setStudentData function yet
    setStudentData(data)
  } catch (error) {
    catchErrors(error)
  }
}

export const createResult = async (email, file) => {
  try {
    const data = await axios.post(`${baseUrl}/result/createResult`, {
      "email": email,
      "File": file
    })
  } catch (error) {
    catchErrors(error)
  }
}

const catchErrors = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("ERROR | RESPONSE")
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("ERROR | REQUEST")
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}
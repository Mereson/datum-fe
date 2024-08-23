import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createStudent = async (formData) => {
  try {
    const data = await axios.post(`${baseUrl}/student/createStudent`, {
      formData
    });
    return data;
  } catch (error) {
    catchErrors(error);
  }
};

export const createTeacher = async (teacher) => {
  try {
    const { data } = await axios.post(`${baseUrl}/admin/createAdmin`, {
      teacher,
    });
    return data;
  } catch (error) {
    catchErrors(error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${baseUrl}/parent/login`, {
      email,
      password,
    });
    if (res.status === 200) {
      saveToken({ token: res.data.token }); // Assuming saveToken is implemented
    }
    return res.data;
  } catch (error) {
    catchErrors(error);
  }
};

export const logOut = () => {
  // Assuming clearToken is implemented
  clearToken();
};

export const getAllStudents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/getAllStudents`);
    console.log(data);
    return data;
  } catch (error) {
    catchErrors(error);
  }
};

export const getStudentById = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/getStudentById/${id}`);
    console.log(data);

    setStudentData(data); // Assuming setStudentData is implemented
    return data;
  } catch (error) {
    catchErrors(error);
  }
};

export const createResult = async (email, file) => {
  try {
    const { data } = await axios.post(`${baseUrl}/result/createResult`, {
      email,
      file,
    });
    return data;
  } catch (error) {
    catchErrors(error);
  }
};

const catchErrors = (error) => {
  if (error.response) {
    console.log("ERROR | RESPONSE");
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log("ERROR | REQUEST");
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);

  throw error; // Optionally re-throw the error for further handling
};

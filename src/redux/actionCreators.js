import Axios from "axios";
import { 
  GET_ALL_COURSES, 
  GET_ALL_POSTS, 
  GET_ALL_SPECIALITIES, 
  GET_ALL_TEACHERS, 
  GET_POST, 
  GET_SPECIALITY,
  GET_COURSE,
  GET_FRAGMENT 
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL;

// action creators: Funciones que harán la llamada a un dispatch mandándole objetos y estos
// son los que modificarán la store.
export const getAllPosts = () => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/posts`)
  .then(
    resp => {
      // La respuesta retorna un dispatch, donde el dispatch necesita un objeto para ser ejecutado
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data
      })
    }
  )
}

export const getAllSpecialities = () => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/especialidades`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: resp.data
      })
    }
  )
}

export const getAllCourses = () => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/cursos`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data
      })
    }
  )
}

export const getAllTeachers = () => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/profesores`)
  .then(
    resp => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data
      })
    }
  )
}



// Función para obtener un post, esta funcion va a necesitar recibir un id. /posts/3
export const getPost = (id) => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/posts/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
  )
}

export const getSpeciality = (id) => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/especialidad/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_SPECIALITY,
        speciality: resp.data
      })
    }
  )
}

export const getCourse = (id) => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/curso/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_COURSE,
        course: resp.data
      })
    }
  )
}



export const getFragment = (id) => dispatch => {
  // Haciendo la peticion al sevidor
  Axios.get(`${API_URL}/clase/${id}`)
  .then(
    resp => {
      return dispatch({
        type: GET_FRAGMENT,
        fragment: resp.data
      })
    }
  )
}

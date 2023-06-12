import {api} from './api'

// In this example endpoint /user was used

const getUsers = async (token = '') => {
   const response = await api.get(`/user`,{ headers: { Authorization: `Bearer ${token}`}}).catch(error => console.log('error: ',error.message))
   return response.data
}

const getUser = async (token = '', id) => {
   const response = await api.get(`/user/${id}`,{ headers: { Authorization: `Bearer ${token}`}}).catch(error => console.log('error: ',error.message))
   return response.data
}

const createUser = async (token = '', data) => {
   const response = await api.post(`/user`, data, { headers: { Authorization: `Bearer ${token}`}}).catch(error => console.log('error: ',error.message))
   return response
}

const updateUser = async (token = '', id, data) => {
   const response = await api.put(`/user/${id}`, data,{ headers: { Authorization: `Bearer ${token}`}}).catch(error => console.log('error: ',error.message))
   return response
}

const deleteUser = async(token = '', id) => {
   const response = await api.delete(`/user/${id}`,{ headers: { Authorization: `Bearer ${token}`}}).catch(error => console.log('error: ',error.message))
   return response
}

export {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser
}

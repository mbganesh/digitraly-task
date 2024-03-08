import { useQuery, useMutation, useQueryClient } from "react-query";
import { axios } from "utils/Axios";

//---------------------------------API-------------------------------//

// List
export const userList = async (params = {}) => {
  return await axios.get(`/users/user-list`, { params });
};

export const useUserList = (params) => {
  return useQuery(["users", params], () => userList(params));
};

// Get User

export const getUser = async (data) => {
  return await axios.post("/users/user-single-data", { ...data });
};

export const useGtUser = () => {
  return useMutation({
    mutationFn: (resData) => getUser(resData)
  });
};

// Add
export const addUser = async (data) => {
  return await axios.post("/users/user-add", { ...data });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (resData) => addUser(resData),
    onSuccess: () => {
      queryClient.refetchQueries("users");
    },
  });
};


// Update
export const updateUser = async (data) => {
  return await axios.post("/users/user-update", { ...data });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (resData) => updateUser(resData),
    onSuccess: () => {
      queryClient.refetchQueries("users");
    },
  });
};

// Delete
export const deleteUser = async (data) => {
  return await axios.post("/users/user-delete", { ...data });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (resData) => deleteUser(resData),
    onSuccess: () => {
      queryClient.refetchQueries("users");
    },
  });
};
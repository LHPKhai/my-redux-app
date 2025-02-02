export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    CREATE_USER_REQUEST: 'users/create_user_request',
    UPDATE_USER_REQUEST: 'users/update_user_request',  // ✨ Thêm hành động UPDATE
    USERS_ERROR: 'users/user_error'
};

// Hành động lấy danh sách người dùng
export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

// Hành động cập nhật danh sách người dùng sau khi lấy dữ liệu thành công
export const getUsersSuccess = ({ items }) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: { items }
});

// Hành động tạo người dùng mới
export const createUserRequest = ({ firstName, lastName }) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: { firstName, lastName }
});

// Hành động xóa người dùng
export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: { userId }
});

// ✨ Hành động cập nhật người dùng
export const updateUserRequest = ({ id, firstName, lastName }) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: { id, firstName, lastName }
});

// Hành động xử lý lỗi
export const usersError = ({ error }) => ({
    type: Types.USERS_ERROR,
    payload: { error }
});

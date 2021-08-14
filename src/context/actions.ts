export const login = (user: object) => ({
    type: 'LOGIN',
    payload: {
        user,
    },
});

export const uploadDress = (dress: object) => ({
    type: 'UPLOAD_DRESS',
    payload: {
        dress,
    },
});

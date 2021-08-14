export const login = (user: object) => ({
    type: 'LOGIN',
    payload: {
        user,
    },
});

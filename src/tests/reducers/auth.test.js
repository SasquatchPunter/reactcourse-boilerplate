import authReducer from '../../redux/reducers/auth';

test('Should login user by updating auth with uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 'testUID'
    };
    expect(authReducer(undefined, action)).toEqual({
        uid: 'testUID'
    });
});

test('Should logout user by updated auth with empty object', () => {
    const state = {
        uid: 'testUID'
    };
    const action = {
        type: 'LOGOUT'
    };
    expect(authReducer(state, action).uid).toBeUndefined();
});
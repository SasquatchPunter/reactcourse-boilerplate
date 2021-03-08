import { login, logout } from '../../redux/actions/auth';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

const createMockStore = configureStore([thunk]);

test('Should correctly setup LOGIN action object', () => {
    const uid = 'ABC123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'ABC123'
    });
});

test('Should correctly setup LOGOUT action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

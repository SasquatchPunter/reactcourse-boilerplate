import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoadingPage from './components/routes/LoadingPage';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './redux/store/configure-store';
import { login, logout } from './redux/actions/auth';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Rendering Logic
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

// Render load page
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// Firebase Auth logic and redirects
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

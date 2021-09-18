import { NavLink, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { login } from '../../../store/session';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import '../auth.css';

function LogInOut() {
    const dispatch = useDispatch();

    const [demo, setDemo] = useState('demo@aa.io');
    const [demoPassword, setDemoPassword] = useState('password');

    const onDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(demo, demoPassword));
  }

    return (
        <div className='home'>
            <div className='splash-log'>
                <div className='logs'>
                    <NavLink to='/account/login' className='log-buttons'>Login</NavLink>
                    <button onClick={onDemo} className='log-buttons' type='button'>Demo</button>
                    <NavLink to='/account/sign-up' className='log-buttons'>Sign Up</NavLink> 
                </div>
                <Switch>
                    <Route path='/account/login'>
                        <LoginForm />
                    </Route>
                    <Route path='/account/sign-up'>
                        <SignUpForm />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default LogInOut;
import React from 'react';
import { Mutation } from 'react-apollo'
import { AUTH_TOKEN } from '../../Utils/Constans/Communication';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from './AuthenticationQuery';

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            name: '',
        }
    }

    render() {

        const {
            login,
            email,
            password,
            name
        } = this.state;

        return (
            <div style={{ padding: '100px' }}>
                <div className="form-container">
                    <h1 style={{ color: 'white' }} className="mv3">{login ? 'Login' : 'Sign Up'}</h1>
                    <div className="space custom-input" style={{ display: 'flex', flexDirection: 'column', margin: '20px 0' }}>
                        {!login && (
                            <input
                                value={name}
                                onChange={e => this.setState({ name: e.target.value })}
                                type="text"
                                placeholder="Your name"
                            />
                        )}
                        <input
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            type="text"
                            placeholder="Your email address"
                        />
                        <input
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                            placeholder="Choose a safe password"
                        />
                    </div>
                    <div className="flex mt3">
                        <Mutation
                            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                            variables={{ email, password, name }}
                            onCompleted={data => this._confirm(data)}
                        >
                            {mutation => (
                                <button className="pointer mr2 custom-button" onClick={mutation}>
                                    {login ? 'LOGIN' : 'CREATE ACCOUNT'}
                                </button>
                            )}
                        </Mutation>
                        <div
                            className="pointer button"
                            onClick={() => this.setState({ login: !login })}
                        >
                            <div style={{ margin: '30px 0', color: 'white', fontWeight: 'bold' }}>
                                {login ? 'need to create an account?' : 'already have an account?'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push('/')
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
        localStorage.setItem('manolo', 'manolo')
    }
}

export default Authentication;
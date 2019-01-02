import React from 'react';
import { Mutation } from 'react-apollo'
import { AUTH_TOKEN } from '../../Utils/Constans/Communication';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from './AuthenticationQuery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { textFieldStyles } from '../../Utils/TextFieldStyles';
import { withStyles } from '@material-ui/core/styles';
import { FiLock } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

//Styles
import './Authentication.css';
import { Typography } from '@material-ui/core';

const styles = textFieldStyles

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            repeatPassword: '',
            name: ''
        }
    }

    render() {

        const {
            login,
            email,
            password,
            repeatPassword,
            name
        } = this.state;

        const { classes } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <div className="title-logo">
                    Tessty
                </div>
                <div className="auth-container">
                    <div className="form-container">
                        <div style={{ textAlign: 'center', fontSize: '2rem', margin: '60px 0' }} className="mv3">
                            {
                                login ? <Typography component="h4" variant="h4" gutterBottom>Welcome</Typography> : <Typography component="h4" variant="h4" gutterBottom>Sign up</Typography>
                            }
                        </div>
                        <div className="space custom-input" style={{ display: 'flex', flexDirection: 'column', margin: '20px 0' }}>
                            {!login && (
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ margin: '0 12px', display: 'flex', alignItems: 'center' }}>
                                        <FiUser style={{ fontSize: '24px', color: 'gray' }} />
                                    </div>
                                    <TextField style={{ margin: '10px 0', width: '100%' }}
                                        value={name}
                                        onChange={e => this.setState({ name: e.target.value })}
                                        label="Name"
                                        variant="outlined"
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </div>

                            )}
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ margin: '0 12px', display: 'flex', alignItems: 'center' }}>
                                    <FiMail style={{ fontSize: '24px', color: 'gray' }} />
                                </div>
                                <TextField style={{ margin: '10px 0', width: '100%' }}
                                    value={email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    label="Email"
                                    variant="outlined"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ margin: '0 12px', display: 'flex', alignItems: 'center' }}>
                                    <FiLock style={{ fontSize: '24px', color: 'gray' }} />
                                </div>
                                <TextField style={{ margin: '10px 0', width: '100%', borderRadius: '50%' }}
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                />
                            </div>
                            {!login && (
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ margin: '0 12px', display: 'flex', alignItems: 'center' }}>
                                        <FiLock style={{ fontSize: '24px', color: 'gray' }} />
                                    </div>
                                    <TextField style={{ margin: '10px 0', width: '100%', borderRadius: '50%' }}
                                        value={repeatPassword}
                                        onChange={e => this.setState({ repeatPassword: e.target.value })}
                                        label="Repeat Password"
                                        type="password"
                                        variant="outlined"
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </div>

                            )}

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Mutation
                                mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                                variables={{ email, password, name }}
                                onCompleted={data => this._confirm(data)}
                                onError={error => this.setState({
                                    messageError: error
                                })}
                            >
                                {mutation => (
                                    <Button variant="outlined" color='primary' style={{ marginLeft: 'auto' }} onClick={mutation}>
                                        {login ? 'LOGIN' : 'CREATE ACCOUNT'}
                                    </Button>
                                )}
                            </Mutation>
                            <div
                                className="pointer button"
                                onClick={() => this.setState({ login: !login })}
                            >
                                <div style={{ margin: '30px 0', color: 'white', textAlign: 'center' }}>
                                    <Button style={{ fontSize: '11px', color: 'white' }} className={classes.button}>
                                        {login ? 'DON’T HAVE AN ACCOUNT YET?  SIGNUP ' : 'already have an account?'}
                                    </Button>
                                </div>

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


export default withStyles(styles)(Authentication);
import React from "react";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '../userPool';

const AccountContext = React.createContext();

const Account = (props) => {

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser();
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    reject();
                } else {
                    resolve(session);
                }
            });
        } else {
            reject();}
        })
    }

    const logout = () => {
        const user = userPool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    }

    const authenticate = async (username, password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username: username,
                Pool: userPool
            });

            //authenticate the user
            const authDetails = new AuthenticationDetails({
                Username: username,
                Password: password
            });

            user.authenticateUser(authDetails, {
                onSuccess: data => {
                    console.log('onSuccess:', data);
                    resolve(data)
                },
                onFailure: err => {
                    console.error('onFailure:', err);
                    reject(err)
                },
                newPasswordRequired: data => {
                    console.log('newPasswordRequired:', data);
                }
            });
        });
    }

    return (
        <AccountContext.Provider value={{ authenticate,getSession ,logout}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export { AccountContext, Account }
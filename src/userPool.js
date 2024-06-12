import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_4IN17DjFR',
    ClientId: '13lbvbqe8tstsj06q6hfqltqu9'
};

export default new CognitoUserPool(poolData);
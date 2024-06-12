import React, { useState, useContext, useEffect } from "react";

import { AccountContext } from "./Account";

export const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession,logout } = useContext(AccountContext);
    useEffect(() => {
        const fetchSession = async () => {
          try {
            const session = await getSession();
            console.log('Session:', session);
            setStatus(true);
          } catch {
            console.log('Not logged in');
            setStatus(false);
          }
        };
    
        fetchSession();
      }, []);


    return (
        <div>
            {status ? (<button onClick={logout}>Log Out</button>) : 'Please login'}
        </div>
    )
}
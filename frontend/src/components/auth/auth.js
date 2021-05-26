const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
const api = process.env.REACT_APP_API_URL;

export const authenticate = (token, history) => {
    let verified = token ? jwt.verify(token, JWT_SECRET) : null;
    // let verified = token ? jwt.decode(token) : null;

    if(verified){
        return true;
    }else{
        history.push('/login');
        return false;
    }
}

export const getUser =  async (token) => {
    const tempUser = jwt.verify(token, JWT_SECRET);
    // let tempUser = token ? jwt.decode(token) : null;
    
    const result = await fetch(`${api}/fullUser/${tempUser.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => res.json() );

    return result; 
}
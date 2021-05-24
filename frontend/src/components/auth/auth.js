const jwt = require('jsonwebtoken')
const JWT_SECRET = 'lkjsdfku4@#$@#o7w59 pajfclvkas%$#ur3daFDUA'

export const authenticate = (token, history) => {
    let verified = token ? jwt.verify(token, JWT_SECRET) : null;

    if(verified){
        return true;
    }else{
        history.push('/login');
    }
}

export const getUser =  async (token) => {

    const tempUser = jwt.verify(token, JWT_SECRET);
    
    const result = await fetch(`http://localhost:5000/fullUser/${tempUser.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => res.json() );

    return result; 
}
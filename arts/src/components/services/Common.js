import Cookies from 'js-cookie' 

// return the user data from the session storage
export const getUserSession = () => {

  var useCookies = true;
  
  if (useCookies){
    const userStr = Cookies.get('user');
    if (userStr) 
      return JSON.parse(userStr.name);
    else 
      return null;
  } else {
      const userStr = sessionStorage.getItem('user');
    if (userStr) 
      return JSON.parse(userStr.name);
    else 
      return null;
  }
}
 
// return the token from the session storage
export const getToken = () => {
  
  var useCookies = true
  if (useCookies){
    return Cookies.get('token') || null;
  } else {
    return sessionStorage.getItem('token') || null;
  }
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {
  
  var useCookies = true
  if (useCookies){
    Cookies.remove('token');
    Cookies.remove('user')
  } else {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
}
 
// set the token and user from the session storage
export const setUserSession = (token, user) => {
  
  var useCookies = true
  if (useCookies){
    Cookies.setItem('token', token)
    Cookies.setItem('user', JSON.stringify(user));
  } else {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}

export const getErrorSession = () => {
  
  var useCookies = true
  if (useCookies){
    return Cookies.get('error') || null;
  } else {
    return sessionStorage.getItem('error') || null;
  }
}

export const setErrorSession = (message) => {
  
  var useCookies = true
  if (useCookies){
    Cookies.setItem('error', message);
  } else {
    sessionStorage.setItem('error', message);
  }
}
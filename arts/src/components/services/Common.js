import Cookies from 'js-cookie' 

const useCookies = true;

// return the user data from the session storage
export const getUserSession = () => {
  
  if (useCookies){
    const userStr = Cookies.get('user');
    if (userStr) 
      return JSON.parse(userStr);
    else 
      return null;
  } else {
      const userStr = sessionStorage.getItem('user');
    if (userStr) 
      return JSON.parse(userStr);
    else 
      return null;
  }
}
 
// return the token from the session storage
export const getToken = () => {

  if (useCookies){
    return Cookies.get('token') || null;
  } else {
    return sessionStorage.getItem('token') || null;
  }
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {

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

  if (useCookies){
    Cookies.set('token', token)
    Cookies.set('user', JSON.stringify(user));
  } else {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}

export const getErrorSession = () => {

  if (useCookies){
    return Cookies.get('error') || null;
  } else {
    return sessionStorage.getItem('error') || null;
  }
}

export const setErrorSession = (message) => {

  if (useCookies){
    Cookies.set('error', message);
  } else {
    sessionStorage.setItem('error', message);
  }
}
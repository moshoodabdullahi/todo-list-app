const { nanoid } = 'nanoid';
const VALID_EMAIL_KEY = 'dema-todo-list.valid.userEmail';
const VALID_USER_ARRAY = 'dema-todo-list.valid.userArray';
const errorMessage = document.querySelector('#error-message');
const email = document.querySelector('#email');

const auth = () => {
  const getSession = () => {
    const sessionData = sessionStorage.getItem(VALID_EMAIL_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
  };

  const getLocalStorageUser = () => {
    const foundUser = VALID_USER_ARRAY.find((userData) => userData.email === VALID_EMAIL_KEY);

    if (foundUser) {
      return foundUser.session;
    } else {
      return null
    }
  };

  const signIn = () => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (validateEmail(email)) {
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent.signIn = 'Enter your email address';
      return errorMessage;
    }

    const user = getLocalStorageUser(email);

    if (user) {
      return sessionStorage.getItem('user');
    }
    const userId = nanoid();
    const session = {
      userId,
      email,
      created_at: new Date().toISOString(),
    };

    sessionStorage.setItem('moshoodabdullahi-todo-list-app-session', JSON.stringify(session));
    return session;
  };

  const signOut = () => {
    sessionStorage.removeItem('session');
  };

  return {
    getSession,
    signIn,
    signOut,
  };
};

export default auth;

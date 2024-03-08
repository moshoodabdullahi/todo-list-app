const { nanoid } = 'nanoid';

const auth = () => {
  const getSession = () => {
    const sessionData = sessionStorage.getItem('moshoodabdullahi-todo-list-app-session');
    return sessionData ? JSON.parse(sessionData) : null;
  };

  const getLocalStorageUser = (userEmail) => {
    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
    const foundUser = userArray.find((userData) => userData.email === userEmail);

    if (foundUser) {
      return foundUser.session;
    }
    return null;
  };

  const addLocalStorageUser = (sessionData) => {
    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
    userArray.push(sessionData);

    localStorage.setItem('userArray', JSON.stringify(userArray));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signIn = (email) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    const user = getLocalStorageUser(email);

    if (user) {
      sessionStorage.setItem('moshoodabdullahi-todo-user', JSON.stringify(user));
      return sessionStorage.getItem('user');
    }
    const userId = nanoid();
    const session = {
      userId,
      email,
      created_at: new Date().toISOString(),
    };

    sessionStorage.setItem('moshoodabdullahi-todo-list-app-session', JSON.stringify(session));
    addLocalStorageUser(session);
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

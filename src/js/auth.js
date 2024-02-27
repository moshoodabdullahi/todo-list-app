const { nanoid } = 'nanoid';

const auth = () => {
  const getSession = () => {
    const sessionData = sessionStorage.getItem('session');
    return sessionData ? JSON.parse(sessionData) : null;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signIn = (email) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    const userId = nanoid();
    const session = {
      userId,
      email,
    };

    sessionStorage.setItem('session', JSON.stringify(session));
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

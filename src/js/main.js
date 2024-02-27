import auth from './auth';

const authenticationPage = document.querySelector('#authentication-page');
const signInButton = document.querySelector('#sign-in-button');
const signOutButton = document.querySelector('#sign-out-button');

const authHandler = auth();

const signIn = () => {
  authenticationPage.classList.replace('flex', 'hidden');
};

const signOut = () => {
  authenticationPage.classList.replace('hidden', 'flex');
};

const session = authHandler.getSession();
console.log(session);

signInButton.addEventListener('click', signIn, () => {
  const emailInput = document.querySelector('#email');

  const email = emailInput.value;
  try {
    authHandler.signIn(email);
    console.log('Signed in:', session);
  } catch (error) {
    console.error(error.message);
  }
});

signOutButton.addEventListener('click', signOut, () => {
  authHandler.signOut();
  console.log('Signed out');
});

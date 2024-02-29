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

signInButton.addEventListener('click', signIn, () => {
  const emailInput = document.querySelector('#email');

  const email = emailInput.value;
  try {
    authHandler.signIn(email);
  } catch (error) {
    error.message = error;
  }
});

signOutButton.addEventListener('click', signOut, () => {
  authHandler.signOut();
});

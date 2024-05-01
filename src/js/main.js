import auth from './auth';

const authenticationPage = document.querySelector('#authentication-page');
const signInButton = document.querySelector('#sign-in-button');
const signOutButton = document.querySelector('#sign-out-button');
const todosPage = document.querySelector('#todos-page');
const formButton = document.querySelector('#form');

const authHandler = auth();

const signIn = (email) => {
  authenticationPage.classList.replace('flex', 'hidden');
  todosPage.classList.replace('hidden', 'flex');
  authHandler.signIn(email);
};

const signOut = () => {
  authenticationPage.classList.replace('hidden', 'flex');
  todosPage.classList.replace('flex', 'hidden');
  authHandler.signOut();
};

formButton.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;
  try {
    authHandler.signIn(email);
  } catch (error) {
    error.message = error;
  }
});

signInButton.addEventListener('click', signIn);
signOutButton.addEventListener('click', signOut);

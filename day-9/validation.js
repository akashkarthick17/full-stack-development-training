const onLogin = (event) => {
  event.preventDefault();
  console.log(event);

  const username = event.target['username'].value;
  const password = event.target['password'].value;

  console.log(username);
  console.log(password);

  if (username.length === 0) {
    document.getElementById('error-message').classList.remove('hide');
  }
};

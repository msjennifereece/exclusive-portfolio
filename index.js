let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

// template_kp34xqj
// service_gyxns6o
// Ok9DjLKoGJeW7SQUN

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"


  emailjs
    .sendForm(
      'service_gyxns6o',
      'template_kp34xqj',
      event.target,
      'Ok9DjLKoGJeW7SQUN'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly on jenreece.webdev@gmail.com"
      );
    })

}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }

  isModalOpen = true;
  document.body.classList += " modal--open"
}
// header....................................................
function fadeIn(elem, duration = 300) {
    elem.style.opacity = 0;
    elem.style.display = "block";

    let last = +new Date();
    const tick = function () {
        elem.style.opacity = +elem.style.opacity + (new Date() - last) / duration;
        last = +new Date();

        if (+elem.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}

function fadeOut(elem, duration = 300) {
    elem.style.opacity = 1;

    let last = +new Date();
    const tick = function () {
        elem.style.opacity = +elem.style.opacity - (new Date() - last) / duration;
        last = +new Date();

        if (+elem.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            elem.style.display = "none";
        }
    };
    tick();
}

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("brandToggle");
    const menu = document.getElementById("brandMenu");

    let isVisible = false;

    toggle.addEventListener("click", function (e) {
        e.preventDefault();

        if (window.innerWidth <= 768) {
            if (!isVisible) {
                fadeIn(menu);
                isVisible = true;
            } else {
                fadeOut(menu);
                isVisible = false;
            }
        }
    });
});

const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', () => {
    toggler.classList.toggle('collapsed');
});


  document.getElementById('signinBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const alertBox = document.getElementById('signinAlert');

    // Show alert
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.classList.add('show');
    }, 10);

    // Hide after 4 seconds
    setTimeout(() => {
      alertBox.classList.remove('show');
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 300);
    }, 2000);
  });


// form..............................................................
function SubmitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("ErrorName");
    let emailError = document.getElementById("ErrorEmail");
    let mobileError = document.getElementById("ErrorMobile");
    let messageError = document.getElementById("ErrorMessage");

    nameError.style.display = "none";
    emailError.style.display = "none";
    mobileError.style.display = "none";
    messageError.style.display = "none";

    let isValid = true;

    if (name === "") {
      nameError.style.display = "block";
      isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
      emailError.style.display = "block";
      isValid = false;
    }

    let mobilePattern = /^[0-9]{10,15}$/;
    if (mobile === "" || !mobilePattern.test(mobile)) {
      mobileError.style.display = "block";
      isValid = false;
    }

    if (message === "") {
      messageError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      let alertBox = document.getElementById("alertonsubmit");
      alertBox.style.animation = "ConFadeInOut 3s forwards";

      setTimeout(() => {
        alertBox.style.animation = "none";
      }, 3000);

      document.querySelector("form").reset();
    }

    return false;
  }
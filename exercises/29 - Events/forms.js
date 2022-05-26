const wes = document.querySelector('.wes');
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", 
function(event) {
    const name = event.currentTarget.name.value;
    if (name.includes("Chad")) {
      alert("Sorry bro");
      event.preventDefault();
    }
  });

  function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
  }
  signupForm.name.addEventListener("keyup", logEvent);

  function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
  }
  signupForm.name.addEventListener("keydown", logEvent);

// wes.addEventListener("click", function(event) {
//     console.log("YOU CLICKED IT");
//     event.preventDefault();
//   });

// wes.addEventListener("click", function(event) {
//     event.preventDefault();
//     const shouldChangePage = confirm(
//       "This website might be malicious! Do you wish to proceed?"
//     );
//     if (shouldChangePage) {
//       window.location = event.currentTarget.href;
//     }
//     console.log(shouldChangePage);
//   });


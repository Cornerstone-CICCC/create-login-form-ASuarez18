document.addEventListener("DOMContentLoaded", function () {
  // > Toggle password visibility
  const togglePasswordVisibilityBtn = document.getElementById("toggle-password-visibility-btn");
  const passwordInput = document.getElementById("password-input");

  togglePasswordVisibilityBtn.addEventListener("click", function (event) {
    event.preventDefault(); 
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";
    const iconImg = togglePasswordVisibilityBtn.querySelector("img");
    iconImg.src = isPasswordVisible ? "./images/visible-icon.svg" : "./images/hidden-icon.svg";
    iconImg.alt = isPasswordVisible ? "Show password" : "Hide password";
  });

  // // > Set input focus on input focus
  // const inputWrappers = document.querySelectorAll(".input-wrapper");

  // inputWrappers.forEach(wrapper => {
  //   const input = wrapper.querySelector("input");
  //   input.addEventListener("focus", function () {
  //     wrapper.classList.add("focused");
  //     console.log("hey");
      
  //   });
  //   input.addEventListener("blur", function () {
  //     wrapper.classList.remove("focused");
  //   });
  // });
});
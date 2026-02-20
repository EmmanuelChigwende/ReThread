const hasUpper = /[A-Z]/;
const hasLower = /[a-z]/;
const hasNumber = /[0-9]/;
const hasSpecial = /[!@#$%^&*()_+]/;

function TestPasswordStrenght(password) {
  const error = [];

  if (password.length < 8) {
    error.push("password does not meet length requirement must be 8 or more charachter");
  }

  if (!hasUpper.test(password)) {
    error.push("password should have at least one uppercase character");
  }

  if (!hasLower.test(password)) {
    error.push("password should have at least one lowercase character");
  }

  if (!hasNumber.test(password)) {
    error.push("password should have at least one number");
  }

  if (!hasSpecial.test(password)) {
    error.push("password should have at least one special character");
  }

  if (error.length === 0) {
    return true;
  } else {
    return error;
  }
}

export default TestPasswordStrenght;

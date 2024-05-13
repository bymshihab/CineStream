export const checkValidateData = (name, email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

    if(!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not valid";


    return null;
};

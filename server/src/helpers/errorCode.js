const codes = {
  "to be unique": "already exists.",
  "username: Username must be longer than 3 characters":
    "Username must be longer than 3 characters.",
  "password: Password must be longer than 5 characters":
    "Password must be longer than 5 characters.",
  "Error: Error: The email does not exist. Please check your email.":
    "The email does not exist. Please check your email.",
  "Error: Error: The password is incorrect. Please check your password":
    "The password is incorrect. Please check your password.",
};

//the error unique, if there are two errors it prints both in a single string, this takes out the last repeated value and sends it to the front end.
const getTheLastKey = (errorMessage) => {
  const errorPattern = /(\w+): Error, expected `\w+` to be unique/g;
  const match = errorPattern.exec(errorMessage);
  if (match) {
    const key = match[1];
    return key.charAt(0).toUpperCase() + key.slice(1);
  }
  return null;
};

const returnError = (error) => {
  let listOfErrors = [];

  if (error.includes("to be unique")) {
    const duplicateKey = getTheLastKey(error);
    listOfErrors.push({
      message: `${duplicateKey} ${codes["to be unique"]}`,
    });
  }

  if (error.includes("Username must be longer than 3 characters")) {
    listOfErrors.push({
      message: codes["username: Username must be longer than 3 characters"],
    });
  }

  if (error.includes("Password must be longer than 5 characters")) {
    listOfErrors.push({
      message: codes["password: Password must be longer than 5 characters"],
    });
  }

  if (error.includes("The email does not exist. Please check your email.")) {
    listOfErrors.push({
      message:
        codes[
          "Error: Error: The email does not exist. Please check your email."
        ],
    });
  }

  if (
    error.includes("The password is incorrect. Please check your password.")
  ) {
    listOfErrors.push({
      message:
        codes[
          "Error: Error: The password is incorrect. Please check your password"
        ],
    });
  }

  return listOfErrors;
};

module.exports = { returnError };

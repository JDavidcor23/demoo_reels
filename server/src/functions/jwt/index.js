const jwt = require("jsonwebtoken");

async function signToken(data) {
  return new Promise((resolve, reject) => {
    jwt.sign({ user: data }, "secretkey", (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          token,
          ...data,
        });
      }
    });
  });
}

function verifyToken(token) {
  const bearerToken = token.split(" ")[1];
  if (!bearerToken) {
    throw new Error("No token provided");
  } else {
    try {
      // const decoded = jwt.verify(bearerToken, "secretkey");
      // const currentTime = Math.floor(Date.now() / 1000);

      // if (decoded.exp < currentTime) {
      //   throw new Error("Token has expired");
      // }
      return true;
    } catch (error) {
      throw new Error("Failed to authenticate token");
    }
  }
}

module.exports = { verifyToken, signToken };

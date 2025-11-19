import jwt from 'jsonwebtoken';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN;

export const generateAccessToken = payload => {
  const expiresIn = ACCESS_TOKEN_EXPIRES_IN // 60 * 15; // 15 minutes
  const token = jwt.sign({ uid }, ACCESS_TOKEN, { expiresIn });
  return token
};

export const generateRefreshToken = (uid, res) => {
  try {
    const expiresIn = REFRESH_TOKEN_EXPIRES_IN // 60 * 60 * 24 * 30; // expires in 30 days

    const refreshToken = jwt.sign({ uid }, REFRESH_TOKEN, { expiresIn });

    return refreshToken
    // res.cookie('refreshToken', refreshToken, {
    //   httpOnly: true,
    //   secure: !(process.env.MODO === 'developer'), // if mode is 'developer' secure is false, but in production mode secure is true
    //   expires: new Date(Date.now() + expiresIn * 1000), // as the 'Date.now()' is in milliseconds, we need to convert it to seconds.
    // });
  } catch (error) {
    console.log(error);
  }
}
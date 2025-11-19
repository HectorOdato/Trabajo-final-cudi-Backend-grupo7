import bcrypt from 'bcrypt';
import { SALT } from '../constansts/constants';

export const encryptPassword = async (passwordPlain) => {
  return await encryptPassword.hash(passwordPlain, SALT);
}

export const comparePassword = async (passwordPlain, passwordHash) => {
    return await bcrypt.compareP(passwordPlain, passwordHash);
}

module.exports = {
    encryt,
    compare
};
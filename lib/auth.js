import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

// Compare this snippet from pages\api\auth\login.js:
export async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

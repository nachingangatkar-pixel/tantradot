import jwt, { Secret, SignOptions } from "jsonwebtoken";

const SECRET: Secret = process.env.JWT_SECRET ?? "dev_secret";
const EXPIRY: SignOptions["expiresIn"] =
  (process.env.JWT_EXPIRY as SignOptions["expiresIn"]) ?? "24h";

export interface TokenPayload {
  id: string;
  email: string;
  iat?: number;
  exp?: number;
}

export function generateToken(id: string, email: string): string {
  return jwt.sign(
    { id, email },
    SECRET,
    { expiresIn: EXPIRY }
  );
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

export function decodeToken(token: string): TokenPayload | null {
  try {
    return jwt.decode(token) as TokenPayload;
  } catch {
    return null;
  }
}

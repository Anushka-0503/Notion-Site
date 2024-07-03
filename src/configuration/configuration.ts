import * as dotenv from 'dotenv';
import type { Algorithm } from 'jsonwebtoken';

dotenv.config();

export const config = {
  port: process.env.PORT as unknown as number,
  auth: {
    jwt: {
      algorithm: 'ES256' as Algorithm,
      publicKey: process.env.JWT_PUBLIC_KEY,
      ignoreExpiration: false,
    },
  },
  mongoUris: {
    primary: process.env.PRIMARY_MONGO_URI,
  },
};
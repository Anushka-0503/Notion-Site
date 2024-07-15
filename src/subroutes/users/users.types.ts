export class CreateUserDto {
    name: string;
    email: string;
    role: Role[];
  }

  export type Role = 'player' | 'admin' | 'finance' | 'support';

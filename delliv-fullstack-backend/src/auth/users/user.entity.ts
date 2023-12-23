import * as bcrypt from 'bcrypt';

export class User {
  id?: number;
  name: string;
  email: string;
  password: string;

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

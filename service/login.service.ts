const { User } = require('../models');
import { createToken } from '../helper/jwt';
import { validatePass } from '../helper/bcrypt';
interface User {
  email: string;
  password: string;
}

export default class UserService {
  static login = async ({ email, password }: User) => {
    try {
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: `user not found` };
      }
      const passwordCheck = validatePass(password, findUser.password);
      console.log(password);
      if (!passwordCheck) {
        throw { name: `wrong password` };
      }
      //give token
      const payload: object = {
        id: findUser.id,
      };
      const access_token = createToken(payload);
      return {
        success: true,
        message: 'Successfully Created',
        data: access_token,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.name,
      };
    }
  };
}

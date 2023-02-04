const bcryptjs = require('bcryptjs');

function validatePass(pass: string, has: string) {
  return bcryptjs.compareSync(pass, has);
}

export { validatePass };

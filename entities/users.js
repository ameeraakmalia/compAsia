const { EntitySchema } = require('typeorm');

class User {
  constructor(id, email, password, option) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.option = option;
  }
}

const UserSchema = new EntitySchema({
  name: 'User',
  tableName: 'users',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar'
    },
    option: {
      type: 'varchar',
    },
  },
});

module.exports = { UserSchema, User };
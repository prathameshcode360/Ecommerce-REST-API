export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getAll() {
    return users;
  }

  static register(name, email, password) {
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      password: password,
    };
    users.push(newUser);
    return newUser;
  }
  static login(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}
let users = [
  {
    id: 1,
    name: "user1",
    email: "user1@gmail.com",
    password: "user1",
  },
  {
    id: 2,
    name: "user2",
    email: "user2@gmail.com",
    password: "user2",
  },
  {
    id: 3,
    name: "user3",
    email: "user3@gmail.com",
    password: "user3",
  },
];

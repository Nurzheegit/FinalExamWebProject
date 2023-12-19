class UserService {

  constructor() {
    this.users = this.getUsersFromLocalStorage();
  }

  async addUser(name, email, password) {
    // Emulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const isEmailTaken = this.users.some((user) => user.email === email);

    if (isEmailTaken) {
      return {
        status: 401,
        message: "Email is already in use. Please choose another email",
      };
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    this.users.push(newUser);
    this.saveUsersToLocalStorage();

    return {
      status: 200,
      message: 'User added successfully!',
    };
  }

  async login(email, password) {
    // Emulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = this.users.find((user) => user.email === email);

    if (user && user.password === password) {
      return { status: 200, message: 'Login successful!', user: { name: user.name, email: user.email } };
    } else {
      return { status: 401, message: 'Invalid email or password' };
    }
  }

  getUsersFromLocalStorage() {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString) : [];
  }

  saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }


  async getUserByEmail(email) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

const userService = new UserService();

export default userService;

//Класс User управляет авторизацией, выходом и регистрацией пользователя из приложения. URL = '/user'.

class User {
  // Устанавливает текущего пользователя в локальном хранилище.

  static URL = '/user';

  static setCurrent(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Удаляет информацию об авторизованном пользователе из локального хранилища.

  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  //Возвращает текущего авторизованного пользователя из локального хранилища

  static current() {
    const user = localStorage.user;
    return user ? JSON.parse(user) : user;
  }

  //Получает информацию о текущем авторизованном пользователе.

  static fetch(callback) {
    createRequest({
      url: this.URL + '/current',
      method: 'GET',
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    });
  }

  //Производит попытку авторизации. После успешной авторизации сохраняет пользователя через User.setCurrent.
  
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  //Производит попытку регистрации пользователя. При успехе сохраняет пользователя через User.setCurrent.

  static register(data, callback) {
    createRequest({
      url: this.URL + '/register',
      method: 'POST',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  //Производит выход из приложения. После успеха вызвает метод User.unsetCurrent

  static logout(callback) {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      callback: (err, response) => {
        if (response && response.user) {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    });
  }
}

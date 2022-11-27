//Класс User управляет авторизацией, выходом и регистрацией пользователя из приложения. URL = '/user'.

class User {
  // Устанавливает текущего пользователя в локальном хранилище.

  static setCurrent(user) {
    localStorage.user.id = user.id;
    localStorage.user.name = user.name;
    console.log( localStorage.user ); 
  }

  // Удаляет информацию об авторизованном пользователе из локального хранилища.

  static unsetCurrent() {
    localStorage.user.id = '';
    localStorage.user.name = '';
    console.log( localStorage.user ); 
  }

  //Возвращает текущего авторизованного пользователя из локального хранилища

  static current() {
    const user = {
      id: localStorage.user.id,
      name: localStorage.user.name
    };
    console.log( user ); 
    return user;
  }

  //Получает информацию о текущем авторизованном пользователе.

  static fetch(callback) {

  }

  //Производит попытку авторизации. После успешной авторизации сохраняет пользователя через User.setCurrent.
  
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
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

  }

  //Производит выход из приложения. После успеха вызвает метод User.unsetCurrent

  static logout(callback) {

  }
}

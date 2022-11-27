//Класс Entity - базовый для взаимодействия с сервером. Имеет свойство URL = "".

class Entity {

  static URL = '';

  // list - Запрашивает данныe пользователя (доход/расход, в зависимости от того, что наследуется от Entity)

  static list(data, callback){
    createRequest({
      url: this.URL, 
      method: "GET", 
      data, 
      callback});
  }

  
  // create - Создаёт счёт или доход/расход. (в зависимости от того, что наследуется от Entity)

  static create(data, callback) {
    createRequest({
      url: this.URL, 
      method: "PUT", 
      data, 
      callback});
  }


  // remove - Удаляет информацию о счёте или доходе/расходе (в зависимости от того, что наследуется от Entity)

  static remove(data, callback ) {
    createRequest({
      url: this.URL, 
      method: "DELETE", 
      data, 
      callback});
  }
}
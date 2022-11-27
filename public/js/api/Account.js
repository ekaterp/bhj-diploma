// Класс Account (счета пользователя) наследуется от Entity. Имеет свойство URL со значением '/account'

class Account extends Entity {
  static URL = '/account';
  
  static get(id = '', callback){   //Получение информации о счёте
    createRequest({
      url: URL + '/' + id,
      method: "GET", 
      data,
      callback});
  }
}

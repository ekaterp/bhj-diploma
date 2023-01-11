// Класс Modal отвечает за управление всплывающими окнами (в первую очередь открытие или закрытие)

class Modal {
  /**
   * Устанавливает текущий элемент в св-во element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует, выкидывет ошибку.
   * */
  constructor(element){
    this.element = element;
    this.registerEvents();
  }

  //При нажатии на элемент с data-dismiss="modal" закрывает текущее окно (с помощью Modal.onClose)
  registerEvents() {
    this.element.querySelectorAll('[data-dismiss="modal"]').forEach(btn => {
      btn.onсlick = e => {
        this.onClose(e);
      }
    });
  }

  //Срабатывает после нажатия на элементы, закрывающие окно. Закрывает текущее окно ( Modal.close() )
  onClose(e) {
    e.preventDefault();
    this.close();
  }

  //Открывает окно: устанавливает CSS-свойство display со значением «block»
  open() {
    this.element.style.display = 'block';
  }

  //Закрывает окно: удаляет CSS-свойство display
  close(){
    this.element.style.removeProperty('display');
  }
}
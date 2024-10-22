const content = document.querySelector('.wrapper');
let points = 0; 

const data = [
  {
    id: 1,
    text: 'Какая единица измерения чаще всего используется для обозначения скорости интернет-соединения?',
    correct: 'b',
    correctText: 'Мегабиты в секунду',
    items: [
      'Байты в секунду',
      'Мегабиты в секунду',
      'Килобайты в секунду',
      'Терагерцы'
    ]
  },
  {
    id: 2,
    text: ' Как называется процесс создания копий данных для предотвращения их потери?',
    correct: 'c',
    correctText: 'Бэкап',
    items: [
      'Шифрование',
      'Архивирование',
      'Бэкап',
      'Дедупликация'
    ]
  },
  {
    id: 3,
    text: 'Что означает термин "colocation" в контексте дата-центров?',
    correct: 'b',
    correctText: 'Размещение серверного оборудования клиента в дата-центре',
    items: [
      'Хранение данных на удалённых серверах',
      'Размещение серверного оборудования клиента в дата-центре',
      'Удалённое управление ИТ-инфраструктурой',
      'Построение отказоустойчивых систем с использованием облачных технологий'
    ]
  },
  {
    id: 4,
    text: 'Что означает термин "пинг" в сети?',
    correct: 'b',
    correctText: 'Время отклика от сервера',
    items: [
      'Скорость передачи данных',
      'Время отклика от сервера',
      'Размер пакета данных',
      'Пропускная способность сети'
    ]
  },
  {
    id: 5,
    text: 'Как называется тип атаки, при котором злоумышленники перегружают сервер или сеть запросами, вызывая отказ в обслуживании?',
    correct: 'b',
    correctText: 'DDoS-атака',
    items: [
      'SQL-инъекция',
      'DDoS-атака',
      'Фишинг',
      'Спуфинг'
    ]
  },
  {
    id: 6,
    text: 'Что означает термин "облачные вычисления" (cloud computing)?',
    correct: 'a',
    correctText: 'Хранение данных в удалённой сети серверов',
    items: [
      'Хранение данных в удалённой сети серверов',
      'Использование локальных компьютеров для распределения задач',
      'Создание резервных копий данных на внешних жёстких дисках',
      'Удалённое управление ИТ-оборудованием через интернет'
    ]
  },
  {
    id: 7,
    text: 'Какой язык программирования используется для создания веб-страниц?',
    correct: 'b',
    correctText: 'HTML',
    items: [
      'C++',
      'HTML',
      'Python',
      'Java'
    ]
  },
  {
    id: 8,
    text: 'Как расшифровывается "DNS"?',
    correct: 'b',
    correctText: 'Domain Name System',
    items: [
      'Data Network Server',
      'Domain Name System',
      'Distributed Network System',
      'Dynamic Node Structure'
    ]
  },
  {
    id: 9,
    text: 'Что означает аббревиатура "CPU" в компьютерах?',
    correct: 'c',
    correctText: 'Central Processing Unit',
    items: [
      'Central Power Unit',
      'Computer Processing Unit',
      'Central Processing Unit',
      'Core Processing Unit'
    ]
  },
  {
    id: 10,
    text: ' Как называется первая мобильная операционная система, разработанная для смартфонов с сенсорным экраном?',
    correct: 'a',
    correctText: 'Palm OS',
    items: [
      'Palm OS',
      'Symbian OS',
      'Windows CE',
      'iOS'
    ]
  },
];

let current = 0; //index

window.addEventListener('click', (event) => {
  if (event.target.closest('.answer')) {
    const userOtvet = event.target.id;
    const userOtvetText = event.target.innerHTML;
    
    //Проверяю овтет пользоватея 
    if (userOtvet == data[current].correct) {
      const popup = `
        <div class="popup">
          <div class="popup__content">
            <div class="popup__content-title">Правильный ответ!</div>
            
            <div class="popup__btn">Далее</div>
          </div>
        </div>
      `;
      content.insertAdjacentHTML('beforeend', popup);
      current++;
      points++;
    } else {
      const popup = `
        <div class="popup">
          <div class="popup__content">
            <div class="popup__content-title red">Неправильный ответ!</div>
            <div class="popup__content-answer">Правильный: <span>${data[current].correctText}!</span></div>
            <div class="popup__btn">Далее</div>
          </div>
        </div>
      `;
      content.insertAdjacentHTML('beforeend', popup);
      current++;
    }
  }
  else if (event.target.closest('.popup__btn')) {
    if (current == data.length) {
      content.innerHTML = `
        <div class="popup">
          <div class="popup__content">
            <div class="popup__content-title">Вы набрали!</div>   
            <div class="popup__result">${points}/${data.length}</div>
            <div class="popup__refresh">Окей</div>
          </div>
        </div>
      `;
    } else {
      content.innerHTML = `
      <div class="slide">
      <div class="slide__number">
        № <span>${data[current].id}</span>
      </div>
      <div class="slide__content">
        <div class="slide__title">${data[current].text}</div>
        <div class="slide__answers">
          <div class="answer" id="a">${data[current].items[0]}</div>
          <div class="answer" id="b">${data[current].items[1]}</div>
          <div class="answer" id="c">${data[current].items[2]}</div>
          <div class="answer" id="d">${data[current].items[3]}</div>
        </div>
        <div class="logo">
      <img src="images/logo.png" alt="">
    </div>
      </div>
      </div>
      `;
      prettyWords();
    }
  }

  else if (event.target.closest('.popup__refresh')) {
    window.location.reload();
  }
});


window.onload = () => {
  content.insertAdjacentHTML('beforeend', component);
}

const component = `
  <div class="slide">
      <div class="slide__number">
        № <span>${data[current].id}</span>
      </div>
      <div class="slide__content">
        <div class="slide__title">${data[current].text}</div>
        <div class="slide__answers">
          <div class="answer" id="a">${data[current].items[0]}</div>
          <div class="answer" id="b">${data[current].items[1]}</div>
          <div class="answer" id="с">${data[current].items[2]}</div>
          <div class="answer" id="d">${data[current].items[3]}</div>
        </div>
        <div class="logo">
      <img src="images/logo.png" alt="">
    </div>
      </div>
    </div>
`;


const prettyWords = () => {
  console.log(current)
  if (current == 2 || current == 5) {
    document.querySelectorAll('.answer').forEach(el => {
      el.style.fontSize = '35px';
    });
  } else {
    document.querySelectorAll('.answer').forEach(el => {
      el.style.fontSize = '60px';
    });
  }
}
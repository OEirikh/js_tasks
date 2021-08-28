# js-22

- Терминал
  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `control + ~`
    - `view > teminal`
    - через палитру `command + shift + p`
  - Основные полезные команды
    - путь (pwd)
    - лист (ls)
    - навигация (cd)
    - очистка `clear` или `control + l`
    - создание файлов (touch)
    - создание папок (mkdir)
    - переименование/перемещение (mv)
    - удаление (rm)
- Node.js и npm (node package manager)
  - установка
  - Текущая версия - "npm -v"
  - инициализация (команда "npm init" или "npm init -y(--yes)") и
    package.json-файл с данними о проекте, база всего проекта (вся мета
    информация о проекте)
  - [npmjs.com](https://www.npmjs.com/) - сайт с графическим интерфейсом для
    ознокомления с каждим пакетом
  - работа с пакетами (библиотеками)
    - установка - npm i(install) "имя пакета"
    - удаление - npm remove "имя пакета"
  - CommonJS модули
  - npm-скрипты - запуск "npm run (script)"
    - pre и post - cкрипти - запускаются до и после // "prestart": "echo \"ето
      prestart\"", // "start": "echo \"Тестовий скрипт\"", // "poststart": "echo
      \"ето poststart\"", // "script-1": "node npm.js", // "script-2": "echo
      \"скрипт-2\"", // "all": "npm run script-1 && npm start && npm run
      script-2"
- Транспиляция кода
  - [Babel](https://babeljs.io/)
  - CLI и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist)
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) експорт и импорт
  - Именованный (named) експорт и импорт
  - Импорт пространства имён (namespace)

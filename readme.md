# Статичная верстка, шаблонизатор Nunjucks

Шаблон для сборки отдельных статичных страниц html из шаблонов-исходников Nunjucks,
сборки JS и SCSS с помощью Webpack

## Техническое задание

* Из шаблонов Nunjucks собирать отдельные статичные html-страницы
* Сборка SCSS and JS
* Копирование изображений

## Комментарии

В Nunjucks можно использовать layouts, передавать context (задается в `webpack.config.js`).
Каждый шаблон для компиляции прописан в `webpack.config.js`.

Скомпилированные из шаблонов Nunjucks страницы html помещаются в папку `dist`.
Собранные файлы стилей `style.css` и `bundle.js` помещаются в папку `dist/assets`.
Изображения из папки `src/images` просто копируются в папку `dist/assets/images`.

Папка `dist` не добавлена в Git.

## TODO

* В Webpack не настроены шрифты, если они будут подключены файлами, а не через Google Fonts
* Оптимизировать сборку JS
* Скрипт автодобавления импортов новых файлов scss в `index.scss`

## Help

Писать на почту - dmitriy.tka4@gmail.com

/*
 * Библиотека lazysizes
 * - feature detection
 */

// "feature  detection" Обнаружения поддержки браузера
if ("loading" in HTMLImageElement.prototype) {
  console.log("Браузер поддерживает lazyload");
  addSrcAttrToLazyImages();
  // если поддерживает то используем нативную ленивую загрузку, не загружая сторонних библиотек
} else {
  console.log("Браузер НЕ поддерживает lazyload");
  addLazySizesScript();
  // если нет то рендерим строку с подключением библиотеки lazysizes и добавляем динамически в разметку
  // и ленивая загрузка работает уже через библиотеку
}

const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach((image) => {
  // target.addEventListener(type, listener[, options]);
  // { once: true } - options Необязательный
  // Объект options, который определяет характеристики объекта, прослушивающего событие. Доступны следующие варианты:
  // capture:  Boolean указывает, что события этого типа будут отправлены зарегистрированному обработчику listener перед отправкой на EventTarget, расположенный ниже в дереве DOM.
  // once: Boolean указывает, что обработчик должен быть вызван не более одного раза после добавления. Если true, обработчик автоматически удаляется при вызове.
  // passive:  Boolean указывает, что обработчик никогда не вызовет preventDefault(). Если всё же вызов будет произведён, браузер должен игнорировать его и генерировать консольное предупреждение.
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Картинка загрузилась");
  evt.target.classList.add("appear");
}

function addLazySizesScript() {
  // Создается тег <script>
  const script = document.createElement("script");
  // Добавления атрибутов и их значений
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
  script.integrity =
    "sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==";
  script.crossOrigin = "anonymous";
  // Добавления разметки в DOM (html)
  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}

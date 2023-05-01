import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleDetails } from "../../ui/ArticleDetails/ArticleDetails";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleBlockType, ArticleType } from "../../model/types/article";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "entities/ArticleDetails",
  component: ArticleDetails,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id:"1"
};
Primary.decorators = [StoreDecorator({
  articleDetails:{
    data:  {
      "id": "1",
      "title": "Javascript news",
      "subtitle": "Что нового в JS за 2022 год?",
      "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
      "views": 1022,
      "createdAt": "26.02.2022",
      "type": [
        ArticleType.IT
      ],
      "blocks": [
        {
          "id": "1",
          "type": ArticleBlockType.TEXT,
          "title": "Заголовок этого блока",
          "paragraphs": [
            "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
            "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
            "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
          ]
        },
        {
          "id": "4",
          "type": ArticleBlockType.CODE,
          "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
          "id": "5",
          "type": ArticleBlockType.TEXT,
          "title": "Заголовок этого блока",
          "paragraphs": [
            "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
            "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
          ]
        },
        {
          "id": "2",
          "type": ArticleBlockType.IMAGE,
          "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
          "title": "Рисунок 1 - скриншот сайта"
        },
        {
          "id": "3",
          "type": ArticleBlockType.CODE,
          "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
          "id": "7",
          "type": ArticleBlockType.TEXT,
          "title": "Заголовок этого блока",
          "paragraphs": [
            "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
            "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
          ]
        },
        {
          "id": "8",
          "type": ArticleBlockType.IMAGE,
          "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
          "title": "Рисунок 1 - скриншот сайта"
        },
        {
          "id": "9",
          "type": ArticleBlockType.TEXT,
          "title": "Заголовок этого блока",
          "paragraphs": [
            "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
          ]
        }
      ]
    }
  }})]

export const Loading = Template.bind({});
Loading.args = {
  id:"2"
};
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true}
})]
export const LoadingDark = Template.bind({});
LoadingDark.args = {
  id:"3"
};
LoadingDark.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true}
}), ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({});
Error.args = {
  id:"4"
};
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: "error"}
})]

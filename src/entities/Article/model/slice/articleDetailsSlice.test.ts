
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const article =  {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [
    "IT"
  ],
  blocks: [
    {
      id: "1",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    }
  ]
} as Article

describe("articleDetailsSlice.test", ()=> {
  test("test fetch article by id", async()=>{
        
    const thunk = new TestAsyncThunk(fetchArticleById, {
      articleDetails: {data:article}
    });
    thunk.api.get.mockReturnValue(Promise.resolve( [article] ));
    console.log( thunk.callThunk("1"))

    const result = await thunk.callThunk(article.id)
    console.log(result)
    expect(thunk.api.get).toHaveBeenCalled()
    // expect(result.meta.requestStatus).toBe('fulfilled')
    // expect(result.payload).toEqual(article)
  });

})


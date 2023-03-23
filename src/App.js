import Article from "./components/Article";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Article url="https://www.akchabar.kg/ru/news/srednyaya-cena-na-rudu-i-koncentraty-dragmetallov-vyrosla-v-147-raza/"
      >Средняя цена на руду и концентраты драгметаллов выросла в 1.47 раза</Article>
      <Article className="Article"
      url = "https://www.akchabar.kg/ru/news/v-narynskoj-oblasti-opredelili-prioritetnye-investicionnye-i-gchp-proekty/"
      urlImg= "https://www.akchabar.kg/media/news/dcf192ae-08c4-4ae6-ae82-904f6bfb42d3.png.100x52_q80_crop.png" 
      date="23.03.2023, 14:19">В Нарынской области определили приоритетные инвестиционные и ГЧП-проекты</Article>
    </div>
  );
}
export default App;

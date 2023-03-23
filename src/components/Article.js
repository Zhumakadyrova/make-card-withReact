import "./Article.css";
function Article(props) {
  return <article className="Article">
    <img src={props.urlImg} alt =""/>
    <a className ="Link"href= {props.url}>  {props.children}</a>
    <span>{props.date}</span>
</article>;
}
export default Article;

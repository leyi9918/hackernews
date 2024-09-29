import "./App.css";
import { useState } from "react";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const List = (props) => {
  return (
    <div>
      {props.list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
};

// search如何向上传递数据
/**
 * search状态
 * 回调函数
 * 返回Jsx(label, input, p, strong)
 */
const Search = props =>{
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // 通过props传递了一个函数过来，onSearch函数，将这个事件通过函数参数进行传递
    props.onSearch(e);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        searching <strong>{searchTerm}</strong>
      </p>
    </div>
  )
}
/**
 * 显示search,list组件
 */
const App = () => {
  const handleSearch = event =>{
    console.log(event.target.value);
  }
  return (
    <div>
      <h1> Hacker News </h1>
      <Search onSearch={handleSearch}/>
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;

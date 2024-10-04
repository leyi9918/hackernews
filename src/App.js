import "./App.css";
import { useState, useEffect } from "react";

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

const Search = ({search, onSearch}) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        value={search}
        id="search"
        type="text"
        onChange={onSearch}
      />
    </div>
  );
};

/**
 * 显示search,list组件
 */
const App = () => {
  // 初始化state
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
  // 定义state
  const [searchTerm, setSearchTerm] = useState( localStorage.getItem("search") || "React");

  // 定义事件处理函数
  useEffect(
    ()=>{
      localStorage.setItem("search", searchTerm);
    },
    [searchTerm]
  )
  
  console.log(searchTerm);
  // 定义事件处理函数
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // 定义组件
  const filteredStories = stories.filter((story) =>
story.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h1> Hacker News </h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

export default App;

import "./App.css";
import { useState } from "react";


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




const Search = props =>{
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={props.search} id="search" type="text" onChange={props.onSearch} />
    </div>
  )
}




/**
 * 显示search,list组件
 */
const App = () => {
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

  const [searchTerm, setSearchTerm] = useState("React");
  console.log(searchTerm);
  const handleSearch = event =>{
    setSearchTerm(event.target.value);
  }

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h1> Hacker News </h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

export default App;

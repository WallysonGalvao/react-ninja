import React from "react";

import Form from "./components/form";
import TodoList from "./components/todos-list";
import Filter from "./components/filter";

import SearchCep from "./components/search-cep";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 30,
      }}
    >
      <div>
        <Form />
        <TodoList />
        <Filter />
      </div>

      <div>
        <SearchCep />
      </div>
    </div>
  );
}

export default App;

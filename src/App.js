import React from "react";
import Header from "./components/Headers";
import Cards from "./components/Cards";
import DataTable from "./components/Datatable";
import Lightbox from "./components/Lightbox";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "80px" }}>
        <Cards />
        <DataTable />
        <Lightbox />
      </main>
    </div>
  );
};

export default App;

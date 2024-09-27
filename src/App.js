import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} Component={Page} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

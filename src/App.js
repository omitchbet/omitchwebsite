import Home from "./pages/Home";
import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

//Aos
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  let app = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="root-div" ref={(el) => (app = el)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./assets/page/Home";
import Signin from "./assets/page/Signin";
import SignUp from "./assets/page/SignUp";
import DefaultPage from "./assets/page/DefaultPage";
import Video from "./assets/page/Video";

function App() {
  // const {id} = useParams();
  const id = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path=":id" element={<Home url={id.pathname} />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;

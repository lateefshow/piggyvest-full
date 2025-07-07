import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Header from "./static/Header";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import HouseMoney from "./pages/HouseMoney";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FlexDollar from "./pages/FlexDollar";
import Targets from "./pages/Targets";
import FAQs from "./pages/FAQs";
import Safelock from "./pages/Safelock";
import FlexNaira from "./pages/FlexNaira";
import Piggybank from "./pages/Piggybank";
import SignIn from "./components/account/SignIn";
import CreateAccount from "./components/account/CreateAccount";
import Stories from "./pages/Stories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div className="max-w-[1300px] mx-auto  ">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/housemoney" element={<HouseMoney />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/flexdollar" element={<FlexDollar />} />
            <Route path="/targetsavings" element={<Targets />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/safelock" element={<Safelock />} />
            <Route path="/flexnaira" element={<FlexNaira />} />
            <Route path="/piggybank" element={<Piggybank />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

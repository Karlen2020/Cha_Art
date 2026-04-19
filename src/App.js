import { useEffect, useState } from "react";
import AdBanner from "./components/layout/AdBanner/AdBanner";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./components/Ui/Loading/Loading";

function App() {
  const [siteLoading, setSiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (siteLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
      <AdBanner></AdBanner>
    </div>
  );
}

export default App;

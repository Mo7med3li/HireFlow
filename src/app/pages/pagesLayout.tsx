import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";

const PagesLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
export default PagesLayout;

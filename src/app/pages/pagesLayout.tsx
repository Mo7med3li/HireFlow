import { Outlet } from "react-router-dom";

const PagesLayout = () => {
  return (
    <main className="flex flex-col">
      <Outlet />
    </main>
  );
};
export default PagesLayout;

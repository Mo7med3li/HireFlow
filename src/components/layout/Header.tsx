import { Briefcase, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <Briefcase className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold ">HireFlow</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-2 text-sm font-medium">
            <Sparkles /> <span>Pandy AI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

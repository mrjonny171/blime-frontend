import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

interface route {
  href: string;
  label: string;
  active: boolean;
}

interface MainNavProps {
  routes: route[];
  className: string;
}

const MainNav: React.FC<MainNavProps> = ({ routes, className }) => {
  return (
    <nav className={cn("flex items-center space-x-4 text-slate-600", className)}>
      {routes.map((route) => (
        <button key={route.href}>
          <Link
            key={route.href}
            to={route.label}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-medium transition-colors hover:text-purple-700 dark:text-gray-200"
          >
            {route.label}
          </Link>
        </button>
      ))}
    </nav>
  );
};

export default MainNav;

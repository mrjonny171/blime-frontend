import { Button } from "../ui/button";

interface LogInProps {
  onOpen: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onOpen }) => {
  return (
    <div>
      <Button
        onClick={onOpen}
        variant="ghost"
        className="text-md rounded-xl border dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Login
      </Button>
    </div>
  );
};

export default LogIn;

import { Button } from "../ui/button";

interface SignUpProps {
  onOpen: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onOpen }) => {
  return (
    <div>
      <Button
        onClick={onOpen}
        variant="default"
        className="text-md rounded-xl border dark:hover:bg-gray-300"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;

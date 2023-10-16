import { Separator } from "./separator";

interface SeparatorWithTextProps {
  text: string;
}

const SeparatorWithText: React.FC<SeparatorWithTextProps> = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex-grow">
        <Separator />
      </div>
      <div className="px-3">{text}</div>
      <div className="flex-grow">
        <Separator />
      </div>
    </div>
  );
};

export default SeparatorWithText;

interface LogoProps {
  name: string;
}

const Logo: React.FC<LogoProps> = ({ name }) => {
  return (
    <div className="flex items-center">
      <img
        src="./icone.png"
        alt="CSGO Bot Logo"
        width="60px"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap ">{name}</span>
    </div>
  );
};

export default Logo;

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualSkin = () => {
  const { skinName, condition } = useParams();

  console.log(skinName);
  console.log(condition);

  useEffect(() => {
    //Request Skin Info from default website or all?
    //const skinProps =
  }, []);

  return (
    <div>Skin props Skin propsSkin propsSkin propsSkin propsSkin propsSkin propsSkin props</div>
  );
};

export default IndividualSkin;

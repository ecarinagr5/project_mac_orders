"client-";
import React from "react";
import Link from "next/link";

/***
 * Functional component to render the product
 * BackButton
 ***/

const BackButton: React.FC = () => {
  //const [add, setAdd] = useState(0);

  return (
    <div className="tex-left p-2">
      <Link href={"/"}>
        <div className= "font-bold hover:text-yellow">
          Go Back
        </div>
      </Link>
    </div>
  );
};

export default BackButton;

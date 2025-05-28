import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex  items-center justify-center ">
      <Button>
        <Link to="/characters">Characters</Link>
      </Button>
    </div>
  );
};

export default Home;

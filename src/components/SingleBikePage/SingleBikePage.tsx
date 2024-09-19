import { useParams } from "react-router-dom";

const SingleBikePage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>This is single bike page {id}</div>;
};

export default SingleBikePage;

import { fetchOne } from "./fetchOneId";

export const GenerateMetaData = ({ params }) => {
  return {
    title: `anime-${params.id}`,
    description: "Your favorite anime, all in one place.",
  };
};
async function animeDetailsPage({ params }) {
  const data = await fetchOne(params.id);
  return (
    <div className="flex m-4 p-6 min-h-screen">
      <div className="box"></div>
    </div>
  );
}

export default animeDetailsPage;

//

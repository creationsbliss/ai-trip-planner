import Chatbox from "./_components/Chatbox";

const CreateNewTripPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
      <div>
        <Chatbox />
      </div>
      <div>Map</div>
    </div>
  );
};

export default CreateNewTripPage;

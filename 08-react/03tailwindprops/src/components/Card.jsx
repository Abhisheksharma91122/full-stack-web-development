const Card = ({carName = "BMW", model = "M4"}) => {
//   console.log(props);
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-red-500">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {carName} and model is {model}
        </div>
        <p className="text-gray-700 text-base">
          this is bmw m4 competition is one of the best car in the market right
          now
        </p>
      </div>
      <div className="px-6 py-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;

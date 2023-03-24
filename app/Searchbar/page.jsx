import React from "react";

export default function Searchbar() {
  //   const [name, setName] = useState("");

  //   const handleNameChange = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <form
      className="flex justify-end mb-4 fixed top-2 left-0 right-2"
      //   onSubmit={() => handleNameChange()}
    >
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-5 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
}

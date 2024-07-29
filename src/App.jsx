import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState({});
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");

  const handleSelection = (value) => {
    setSelectedItem(value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim() === "" || newItemDescription.trim() === "") return;
    setItems((prevItems) => ({
      ...prevItems,
      [Object.keys(prevItems).length + 1]: newItemDescription,
    }));
    setNewItemName("");
    setNewItemDescription("");
  };

  const handleDelete = (key) => {
    setItems((prevItems) => {
      const newItems = { ...prevItems };
      delete newItems[key];
      return newItems;
    });
    if (selectedItem === key) {
      setSelectedItem(null);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col rounded-lg">
        <div>
          <header className="flex text bg-green-600 border-4 border-indigo-600 justify-start gap-2">
            <div>
              <img
                className="size-12"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="description"
              />
            </div>
            <div>
              <h2>First ToDo List</h2>
              <p>With Delete Feature</p>
            </div>
          </header>
        </div>

        {/* Main Content Section */}
        {/* <div className="flex flex-row justify-center rounded-lg mt-4">
          <div className="border-2 border-black-600 w-1/2">
            <h1 className="text-xl font-bold mb-4 text-center">
              Select an Item
            </h1>
            <ul className="space-y-4">
              {Object.keys(items).map((key) => (
                <li
                  key={key}
                  className="flex justify-center items-center gap-4"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="item"
                      id={`item${key}`}
                      className="form-radio h-5 w-5 text-blue-600 mr-3"
                      value={key}
                      onChange={() => handleSelection(key)}
                    />
                    <label
                      htmlFor={`item${key}`}
                      className="text-gray-700 cursor-pointer"
                    >
                      Item {key}
                    </label>
                  </div>
                  <button
                    onClick={() => handleDelete(key)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-black-600 w-1/2">
            {selectedItem && items[selectedItem] && (
              <div className="mt-6 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="text-gray-700">{items[selectedItem]}</p>
              </div>
            )}
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Item List Section */}
          <div className="flex flex-col w-full md:w-1/2 border-2 border-black-600 p-4 rounded-lg bg-white shadow-lg">
            <h1 className="text-xl font-bold mb-4 text-center">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(items).map((key) => (
                <div
                  key={key}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedItem === key ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Item {key}</h2>
                    <button
                      onClick={() => handleDelete(key)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                  <button
                    onClick={() => handleSelection(key)}
                    className="text-blue-500 underline"
                  >
                    View Description
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col w-full md:w-1/2 border-2 border-black-600 p-4 rounded-lg bg-white shadow-lg">
            {selectedItem && items[selectedItem] && (
              <>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{items[selectedItem]}</p>
              </>
            )}
          </div>
        </div>

        {/* <div className="bg-gray-100 flex flex-row items-center justify-center min-h-screen">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Item 1</h2> */}
        {/* <p className="text-gray-700">Description for the first item.</p> */}
        {/* </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Item 2</h2> */}
        {/* <p className="text-gray-700">Description for the second item.</p> */}
        {/* </div>
          </div>
        </div> */}

        {/* Input Section */}
        <form
          onSubmit={handleAddItem}
          className="flex flex-row justify-start border-4 border-green-600 rounded-lg mt-4"
        >
          <div className="border-2 border-blue-600 w-5/12 p-4">
            <h2>Please Input New Item</h2>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter Your Item"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="border-2 border-blue-600 w-5/12 p-4">
            <h2>Add Description for Item</h2>
            <input
              type="text"
              value={newItemDescription}
              onChange={(e) => setNewItemDescription(e.target.value)}
              placeholder="Enter Your Description"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center items-center w-1/12 p-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer Section */}
      </div>
    </>
  );
}

export default App;

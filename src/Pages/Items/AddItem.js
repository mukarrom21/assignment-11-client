import React from "react";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const stock = event.target.stock.value;
    const price = event.target.price.value;
    const description = event.target.description.value;

    const shoesDetail = {
      name,
      category,
      supplier,
      img,
      stock,
      price,
      description,
    };

    fetch("https://thawing-earth-19842.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shoesDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("product added success");
        event.target.reset();
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center text-blue-400 text-2xl font-mono">
                  <div className="">
                    <img
                      className=" "
                      src="https://i.ibb.co/BTTMTx8/shoe-icon.png"
                      alt="shoe"
                    />
                  </div>
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Add new item</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Add new shoes with details.
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleAddItem}
                className="divide-y divide-gray-200"
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Shoes Name</label>
                    <input
                      type="text"
                      name="name"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Shoes Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Shoes Category</label>
                    <input
                      type="text"
                      name="category"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Shoes Category"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Supplier Name</label>
                    <input
                      type="text"
                      name="supplier"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Supplier Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Image URL</label>
                    <input
                      type="text"
                      name="img"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Shoes Category"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Quantity</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="number"
                          name="stock"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="quantity"
                          defaultValue={1}
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Price</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="number"
                          name="price"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Price"
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Shoes Description</label>
                    <input
                      type="text"
                      name="description"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Shoes Description"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                    {/*------------ Cancel------- */}
                  <button type="reset" className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Cancel
                  </button>
                  {/*------------ Create product --------------*/}
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;

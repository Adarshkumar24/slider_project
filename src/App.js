import React, { useState } from "react";

const App = () => {
  const [formdata, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "US",
    streetAddress: "",
    city: "",
    state: "",
    postalcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification: "",
  });

  function changehandeler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submithandeler(event) {
    event.preventDefault();
    console.log("Form Data Submitted:", formdata);
  }

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <form
        onSubmit={submithandeler}
        className="bg-white shadow-md rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">User Form</h2>

        {/* First Name */}
        <label className="block font-semibold text-gray-600">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Adarsh"
          value={formdata.firstname}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        {/* Last Name */}
        <label className="block mt-4 font-semibold text-gray-600">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          placeholder="Pradhan"
          value={formdata.lastname}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        {/* Email */}
        <label className="block mt-4 font-semibold text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="abcd@mail.com"
          value={formdata.email}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        {/* Country */}
        <label className="block mt-4 font-semibold text-gray-600">Country</label>
        <select
          name="country"
          value={formdata.country}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        >
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="US">US</option>
        </select>

        {/* Address Details */}
        <label className="block mt-4 font-semibold text-gray-600">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          placeholder="B-25C"
          value={formdata.streetAddress}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        <label className="block mt-4 font-semibold text-gray-600">City</label>
        <input
          type="text"
          name="city"
          placeholder="Your City"
          value={formdata.city}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        <label className="block mt-4 font-semibold text-gray-600">State</label>
        <input
          type="text"
          name="state"
          placeholder="Bihar"
          value={formdata.state}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        <label className="block mt-4 font-semibold text-gray-600">
          Postal Code
        </label>
        <input
          type="text"
          name="postalcode"
          placeholder="1107"
          value={formdata.postalcode}
          onChange={changehandeler}
          className="w-full border rounded p-2 mt-1 focus:ring focus:ring-blue-300"
        />

        {/* Checkboxes */}
        <fieldset className="mt-6 border p-4 rounded-lg">
          <legend className="font-bold text-gray-700">By Email</legend>

          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              name="comments"
              checked={formdata.comments}
              onChange={changehandeler}
              className="mr-2"
            />
            Get notified about comments
          </label>

          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              name="candidates"
              checked={formdata.candidates}
              onChange={changehandeler}
              className="mr-2"
            />
            Get notified about new candidates
          </label>

          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              name="offers"
              checked={formdata.offers}
              onChange={changehandeler}
              className="mr-2"
            />
            Receive special offers
          </label>
        </fieldset>

        {/* Radio Buttons */}
        <fieldset className="mt-6 border p-4 rounded-lg">
          <legend className="font-bold text-gray-700">
            Push Notifications
          </legend>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>

          <label className="flex items-center mt-2">
            <input
              type="radio"
              name="pushnotification"
              value="everything"
              checked={formdata.pushnotification === "everything"}
              onChange={changehandeler}
              className="mr-2"
            />
            Everything
          </label>

          <label className="flex items-center mt-2">
            <input
              type="radio"
              name="pushnotification"
              value="same as email"
              checked={formdata.pushnotification === "same as email"}
              onChange={changehandeler}
              className="mr-2"
            />
            Same as Email
          </label>

          <label className="flex items-center mt-2">
            <input
              type="radio"
              name="pushnotification"
              value="no push"
              checked={formdata.pushnotification === "no push"}
              onChange={changehandeler}
              className="mr-2"
            />
            No Push Notifications
          </label>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white font-bold rounded-lg py-2 hover:bg-blue-600 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default App;

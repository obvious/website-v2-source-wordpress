import React from "react"

export default ({ contactForm }) => {
  return (
    <div className="w-3/6">
      <h2 className="text-lg font-semibold text-white font-sans">
        {contactForm.formtitle}
      </h2>
      <p className="text-sm py-2 font-serif">
        {contactForm.formdescription}
      </p>
      <input
        className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
        defaultValue="Name"
        type="text"
      />
      <input
        className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
        defaultValue="Email"
        type="text"
      />
      <textarea
        className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
        name=""
        id=""
        cols="30"
        rows="10"
        defaultValue="Message"
      ></textarea>
      <button className="border border-bittersweet text-bittersweet p-4 text-sm text-center w-full rounded font-sans">
        Submit
      </button>
    </div>
  )
}

"use client";
import axios from "axios";
import { useState } from "react";
import "./style.css";
import toast from "react-hot-toast";
import { BASEURL } from "../../../../Constant";

const ContactForm = ({name, phone, email, product, note}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const service = from.service.value;
    const note = from.note.value;
    const data = {
      name,
      email,
      phone,
      enquery: service,
      editionalInfo: note,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${BASEURL}/user/email/customer-enquery`,
        data
      );
      toast.success("Your message was sent successfully!");
      setIsLoading(false);
      from.reset("");
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was an error sending your message.");
      setIsLoading(false);
    }
  };
  return (
    <form
      id="contact_form"
      onSubmit={handleSubmit}
      className="contact_us_form flex flex-col gap-3 md:gap-5 w-full "
    >
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        <div className="input_item">
          <p className="text-sm md:text-base font-semibold text-[#313131]">
          {name} <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="w-full h-10 md:h-14"
          />
        </div>
        <div className="input_item">
          <p className="text-sm md:text-base font-semibold text-[#313131]">
          {phone} <span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            required
            name="phone"
            placeholder="Phone Number"
            className="w-full h-10 md:h-14"
          />
        </div>
      </div>
      <div className="input_item">
        <p className="text-sm md:text-base font-semibold text-[#313131]">
        {email} <span className="text-red-500">*</span>
        </p>
        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          className="w-full h-10 md:h-14"
        />
      </div>
      <div className="input_item">
        <p className="text-sm md:text-base font-semibold text-[#313131]">
        {product} <span className="text-red-500">*</span>
        </p>
        <select name="service" className="w-full h-10 md:h-14" required>
          <option disabled value="">
            Select one
          </option>
          <option value="CNC Machining">Face Mask Machinery</option>
          <option value="Materials Machined">
            Cosmetic&Life Products Making Machinery
          </option>
          <option value="Surface Finishing">
            Medical Products Making Machinery
          </option>
          <option value="Surface Finishing">Packaging Machinery</option>
        </select>
      </div>
      <div className="input_item">
        <p className="text-sm md:text-base font-semibold text-[#313131]">
        {note} <span className="text-red-500">*</span>
        </p>
        <textarea
          type="text"
          name="note"
          placeholder="Special note"
          className="w-full h-10 md:h-14"
        />
      </div>
      <div className="flex items-center mt-4 md:mt-6">
        <input
          type="submit"
          disabled={isLoading}
          value={isLoading ? "Loading.." : "SUBMIT MESSAGE"}
          className="submit-btn inline-block h-10 md:h-12 border-none shadow-md  uppercase font-semibold  bg-gradient-to-r from-secondary to-neutral hover:bg-gradient-to-r hover:from-neutral hover:to-secondary p-2 cursor-pointer px-3 md:px-12 text-sm  rounded text-[#FFFFFF]  hover:bg-primary transition"
        />
      </div>
    </form>
  );
};

export default ContactForm;

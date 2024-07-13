import { useDispatch, useSelector } from "react-redux";
import connect from "../assets/connect.svg";
import connectlight from "../assets/contactlight.svg";
import { useState, useRef } from "react";
import { updateEmailBody } from "../store/emailBodySlice";
import emailjs from '@emailjs/browser';

function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const form = useRef();

  const initialState = {
    email: "",
    lastName: "",
    from_name: "",
    phone: "",
    message: ""
  };

  const [formState, setFormState] = useState(initialState);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formState.email || !emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formState.from_name) {
      newErrors.from_name = "First name is required.";
    }

    if (!formState.lastName) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formState.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    dispatch(updateEmailBody({...formState, [name]:value}));
  }

  const resetForm = () => {
    setFormState(initialState);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email Sent Sucessfully!")
          resetForm();
        },
        (error) => {
          alert("Error Sending Email!")
        },
      );

  }

  return (
    <div className="flex items-center justify-center mt-6 mb-4">
      <div className="w-full max-w-3xl bg-gray-400 dark:bg-gray-800 bg-opacity-60 dark:text-white rounded-lg shadow-md p-6 md:p-8 md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Let's connect constellations</h2>
          <p className="mb-8 text-sm">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
          <form ref={form} className="space-y-4" onSubmit={submitHandler}>
            <div className="flex space-x-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={handleChange}
                className={`w-1/2 p-2 rounded placeholder:text-sm text-sm bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500 ${errors.lastName ? 'border-red-500' : ''}`}
              />
              <input
                type="text"
                name="from_name"
                placeholder="First Name"
                value={formState.from_name}
                onChange={handleChange}
                className={`w-1/2 p-2 rounded placeholder:text-sm text-sm bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500 ${errors.from_name ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            {errors.from_name && <p className="text-red-500">{errors.from_name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full p-2 rounded placeholder:text-sm text-sm bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={handleChange}
              className={`w-full p-2 rounded placeholder:text-sm text-sm bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              className={`w-full p-2 rounded placeholder:text-sm text-sm bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500 ${errors.message ? 'border-red-500' : ''}`}
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <button
              type="submit"
              className="w-full p-2 rounded text-white dark:bg-purple-600 bg-gray-500 dark:hover:bg-purple-700 hover:bg-gray-700 focus:outline-none focus:ring-2 dark:focus:ring-purple-500 focus:ring-gray-600"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <div className="text-center">
            <img
              src={connect}
              alt="Astronaut"
              className={`rounded-lg shadow-md ${darkMode ? "" : ""}`}
            />
            <img
              src={connectlight}
              alt="Astronaut"
              className="rounded-lg shadow-md dark:hidden hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

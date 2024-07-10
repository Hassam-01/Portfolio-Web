import { useDispatch, useSelector } from "react-redux";
import connect from "../assets/connect.svg";
import connectlight from "../assets/contactlight.svg";
import { useState } from "react";
import { updateEmailBody } from "../store/emailBodySlice";

function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const formdata = useSelector(state => state.emailBody.emailBody);

  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: ""
  });

  const config = {
    Username: 'portfolicontact@yopmail.com',
    Password: '105F2B5B0A8F313936CC13E6FFA90CC7B473',
    Host: 'smtp.elasticemail.com',
    Port: 2525,
    To: 'portfolicontact@yopmail.com',
    From: formState.email,
    Subject: "This is the subject",
    Body: formState.message
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateEmailBody(formState));
    console.log(formdata)
    if (window.Email) {
      window.Email.send(config).then(()=> alert("Success!"))
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-4 ">
        <div className="min-w-2xl max-w-5xl w-full bg-gray-400 dark:bg-gray-800 bg-opacity-60 dark:text-white rounded-lg shadow-md p-8 md:flex md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Lets connect constellations</h2>
            <p className="mb-8">Lets align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
            <form className="space-y-4" onSubmit={submitHandler}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-1/2 p-2 rounded bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-1/2 p-2 rounded bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 rounded bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-purple-500"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 rounded text-white dark:bg-purple-600 bg-gray-500 dark:hover:bg-purple-700 hover:bg-gray-700 focus:outline-none focus:ring-2 dark:focus:ring-purple-500 focus:ring-gray-600"
              >
                Send it to the moon 🚀
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="text-center">
              <img
                src={connect}
                alt="Astronaut"
                className={`rounded-lg shadow-md ${darkMode ? "" : "hidden"}`}
              />
              <img
                src={connectlight}
                alt="Astronaut"
                className="rounded-lg shadow-md dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

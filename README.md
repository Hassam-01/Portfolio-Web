# Portfolio Project

This is a personal portfolio project built using React, Vite, JavaScript, and Tailwind CSS. The project showcases my work, skills, and provides a way to contact me. The portfolio includes various modern web development tools and libraries to enhance functionality and user experience.

## Live Demo

Check out the live version of the portfolio: [ Portfolio](https://muhammadabdullahwaqar.vercel.app/)

## Features

- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons & Flat Icons**: Icon libraries for adding icons
- **EmailJS**: Email integration for contact form
- **React Router DOM**: For routing between pages
- **Markdown UI Preview**: For text formatting
- **Wavylink**: For startup transitions
- **Vercel**: For hosting the portfolio
- **Recraft AI**: For vector images
- **Redux Toolkit**: For state management

## Environment Variables

To use the email functionality, you need to set up your own EmailJS keys. Create a `.env` file in the root directory and add the following variables with your own EmailJS credentials:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

## Project Structure

The project's directory structure is as follows:

```
root/
├── src/
│   ├── assets/
│   ├── pages/
│   ├── components/
│   ├── store/
│   ├── project/ (projects data)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-project.git
```

2. Navigate to the project directory:

```bash
cd portfolio-project
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

5. Start the development server:

```bash
npm run dev
```

## Deployment

The portfolio is hosted on Vercel.

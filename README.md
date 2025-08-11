# **Silvana's Blog Posts App**

A simple **blog application** built using **Next.js**, **TypeScript**, and **Material-UI**. The app fetches posts and their comments from the placeholder API (**https://jsonplaceholder.typicode.com**) and allows users to browse, filter, and view detailed posts with their respective comments.

---

## **Features**

- 📝 **List of Posts:** Displays a paginated list of blog posts fetched from an external API.
- 🔍 **Search Functionality:** Users can search for posts by their title.
- 📑 **Pagination:** Easily navigate through posts with pagination support.
- 📘 **Post Details Page:** View the full details of a post along with its comments.
- 🎨 **Modern UI Design:** Built with Material-UI for a responsive and stylish user experience.
- ⚡ **Dynamic Routing:** Fully dynamic routing powered by Next.js.
- 🔧 **TypeScript:** Strongly typed for better scalability and robust development.

---

## Bonus:
- Includes basic unit tests with Jest and React Testing Library.
- Deployed on Vercel for live demo.

## Deployment

The application is deployed live using [Vercel](https://vercel.com), providing fast and reliable hosting for Next.js projects. You can try the live app here:

**[Live Demo](https://silvana-blog-posts-app.vercel.app/)**  

---

## **Tech Stack**

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Material-UI (MUI)](https://mui.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (>= 14.x)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

---

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/silvana-blog-posts-app.git
   cd-silvanablog-app
   ```

2. **Install Dependencies Use npm or Yarn to install the required dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Start the Development Server & Launch the development server locally**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4. **Open in Browser Visit the app in your browser at**
    http://localhost:3000

# **Key Functionality**

## **Home Page**

- Displays a list of blog posts fetched from the JSONPlaceholder API.
- Features a **search bar** to filter posts by their titles.
- Includes a **dropdown menu** to set the number of posts displayed per page (e.g., 5, 10, 20).
- Paginated navigation allows easy access to older or newer posts.

## **Post Details Page**

- Displays the full **title** and **body** of a specific post.
- Lists all **comments** for the post, including the commenter’s **name**, **email**, and **message**.
- Dynamically loads content based on the `id` parameter using Next.js's `getServerSideProps`.

---

# **API Reference**

The app uses the **JSONPlaceholder** fake REST API for demo purposes.

## **Endpoints**

### **Get Posts (Paginated)**

GET jsonplaceholder.typicode.com

- **Parameters**:
  - `page` (number): Current page number.
  - `limit` (number): Number of posts per page.

### **Get Post by ID**

GET 
jsonplaceholder.typicode.com

### **Get Comments for a Post**

GET 
jsonplaceholder.typicode.com


# Project scripts and dependencies 

# **Scripts**

The following scripts are available in the project:

| **Script**          | **Description**                                    |
|---------------------|----------------------------------------------------|
| `npm run dev`       | Starts the development server on `localhost:3000`. |
| `npm run build`     | Builds the project for production.                 |
| `npm run start`     | Starts the production server after the build.      |
| `npm run lint`      | Runs ESLint to lint the codebase.                  |
| `npm run format`    | Formats the code with Prettier (if configured).    |

---

# **Dependencies**

## **Primary Dependencies**

| **Dependency**    | **Purpose**                                   |
|-------------------|-----------------------------------------------|
| `react`           | Core React library.                           |
| `next`            | Server-side rendering and routing.            |
| `typescript`      | Type-safe development.                        |
| `axios`           | HTTP requests for fetching data.              |
| `@mui/material`   | Modern UI component library from Material-UI. |

## **Development Dependencies**

| **Dependency**    | **Purpose**                                    |
|-------------------|------------------------------------------------|
| `@types/node`     | TypeScript definitions for Node.js.            |
| `@types/react`    | TypeScript definitions for React.              |
| `eslint`          | Linting for maintaining code quality.          |


# **Future Improvements**

Here are some ideas to enhance the app:

- **Authentication**: Add user login and authentication features.
- **CRUD Features**: Enable users to create, update, and delete posts and comments.
- **Custom Backend**: Replace JSONPlaceholder with your own backend.
- **Dark Mode**: Add support for dark and light themes.

---

# **Troubleshooting**

## **Common Issues and Fixes**

1. **Dependency Errors**

If you encounter errors after cloning, run:

```bash
npm install
```
2. **404 (Not Found) for Dynamic Routes**

    Ensure the [id].tsx file is located under pages/posts/, and restart the server.

3. **Errors in API Calls**

    Check if the JSONPlaceholder API is up and reachable. Test the endpoints directly in your browser.

## Contributing

Contributions are always welcome! Follow these steps:

1. **Fork the repository.**

2. **Create a new feature branch:**
   ```bash
   git checkout -b feature-name
   ````
3. ***Commit your changes**
    ```bash
    git commit -m "Add a new feature"
    ```
4. **Push to the branch**
    ```bash
    git push origin feature-name
    ```
5. **Open a pull request**

---
## License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute as per the license terms.

---

## Acknowledgments

Thanks to:

- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) for providing a free-to-use fake API.
- [mui.com](https://mui.com) for the fantastic UI components.
- [nextjs.org](https://nextjs.org) for an amazing framework for server-side rendering.

---

Enjoy coding! 🚀 😊

If you'd like me to add or remove anything specific, let me know!

📧 E-mail: silvana.siqueira@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/ssas4)





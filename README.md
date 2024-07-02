### **Assignment_ID: assignment_category_0001**

## **StudyHive - Online Group-Study Platform**

Welcome to StudyHive, a dynamic online group-study platform designed to foster collaborative learning experiences. StudyHive provides a comprehensive environment for creating, managing, and completing assignments, facilitating seamless interaction among users.

### **Live Website**

[StudyHive Live Site](https://b9a11-a9c79.web.app/)

### **Key Features**

- **User Authentication:** Secure user authentication powered by JWT tokens for enhanced security.
- **Responsive Design:** Optimized for all devices, providing a seamless experience across desktop, tablet, and mobile platforms.
- **Dynamic Assignment Creation:** Easily create assignments with detailed information such as title, description, marks, difficulty level, and due date.
- **Assignment Management:** Effortlessly manage assignments with features for creating, updating, viewing, and deleting assignments.
- **Submission and Grading:** Submit assignments and grade pending ones, complete with functionality for giving marks and providing feedback.
- **Theming:** Customizable theme toggling for switching between light and dark themes.
- **Pagination:** Implemented pagination for easier navigation on the assignments page.

### **Optional Features Implemented**

1. **Loading Spinner:** Added a spinner animation to indicate loading states.
2. **Framer Motion Animation:** Utilized the Framer Motion library to implement smooth animations.

### **Getting Started**

To run this project locally, follow these steps:

1. **Clone the Repository:**

```bash
git clone <https://github.com/your-username/studyhive.git>
cd studyhive

```

1. **Install Dependencies:**

Navigate to both the frontend and backend directories and install the necessary dependencies.

For the frontend:

```bash
cd frontend
npm install

```

For the backend:

```bash
cd backend
npm install

```

1. **Set Up Environment Variables:**

Create a `.env` file in the `backend` directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```

Create a `.env` file in the `frontend` directory with the following variables (if applicable):

```
REACT_APP_API_URL=your_api_url

```

1. **Run the Backend Server:**

```bash
cd backend
npm start

```

1. **Run the Frontend Server:**

```bash
cd frontend
npm start

```

Both servers should be running now, and you can access the application at `http://localhost:3000`.

---

Thank you for considering StudyHive for your online group-study needs! For any questions or assistance, please contact us.

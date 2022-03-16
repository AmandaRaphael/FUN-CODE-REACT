import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/contactPage/ContactPage";
import Portfolio from "./routes/myClass/MyClass";
import NavingationBar from "./components/Navigations/NavigationBar";
import Course from "./components/Courses/Course";
import HomePage from "./routes/HomePage/HomePage";
import CourseTitle from "./routes/myClass/CourseTitle.js";
import Courses from "./routes/HomePage/Courses";
import ApplicationForm from "./routes/HomePage/ApplicationForm";
import CourseDetail from "./components/Courses/courseDetail/CourseDetail.js"
function App() {
  return (
    <BrowserRouter>
      <NavingationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/myclass" element={<Portfolio />} />
        <Route path="/course" element={<Course />}>
          <Route path="/course/:courseName" element={<CourseTitle/>} />
        </Route>
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/:courseDetail/:courseCategory" element={<CourseDetail/>}/>
        </Route>
        <Route path="/courses/apply" element={<ApplicationForm />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

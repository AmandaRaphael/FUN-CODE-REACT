
import { useParams } from "react-router-dom";
import styles from "./courseDetail.module.css";
import LoadContent from "./LoadContent.jsx"
 

const CourseDetail = () => {
    const { courseDetail, courseCategory } = useParams();
    
      return (
        <div>
          <h2 className={styles.courseDetailH2}>{courseDetail}</h2>
          <LoadContent
            courseDetail={courseDetail}
            courseCategory={courseCategory}
          />
         
        </div>
      );
    };

export default CourseDetail;

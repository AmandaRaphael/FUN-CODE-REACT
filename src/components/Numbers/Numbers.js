
import styles from "./Numbers.module.css";
import { useNavigate } from "react-router-dom";
const Numbers = ({ digits,userPin,setUserPin }) => {
 
  const navigate= useNavigate() 
  if (userPin.length === 4 && userPin === "1972") {
 navigate(`/course`)
  } else if (userPin.length === 4 && userPin !== "1972") {
    alert("Access denied!");
    setUserPin("")
  }
  
  const buttonHandle = (e) => {
    if (userPin.length < 4) { 
      setUserPin((userPin) => {
        return userPin + e.target.value;
      });
    }
  };

  return (
    <div className={styles.container}>
      {digits.map((ele, i) => (
        <button
          className={styles.button}
          key={i}
          onClick={buttonHandle}
          value={ele}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default Numbers;

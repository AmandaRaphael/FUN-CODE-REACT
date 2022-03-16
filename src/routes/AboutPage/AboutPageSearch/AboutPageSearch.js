import { useContext } from "react";
import Spinner from "../Spinner/Spinner.js";
import MyContext from "../../../context/MyContext";
import style from "./AboutPageSearch.module.css";
import { usePromiseTracker } from "react-promise-tracker";
const AboutPageSearch = () => {
  const { data, searchInput } = useContext(MyContext);
  const { promiseInProgress } = usePromiseTracker();
  const { results } = data;
  const dataList = [];
  const count = Math.min(5, results.data.length);
  for (var i = 0; i <= count; i++) {
    dataList.push(results.data[i]);
  }
  return (
    <div className={style.li}>
      {promiseInProgress === true ? (
        <Spinner />
      ) : results.data.length !== 0 ? (
        dataList.map((ele, i) => {
          return (
            <div>
              <li key={ele.name}>
                {ele.name} <a href={ele.web_pages}>Website</a>{" "}
              </li>
            </div>
          );
        })
      ) : (
        <li key={i}>
          Sorry! No search results for
          {searchInput}
        </li>
      )}
    </div>
  );
};

export default AboutPageSearch;

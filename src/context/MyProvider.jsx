import React from "react";
import { useState, useEffect, useRef } from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
import MyContext from "./MyContext";
import kid from "../images/kid.jpg";
import kidmom from "../images/kidmom.jpg";
import lady from "../images/lady.jpg";
const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });

  const [randomUniversityData, setRandomUniversityData] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput(inputValue[0].toUpperCase() + inputValue.slice(1));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert(
      "Application submitted successfully! Our team will get in touch with you soon!"
    );
  };

  const loadRandomUniversity = async () => {
    const url = `http://universities.hipolabs.com/search?country=${searchInput}&page=${page}`;
    try {
      const results = await axios.get(url);
      setData({ results, loading: false, error: null });
      setRandomUniversityData(results.data);
    } catch (error) {
      setData({ results: null, loading: false, error });
    }
  };

  useEffect(() => {
    trackPromise(loadRandomUniversity());
  }, [searchInput]);

  const images = [
    {
      image: kid,
      description: "specially trained teachers for kids",
      course: "category - 1 : Kids-Fun-coding",
      category: "kid",
    },
    {
      image: kidmom,
      category: "part-time",
      description: "Courses in flexible timings",
      course: "category - 2 : Part-Time(working people)",
    },
    {
      image: lady,
      category: "full-time",
      description: "Free workshops and resume preparation.",
      course: "category - 3 : Full-Time(job Seekers)",
    },
  ];
  return (
    <MyContext.Provider
      value={{
        data,
        searchInput,
        setSearchInput,
        setPage,
        page,
        inputRef,
        submitHandler,
        inputValue,
        setInputValue,
        randomUniversityData,
        images,
        formSubmitHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

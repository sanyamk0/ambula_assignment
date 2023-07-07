import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [items, setItems] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const addItem = (productName, discountPercentage, thumbnail, price) => {
    if (productName.trim() !== "") {
      setItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.name === productName
        );

        if (existingItem) {
          const updatedItems = prevItems.map((item) => {
            if (item.name === productName) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (
                  (item.quantity + 1) *
                  (item.price - (item.discount / 100) * item.price)
                ).toFixed(0),
              };
            }
            return item;
          });

          return updatedItems;
        }

        return [
          ...prevItems,
          {
            id: Date.now(),
            name: productName,
            discount: discountPercentage,
            imgSrc: thumbnail,
            price: price,
            quantity: 1,
            totalPrice: (price - (discountPercentage / 100) * price).toFixed(0),
          },
        ];
      });
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const searchlocation = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      setError(null);
      await axios
        .get(url)
        .then((response) => {
          setdata(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.response.data.message);
          setLoading(false);
        });
      setlocation("");
    }
  };
  return (
    <StateContext.Provider
      value={{
        firstname,
        setFirstName,
        lastname,
        setLastName,
        email,
        setEmail,
        message,
        setMessage,
        submitted,
        handleSubmit,
        items,
        setItems,
        addItem,
        removeItem,
        tasks,
        addTask,
        newTask,
        setNewTask,
        markTaskCompleted,
        removeTask,
        loading,
        setLoading,
        error,
        setError,
        data,
        setdata,
        location,
        setlocation,
        searchlocation,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

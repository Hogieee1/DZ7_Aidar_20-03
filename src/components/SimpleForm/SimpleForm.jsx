import { useState } from "react";
import styles from "./simpleForm.module.css";

function SimpleForm() {
  const [data, setData] = useState({
    name: "",
    surName: "",
    age: 0,
    graduated: false,
  });

  const handleDataChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({
      ...data,
      [e.target.name]: val,
    });
  };

  return (
    <div className={styles.container}>
      <form action="#" className={styles.form}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            onChange={handleDataChange}
            placeholder="Введите имя студента"
          />
        </label>
        <label>
          Фамилия:
          <input
            type="text"
            name="surName"
            onChange={handleDataChange}
            placeholder="Введите фамилию студента"
          />
        </label>
        <label>
          Возраст:
          <input
            type="number"
            name="age"
            onChange={handleDataChange}
            placeholder="Введите возраст студента"
          />
        </label>
        <label>
          Закончил(-а) курсы:
          <input
            type="checkbox"
            name="graduated"
            onChange={handleDataChange}
            placeholder="Введите образование студента"
          />
        </label>
      </form>
      <div className="">
        <p>Имя: {data.name}</p>
        <p>Фамилия: {data.surName}</p>
        <p>Возраст: {data.age}</p>
        <p>Закончил(-а) курсы: {data.graduated ? "да" : "нет"}</p>
      </div>
    </div>
  );
}

export default SimpleForm;

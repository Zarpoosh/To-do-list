import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("لطفا یک وظیفه وارد کنید");
      return;
    }
    onAdd({ text, day, reminder });

    // خالی کردن داخل اینپوت
    settext("");
    setday("");
    setreminder("false");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>وظیفه</label>
        <input
          value={text}
          onChange={(e) => settext(e.target.value)}
          type="text"
          placeholder=" اضافه کردن وظیفه"
        ></input>
      </div>
      <div className="form-control">
        <label>روز</label>
        <input
          value={day}
          onChange={(e) => setday(e.target.value)}
          type="text"
          placeholder=" اضافه کردن روز"
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>اضافه کردن یاد آور</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
          type="checkbox"
        ></input>
      </div>

      <input
        type="submit"
        value="ذخیره کردن وظیفه"
        className="btn btn-block"
      ></input>
    </form>
  );
};

export default AddTask;

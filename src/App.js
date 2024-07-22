import { useState } from 'react';
import './App.css';


function App() {
  // const [FirstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");

  // function ChangeFirstHandler(event){
  // //console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function ChangeLastNameHandler(event){
  // //console.log(event.target.value)
  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState(
    {
      FirstName: "", LastName: "", Email: "", comment: "", isVisible: true, mode: "", favCar: "",
    });
  console.log(formData)
  function ChangeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value
      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("printing entire form data");
    console.log(formData);
  }
  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <input type="text"
          placeholder='First Name'
          name='FirstName'
          //value={formData.FirstName}
          onChange={ChangeHandler}
          value={formData.FirstName}
        />
        <br></br>
        <br></br>


        <input type="text"
          placeholder='Last Name '
          onChange={ChangeHandler}
          name='LastName'
          value={formData.LastName}
        />
        <br>
        </br>
        <br></br>
        <input type="text"
          placeholder='Email'
          onChange={ChangeHandler}
          name='Email'
          value={formData.Email}
        />
        <br></br>
        <br></br>
        <textarea
          placeholder='Enter your comment here '
          name='comment'
          onChange={ChangeHandler}
          value={formData.comment}
        />
        <br></br>
        <br></br>
        <input type='checkbox'
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
          onChange={ChangeHandler}
        />
        <label htmlFor='isVisible'>i am visible</label>
        <br></br>
        <br></br>

        <input type="radio"
          name='mode'
          value={formData.mode}
          id='online-mode'
          onChange={ChangeHandler} />
        <label htmlFor='online-mode'>online mode</label>

        <input type="radio"
          name='mode'
          id='offline-mode'
          onChange={ChangeHandler}
        />
        <label htmlFor='offline-mode'>offline-mode</label>
        <br></br>
        <br></br>

        <label htmlFor='favCar'>list of favorite car collection:</label>
        <select onChange={ChangeHandler}
          name="favCar"
          id='favCar'
          value={formData.favCar}
        >
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Tesla">Tesla</option>
          <option value="thar">thar</option>
          <option value="Defender">Defender</option>
          <option value="ford-mustang">ford-mustang</option>
        </select>
        <br></br>
        <br></br>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;

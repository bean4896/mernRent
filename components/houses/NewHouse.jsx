import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

function NewHouse(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      date: "",
      price: "",
      address: "",
      area: "",
      description: "",
    },
  });
  // useref is a hook that allows us to access the value of an input element
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const priceInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const phoneInputRef = useRef();

  const router = useRouter();

  const [area, setArea] = useState();

  function submitHandler(event) {
    // Prevents the page from reloading
    event.preventDefault();

    // Get the values from the input fields
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredArea = area;
    const enteredAddress = addressInputRef.current.value;

    // spilt the image into an array
    // var pos = enteredImage.lastIndexOf("\\");
    // var filename = enteredImage.substring(pos + 1);

    //final data object
    const houseData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      phone: enteredPhone,
      description: enteredDescription,
      address: enteredAddress,
      price: enteredPrice,
      area: enteredArea,
    };

    // //
    // console.log(houseData, `../public/images/${filename}`);
    // Send this to the backend

    if (
      enteredTitle.trim() &&
      enteredImage.trim() &&
      enteredDate.trim() &&
      enteredDescription.trim() &&
      enteredPrice.trim() &&
      enteredAddress.trim()
    ) {
      console.log(houseData);

      // send data to the backend
      props.onAddHouse(houseData);
      alert("House Added");
      router.push("/");
    } else {
      alert("Please fill out all fields");
    }
  }

  // console.log(formik);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] containerBorder">
        <form>
          <div className="form-control">
            <label htmlFor="title" className="block">
              house Name
            </label>
            <input
              type="text"
              required
              id="title"
              className="form-input"
              ref={titleInputRef}
            />
          </div>

          <div className="form-control">
            <label htmlFor="image" className="block">
              house Image Url
            </label>
            <input
              type="text"
              required
              id="image"
              name="image"
              className="form-input"
              ref={imageInputRef}
            />
          </div>

          <div className="form-control">
            <label htmlFor="date" className="block">
              Avaliable Date
            </label>
            <input
              type="date"
              required
              id="date"
              className="form-input"
              ref={dateInputRef}
            />
          </div>

          <div className="form-control">
            <label htmlFor="phone" className="block">
              Contact Number
            </label>
            <input
              type="tel"
              required
              id="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="form-input"
              ref={phoneInputRef}
            />
          </div>

          <fieldset className="form-control">
            <legend>Area: {area}</legend>
            <div>
              <input
                type="radio"
                id="downtown"
                name="area"
                value="downtown"
                onChange={(e) => setArea(e.target.value)}
              />
              <label className="ml-2" htmlFor="Downtown">
                Downtown
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="purpleline"
                name="area"
                value="purpleline"
                onChange={(e) => setArea(e.target.value)}
              />
              <label className="ml-2" htmlFor="purpleline">
                Purple Line
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="redline"
                name="area"
                value="redline"
                onChange={(e) => setArea(e.target.value)}
              />
              <label className="ml-2" htmlFor="redline">
                Red Line
              </label>
            </div>
          </fieldset>

          <div className="form-control">
            <label htmlFor="Price" className="block">
              Price:
            </label>
            <input
              type="number"
              required
              id="Price"
              className="form-input"
              ref={priceInputRef}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Address" className="block">
              Address:
            </label>
            <input
              type="text"
              required
              id="address"
              className="form-input"
              ref={addressInputRef}
            />
          </div>

          <div className="form-control">
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              id="description"
              required
              rows="5"
              className="form-input"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="form-actions">
            <button
              className="btn"
              type="submit"
              onClick={submitHandler}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add house
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewHouse;

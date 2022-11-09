import { useRef } from "react";

function NewHouse(props) {
  // useref is a hook that allows us to access the value of an input element
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    // Prevents the page from reloading
    event.preventDefault();

    // Get the values from the input fields
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // spilt the image into an array
    var pos = enteredImage.lastIndexOf("\\");
    var filename = enteredImage.substring(pos + 1);

    //final data object
    const houseData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      description: enteredDescription,
    };

    // //
    // console.log(houseData, `../public/images/${filename}`);
    // Send this to the backend
    props.onAddhouse(houseData);
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] containerBorder bg-white">
        <form>
          <div className="form-control">
            <label htmlFor="title" className="block">
              house Title
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
              house Image
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
            <button className='btn' onClick={submitHandler}>Add house</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewHouse;

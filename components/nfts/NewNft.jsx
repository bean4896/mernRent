import { useRef, useState } from "react";
import { useRouter } from "next/router";

function NewNft(props) {
  const router = useRouter();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const nftData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      price: enteredPrice,
    };

    console.log(nftData);
    if (
      enteredTitle.trim() &&
      enteredImage.trim() &&
      enteredDescription.trim() &&
      enteredPrice.trim()
    ) {
      console.log(nftData);
      // send data to the backend
      props.onAddNft(nftData);
      alert("Nft Added");
      router.push("/nft");
    } else {
      alert("Please fill out all fields");
    }
  };


  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full p-10 max-w-[550px] containerBorder">
          <form>
            <div className="form-control">
              <label htmlFor="title" className="block">
                nft Name
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
                NFT Image Url
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
                Add nft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewNft;

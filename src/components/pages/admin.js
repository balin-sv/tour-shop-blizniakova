import React from "react";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  async function addProbuctToFirebase() {
    let imgURL = "";
    const storage = getStorage();
    const storageRef = ref(storage, `images/${productImg.name}`);
    const snapshot = await uploadBytes(storageRef, productImg);
    console.log("Uploaded file! ", snapshot);
    imgURL = await getDownloadURL(snapshot.ref);

    const newObj = {
      category: productCategory,
      name: productName,
      description: productDescription,
      imgURL,
      price: productPrice,
      stock: productQuantity,
    };
    console.log(newObj);

    // for (let prop in newObj) {
    //   if (!newObj[prop]) {
    //     console.log("zapolnite vse polya");
    //     isFull = false;
    //     break;
    //   }
    // }
    const docRef = await addDoc(collection(db, "items"), newObj);
    console.log("Document written with ID: ", docRef.id, docRef);
    setIsAdded(true);
    console.log("sucsses, is ADDED", isAdded);
  }

  useEffect(() => {
    if (isAdded) {
      setProductName("");
      setProductCategory("");
      setProductDescription("");
      setProductQuantity("");
      setProductImg("");
      setProductPrice("");
      setIsAdded("");
      setIsAdded(false);
    } else {
      return;
    }
  }, [isAdded]);

  return (
    <div className="container w-75">
      <form>
        <div className="form-group mt-3">
          <label for="categoryInput" className="mb-1">
            Categoria del producto
          </label>
          <input
            value={productCategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
            type="text"
            className="form-control"
            id="category"
            placeholder="Categoria del producto"
          />
        </div>
        <div className="form-group mt-3">
          <label for="productInput" className="mb-1">
            Nombre del producto
          </label>
          <input
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="productInput"
            placeholder="Nombre del producto"
          />
        </div>
        <div className="form-group mt-3">
          <label for="descriptionInput" className="mb-1">
            Descripcion
          </label>
          <textarea
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            placeholder="Detalle del producto"
            className="form-control"
            id="descriptionInput"
            rows="7"
          ></textarea>
        </div>
        <div className="form-group mt-3 w-75">
          <label for="fileInput" className="mb-1">
            Subir Imagen
          </label>
          <input
            onChange={(e) => {
              setProductImg(e.target.files[0]);
            }}
            type="file"
            className="custom-file-input"
            id="fileInput"
            className="form-control"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="form-group mt-3 w-75">
          <label for="priceInput" className="mb-1">
            Price
          </label>
          <input
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            type="number"
            className="custom-file-input"
            id="priceInput"
            className="form-control"
          />
        </div>
        <div className="form-group mt-3 w-75">
          <label for="quantityInput" className="mb-1">
            Cantidad
          </label>
          <input
            value={productQuantity}
            onChange={(e) => {
              setProductQuantity(e.target.value);
            }}
            placeholder="Cantidad"
            className="form-control"
            type="number"
            id="quantityInput"
            min="0"
            max="100"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addProbuctToFirebase();
          }}
          type="submit"
          className="btn btn-success mt-3 mb-5"
        >
          Agregar producto
        </button>
      </form>
    </div>
  );
};

export default Admin;

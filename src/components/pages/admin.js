import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Utils from "../utils";
import SweetAlert from "react-bootstrap-sweetalert/dist/components/SweetAlert";
const Admin = () => {
  const [isAdded, setIsAdded] = useState(false);
  console.log(isAdded);
  const utils = new Utils();

  async function addImgToStorage(img) {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${img.name}`);
      const snapshot = await uploadBytes(storageRef, img);
      console.log("load img");
      return await getDownloadURL(snapshot.ref);
    } catch (error) {
      console.log(error);
    }
  }

  async function addProbuctToFirebase(newObj) {
    try {
      const docRef = await addDoc(collection(db, "items"), newObj);
      console.log("Document written with ID: ", docRef.id, docRef);
      setIsAdded(true);
      console.log("sucsses, is ADDED", isAdded);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let imgURL = "";
    let errorsToAlert = [];
    const category = utils.checkRadioBtns(e.target.productCategory);
    if (!category) {
      errorsToAlert.push("tienes que elegir categoria!\n");
    }
    const name = e.target.productName.value.trim().toLowerCase();
    if (!name) {
      errorsToAlert.push("escribe nombre del producto!\n");
    } else if (!utils.checkName(name)) {
      errorsToAlert.push(
        "el nombre del producto debe tener solo letras y espacios!\n"
      );
    }
    let description = e.target.productDescription.value.trim();
    if (description === "" || description.length < 5) {
      description = "producto no tiene descripcion todavia";
    }

    const price = +e.target.productPrice.value.trimStart("0");
    const stock = +e.target.productQuantity.value.trimStart("0");

    if (errorsToAlert.length > 0) {
      return alert(errorsToAlert);
    }

    const img = e.target.productImg.value[0];
    if (!img) {
      imgURL =
        "https://htyband.com/wp-content/uploads/2017/06/comingsoon-1.png";
    } else {
      imgURL = await addImgToStorage(img);
    }

    const newObj = {
      category,
      name,
      description,
      imgURL,
      price,
      stock,
    };

    console.log(newObj);

    addProbuctToFirebase(newObj);
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      {isAdded ? (
        <SweetAlert
          success
          title="Item agregado con exito!"
          reload={setTimeout(reload, 2000)}
          onConfirm={() => {
            window.location.reload();
          }}
        ></SweetAlert>
      ) : (
        <div className="container w-75">
          <form onSubmit={onSubmitHandler}>
            <div className="form-group mt-3">
              <label for="productInput" className="mb-1">
                Nombre del producto
              </label>
              <input
                name="productName"
                type="text"
                className="form-control"
                id="productInput"
                placeholder="Nombre del producto"
              />
            </div>
            <div className="form-group mt-3">
              <label class="form-check-label">Categorias</label>
              <br />
              <div class="form-check">
                <input
                  value="tours"
                  class="form-check-input"
                  type="radio"
                  name="productCategory"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Tours
                </label>
              </div>
              <div class="form-check">
                <input
                  value="tickets"
                  class="form-check-input"
                  type="radio"
                  name="productCategory"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Tickets
                </label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label for="descriptionInput" className="mb-1">
                Descripcion
              </label>
              <textarea
                name="productDescription"
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
                name="productImg"
                type="file"
                className="custom-file-input"
                id="fileInput"
                className="form-control"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="form-group mt-3 w-75">
              <label for="priceInput" className="mb-1">
                Precio
              </label>
              <input
                name="productPrice"
                type="number"
                className="custom-file-input"
                id="priceInput"
                className="form-control"
                min="1"
              />
            </div>
            <div className="form-group mt-3 w-75">
              <label for="quantityInput" className="mb-1">
                Cantidad
              </label>
              <input
                name="productQuantity"
                placeholder="Cantidad"
                className="form-control"
                type="number"
                id="quantityInput"
                min="1"
                max="100"
              />
            </div>
            <button type="submit" className="btn btn-success mt-3 mb-5">
              Agregar producto
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Admin;

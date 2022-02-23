import React, { useEffect } from "react";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Utils from "../../utils";
import SweetAlert from "react-bootstrap-sweetalert/dist/components/SweetAlert";

const AdminDashboard = ({ setIsLoged }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const utils = new Utils();

  useEffect(() => {
    if (isAdded) {
      setName("");
      setCategory("");
      setDescription("");
      setImg("");
      setPrice("");
      setStock("");
    } else {
      return;
    }
  }, [isAdded]);

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let imgURL = "";
    let errorsToAlert = [];
    if (!category) {
      errorsToAlert.push("tienes que elegir categoria!\n");
    }
    if (!name) {
      errorsToAlert.push("escribe nombre del producto!\n");
    } else if (!utils.checkName(name)) {
      errorsToAlert.push(
        "el nombre del producto debe tener solo letras y espacios!\n"
      );
    }
    if (description.length < 5) {
      console.log("descr");
      setDescription("producto no tiene descripcion todavia");
      console.log(description);
    }

    if (errorsToAlert.length > 0) {
      return alert(errorsToAlert);
    }
    if (!img) {
      imgURL =
        "https://htyband.com/wp-content/uploads/2017/06/comingsoon-1.png";
    } else {
      console.log(img);
      imgURL = await addImgToStorage(img);
    }

    const newItemRef = doc(collection(db, "items"));
    console.log(description);
    await setDoc(newItemRef, {
      category,
      name,
      description,
      imgURL,
      itemID: newItemRef.id,
      price: +price,
      stock: +stock,
    });
    setIsAdded(true);
  };

  return (
    <>
      {isAdded ? (
        <SweetAlert
          success
          title="Item agregado con exito!"
          reload={setTimeout(() => {
            setIsAdded(false);
          }, 2000)}
          onConfirm={() => {
            setIsAdded(false);
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value="tours"
                  class="form-check-input"
                  type="radio"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Tours
                </label>
              </div>
              <div class="form-check">
                <input
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value="tickets"
                  class="form-check-input"
                  type="radio"
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
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
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
                  console.log(img);
                  setImg(e.target.files[0]);
                  console.log(img.name);
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
                Precio
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value.trimStart("0"));
                }}
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
                onChange={(e) => {
                  setStock(e.target.value.trimStart("0"));
                }}
                placeholder="Cantidad"
                className="form-control"
                type="number"
                id="quantityInput"
                min="1"
                max="100"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success mt-3 mb-5">
                Agregar producto
              </button>
              <button
                className="btn btn-danger mt-3 mb-5"
                onClick={() => {
                  setIsLoged(false);
                  window.location.reload();
                }}
              >
                Terminar la session
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;

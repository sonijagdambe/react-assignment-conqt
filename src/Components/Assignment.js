import React from "react";
import ItemDetails from "./ItemDetails";
import Supplier from "./Supplier";

export default function Assignment() {

    function AddData (){
        debugger;
         var name = document.getElementById('txtName').value;
         var qty = document.getElementById('qty').value;
         var UntPrice = document.getElementById('txtUnit').value;

    }
  return (
    <>
      <div>
        <div>
          <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand">Inventary management system</a>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-secondary" type="submit">
                  Home
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className="w-100 mt-5 ">
          <div className="input-group w-100 align-item-center justify-content-center m-5 p-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Item
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Supllier
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          <h1>Item Details</h1>
        </div>

        <ItemDetails />
        <Supplier />
        <button onClick={AddData} className=" w-100 btn btn-primary">
        Save Changes
        </button>
      </div>
    </>
  );
}

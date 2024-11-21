import React from "react";
import "./style.css";

export default function Supplier() {
  return (
    <>
      <div className="d-flex justify-content-center align-item-center">
        <h1>Supplier Details</h1>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className="w-100  m-3 p-5 border border-dark bg-primary border-radias">
          <dl className="adjustBox">
            <dt className="Form-label">Suplier Name</dt>
            <dd>
              <input type="text" className="form-control" />
            </dd>
            <dt className="Form-label">Company Name</dt>
            <dd>
              <input type="text" className="form-control" />
            </dd>
            <dt className="Form-label">Country</dt>
            <dd>
              <select className="form-select">
                <option value="">India</option>
                <option value="">America</option>
              </select>
            </dd>
            <dt className="Form-label">State</dt>
            <dd>
              <select className="form-select">
                <option value="">Mahararashtra</option>
                <option value="">Telngana</option>
              </select>
            </dd>
            <dt className="Form-label">City</dt>
            <dd>
              <select className="form-select">
                <option value="">Pune</option>
                <option value="">Hydrabad</option>
              </select>
            </dd>
            <dt className="Form-label">Email Address</dt>
            <dd>
              <input type="email" className="form-control" />
            </dd>
            <dt className="Form-label">Email Address 2</dt>
            <dd>
              <input type="email" className="form-control" />
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

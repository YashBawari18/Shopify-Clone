import React from "react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <>
        <div className="container-fluid text-bg-primary mt-4 py-3 d-flex justify-content-center">
          <p className="mt-3">
            <MdCopyright />
            Copyright | All Rights Reserved <br />
            <span className="ms-5 ps-4">Yash Bawari</span>
          </p>
        </div>
      </>
    </div>
  );
}

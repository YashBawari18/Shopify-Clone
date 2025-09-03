import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import Props from "./Props";
import { IoStarSharp } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-warning mt-5 pt-5 pb-5">
        <div className="container-fluid">
          <div className="row align-items-top ms-5 mt-1">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-5 mt-5">
              <p>Starting At $999</p>
              <h1>
                The best notebook <br />
                collection 2024
              </h1>
              <h3>Exclusive offer -10% off this week</h3>
              <button className="btn btn-primary">Shop Now</button>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid w-50 h-100"
                src="https://pngimg.com/d/laptop_PNG101812.png"
                alt="Laptop"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ width: "90%" }}>
        <div className="row">
          <div
            className="col-lg-3 bg-body-secondary mx-auto mt-4"
            style={{ height: "100px", width: "350px" }}
          >
            <h2 className="mt-3">
              <FaTruckFast />
              &nbsp; Free Delivery
            </h2>
            <p className="ms-5">&nbsp; Orders from ll items</p>
          </div>
          <div
            className="col-lg-3 bg-body-secondary mx-auto mt-4"
            style={{ height: "100px", width: "350px" }}
          >
            <h2 className="mt-3">
              <RiRefund2Fill />
              &nbsp; Return & Refund
            </h2>
            <p className="ms-5">&nbsp; Money back guarantee</p>
          </div>
          <div
            className="col-lg-3 bg-body-secondary mx-auto mt-4"
            style={{ height: "100px", width: "350px" }}
          >
            <h2 className="mt-3">
              <CiDiscount1 />
              &nbsp; Member Discount
            </h2>
            <p className="ms-5">&nbsp; on order above $999</p>
          </div>
          <div
            className="col-lg-3 bg-body-secondary mx-auto mt-4"
            style={{ height: "100px", width: "350px" }}
          >
            <h2 className="mt-3">
              <MdSupportAgent />
              &nbsp; Support 24/7
            </h2>
            <p className="ms-5">&nbsp; Contact us 24 hours a day</p>
          </div>
        </div>
      </div>
      <h1 className="ms-5 px-5 mt-4 py-1">Trending Products</h1>
      <div className="container-fluid" style={{ width: "90%" }}>
        <div className="row mx-auto g-3">
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
          <div className="col-lg-3">
            <Props
              image="https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
              title="Essence Maskara Lash Pro"
              description="$8.94"
              catogery="beauty"
            />
          </div>
        </div>
      </div>
    </>
  );
}

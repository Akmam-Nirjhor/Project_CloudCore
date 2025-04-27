import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AddToCart = () => {
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const handleConfirmButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const Product_IDS = form.product_ids.value;
    const Product_Quantity = form.s_product_qty.value;
    const Customer_Name = form.c_name.value;
    const Customer_Phone = form.c_phone.value;
    const Courier = form.courier.value;
    const Address = form.address.value;
    const Advance_Payment = form.advance_payment.value;
    const COD_Amount = form.cod_amount.value;
    const Discount_Amount = form.discount_amount.value;
    const Delivery_Charge = form.delivery_charge.value;

    const orderInformation = {
      Product_IDS,
      Product_Quantity,
      Customer_Name,
      Customer_Phone,
      Courier,
      Address,
      Advance_Payment,
      COD_Amount,
      Discount_Amount,
      Delivery_Charge,
    };

    fetch("https://admin.refabry.com/api/public/order/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmittedOrder(orderInformation);
        console.log(data);
        toast.success("Order placed successfully!", {
          className: "bg-orange-50 text-orange-600 border border-orange-600",
        });
      })
      .catch((error) => {
        console.log("Error submitting booking:", error);
        toast.error("Something went wrong while placing the order!");
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong while booking!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const inputClass =
    "input input-bordered w-full bg-orange-50 placeholder:text-gray-400";

  return (
    <div>
      <NavigationBar />
      <br />
      <br />
      <br />
      <p className=" text-center  text-2xl font-semibold text-orange-600">
        Order Submission Form
      </p>
      <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center gap-10  px-4 py-6">
        {/* FORM */}

        <form
          onSubmit={handleConfirmButton}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl space-y-4"
        >
          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Product IDs
            </p>
            <input
              type="text"
              name="product_ids"
              required
              placeholder="e.g. 1,2"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Product Quantities
            </p>
            <input
              type="text"
              name="s_product_qty"
              required
              placeholder="e.g. 2,1"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Customer Name
            </p>
            <input
              type="text"
              name="c_name"
              required
              placeholder="Full name"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Customer Phone
            </p>
            <input
              type="text"
              name="c_phone"
              required
              placeholder="e.g. 01734252112"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">Courier</p>
            <select name="courier" required className={inputClass}>
              <option value="steadfast">steadfast</option>
            </select>
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Delivery Address
            </p>
            <input
              type="text"
              name="address"
              required
              placeholder="Full address"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Advance Payment
            </p>
            <input
              type="text"
              name="advance_payment"
              required
              placeholder="e.g. 500"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              COD Amount
            </p>
            <input
              type="text"
              name="cod_amount"
              required
              placeholder="e.g. 1250"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Discount Amount
            </p>
            <input
              type="text"
              name="discount_amount"
              placeholder="optional"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-1 font-semibold text-sm text-gray-700">
              Delivery Charge
            </p>
            <input
              type="text"
              name="delivery_charge"
              required
              placeholder="e.g. 80"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="btn bg-orange-400 hover:bg-orange-600 w-full mt-4"
          >
            Place Order
          </button>
        </form>

        {/* ORDER SUMMARY */}
        {submittedOrder && (
          <div className="bg-orange-50 border-1 p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-orange-600">
              Order Summary
            </h2>
            <p>
              <strong>Product IDs:</strong> {submittedOrder.Product_IDS}
            </p>
            <p>
              <strong>Quantities:</strong> {submittedOrder.Product_Quantity}
            </p>
            <p>
              <strong>Name:</strong> {submittedOrder.Customer_Name}
            </p>
            <p>
              <strong>Phone:</strong> {submittedOrder.Customer_Phone}
            </p>
            <p>
              <strong>Courier:</strong> {submittedOrder.Courier}
            </p>
            <p>
              <strong>Address:</strong> {submittedOrder.Address}
            </p>
            <p>
              <strong>Advance:</strong> ৳{submittedOrder.Advance_Payment}
            </p>
            <p>
              <strong>COD:</strong> ৳{submittedOrder.COD_Amount}
            </p>
            <p>
              <strong>Discount:</strong> ৳{submittedOrder.Discount_Amount}
            </p>
            <p>
              <strong>Delivery Charge:</strong> ৳
              {submittedOrder.Delivery_Charge}
            </p>

            {/* Add to Cart Button */}
            <Link to="/">
              <button className="btn bg-orange-400 mt-6 w-full">
                Continue Purchase
              </button>
            </Link>
          </div>
        )}
      </div>

      <ToastContainer />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddToCart;

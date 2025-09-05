import React from "react";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrdersByEmailQuery(currentUser?.email, {
    skip: !currentUser?.email,
  });
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error geting orders data</div>;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div>
              <h3>OrderId:{order?._id}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;

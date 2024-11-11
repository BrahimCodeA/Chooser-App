import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Orders({ token }: { token: string }) {
  const orders = useSelector((state: RootState) => state.order.orders);

  return (
    <div>
      <h2>Liste des commandes</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Produit ID: {order.productId}</p>
          <p>Quantité: {order.quantity}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

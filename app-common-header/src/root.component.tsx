import { Navigate } from "@plansul/util-ui";
import { useStore } from "@plansul/util-state";
export default function Root(props) {
  const store = useStore();
  return (
    <section>
      <h1>HEADER</h1>
      <h3>Counter: {store.counter}</h3>
      <nav>
        <Navigate path="/account">Account</Navigate>
        <Navigate path="/cart">Cart</Navigate>
        <Navigate path="/product">Product</Navigate>
        <Navigate path="/shop">Shop</Navigate>
      </nav>
    </section>
  );
}

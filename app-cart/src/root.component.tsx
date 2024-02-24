import { useStore } from "@plansul/util-state";
export default function Root(props) {
  const store = useStore();
  return (
    <section>
      <h1>Cart</h1>
      <button onClick={store.increment}>Increment</button>
      <button onClick={store.decrement}>Decrement</button>
    </section>
  );
}

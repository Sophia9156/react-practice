import Counter from "components/Counter";
import { decreaseAsync, increaseAsync } from "modules/counter2";
import { useDispatch, useSelector } from "react-redux";

export default function Redux() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  }

  return (
    <section>
      <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </section>
  )
}
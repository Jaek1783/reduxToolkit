import { useSelector } from "react-redux";
const CountNum = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};
export default CountNum;

import css from "./Feedback.module.css";
const Feedback = () => {
  return (
    <>
      <ul className={css.li}>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
        <li>Total</li>
        <li>Positive:</li>
      </ul>
    </>
  );
};

export default Feedback;

import { React } from "react";

// function Greet(props) {
//   const { name, greetingText } = props;
//   return (
//     <div class="border-blue-1">
//       <h3>
//         {greetingText}, {name}
//       </h3>
//       <p>I am functional component with default export 1</p>
//     </div>
//   );
// }
const Greet = (props) => {
  const { name, greetingText } = props;
  return (
    <div>
      <h3>
        {greetingText}, {name}
      </h3>
      <p>I am functional component with default export 2</p>
      {props.children}
    </div>
  );
};
export default Greet;

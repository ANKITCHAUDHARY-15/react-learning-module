import { React } from "react";

// export const GreetV2 = (props) => {
//   const { name, greetingText } = props;
//   return (
//     <div class="border-blue-1">
//       <h3>
//         {greetingText}, {name}
//       </h3>
//       <p>I am functional component with Name export 2</p>
//     </div>
//   );
// };
export function GreetV2(props) {
  const { name, greetingText, isShowComponentDesc } = props;
  console.log(props);
  return (
    <div>
      <h3>
        {greetingText}, {name}
      </h3>
      {isShowComponentDesc && (
        <p>I am functional component with Name export 1</p>
      )}
      {props.children}
    </div>
  );
}

import React from "react";

/**
 * 1. if else
 * 2. element variables
 * 3. Ternary connditions operator
 * 4. short circut operator
 */

export default function ConditionalRendering(props) {
  // // 1
  //   if (props.Flag) {
  //     return <div>if else rendering if block</div>;
  //   } else {
  //     return <div>if else rendering else block</div>;
  //   }

  // // 2
  //   var msg;
  //   if (props.Flag) {
  //     msg = <div>element variables rendering if block</div>;
  //   } else {
  //     msg = <div>element variables rendering else block</div>;
  //   }
  //   return msg;

  //   //3
  //   return (
  //     <div>
  //       {props.Flag ? (
  //         <div>Ternary connditions operator rendering true block</div>
  //       ) : (
  //         <div>Ternary connditions operator rendering false block</div>
  //       )}
  //     </div>
  //   );

  // 4
  return (
    <div>
      {props.Flag && <div>short circut operator rendering true value</div>}
    </div>
  );
}

import * as React from "react"
import Svg, { Path } from "react-native-svg";

const ArrowDown = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth={props.strokeWidt} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowDown;

/*import * as React from "react"
import Svg, { Path } from "react-native-svg";

const ArrowLeft = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowLeft;
*/


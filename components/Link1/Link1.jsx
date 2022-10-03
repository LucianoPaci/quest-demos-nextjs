/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

 
const Link2 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Link3 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `0px`,  
}));
 
function Link1(props) {
  return (
    <Link2 className={props.className} >
      <Link3 href="#" underline="always"  >Link</Link3>
    </Link2>
  );
}

export default Link1;
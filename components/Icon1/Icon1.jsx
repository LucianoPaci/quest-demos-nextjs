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

import { SvgIcon } from '@mui/material';
import StarFilled1 from 'public/assets/images/_StarFilled.svg';
import { styled } from '@mui/material/styles';

 
const Icon2 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Icon3 = styled(SvgIcon)(({ theme }) =>({  
  color: theme.palette["Action"]["Active (54p)"],  
  margin: `0px`,  
}));
 
function Icon1(props) {
  return (
    <Icon2 className={props.className} >
      <Icon3    fontSize = { "medium"}  component = { StarFilled1}/>
    </Icon2>
  );
}

export default Icon1;
import React, { useState, useEffect } from "react";

import { Button} from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse'

import UserService from "../services/user.service";
import keyboard from "../static/img/keyboardImg.png";

import Mac1 from "../static/img/instrPics/1.1Mac.png";
import Mac2 from "../static/img/instrPics/2Mac.png";
import Mac3 from "../static/img/instrPics/3Mac.png"; 
import Mac4 from "../static/img/instrPics/4Mac.png"; 
import Mac5 from "../static/img/instrPics/5Mac.png"; 
import Mac6 from "../static/img/instrPics/6Mac.png";
import W1 from "../static/img/instrPics/w1.png"; 
import W2 from "../static/img/instrPics/w2.png"; 
import W3 from "../static/img/instrPics/w3.png"; 
import W4 from "../static/img/instrPics/w4.png"; 
import W5 from "../static/img/instrPics/w5.png"; 
import W6 from "../static/img/instrPics/w6.png"; 
import W7 from "../static/img/instrPics/w7.png"; 
import W8 from "../static/img/instrPics/w8.png"; 
import W9 from "../static/img/instrPics/w9.png"; 
import W10 from "../static/img/instrPics/w10.png"; 
import W11 from "../static/img/instrPics/w11.png"; 


const Instructions = () => {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div>
    <div class="home_h">
      <p>Enabling Korean Keyboard</p>
    </div>
      <p>
          Before you begin to practice your Korean typing you must enable a Korean Keyboard on your computer! <br/>
          If your computer does not already have this function, follow the steps below to set it up!
      </p>
      <div class="bod">
      <img src={keyboard} width="50%" height="50%"/>
      </div>
      <div>
          <ul class="l1">
              <li>Windows and Mac operating systems offer a Korean Keyboard option. </li>
              <li>This switches the output of your keyboard to Korean symbols, as if you are typing directly from a Korean keyboard. </li>
              <li>This option can be enabled on your computer. </li>
              <li>Once enabled, you can easily switch between English and Korean keyboard. </li>
          </ul>
      </div>
      <div class="bod"> 
        <p> Click on the current operating system you have running on your computer to find the instructions for enabling Korean on your computer.</p>
      </div>
      <div class="row">
        <Button onClick={() => setOpen(!open)} className="box-button btn btn-primary btn-block" aria-expanded={open}>
        Windows 10
        </Button>
        <Collapse in={open}>
          <div class="inst">
            <ol class="inst">
              <li>
                <div>
                  Select the Windowns icon located in the bottom left corner of your screen. 
                  <ul>
                    <li>From the list, select the gear icon. </li>
                  </ul>              
                </div>
                <div>
                  <img src={W1} width="20%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  In the settings window, locate and select the "Time & Language" icon.
                </div>
                <div>
                  <img src={W2} width="30%" class="imgs"/>
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                   From the left panel, select "Language".
                </div>
                <div>
                  <img src={W3} width="30%" class="imgs"/>
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  On the right panel, locate the "Preferred languages" section.
                  <ul>
                    <li>In order to add Korean as a langauge, select the "+" button</li>    
                  </ul>
                </div>
                <div>
                <img src={W4} width="30%" class="imgs"/>
                </div>
              </li>
              <li>
                <div>
                  A pop up box will appear. Use the search box to enter "Korean"
                  <ul>
                    <li>The "Korean" language option should appear in the box below </li>
                    <li>Select this option, and then click next at the bottom of the box</li>
                  </ul>
                </div>
                <div>
                  <img src={W5} width="30%" class="imgs"/>
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  The next section shows some features which can be installed with the langauge.
                  <ul>
                    <li>It is very unlikely that any of the options listed you will required. </li>
                    <li>For this reason, uncheck all boxes.</li>
                    <li>Once you have unchecked all the boxes, select the "install" button located at the bottom of the panel</li>
                  </ul>
                  </div>
                  <div>
                    <img src={W6} width="30%" class="imgs"/>
                  </div>
                  <div><br/></div>
              </li>
              <li>
                <div>
                  Once completed, now under the "Preferred languages" heading, Korean should appear under your defaul/original language.
                  <ul>
                    <li>The first (top) language listed under the heading is your default language.</li>
                    <li>Korean should be listed second (not default). If you do wish to change this, you must manually drag it into the top position </li>
                  </ul>
                  </div>
                  <div>
                    <img src={W7} width="30%" class="imgs"/>
                  </div>
                  <div><br/></div>
              </li>
              <li>
                <div>
                  If all steps have been followed correctly, a new icon should appear in your taskbar next to the clock.
                <div>
                  <img src={W7} width="30%" class="imgs"/>
                </div>
                <ul>
                  <li>By selecting this icon, a list will appear which will allow you to switch back and forth from your preferred langauge and Korean.</li>
                  <li>In order to actually switch your keyboard to output Korean, you must firstly click "Korean" from the list.</li>
                </ul>
                </div>
                <div>
                  <img src={W9} width="30%" class="imgs"/>
                </div>
                <ul>
                  <li>Once selected, another icon will appear on your taskbar.</li>
                  <li>This icon indicates which language your keyboard is outputting.</li>
                  <li>"A" icon indicates that the English keyboard is engaged. (A first letter of the alphabet)</li>
                </ul>
                <div>
                  <img src={W10} width="30%" class="imgs"/>
                </div>                 
                <ul>
                  <li>To switch to Korean, simply click the "A" icon. This will switch it to the Korean symbol "가". </li>
                  <li>When the icon is "가", this indicates that your keyboard is in Korean mode and hence you can type Korean.</li>
                </ul>
                <div>
                  <img src={W11} width="30%" class="imgs"/>
                </div> 
                <div><br/></div>
              </li> 
            </ol>
          </div>
        </Collapse>
       
        <Button onClick={() => setOpen1(!open1)} className="box-button btn btn-primary btn-block" aria-expanded={open1}>
        MacOS
        </Button>
        <Collapse in={open1}>
            <div class="inst">
              <ol class="inst">
              <li>
                <div>
                  On the top left hand corner of your screen, click the apple icon to show the drop-down list.
                <ul>
                  <li>From the list, select "System Preferences". </li>
                </ul>              
                </div>
                <div>
                  <img src={Mac1} width="20%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  A "System Preferences" box will appear. In the window, locate "keyboard" and select the icon.
                </div>
                <div>
                  <img src={Mac2} width="30%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  In the keyboard window, select "Input Sources". You should see the keyboard in which you currently have activated.
                  <ul>
                    <li>Locate and click the "+" icon in the bottom left of the window.</li>
                    <li>The "-" located next to the "+" allows you to remove any of the chosen keyboards.</li>
                  </ul>
                </div>
                <div>
                  <img src={Mac3} width="30%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  A new box will appear. Using the search box in the left panel, type "Korean" (can also scroll to find it).
                  <ul>
                    <li>Once located, different keyboard options will appear on the right. Select the "2-Set Korean" option.</li>
                    <li>Click the "Add" button in the bottom right of the pop up window to add the Korean keyboard to your current active keyboards.</li>
                  </ul>
                </div>
                <div>
                  <img src={Mac4} width="30%" class="imgs"/>  
                </div>
                <div>
                  <ul>
                    <li>You should now be able to see both languages appear in the left panel of the window</li>
                    <li>Ensure that "Show Input menu in menu bar" is ticked for all languages.</li>
                  </ul>
                </div>
                <div>
                  <img src={Mac5} width="30%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
              <li>
                <div>
                  If you have completed all steps correctly, there will now be an extra icon on the right hand side of your menu bar. 
                  <ul>
                    <li>The icon represents the keyboard you currently have activated.</li>
                    <li>For example, if you are currently using the Australian keyboard an Australian flag will appear in your menu bar.</li>
                    <li>By selecting this icon you are able to switch between the keyboards you have enabled in the previous steps.</li>
                    <li>To switch to a Korean keyboard, select the current icon, and from the drop-down list select "2-Set Korean"</li>
                    <li>Once selected, all output from your keyboard will be Korean symbols.</li>
                  </ul>
                </div>
                <div>
                  <img src={Mac6} width="30%" class="imgs"/>  
                </div>
                <div><br/></div>
              </li>
            </ol>
            </div>
        </Collapse>
      </div>
  </div>
  );
};

export default Instructions;

class customTemplateComponent{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='bookingSeatTemplate'){
          return parseHTML('<div class="plane" id="plane">\
        <h3 style="text-align: center;">Select Seat</h3>\
      <div class="fuselage">\
      </div>\
	  <div class="cockpit2">\
   <img style="max-width: 348px;" src="https://demo.kore.ai/demo/IVR/b2-res.png">\
  </div>\
      <ol class="cabin fuselage">\
        <li class="row row--1">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="1A" id="1A" />\
              <label for="1A">1A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" id="1B" />\
              <label for="1B">1B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="1C" id="1C" />\
              <label for="1C">1C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" disabled id="1D" />\
              <label for="1D">1D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="1E" id="1E" />\
              <label for="1E">1E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="1F" id="1F" />\
              <label for="1F">1F</label>\
            </li>\
          </ol>\
        </li>\
        <li class="row row--2">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" disabled name="selectSeat" class="seatval" value="2A" id="2A" />\
              <label for="2A">2A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="2B" id="2B" />\
              <label for="2B">2B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="2C" id="2C" />\
              <label for="2C">2C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="2D" id="2D" />\
              <label for="2D">2D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="2E" id="2E" />\
              <label for="2E">2E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="2F" id="2F" />\
              <label for="2F">2F</label>\
            </li>\
          </ol>\
        </li>\
        <li class="row row--3">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" disabled name="selectSeat" class="seatval" value="3A" id="3A" />\
              <label for="3A">3A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="3B" id="3B" />\
              <label for="3B">3B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="3C" id="3C" />\
              <label for="3C">3C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="3D" id="3D" />\
              <label for="3D">3D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="3E" id="3E" />\
              <label for="3E">3E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value=3F"" id="3F" />\
              <label for="3F">3F</label>\
            </li>\
          </ol>\
        </li>\
        <li class="row row--4">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="4A" id="4A" />\
              <label for="4A">4A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="4B" id="4B" />\
              <label for="4B">4B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" disabled name="selectSeat" class="seatval" value="4C" id="4C" />\
              <label for="4C">4C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="4D" id="4D" />\
              <label for="4D">4D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="4E" id="4E" />\
              <label for="4E">4E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="4F" disabled id="4F" />\
              <label for="4F">4F</label>\
            </li>\
          </ol>\
        </li>\
        <li class="row row--5">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="5A" id="5A" />\
              <label for="5A">5A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="5B" id="5B" />\
              <label for="5B">5B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" disabled id="5C" name="selectSeat" class="seatval" value="5C" />\
              <label for="5C">5C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" id="5D" name="selectSeat" class="seatval" value="5D" />\
              <label for="5D">5D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="5E" id="5E" />\
              <label for="5E">5E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="5F" id="5F" />\
              <label for="5F">5F</label>\
            </li>\
          </ol>\
        </li>\
        <li class="row row--6">\
          <ol class="seats" type="A">\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="6A" id="6A" />\
              <label for="6A">6A</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="B" disabled id="6B" />\
              <label for="6B">6B</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="6C" id="6C" />\
              <label for="6C">6C</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="6D" id="6D" />\
              <label for="6D">6D</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="6E" id="6E" />\
              <label for="6E">6E</label>\
            </li>\
            <li class="seat">\
              <input type="checkbox" name="selectSeat" class="seatval" value="6F" id="6F" />\
              <label for="6F">6F</label>\
            </li>\
          </ol>\
        </li>\
		<li class="row row--7">\
      <ol class="seats" type="A">\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7A" id="7A" />\
          <label for="7A">7A</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7B" id="7B" />\
          <label for="7B">7B</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7C" id="7C" />\
          <label for="7C">7C</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7D" id="7D" />\
          <label for="7D">7D</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7E"  disabled id="7E" />\
          <label for="7E">7E</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="7F" id="7F" />\
          <label for="7F">7F</label>\
        </li>\
      </ol>\
    </li>\
    <li class="row row--8">\
      <ol class="seats" type="A">\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="8A" id="8A" />\
          <label for="8A">8A</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="8B" id="8B" />\
          <label for="8B">8B</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="8C" id="8C" />\
          <label for="8C">8C</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="8D" id="8D" />\
          <label for="8D">8D</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" type="checkbox" value="8E" id="8E" />\
          <label for="8E">8E</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="8F" id="8F" />\
          <label for="8F">8F</label>\
        </li>\
      </ol>\
    </li>\
    <li class="row row--9">\
      <ol class="seats" type="A">\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9A" disabled id="9A" />\
          <label for="9A">9A</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9B" id="9B" />\
          <label for="9B">9B</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9C" id="9C" />\
          <label for="9C">9C</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9S" id="9D" />\
          <label for="9D">9D</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9E" id="9E" />\
          <label for="9E">9E</label>\
        </li>\
        <li class="seat">\
          <input name="selectSeat" class="seatval" class="seatval" type="checkbox" value="9F" id="9F" />\
          <label for="9F">9F</label>\
        </li>\
      </ol>\
    </li>\
          </ol>\
        </li>\
          </ol>\
        </li>\
      </ol>\
	   <button type="button" class="inbutton" onclick="seatSubmit();" id="seatSubmit">Submit</button>\
      <div class="fuselage">\
      </div>\
    </div>');      
      }else{
          return false;
      }
  } 
}

/***seat booking template events start here***/
function seatSubmit() {
	var checkedValue = null; 
	const selectedSeats = [];
selectedSeats.length = 0;	 
var inputElements = document.getElementsByClassName('seatval');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
		   selectedSeats.push(checkedValue);
           break;
      }
}
	var seatsArray = JSON.stringify(selectedSeats);
        $('.typing-text-area').text(seatsArray);
		var string="Selected: "+selectedSeats.join(", ");
		
	chatWindowInstance.sendMessage(string,selectedSeats);
	//chatInitialize.sendMessage($('.chatInputBox'), string);
}

/***seat booking template events end here***/
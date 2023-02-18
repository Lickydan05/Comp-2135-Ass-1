
                      var slider = document.getElementById("temp_slider"); 
                      var output = document.getElementById("temp_value"); 
                      output.innerHTML = (slider.value/2 + "°C"); 

                      slider.oninput = function() { 
                      output.innerHTML = this.value/2 + "°C"; // Temp slider values
                    };

                   function submitFunction() { 
                      let postal_code = /[A-Z]\d[A-Z]\s\d[A-Z]\d/ 
                      let x = document.getElementById("frm1");
                      var text = "";
                      let i = 2;
                      text += x.elements[i].value;

                      if (text.match(postal_code)) { //checks postal code
                      document.getElementById("demo").innerHTML = "Your Postal Code is " + text + ", correct?";
                     } else if (!text.match(postal_code)){
                      document.getElementById("demo").innerHTML = "Please enter a valid Postal Code 'X0X 0X0'";
                     };
                    };

                  function resetForm() { //resets form
                      document.getElementById("frm1").reset();
                      output.innerHTML = (slider.value/2 + "°C");
                    };

                  function time() { //time + date
                    new Date().toLocaleTimeString();
                    setTimeout("time()",1000);
                    document.getElementById("Date").innerHTML = Date();
                  }


             /*       var User = "User"

                    var Usertest = prompt("Enter your Username")
                    if (User != Usertest) {
                      alert("Wrong Username, Try again");
                      location.reload(true);
                    }

                    var Password = "Pass"

                    var Passtest = prompt("Enter your Password")
                    if (Password != Passtest) {
                      alert("Wrong Password, Try again");
                      location.reload(true);
                    } */

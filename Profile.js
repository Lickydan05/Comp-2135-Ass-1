                  function resetForm() { //resets form
                      document.getElementById("frm1").reset();
                    };

                  function time() { //setting time
                    new Date().toLocaleTimeString();
                    setTimeout("time()",1000);
                    document.getElementById("Date").innerHTML = Date();
                  }

                  function submitFunction() { //getting different form values
                    let email_check = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+/;
                    let x = document.getElementById("frm1");
                    var text = "";
                    let i = 2;
                    text += x.elements[i].value;
                    var passlength = "";
                    let b = 4;
                    passlength += x.elements[b].value;
                    let c = 5 
                    var confirm_pass = "";
                    confirm_pass += x.elements[c].value;
                    var passleng = /(.*[a-z].*)(.*[A-Z].*)(.*\d.*)/
                    console.log(confirm_pass);
                    
                    if (passlength.length >= 8 && passlength.match(passleng) && passlength == confirm_pass) { //checks that the passwords meet the requirements
                    } else {
                      document.getElementById("demo2").innerHTML = "Your password needs to be minimum 8 characters with 1 lower and 1 upper-case character.";
                    }

                    if (text.match(email_check)) { //Checks the email
                      document.getElementById("demo1").innerHTML = "Your Email is " + text + ", correct?";
                     } else if (!text.match(email_check)){
                      document.getElementById("demo1").innerHTML = "Please enter a valid Email Address 'XXX@XXXX.XXX'";
                     };

                      var elements = document.getElementById("frm1").elements; //Make the whitespaces unable to be submitted
                      for(var a = 0 ; a < elements.length ; a++){
                          
                      }
                  
                      document.getElementById("demo3").innerHTML = item
                    };
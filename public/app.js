function controller() {

    //bulb will be off by default
    //check the class name of the bulb
    //if bulb is on, then turn off
    if(document.getElementById("bulb").className === "bulb-on"){

        document.getElementById("bulb").className = "bulb-off";
    }
    //if bulb is off, then turn on 
    else{

        document.getElementById("bulb").className = "bulb-on";
    }

    
  }
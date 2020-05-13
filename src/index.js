const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class Convert extends LIBRARIES.Skill{
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    //Convert yards to meters
    this.Main.Manager.addAction("convertYardToMeter.number", function(_intent, _socket){
      if(_intent.Variables.number !== undefined){
        if(!isNaN(parseFloat(_intent.Variables.number))){
          
          let number = _intent.Variables.number / 3.281;
          number = number.toPrecision(4);
          _intent.Variables.value = number;

          _intent.answer(_socket);
        }
      }
    });

    //Convert meters to yards
    this.Main.Manager.addAction("convertMeterToYard.number", function(_intent, _socket){
      if(_intent.Variables.number !== undefined){
        if(!isNaN(parseFloat(_intent.Variables.number))){
          
          let number = _intent.Variables.number * 3.281;
          number = number.toPrecision(4);
          _intent.Variables.value = number;

          _intent.answer(_socket);
        }
      }
    });
  }
}

module.exports = Convert;

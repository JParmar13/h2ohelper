function Convert() {
    var weightToConvert = document.getElementById("UserWeight").value;
    var waterIntake = document.getElementById("WaterIntake").value;
    var convertedWeight = weightToConvert * 0.033; //how much water they should drink according to their body weight in Litres

    //water intake as a percentage of converted weight



    var hydrationLevel = parseFloat(waterIntake + convertedWeight); //not required
    var hydrate = parseFloat(waterIntake / convertedWeight * 100); //the %number of the users hydration
    hydrate = hydrate.toFixed(2);

    //if statement to see what band the hydration percentage is in
    //assign appropriate response to their hydration percentage


    document.getElementById("test").innerHTML = hydrate; //2 dp of the users % hydration
    document.getElementById("ConsumeThisAmount").innerHTML = convertedWeight;
    document.getElementById("Hydration").innerHTML = hydrationLevel;
}
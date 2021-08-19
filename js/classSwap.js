function classSwap(classID) {

    var column1 = document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");

    document.getElementById("startString").innerHTML = "";


    if(classID == "druid"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-druid-balance.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-druid-feral-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-druid-restoration.jpg')";

        buildDruid();
    }
    else if(classID == "hunter"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-beast-mastery.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-marksmanship.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-survival.jpg')";
    }
    else if(classID == "mage"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-mage-arcane.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-mage-fire.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-mage-frost.jpg')";
    }
    else if(classID == "paladin"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-holy.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-protection.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-retribution.jpg')";
    }
    else if(classID == "priest"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-priest-discipline.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-priest-holy.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-priest-shadow.jpg')";
    }
    else if(classID == "rogue"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-assassination.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-subtlety.jpg')";
    }
    else if(classID == "shaman"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-elemental.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-enhancement.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-restoration.jpg')";
    }
    else if(classID == "warlock"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-affliction.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-demonology.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-destruction.jpg')";
    }
    else if(classID == "warrior"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-arms.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-fury.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-protection.jpg')";
    }
    else{
        alert("Something went wrong");
    }

}

function buildDruid(){
    var spec1row1col1 = document.getElementById("spec1row1col1icon");
    var spec1row1col2 = document.getElementById("spec1row1col2icon");
    var spec1row1col3 = document.getElementById("spec1row1col3icon");
    var spec1row1col4 = document.getElementById("spec1row1col4icon");

    //Build spec1row1col1 Improved Wrath
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_wrath.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";

    //Build spec1row1col2 Nature's Grasp
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_grasp.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";

    //Build spec1row1col3 Improves Nature's Grasp
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_wrath.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";

    //Build spec1row1col4 EMPTY
}

function buildHunter(){

}

function buildMage(){

}

function buildPaladin(){

}

function buildPriest(){

}

function buildRogue(){

}

function buildShaman(){

}

function buildWarlock(){

}

function buildWarrior(){

}
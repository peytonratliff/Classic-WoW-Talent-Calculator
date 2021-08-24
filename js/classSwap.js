const arrowArray = [];

function classSwap(classID) {

    var column1 = document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");
    var specBar = document.getElementById("specBar"); //This variable is used when a class is built (EX; buildDruid()), probably should be moved out of that

    document.getElementById("startString").innerHTML = "";

    column1.style.border = "1px solid gray";
    column2.style.border = "1px solid gray";
    column3.style.border = "1px solid gray";


    //The swap of the background should probably be moved to the respective class functions
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

        buildHunter();
    }
    else if(classID == "mage"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-mage-arcane.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-mage-fire.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-mage-frost.jpg')";
        
        buildMage();
    }
    else if(classID == "paladin"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-holy.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-protection.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-retribution.jpg')";

        buildPaladin();
    }
    else if(classID == "priest"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-priest-discipline.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-priest-holy.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-priest-shadow.jpg')";

        buildPriest();
    }
    else if(classID == "rogue"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-assassination.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-subtlety.jpg')";

        buildRogue();
    }
    else if(classID == "shaman"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-elemental.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-enhancement.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-restoration.jpg')";

        buildShaman();
    }
    else if(classID == "warlock"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-affliction.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-demonology.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-destruction.jpg')";

        buildWarlock();
    }
    else if(classID == "warrior"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-arms.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-fury.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-protection.jpg')";

        buildWarrior();
    }
    else{
        alert("Something went wrong");
    }

}

function buildDruid(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() funtion clears the arrows from the previous selection

    var spec1row1col1 = document.getElementById("spec1row1col1icon");
    var spec1row1col2 = document.getElementById("spec1row1col2icon");
    var spec1row1col3 = document.getElementById("spec1row1col3icon");
    var spec1row1col4 = document.getElementById("spec1row1col4icon");
    var spec1row2col1 = document.getElementById("spec1row2col1icon");
    var spec1row2col2 = document.getElementById("spec1row2col2icon");
    var spec1row2col3 = document.getElementById("spec1row2col3icon");
    var spec1row2col4 = document.getElementById("spec1row1col4icon");

    //Build specBar
    var spec1icon = document.getElementById("spec1icon");
    var spec2icon = document.getElementById("spec2icon");
    var spec3icon = document.getElementById("spec3icon");
    var spec1name = document.getElementById("spec1name");
    var spec2name = document.getElementById("spec2name");
    var spec3name = document.getElementById("spec3name");
    specBar.style.display = "block";
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/balance.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "center center";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/feralcombat.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "center center";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/restoration.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "center center";
    spec1name.innerHTML = "Balance";
    spec2name.innerHTML = "Feral Combat";
    spec3name.innerHTML = "Restoration";


    //Build spec1row1col1 Improved Wrath
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_wrath.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";
    spec1row1col1.style.filter = "grayscale(100%)";

    //Build spec1row1col2 Nature's Grasp
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_grasp.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Build arrow
        var spec1row1col2div = document.createElement('div');
        spec1row1col2div.style.maxHeight = "0px";
        spec1row1col2div.style.position = "absolute";
        spec1row1col2div.id = "spec1row1col2div";
        document.getElementById('spec1row1col2').appendChild(spec1row1col2div);
        var spec1row1col2arrow = document.createElement('img');
        spec1row1col2arrow.src = '../images/table elements/arrow_direct_right.png';
        document.getElementById('spec1row1col2div').appendChild(spec1row1col2arrow);
        spec1row1col2arrow.style.position = "relative";
        spec1row1col2arrow.style.top = "-31px"
        spec1row1col2arrow.style.left = "43px"
        spec1row1col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row1col2div, spec1row1col2arrow);
        console.log(arrowArray);

    //Build spec1row1col3 Improved Nature's Grasp
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_natures_grasp.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Improved Entangling Roots
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_entangling_roots.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";

    //Build spec1row2col2 Improved Moonfire
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_moonfire.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";

    //Build spec1row2col3 Natural Weapons
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/druid/talents/natural_weapons.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";

    //Build spec1row2col4 Natural Shapeshifter
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/druid/talents/natural_shapeshifter.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
}

function buildHunter(){
    removeArrows();

    var spec1row1col1 = document.getElementById("spec1row1col1icon");
    var spec1row1col2 = document.getElementById("spec1row1col2icon");
    var spec1row1col3 = document.getElementById("spec1row1col3icon");
    var spec1row1col4 = document.getElementById("spec1row1col4icon");

    //Build specBar
    var spec1icon = document.getElementById("spec1icon");
    var spec2icon = document.getElementById("spec2icon");
    var spec3icon = document.getElementById("spec3icon");
    var spec1name = document.getElementById("spec1name");
    var spec2name = document.getElementById("spec2name");
    var spec3name = document.getElementById("spec3name");
    specBar.style.display = "block";
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/beastmastery.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "center center";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/marksmanship.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "center center";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/survival.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "center center";
    spec1name.innerHTML = "Beast Mastery";
    spec2name.innerHTML = "Marksmanship";
    spec3name.innerHTML = "Survival";


    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Improved Aspect of the Hawk
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_aspect_of_the_hawk.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";

    //Build spec1row1col3 Improves Nature's Grasp
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/endurance_training.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";
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

function removeArrows(){
    for (let i = arrowArray.length; i > 0; i--){
        arrowArray[0].remove();
        arrowArray.shift()
    }
}
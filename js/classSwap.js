const arrowArray = [];

function classSwap(classID) {

    var column1 = document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");
    var specBar = document.getElementById("specBar"); //This variable is used when a class is built (EX; buildDruid()), probably should be moved out of that


    column1.style.border = "1px solid gray";
    column2.style.border = "1px solid gray";
    column3.style.border = "1px solid gray";


    //The swap of the background should probably be moved to the respective class functions
    if(classID == "druid"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-druid-balance.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-druid-feral-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-druid-restoration.jpg')";
        document.getElementById("startString").innerHTML = "Druid";
        buildDruid();
    }
    else if(classID == "hunter"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-beast-mastery.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-marksmanship.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-survival.jpg')";
        document.getElementById("startString").innerHTML = "Hunter";
        buildHunter();
    }
    else if(classID == "mage"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-mage-arcane.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-mage-fire.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-mage-frost.jpg')";
        document.getElementById("startString").innerHTML = "Mage";
        buildMage();
    }
    else if(classID == "paladin"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-holy.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-protection.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-retribution.jpg')";
        document.getElementById("startString").innerHTML = "Paladin";
        buildPaladin();
    }
    else if(classID == "priest"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-priest-discipline.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-priest-holy.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-priest-shadow.jpg')";
        document.getElementById("startString").innerHTML = "Priest";
        buildPriest();
    }
    else if(classID == "rogue"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-assassination.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-subtlety.jpg')";
        document.getElementById("startString").innerHTML = "Rogue";
        buildRogue();
    }
    else if(classID == "shaman"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-elemental.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-enhancement.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-restoration.jpg')";
        document.getElementById("startString").innerHTML = "Shaman";
        buildShaman();
    }
    else if(classID == "warlock"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-affliction.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-demonology.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-destruction.jpg')";
        document.getElementById("startString").innerHTML = "Warlock";
        buildWarlock();
    }
    else if(classID == "warrior"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-arms.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-fury.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-protection.jpg')";
        document.getElementById("startString").innerHTML = "Warrior";
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
    var spec1row2col4 = document.getElementById("spec1row2col4icon");
    var spec1row3col1 = document.getElementById("spec1row3col1icon");
    var spec1row3col2 = document.getElementById("spec1row3col2icon");
    var spec1row3col3 = document.getElementById("spec1row3col3icon");
    var spec1row3col4 = document.getElementById("spec1row3col4icon");
    var spec1row4col1 = document.getElementById("spec1row4col1icon");
    var spec1row4col2 = document.getElementById("spec1row4col2icon");
    var spec1row4col3 = document.getElementById("spec1row4col3icon");
    var spec1row4col4 = document.getElementById("spec1row4col4icon");
    var spec1row5col1 = document.getElementById("spec1row5col1icon");
    var spec1row5col2 = document.getElementById("spec1row5col2icon");
    var spec1row5col3 = document.getElementById("spec1row5col3icon");
    var spec1row5col4 = document.getElementById("spec1row5col4icon");
    var spec1row6col1 = document.getElementById("spec1row6col1icon");
    var spec1row6col2 = document.getElementById("spec1row6col2icon");
    var spec1row6col3 = document.getElementById("spec1row6col3icon");
    var spec1row6col4 = document.getElementById("spec1row6col4icon");
    var spec1row7col1 = document.getElementById("spec1row7col1icon");
    var spec1row7col2 = document.getElementById("spec1row7col2icon");
    var spec1row7col3 = document.getElementById("spec1row7col3icon");
    var spec1row7col4 = document.getElementById("spec1row7col4icon");

    var spec2row1col1 = document.getElementById("spec2row1col1icon");
    var spec2row1col2 = document.getElementById("spec2row1col2icon");
    var spec2row1col3 = document.getElementById("spec2row1col3icon");
    var spec2row1col4 = document.getElementById("spec2row1col4icon");
    var spec2row2col1 = document.getElementById("spec2row2col1icon");
    var spec2row2col2 = document.getElementById("spec2row2col2icon");
    var spec2row2col3 = document.getElementById("spec2row2col3icon");
    var spec2row2col4 = document.getElementById("spec2row2col4icon");
    var spec2row3col1 = document.getElementById("spec2row3col1icon");
    var spec2row3col2 = document.getElementById("spec2row3col2icon");
    var spec2row3col3 = document.getElementById("spec2row3col3icon");
    var spec2row3col4 = document.getElementById("spec2row3col4icon");
    var spec2row4col1 = document.getElementById("spec2row4col1icon");
    var spec2row4col2 = document.getElementById("spec2row4col2icon");
    var spec2row4col3 = document.getElementById("spec2row4col3icon");
    var spec2row4col4 = document.getElementById("spec2row4col4icon");
    var spec2row5col1 = document.getElementById("spec2row5col1icon");
    var spec2row5col2 = document.getElementById("spec2row5col2icon");
    var spec2row5col3 = document.getElementById("spec2row5col3icon");
    var spec2row5col4 = document.getElementById("spec2row5col4icon");
    var spec2row6col1 = document.getElementById("spec2row6col1icon");
    var spec2row6col2 = document.getElementById("spec2row6col2icon");
    var spec2row6col3 = document.getElementById("spec2row6col3icon");
    var spec2row6col4 = document.getElementById("spec2row6col4icon");
    var spec2row7col1 = document.getElementById("spec2row7col1icon");
    var spec2row7col2 = document.getElementById("spec2row7col2icon");
    var spec2row7col3 = document.getElementById("spec2row7col3icon");
    var spec2row7col4 = document.getElementById("spec2row7col4icon");

    var spec3row1col1 = document.getElementById("spec3row1col1icon");
    var spec3row1col2 = document.getElementById("spec3row1col2icon");
    var spec3row1col3 = document.getElementById("spec3row1col3icon");
    var spec3row1col4 = document.getElementById("spec3row1col4icon");
    var spec3row2col1 = document.getElementById("spec3row2col1icon");
    var spec3row2col2 = document.getElementById("spec3row2col2icon");
    var spec3row2col3 = document.getElementById("spec3row2col3icon");
    var spec3row2col4 = document.getElementById("spec3row2col4icon");
    var spec3row3col1 = document.getElementById("spec3row3col1icon");
    var spec3row3col2 = document.getElementById("spec3row3col2icon");
    var spec3row3col3 = document.getElementById("spec3row3col3icon");
    var spec3row3col4 = document.getElementById("spec3row3col4icon");
    var spec3row4col1 = document.getElementById("spec3row4col1icon");
    var spec3row4col2 = document.getElementById("spec3row4col2icon");
    var spec3row4col3 = document.getElementById("spec3row4col3icon");
    var spec3row4col4 = document.getElementById("spec3row4col4icon");
    var spec3row5col1 = document.getElementById("spec3row5col1icon");
    var spec3row5col2 = document.getElementById("spec3row5col2icon");
    var spec3row5col3 = document.getElementById("spec3row5col3icon");
    var spec3row5col4 = document.getElementById("spec3row5col4icon");
    var spec3row6col1 = document.getElementById("spec3row6col1icon");
    var spec3row6col2 = document.getElementById("spec3row6col2icon");
    var spec3row6col3 = document.getElementById("spec3row6col3icon");
    var spec3row6col4 = document.getElementById("spec3row6col4icon");
    var spec3row7col1 = document.getElementById("spec3row7col1icon");
    var spec3row7col2 = document.getElementById("spec3row7col2icon");
    var spec3row7col3 = document.getElementById("spec3row7col3icon");
    var spec3row7col4 = document.getElementById("spec3row7col4icon");


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
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/feralcombat.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "center center";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/restoration.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "center center";
        spec3icon.style.width = "44px";
        spec3icon.style.height = "44px";
    spec1name.innerHTML = "Balance";
    spec2name.innerHTML = "Feral Combat";
    spec3name.innerHTML = "Restoration";

    //Build spec1 Balance
    //Build spec1row1col1 Improved Wrath
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_wrath.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";
    spec1row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_wrath');

    //Build spec1row1col2 Nature's Grasp
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_grasp.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'natures_grasp');
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
        spec1row1col2arrow.style.top = "-31px";
        spec1row1col2arrow.style.left = "43px";
        spec1row1col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row1col2div, spec1row1col2arrow);

    //Build spec1row1col3 Improved Nature's Grasp
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_natures_grasp.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_natures_grasp');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Improved Entangling Roots
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_entangling_roots.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_entangling_roots');

    //Build spec1row2col2 Improved Moonfire
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_moonfire.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Build arrow
        var spec1row2col2div = document.createElement('div');
        spec1row2col2div.style.maxHeight = "0px";
        spec1row2col2div.style.position = "absolute";
        spec1row2col2div.id = "spec1row2col2div";
        document.getElementById('spec1row2col2').appendChild(spec1row2col2div);
        var spec1row2col2arrow = document.createElement('img');
        spec1row2col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row2col2div').appendChild(spec1row2col2arrow);
        spec1row2col2arrow.style.position = "relative";
        spec1row2col2arrow.style.top = "-3px";
        spec1row2col2arrow.style.left = "19px";
        spec1row2col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row2col2div, spec1row2col2arrow);

    //Build spec1row2col3 Natural Weapons
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/druid/talents/natural_weapons.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Build arrow
        var spec1row2col3div = document.createElement('div');
        spec1row2col3div.style.maxHeight = "0px";
        spec1row2col3div.style.position = "absolute";
        spec1row2col3div.id = "spec1row2col3div";
        document.getElementById('spec1row2col3').appendChild(spec1row2col3div);
        var spec1row2col3arrow = document.createElement('img');
        spec1row2col3arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row2col3div').appendChild(spec1row2col3arrow);
        spec1row2col3arrow.style.position = "relative";
        spec1row2col3arrow.style.top = "-3px";
        spec1row2col3arrow.style.left = "19px";
        spec1row2col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row2col3div, spec1row2col3arrow);
    

    //Build spec1row2col4 Natural Shapeshifter
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/druid/talents/natural_shapeshifter.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";

    //Build spec1row3col1 Improved Thorns
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_thorns.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";

    //Build spec1row3col2 EMPTY
    spec1row3col2.style.display = "none";

    //Build spec1row3col3 Omen of Clarity
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/druid/talents/omen_of_clarity.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";

    //Build spec1row3col4 Nature's Reach
    spec1row3col4.style.display = "block";
    spec1row3col4.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_reach.jpg')";
    spec1row3col4.style.backgroundRepeat = "no-repeat";
    spec1row3col4.style.backgroundSize = "34px 34px";
    spec1row3col4.style.backgroundPosition = "center center";
    spec1row3col4.style.filter = "grayscale(100%)";

    //Build spec1row4col1 EMPTY
    spec1row4col1.style.display = "none";

    //Build spec1row4col2 Vengeance
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/druid/talents/vengeance.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";

    //Build spec1row4col3 Improved Starfire
    spec1row4col3.style.display = "block";
    spec1row4col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_starfire.jpg')";
    spec1row4col3.style.backgroundRepeat = "no-repeat";
    spec1row4col3.style.backgroundSize = "34px 34px";
    spec1row4col3.style.backgroundPosition = "center center";
    spec1row4col3.style.filter = "grayscale(100%)";

    //Build spec1row4col4 EMPTY
    spec1row4col4.style.display = "none";

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Nature's Grace
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_grace.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div, spec1row5col2arrow);

    //Build spec1row5col3 Moonglow
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/druid/talents/moonglow.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 Moonfury
    spec1row6col2.style.display = "block";
    spec1row6col2.style.backgroundImage = "url('../images/spell icons/druid/talents/moonfury.jpg')";
    spec1row6col2.style.backgroundRepeat = "no-repeat";
    spec1row6col2.style.backgroundSize = "34px 34px";
    spec1row6col2.style.backgroundPosition = "center center";
    spec1row6col2.style.filter = "grayscale(100%)";

    //Build spec1row6col3 EMPTY
    spec1row6col3.style.display = "none";

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Moonkin Form
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/druid/talents/moonkin_form.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Feral Combat
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none";

    //Build spec2row1col2 Ferocity
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/druid/talents/ferocity.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";

    //Build spec2row1col2 Feral Aggression
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/druid/talents/feral_aggression.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 Feral Instinct
    spec2row2col1.style.display = "block";
    spec2row2col1.style.backgroundImage = "url('../images/spell icons/druid/talents/feral_instinct.jpg')";
    spec2row2col1.style.backgroundRepeat = "no-repeat";
    spec2row2col1.style.backgroundSize = "34px 34px";
    spec2row2col1.style.backgroundPosition = "center center";
    spec2row2col1.style.filter = "grayscale(100%)";

    //Build spec2row2col2 Brutal Impact
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/druid/talents/brutal_impact.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";

    //Build spec2row2col3 Thick Hide
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/druid/talents/thick_hide.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Feline Swiftness
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/druid/talents/feline_swiftness.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";

    //Build spec2row3col2 Feral Charge
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/druid/talents/feral_charge.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";

    //Build spec2row3col3 Sharpened Claws
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/druid/talents/sharpened_claws.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Build arrow
        var spec2row3col3div = document.createElement('div');
        spec2row3col3div.style.maxHeight = "0px";
        spec2row3col3div.style.position = "absolute";
        spec2row3col3div.id = "spec2row3col3div";
        document.getElementById('spec2row3col3').appendChild(spec2row3col3div);
        var spec2row3col3arrow = document.createElement('img');
        spec2row3col3arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec2row3col3div').appendChild(spec2row3col3arrow);
        spec2row3col3arrow.style.position = "relative";
        spec2row3col3arrow.style.top = "-3px";
        spec2row3col3arrow.style.left = "19px";
        spec2row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row3col3div, spec2row3col3arrow);
        //Build arrow
        var spec2row3col3div2 = document.createElement('div');
        spec2row3col3div2.style.maxHeight = "0px";
        spec2row3col3div2.style.position = "absolute";
        spec2row3col3div2.id = "spec2row3col3div2";
        document.getElementById('spec2row3col3').appendChild(spec2row3col3div2);
        var spec2row3col3arrow2 = document.createElement('img');
        spec2row3col3arrow2.src = '../images/table elements/arrow_right_down.png';
        document.getElementById('spec2row3col3div2').appendChild(spec2row3col3arrow2);
        spec2row3col3arrow2.style.position = "relative";
        spec2row3col3arrow2.style.top = "-26px";
        spec2row3col3arrow2.style.left = "43px";
        spec2row3col3arrow2.style.zIndex += 1;
        arrowArray.push(spec2row3col3div2, spec2row3col3arrow2);

    //Build spec2row3col4 EMPTY
    spec2row3col4.style.display = "none";

    //Build spec2row4col1 Improved Shred
    spec2row4col1.style.display = "block";
    spec2row4col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_shred.jpg')";
    spec2row4col1.style.backgroundRepeat = "no-repeat";
    spec2row4col1.style.backgroundSize = "34px 34px";
    spec2row4col1.style.backgroundPosition = "center center";
    spec2row4col1.style.filter = "grayscale(100%)";

    //Build spec2row4col2 Predatory Strikes
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/druid/talents/predatory_strikes.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Build arrow
        var spec2row4col2div = document.createElement('div');
        spec2row4col2div.style.maxHeight = "0px";
        spec2row4col2div.style.position = "absolute";
        spec2row4col2div.id = "spec2row4col2div";
        document.getElementById('spec2row4col2').appendChild(spec2row4col2div);
        var spec2row4col2arrow = document.createElement('img');
        spec2row4col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row4col2div').appendChild(spec2row4col2arrow);
        spec2row4col2arrow.style.position = "relative";
        spec2row4col2arrow.style.top = "-3px";
        spec2row4col2arrow.style.left = "19px";
        spec2row4col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row4col2div, spec2row4col2arrow);

    //Build spec2row4col3 Blood Frenzy
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/druid/talents/blood_frenzy.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";

    //Build spec2row4col4 Primal Fury
    spec2row4col4.style.display = "block";
    spec2row4col4.style.backgroundImage = "url('../images/spell icons/druid/talents/primal_fury.jpg')";
    spec2row4col4.style.backgroundRepeat = "no-repeat";
    spec2row4col4.style.backgroundSize = "34px 34px";
    spec2row4col4.style.backgroundPosition = "center center";
    spec2row4col4.style.filter = "grayscale(100%)";

    //Build spec2row5col1 Savage Fury
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/druid/talents/savage_fury.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";

    //Build spec2row5col2 EMPTY
    spec2row5col2.style.display = "none";

    //Build spec2row5col3 Faerie Fire
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/druid/talents/faerie_fire.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";

    //Build spec2row5col4 EMPTY
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 Savage Fury
    spec2row6col2.style.display = "block";
    spec2row6col2.style.backgroundImage = "url('../images/spell icons/druid/talents/heart_of_the_wild.jpg')";
    spec2row6col2.style.backgroundRepeat = "no-repeat";
    spec2row6col2.style.backgroundSize = "34px 34px";
    spec2row6col2.style.backgroundPosition = "center center";
    spec2row6col2.style.filter = "grayscale(100%)";

    //Build spec2row6col3 EMPTY
    spec2row6col3.style.display = "none";

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 EMPTY
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/druid/talents/leader_of_the_pack.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Restoration
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Improved Mark of the Wild
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_mark_of_the_wild.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";

    //Build spec3row1col2 Furor
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/druid/talents/furor.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Healing Touch
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_healing_touch.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Build arrow
        var spec3row2col1div = document.createElement('div');
        spec3row2col1div.style.maxHeight = "0px";
        spec3row2col1div.style.position = "absolute";
        spec3row2col1div.id = "spec3row2col1div";
        document.getElementById('spec3row2col1').appendChild(spec3row2col1div);
        var spec3row2col1arrow = document.createElement('img');
        spec3row2col1arrow.src = '../images/table elements/arrow_skip2_down.png';
        document.getElementById('spec3row2col1div').appendChild(spec3row2col1arrow);
        spec3row2col1arrow.style.position = "relative";
        spec3row2col1arrow.style.top = "-3px";
        spec3row2col1arrow.style.left = "19px";
        spec3row2col1arrow.style.zIndex += 1;
        arrowArray.push(spec3row2col1div, spec3row2col1arrow);

    //Build spec3row2col2 Nature's Focus
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_focus.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";

    //Build spec3row2col3 Improved Enrage
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_enrage.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 EMPTY
    spec3row3col1.style.display = "none";

    //Build spec3row3col2 Reflection
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/druid/talents/reflection.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";

    //Build spec3row3col3 Inesct Swarm
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/druid/talents/insect_swarm.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Build arrow
        var spec3row3col3div = document.createElement('div');
        spec3row3col3div.style.maxHeight = "0px";
        spec3row3col3div.style.position = "absolute";
        spec3row3col3div.id = "spec3row3col3div";
        document.getElementById('spec3row3col3').appendChild(spec3row3col3div);
        var spec3row3col3arrow = document.createElement('img');
        spec3row3col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row3col3div').appendChild(spec3row3col3arrow);
        spec3row3col3arrow.style.position = "relative";
        spec3row3col3arrow.style.top = "-3px";
        spec3row3col3arrow.style.left = "19px";
        spec3row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec3row3col3div, spec3row3col3arrow);

    //Build spec3row3col4 Subtlety
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/druid/talents/subtlety.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";

    //Build spec3row4col1 EMPTY
    spec3row4col1.style.display = "none";

    //Build spec3row4col2 Tranquil Spirit
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/druid/talents/tranquil_spirit.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Build arrow
        var spec3row4col2div = document.createElement('div');
        spec3row4col2div.style.maxHeight = "0px";
        spec3row4col2div.style.position = "absolute";
        spec3row4col2div.id = "spec3row4col2div";
        document.getElementById('spec3row4col2').appendChild(spec3row4col2div);
        var spec3row4col2arrow = document.createElement('img');
        spec3row4col2arrow.src = '../images/table elements/arrow_skip2_down.png';
        document.getElementById('spec3row4col2div').appendChild(spec3row4col2arrow);
        spec3row4col2arrow.style.position = "relative";
        spec3row4col2arrow.style.top = "-3px";
        spec3row4col2arrow.style.left = "19px";
        spec3row4col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row4col2div, spec3row4col2arrow);

    //Build spec3row4col3 EMPTY
    spec3row4col3.style.display = "none";

    //Build spec3row4col4 Improved Rejuvination
    spec3row4col4.style.display = "block";
    spec3row4col4.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_rejuvination.jpg')";
    spec3row4col4.style.backgroundRepeat = "no-repeat";
    spec3row4col4.style.backgroundSize = "34px 34px";
    spec3row4col4.style.backgroundPosition = "center center";
    spec3row4col4.style.filter = "grayscale(100%)";

    //Build spec3row5col1 Nature's Swiftness
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/druid/talents/natures_swiftness.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";

    //Build spec3row5col2 EMPTY
    spec3row5col2.style.display = "none";

    //Build spec3row5col3 Gift of Nature
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/druid/talents/gift_of_nature.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";

    //Build spec3row5col4 Improved Tranquility
    spec3row5col4.style.display = "block";
    spec3row5col4.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_tranquility.jpg')";
    spec3row5col4.style.backgroundRepeat = "no-repeat";
    spec3row5col4.style.backgroundSize = "34px 34px";
    spec3row5col4.style.backgroundPosition = "center center";
    spec3row5col4.style.filter = "grayscale(100%)";

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Improved Regrowth
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/druid/talents/improved_regrowth.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Swiftmend
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/druid/talents/swiftmend.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";
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
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/marksmanship.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "center center";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/survival.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "center center";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
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
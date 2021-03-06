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
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/feralcombat.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/druid/restoration.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
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

    calculator("druid");
}

function buildHunter(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/beastmastery.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/marksmanship.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/hunter/survival.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Beast Mastery";
    spec2name.innerHTML = "Marksmanship";
    spec3name.innerHTML = "Survival";

    //Build spec1 Beast Mastery
    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Improved Aspect of the Hawk
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_aspect_of_the_hawk.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_aspect_of_the_hawk');

    //Build spec1row1col3 Improves Nature's Grasp
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/endurance_training.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_natures_grasp');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Improved Eyes of the Beast
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_eyes_of_the_beast.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_eyes_of_the_beast');

    //Build spec1row2col2 Improved Aspect of the Monkey
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_aspect_of_the_monkey.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_aspect_of_the_monkey');

    //Build spec1row2col3 Thick Hide
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/thick_hide.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'thick_hide');

    //Build spec1row2col4 Improved Revive Pet
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_revive_pet.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_revive_pet');

    //Build spec1row3col1 Pathfinding
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/pathfinding.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'pathfinding');

    //Build spec1row3col2 Bestial Swiftness
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/bestial_swiftness.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'bestial_swiftness');
    
    //Build spec1row3col3 Unleashed Fury
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/unleashed_fury.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'unleashed_fury');
    
    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 EMPTY
    spec1row4col1.style.display = "none";

    //Build spec1row4col2 Improved Mend Pet
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_mend_pet.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_mend_pet');

    //Build spec1row4col3 Ferocity
    spec1row4col3.style.display = "block";
    spec1row4col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/ferocity.jpg')";
    spec1row4col3.style.backgroundRepeat = "no-repeat";
    spec1row4col3.style.backgroundSize = "34px 34px";
    spec1row4col3.style.backgroundPosition = "center center";
    spec1row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col3icon');
        addSpellId.setAttribute('data-spellId', 'ferocity');
        //Build arrow
        var spec1row4col3div = document.createElement('div');
        spec1row4col3div.style.maxHeight = "0px";
        spec1row4col3div.style.position = "absolute";
        spec1row4col3div.id = "spec1row4col3div";
        document.getElementById('spec1row4col3').appendChild(spec1row4col3div);
        var spec1row4col3arrow = document.createElement('img');
        spec1row4col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row4col3div').appendChild(spec1row4col3arrow);
        spec1row4col3arrow.style.position = "relative";
        spec1row4col3arrow.style.top = "-3px";
        spec1row4col3arrow.style.left = "19px";
        spec1row4col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row4col3div, spec1row4col3arrow);

    //Build spec1row4col4 EMPTY
    spec1row4col4.style.display = "none";

    //Build spec1row5col1 Spirit Bond
    spec1row5col1.style.display = "block";
    spec1row5col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/spirit_bond.jpg')";
    spec1row5col1.style.backgroundRepeat = "no-repeat";
    spec1row5col1.style.backgroundSize = "34px 34px";
    spec1row5col1.style.backgroundPosition = "center center";
    spec1row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col1icon');
        addSpellId.setAttribute('data-spellId', 'spirit_bond');

    //Build spec1row5col2 Intimidation
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/intimidation.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'intimidation');
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div, spec1row5col2arrow);
    
    //Build spec1row5col3 EMPTY
    spec1row5col3.style.display = "none";

    //Build spec1row5col4 Bestial Discipline
    spec1row5col4.style.display = "block";
    spec1row5col4.style.backgroundImage = "url('../images/spell icons/hunter/talents/bestial_discipline.jpg')";
    spec1row5col4.style.backgroundRepeat = "no-repeat";
    spec1row5col4.style.backgroundSize = "34px 34px";
    spec1row5col4.style.backgroundPosition = "center center";
    spec1row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col4icon');
        addSpellId.setAttribute('data-spellId', 'bestial_discipline');

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 EMPTY
    spec1row6col2.style.display = "none";

    //Build spec1row6col3 Frenzy
    spec1row6col3.style.display = "block";
    spec1row6col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/frenzy.jpg')";
    spec1row6col3.style.backgroundRepeat = "no-repeat";
    spec1row6col3.style.backgroundSize = "34px 34px";
    spec1row6col3.style.backgroundPosition = "center center";
    spec1row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col3icon');
        addSpellId.setAttribute('data-spellId', 'frenzy');

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Bestial Wrath
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/bestial_wrath.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'bestial_wrath');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Marksmanship
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none";

    //Build spec2row1col2 Improved Concussive Shot
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_concussive_shot.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_concussive_shot');

    //Build spec2row1col3 Efficiency
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/efficiency.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'efficiency');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 EMPTY
    spec2row2col1.style.display = "none";

    //Build spec2row2col2 Improved Hunter's Mark
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_hunters_mark.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_hunters_mark');

    //Build spec2row2col3 Lethal Shots
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/lethal_shots.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'lethal_shots');
        //Build arrow
        var spec2row2col3div = document.createElement('div');
        spec2row2col3div.style.maxHeight = "0px";
        spec2row2col3div.style.position = "absolute";
        spec2row2col3div.id = "spec2row2col3div";
        document.getElementById('spec2row2col3').appendChild(spec2row2col3div);
        var spec2row2col3arrow = document.createElement('img');
        spec2row2col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row2col3div').appendChild(spec2row2col3arrow);
        spec2row2col3arrow.style.position = "relative";
        spec2row2col3arrow.style.top = "-3px";
        spec2row2col3arrow.style.left = "19px";
        spec2row2col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row2col3div, spec2row2col3arrow);

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Aimed Shot
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/aimed_shot.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'aimed_shot');

    //Build spec2row3col2 Improved Arcane Shot
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_arcane_shot.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_arcane_shot');

    //Build spec2row3col3 EMPTY
    spec2row3col3.style.display = "none";

    //Build spec2row3col4 Hawk Eye
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/hunter/talents/hawk_eye.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'hawk_eye');

    //Build spec2row4col1 EMPTY
    spec2row4col1.style.display = "none";

    //Build spec2row4col2 Improved Serpent Sting
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_serpent_sting.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_serpent_sting');

    //Build spec2row4col3 Mortal Shots
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/mortal_shots.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'mortal_shots');

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Scatter Shot
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/scatter_shot.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col1icon');
        addSpellId.setAttribute('data-spellId', 'scatter_shot');

    //Build spec2row5col2 Barrage
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/barrage.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'barrage');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 Improved Scorpid Sting
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_scorpid_sting.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_scorpid_sting');

    //Build spec2row5col4 EMPTY
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Ranged Weapon Specialization
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/ranged_weapon_specialization.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'ranged_weapon_specialization');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Trueshot Aura
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/trueshot_aura.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'trueshot_aura');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Survival
    //Build spec3row1col1 Monster Slaying
    spec3row1col1.style.display = "block";
    spec3row1col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/monster_slaying.jpg')";
    spec3row1col1.style.backgroundRepeat = "no-repeat";
    spec3row1col1.style.backgroundSize = "34px 34px";
    spec3row1col1.style.backgroundPosition = "center center";
    spec3row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col1icon');
        addSpellId.setAttribute('data-spellId', 'monster_slaying');
    
    //Build spec3row1col2 Humanoid Slaying
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/humanoid_slaying.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'humanoid_slaying');

    //Build spec3row1col3 Deflection
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/deflection.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'deflection');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Entrapment
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/entrapment.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'entrapment');

    //Build spec3row2col2 Savage Strikes
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/savage_strikes.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'savage_strikes');

    //Build spec3row2col3 Improved Wing Clip
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_wing_clip.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_wing_clip');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Clever Traps
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/clever_traps.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'clever_traps');
    
    //Build spec3row3col2 Survivalist
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/survivalist.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'survivalist');

    //Build spec3row3col3 Deterrence
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/deterrence.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'deterrence');
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

    //Build spec3row3col4 EMPTY
    spec3row3col4.style.display = "none";

    //Build spec3row4col1 Trap Mastery
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/hunter/talents/trap_mastery.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col1icon');
        addSpellId.setAttribute('data-spellId', 'trap_mastery');

    //Build spec3row4col2 Surefooted
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/surefooted.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'surefooted');

    //Build spec3row4col3 EMPTY
    spec3row4col3.style.display = "none";

    //Build spec3row4col4 Improved Feign Death
    spec3row4col4.style.display = "block";
    spec3row4col4.style.backgroundImage = "url('../images/spell icons/hunter/talents/improved_feign_death.jpg')";
    spec3row4col4.style.backgroundRepeat = "no-repeat";
    spec3row4col4.style.backgroundSize = "34px 34px";
    spec3row4col4.style.backgroundPosition = "center center";
    spec3row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_feign_death');

    //Build spec3row5col1 EMPTY
    spec3row5col1.style.display = "none";

    //Build spec3row5col2 Killer Instinct
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/killer_instinct.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'killer_instinct');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-3px";
        spec3row5col2arrow.style.left = "19px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div, spec3row5col2arrow);

    //Build spec3row5col3 Counterattack
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/counterattack.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'counterattack');

    //Build spec3row5col4 EMPTY
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Lightning Reflexes
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/hunter/talents/lightning_reflexes.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'lightning_reflexes');

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Wyvern Sting
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/hunter/talents/wyvern_sting.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'wyvern_sting');

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";

    calculator("hunter");
}

function buildMage(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/mage/arcane.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/mage/fire.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/mage/frost.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Arcane";
    spec2name.innerHTML = "Fire";
    spec3name.innerHTML = "Frost";

    //Build spec1 Arcane
    //Build spec1row1col1 Arcane Subtlety
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_subtlety.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";
    spec1row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col1icon');
        addSpellId.setAttribute('data-spellId', 'arcane_subtlety');

    //Build spec1row1col2 Arcane Focus
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_focus.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'arcane_focus');

    //Build spec1row1col3 Improved Arcane Missles
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_arcane_missles.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_arcane_missles');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Wand Specialization
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/mage/talents/wand_specialization.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'wand_specialization');

    //Build spec1row2col2 Magic Absorbtion
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/mage/talents/magic_absorbtion.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'magic_absorbtion');
    
    //Build spec1row2col3 Arcane Concentration
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_concentration.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'arcane_concentration');

    //Build spec1row2col4 EMPTY
    spec1row2col4.style.display = "none";

    //Build spec1row3col1 Magic Attunement
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/mage/talents/magic_attunement.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'magic_attunement');

    //Build spec1row3col2 Improved Arcane Explosion
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_arcane_explosion.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_arcane_explosion');

    //Build spec1row3col3 Arcane Resilience
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_resilience.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'arcane_resilience');
        //Build arrow
        var spec1row3col3div = document.createElement('div');
        spec1row3col3div.style.maxHeight = "0px";
        spec1row3col3div.style.position = "absolute";
        spec1row3col3div.id = "spec1row3col3div";
        document.getElementById('spec1row3col3').appendChild(spec1row3col3div);
        var spec1row3col3arrow = document.createElement('img');
        spec1row3col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row3col3div').appendChild(spec1row3col3arrow);
        spec1row3col3arrow.style.position = "relative";
        spec1row3col3arrow.style.top = "-3px";
        spec1row3col3arrow.style.left = "19px";
        spec1row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row3col3div, spec1row3col3arrow);

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 Improved Mana Shield
    spec1row4col1.style.display = "block";
    spec1row4col1.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_mana_shield.jpg')";
    spec1row4col1.style.backgroundRepeat = "no-repeat";
    spec1row4col1.style.backgroundSize = "34px 34px";
    spec1row4col1.style.backgroundPosition = "center center";
    spec1row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_mana_shield');

    //Build spec1row4col2 Improved Counterspell
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_counterspell.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_counterspell');

    //Build spec1row4col3 EMPTY
    spec1row4col3.style.display = "none";

    //Build spec1row4col4 Arcane Meditation
    spec1row4col4.style.display = "block";
    spec1row4col4.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_meditation.jpg')";
    spec1row4col4.style.backgroundRepeat = "no-repeat";
    spec1row4col4.style.backgroundSize = "34px 34px";
    spec1row4col4.style.backgroundPosition = "center center";
    spec1row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col4icon');
        addSpellId.setAttribute('data-spellId', 'arcane_meditation');

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Presence of Mind
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/mage/talents/presence_of_mind.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'presence_of_mind');
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

    //Build spec1row5col3 Arcane Mind
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_mind.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'arcane_mind');

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 Arcane Instability
    spec1row6col2.style.display = "block";
    spec1row6col2.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_instability.jpg')";
    spec1row6col2.style.backgroundRepeat = "no-repeat";
    spec1row6col2.style.backgroundSize = "34px 34px";
    spec1row6col2.style.backgroundPosition = "center center";
    spec1row6col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col2icon');
        addSpellId.setAttribute('data-spellId', 'arcane_instability');
        //Build arrow
        var spec1row6col2div = document.createElement('div');
        spec1row6col2div.style.maxHeight = "0px";
        spec1row6col2div.style.position = "absolute";
        spec1row6col2div.id = "spec1row6col2div";
        document.getElementById('spec1row6col2').appendChild(spec1row6col2div);
        var spec1row6col2arrow = document.createElement('img');
        spec1row6col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row6col2div').appendChild(spec1row6col2arrow);
        spec1row6col2arrow.style.position = "relative";
        spec1row6col2arrow.style.top = "-3px";
        spec1row6col2arrow.style.left = "19px";
        spec1row6col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row6col2div, spec1row6col2arrow);

    //Build spec1row6col3 EMPTY
    spec1row6col3.style.display = "none";

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Arcane Power
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/mage/talents/arcane_power.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'arcane_power');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Fire
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none";

    //Build spec2row1col2 Improved Fireball
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_fireball.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_fireball');

    //Build spec2row1col3 Impact
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/mage/talents/impact.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'impact');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 Ignite
    spec2row2col1.style.display = "block";
    spec2row2col1.style.backgroundImage = "url('../images/spell icons/mage/talents/ignite.jpg')";
    spec2row2col1.style.backgroundRepeat = "no-repeat";
    spec2row2col1.style.backgroundSize = "34px 34px";
    spec2row2col1.style.backgroundPosition = "center center";
    spec2row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col1icon');
        addSpellId.setAttribute('data-spellId', 'ignite');

    //Build spec2row2col2 Flame Throwing
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/mage/talents/flame_throwing.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'flame_throwing');

    //Build spec2row2col3 Improved Fire Blast
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_fire_blast.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_fire_blast');

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Incinerate
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/mage/talents/incinerate.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'incinerate');

    //Build spec2row3col2 Improved Flamestrike
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_flamestrike.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_flamestrike');

    //Build spec2row3col3 Pyroblast
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/mage/talents/pyroblast.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col3icon');
        addSpellId.setAttribute('data-spellId', 'pyroblast');
        //Build arrow
        var spec2row3col3div = document.createElement('div');
        spec2row3col3div.style.maxHeight = "0px";
        spec2row3col3div.style.position = "absolute";
        spec2row3col3div.id = "spec2row3col3div";
        document.getElementById('spec2row3col3').appendChild(spec2row3col3div);
        var spec2row3col3arrow = document.createElement('img');
        spec2row3col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row3col3div').appendChild(spec2row3col3arrow);
        spec2row3col3arrow.style.position = "relative";
        spec2row3col3arrow.style.top = "-3px";
        spec2row3col3arrow.style.left = "19px";
        spec2row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row3col3div, spec2row3col3arrow);

    //Build spec2row3col4 Burning Soul
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/mage/talents/burning_soul.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'burning_soul');

    //Build spec2row4col1 Improved Scorch
    spec2row4col1.style.display = "block";
    spec2row4col1.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_scorch.jpg')";
    spec2row4col1.style.backgroundRepeat = "no-repeat";
    spec2row4col1.style.backgroundSize = "34px 34px";
    spec2row4col1.style.backgroundPosition = "center center";
    spec2row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_scorch');
    
    //Build spec2row4col2 Improved Fire Ward
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_fire_ward.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_fire_ward');

    //Build spec2row4col3 Empty
    spec2row4col3.style.display = "none";

    //Build spec2row4col4 Master of Elements
    spec2row4col4.style.display = "block";
    spec2row4col4.style.backgroundImage = "url('../images/spell icons/mage/talents/master_of_elements.jpg')";
    spec2row4col4.style.backgroundRepeat = "no-repeat";
    spec2row4col4.style.backgroundSize = "34px 34px";
    spec2row4col4.style.backgroundPosition = "center center";
    spec2row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col4icon');
        addSpellId.setAttribute('data-spellId', 'master_of_elements');

    //Build spec2row5col1 Empty
    spec2row5col1.style.display = "none";

    //Build spec2row5col2 Critical Mass
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/mage/talents/critical_mass.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'critical_mass');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 Blast Wave
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/mage/talents/blast_wave.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col3icon');
        addSpellId.setAttribute('data-spellId', 'blast_wave');

    //Build spec2row5col4 Empty
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 Empty
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 Empty
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Fire Power
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/mage/talents/fire_power.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'fire_power');

    //Build spec2row6col4 Empty
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 Empty
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Combustion
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/mage/talents/combustion.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'combustion');

    //Build spec2row7col3 Empty
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 Empty
    spec2row7col4.style.display = "none";

    //Build spec3 Frost
    //Build spec3row1col1 Frost Warding
    spec3row1col1.style.display = "block";
    spec3row1col1.style.backgroundImage = "url('../images/spell icons/mage/talents/frost_warding.jpg')";
    spec3row1col1.style.backgroundRepeat = "no-repeat";
    spec3row1col1.style.backgroundSize = "34px 34px";
    spec3row1col1.style.backgroundPosition = "center center";
    spec3row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col1icon');
        addSpellId.setAttribute('data-spellId', 'frost_warding');

    //Build spec3row1col2 Improved Frostbolt
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_frostbolt.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_frostbolt');

    //Build spec3row1col3 Elemental Precision
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/mage/talents/elemental_precision.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'elemental_precision');

    //Build spec3row1col4 Empty
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Ice Shards
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/mage/talents/ice_shards.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'ice_shards');

    //Build spec3row2col2 Frostbite
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/mage/talents/frostbite.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'frostbite');

    //Build spec3row2col3 Improved Frost Nova
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_frost_nova.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_frost_nova');
        //Build arrow
        var spec3row2col3div = document.createElement('div');
        spec3row2col3div.style.maxHeight = "0px";
        spec3row2col3div.style.position = "absolute";
        spec3row2col3div.id = "spec3row2col3div";
        document.getElementById('spec3row2col3').appendChild(spec3row2col3div);
        var spec3row2col3arrow = document.createElement('img');
        spec3row2col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row2col3div').appendChild(spec3row2col3arrow);
        spec3row2col3arrow.style.position = "relative";
        spec3row2col3arrow.style.top = "-3px";
        spec3row2col3arrow.style.left = "19px";
        spec3row2col3arrow.style.zIndex += 1;
        arrowArray.push(spec3row2col3div,  spec3row2col3arrow);

    //Build spec3row2col4 Permafrost
    spec3row2col4.style.display = "block";
    spec3row2col4.style.backgroundImage = "url('../images/spell icons/mage/talents/permafrost.jpg')";
    spec3row2col4.style.backgroundRepeat = "no-repeat";
    spec3row2col4.style.backgroundSize = "34px 34px";
    spec3row2col4.style.backgroundPosition = "center center";
    spec3row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col4icon');
        addSpellId.setAttribute('data-spellId', 'permafrost');

    //Build spec3row3col1 Piercing Ice
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/mage/talents/piercing_ice.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'piercing_ice');

    //Build spec3row3col2 Cold Snap
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/mage/talents/cold_snap.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'cold_snap');

    //Build spec3row3col3 Empty
    spec3row3col3.style.display = "none";

    //Build spec3row3col4 Improved Blizzard
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_blizzard.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_blizzard');

    //Build spec3row4col1 Arctic Reach
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/mage/talents/arctic_reach.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col1icon');
        addSpellId.setAttribute('data-spellId', 'arctic_reach');

    //Build spec3row4col2 Frost Channeling
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/mage/talents/frost_channeling.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'frost_channeling');

    //Build spec3row4col3 Shatter
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/mage/talents/shatter.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col3icon');
        addSpellId.setAttribute('data-spellId', 'shatter');

    //Build spec3row4col4 Empty
    spec3row4col4.style.display = "none";

    //Build spec3row5col1 Empty
    spec3row5col1.style.display = "none";

    //Build spec3row5col2 Ice Block
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/mage/talents/ice_block.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'ice_block');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-3px";
        spec3row5col2arrow.style.left = "19px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div,  spec3row5col2arrow);

    //Build spec3row5col3 Improved Cone of Cold
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/mage/talents/improved_cone_of_cold.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_cone_of_cold');

    //Build spec3row5col4 Empty
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 Empty
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 Empty
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Winter's Chill
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/mage/talents/winters_chill.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'winters_chill');

    //Build spec3row6col4 Empty
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 Empty
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Ice Barrier
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/mage/talents/ice_barrier.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'ice_barrier');

    //Build spec3row7col3 Empty
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 Empty
    spec3row7col4.style.display = "none";

    calculator("mage");
}

function buildPaladin(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/paladin/holy.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/paladin/protection.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/paladin/retribution.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Holy";
    spec2name.innerHTML = "Protection";
    spec3name.innerHTML = "Retribution";

    //Build spec1 Holy
    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Divine Strength
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/divine_strength.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'divine_strength');

    //Build spec1row1col3 Divine Intellect
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/divine_intellect.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'divine_intellect');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 EMPTY
    spec1row2col1.style.display = "none";

    //Build spec1row2col2 Spiritual Focus
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/spiritual_focus.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'spiritual_focus');

    //Build spec1row2col3 Improved Seal of Righteousness
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_seal_of_righteousness.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_seal_of_righteousness');

    //Build spec1row2col4 EMPTY
    spec1row2col4.style.display = "none";

    //Build spec1row3col1 Healing Light
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/healing_light.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'healing_light');

    //Build spec1row3col2 Consecration
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/consecration.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'consecration');

    //Build spec1row3col3 Improved Lay on Hands
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_lay_on_hands.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'consecration');

    //Build spec1row3col4 Unyeilding Faith
    spec1row3col4.style.display = "block";
    spec1row3col4.style.backgroundImage = "url('../images/spell icons/paladin/talents/unyielding_faith.jpg')";
    spec1row3col4.style.backgroundRepeat = "no-repeat";
    spec1row3col4.style.backgroundSize = "34px 34px";
    spec1row3col4.style.backgroundPosition = "center center";
    spec1row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col4icon');
        addSpellId.setAttribute('data-spellId', 'consecration');

    //Build spec1row4col1 EMPTY
    spec1row4col1.style.display = "none";

    //Build spec1row4col2 Illumination
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/illumination.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'illumination');
        //Build arrow
        var spec1row4col2div = document.createElement('div');
        spec1row4col2div.style.maxHeight = "0px";
        spec1row4col2div.style.position = "absolute";
        spec1row4col2div.id = "spec1row4col2div";
        document.getElementById('spec1row4col2').appendChild(spec1row4col2div);
        var spec1row4col2arrow = document.createElement('img');
        spec1row4col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row4col2div').appendChild(spec1row4col2arrow);
        spec1row4col2arrow.style.position = "relative";
        spec1row4col2arrow.style.top = "-3px";
        spec1row4col2arrow.style.left = "19px";
        spec1row4col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row4col2div, spec1row4col2arrow);

    //Build spec1row4col3 Improved Blessing of Wisdom
    spec1row4col3.style.display = "block";
    spec1row4col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_blessing_of_wisdom.jpg')";
    spec1row4col3.style.backgroundRepeat = "no-repeat";
    spec1row4col3.style.backgroundSize = "34px 34px";
    spec1row4col3.style.backgroundPosition = "center center";
    spec1row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_blessing_of_wisdom');

    //Build spec1row4col4 EMPTY
    spec1row4col4.style.display = "none";

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Divine Favor
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/divine_favor.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'divine_favor');
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div,  spec1row5col2arrow);

    //Build spec1row5col3 Lasting Judgement
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/lasting_judgement.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'lasting_judgement');

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 EMPTY
    spec1row6col2.style.display = "none";

    //Build spec1row6col3 Holy Power
    spec1row6col3.style.display = "block";
    spec1row6col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/holy_power.jpg')";
    spec1row6col3.style.backgroundRepeat = "no-repeat";
    spec1row6col3.style.backgroundSize = "34px 34px";
    spec1row6col3.style.backgroundPosition = "center center";
    spec1row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col3icon');
        addSpellId.setAttribute('data-spellId', 'holy_power');

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Holy Shock
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/holy_shock.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'holy_shock');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Protection
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none";

    //Build spec2row1col2 Improved Devotion Aura
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_devotion_aura.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_devotion_aura');

    //Build spec2row1col3 Redoubt
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/redoubt.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'redoubt');
        //Build arrow
        var spec2row1col3div = document.createElement('div');
        spec2row1col3div.style.maxHeight = "0px";
        spec2row1col3div.style.position = "absolute";
        spec2row1col3div.id = "spec2row1col3div";
        document.getElementById('spec2row1col3').appendChild(spec2row1col3div);
        var spec2row1col3arrow = document.createElement('img');
        spec2row1col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row1col3div').appendChild(spec2row1col3arrow);
        spec2row1col3arrow.style.position = "relative";
        spec2row1col3arrow.style.top = "-3px";
        spec2row1col3arrow.style.left = "19px";
        spec2row1col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row1col3div,  spec2row1col3arrow);

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 Precision
    spec2row2col1.style.display = "block";
    spec2row2col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/precision.jpg')";
    spec2row2col1.style.backgroundRepeat = "no-repeat";
    spec2row2col1.style.backgroundSize = "34px 34px";
    spec2row2col1.style.backgroundPosition = "center center";
    spec2row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col1icon');
        addSpellId.setAttribute('data-spellId', 'precision');

    //Build spec2row2col2 Guardian's Favor
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/guardians_favor.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'precision');

    //Build spec2row2col3 EMPTY
    spec2row2col3.style.display = "none";

    //Build spec2row2col4 Toughness
    spec2row2col4.style.display = "block";
    spec2row2col4.style.backgroundImage = "url('../images/spell icons/paladin/talents/toughness.jpg')";
    spec2row2col4.style.backgroundRepeat = "no-repeat";
    spec2row2col4.style.backgroundSize = "34px 34px";
    spec2row2col4.style.backgroundPosition = "center center";
    spec2row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col4icon');
        addSpellId.setAttribute('data-spellId', 'precision');

    //Build spec2row3col1 Blessing of Kings
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/blessing_of_kings.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'blessing_of_kings');

    //Build spec2row3col2 Improved Righteous Fury
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_righteous_fury.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_righteous_fury');

    //Build spec2row3col3 Shield Specialization
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/shield_specialization.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col3icon');
        addSpellId.setAttribute('data-spellId', 'shield_specialization');

    //Build spec2row3col4 Anticipation
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/paladin/talents/anticipation.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'anticipation');

    //Build spec2row4col1 EMPTY
    spec2row4col1.style.display = "none";

    //Build spec2row4col2 Improved Hammer of Justice
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_hammer_of_justice.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_hammer_of_justice');

    //Build spec2row4col3 Improved Concentration Aura
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_concentration_aura.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_concentration_aura');

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 EMPTY
    spec2row5col1.style.display = "none";

    //Build spec2row5col2 Blessing of Sanctuary
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/blessing_of_sanctuary.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'blessing_of_sanctuary');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div,  spec2row5col2arrow);

    //Build spec2row5col3 Reckoning
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/reckoning.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col3icon');
        addSpellId.setAttribute('data-spellId', 'reckoning');

    //Build spec2row5col4 EMPTY
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 One-Handed Weapon Specialization
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/one_handed_weapon_specialization.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'one_handed_weapon_specialization');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Holy Shield
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/holy_shield.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'holy_shield');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Retribution
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Improved Blessing of Might
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_blessing_of_might.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_blessing_of_might');

    //Build spec3row1col3 Benediction
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/benediction.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'benediction');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Improved Judgement
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_judgement.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_judgement');

    //Build spec3row2col2 Improved Seal of the Crusader
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_seal_of_the_crusader.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_seal_of_the_crusader');

    //Build spec3row2col3 Deflection
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/deflection.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'deflection');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Vindication
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/vindication.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'vindication');

    //Build spec3row3col2 Conviction
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/conviction.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'vindication');
        //Build arrow
        var spec3row3col2div = document.createElement('div');
        spec3row3col2div.style.maxHeight = "0px";
        spec3row3col2div.style.position = "absolute";
        spec3row3col2div.id = "spec3row3col2div";
        document.getElementById('spec3row3col2').appendChild(spec3row3col2div);
        var spec3row3col2arrow = document.createElement('img');
        spec3row3col2arrow.src = '../images/table elements/arrow_skip2_down.png';
        document.getElementById('spec3row3col2div').appendChild(spec3row3col2arrow);
        spec3row3col2arrow.style.position = "relative";
        spec3row3col2arrow.style.top = "-3px";
        spec3row3col2arrow.style.left = "19px";
        spec3row3col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row3col2div, spec3row3col2arrow);

    //Build spec3row3col3 Seal of Command
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/seal_of_command.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'seal_of_command');

    //Build spec3row3col4 Pursuit of Justice
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/paladin/talents/pursuit_of_justice.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col4icon');
        addSpellId.setAttribute('data-spellId', 'pursuit_of_justice');

    //Build spec3row4col1 Eye for an Eye
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/eye_for_an_eye.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col1icon');
        addSpellId.setAttribute('data-spellId', 'eye_for_an_eye');

    //Build spec3row4col2 Empty
    spec3row4col2.style.display = "none";

    //Build spec3row4col3 Improved Retribution Aura
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/improved_retribution_aura.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_retribution_aura');

    //Build spec3row4col4 Empty
    spec3row4col4.style.display = "none";

    //Build spec3row5col1 Two-Handed Weapon Specialization
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/paladin/talents/two_handed_weapon_specialization.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col1icon');
        addSpellId.setAttribute('data-spellId', 'two_handed_weapon_specialization');

    //Build spec3row5col2 Empty
    spec3row5col2.style.display = "none";

    //Build spec3row5col3 Sanctity Aura
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/paladin/talents/sanctity_aura.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'sanctity_aura');

    //Build spec3row5col4 Empty
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 Empty
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 Vengeance
    spec3row6col2.style.display = "block";
    spec3row6col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/vengeance.jpg')";
    spec3row6col2.style.backgroundRepeat = "no-repeat";
    spec3row6col2.style.backgroundSize = "34px 34px";
    spec3row6col2.style.backgroundPosition = "center center";
    spec3row6col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col2icon');
        addSpellId.setAttribute('data-spellId', 'vengeance');

    //Build spec3row6col3 Empty
    spec3row6col3.style.display = "none";

    //Build spec3row6col4 Empty
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 Empty
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Repentance
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/paladin/talents/repentance.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'repentance');

    //Build spec3row7col3 Empty
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 Empty
    spec3row7col4.style.display = "none";

    calculator("paladin");
}

function buildPriest(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/priest/discipline.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/priest/holy.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/priest/shadow.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Discipline";
    spec2name.innerHTML = "Holy";
    spec3name.innerHTML = "Shadow";

    //Build spec1 Discipline
    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Unbreakable Will
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/priest/talents/unbreakable_will.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'arcane_subtlety');

    //Build spec1row1col3 Wand Specialization
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/priest/talents/wand_specialization.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'wand_specialization');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Silent Resolve
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/priest/talents/silent_resolve.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'silent_resolve');

    //Build spec1row2col2 Improved Power Word: Fortitude
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_power_word_fortitude.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_power_word_fortitude');

    //Build spec1row2col3 Improved Power Word: Shield
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_power_word_shield.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_power_word_shield');

    //Build spec1row2col4 Martyrdom
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/priest/talents/martyrdom.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col4icon');
        addSpellId.setAttribute('data-spellId', 'martyrdom');

    //Build spec1row3col1 EMPTY
    spec1row3col1.style.display = "none";

    //Build spec1row3col2 Inner Focus
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/priest/talents/inner_focus.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'inner_focus');

    //Build spec1row3col3 Meditation
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/priest/talents/meditation.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'meditation');
        //Build arrow
        var spec1row3col3div = document.createElement('div');
        spec1row3col3div.style.maxHeight = "0px";
        spec1row3col3div.style.position = "absolute";
        spec1row3col3div.id = "spec1row3col3div";
        document.getElementById('spec1row3col3').appendChild(spec1row3col3div);
        var spec1row3col3arrow = document.createElement('img');
        spec1row3col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row3col3div').appendChild(spec1row3col3arrow);
        spec1row3col3arrow.style.position = "relative";
        spec1row3col3arrow.style.top = "-3px";
        spec1row3col3arrow.style.left = "19px";
        spec1row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row3col3div,  spec1row3col3arrow);

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 Improved Inner Fire
    spec1row4col1.style.display = "block";
    spec1row4col1.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_inner_fire.jpg')";
    spec1row4col1.style.backgroundRepeat = "no-repeat";
    spec1row4col1.style.backgroundSize = "34px 34px";
    spec1row4col1.style.backgroundPosition = "center center";
    spec1row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_inner_fire');

    //Build spec1row4col2 Mental Agility
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/priest/talents/mental_agility.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'mental_agility');

    //Build spec1row4col3 EMPTY
    spec1row4col3.style.display = "none";

    //Build spec1row4col4 Improved Mana Burn
    spec1row4col4.style.display = "block";
    spec1row4col4.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_mana_burn.jpg')";
    spec1row4col4.style.backgroundRepeat = "no-repeat";
    spec1row4col4.style.backgroundSize = "34px 34px";
    spec1row4col4.style.backgroundPosition = "center center";
    spec1row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_mana_burn');

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Mental Strength
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/priest/talents/mental_strength.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'mental_strength');
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div,  spec1row5col2arrow);

    //Build spec1row5col3 Divine Spirit
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/priest/talents/divine_spirit.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'divine_spirit');

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 EMPTY
    spec1row6col2.style.display = "none";

    //Build spec1row6col3 Force of Will
    spec1row6col3.style.display = "block";
    spec1row6col3.style.backgroundImage = "url('../images/spell icons/priest/talents/force_of_will.jpg')";
    spec1row6col3.style.backgroundRepeat = "no-repeat";
    spec1row6col3.style.backgroundSize = "34px 34px";
    spec1row6col3.style.backgroundPosition = "center center";
    spec1row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col3icon');
        addSpellId.setAttribute('data-spellId', 'force_of_will');

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Power Infusion
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/priest/talents/power_infusion.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'power_infusion');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Holy
    //Build spec2row1col1 Healing Focus
    spec2row1col1.style.display = "block";
    spec2row1col1.style.backgroundImage = "url('../images/spell icons/priest/talents/healing_focus.jpg')";
    spec2row1col1.style.backgroundRepeat = "no-repeat";
    spec2row1col1.style.backgroundSize = "34px 34px";
    spec2row1col1.style.backgroundPosition = "center center";
    spec2row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col1icon');
        addSpellId.setAttribute('data-spellId', 'healing_focus');

    //Build spec2row1col2 Improved Renew
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_renew.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_renew');

    //Build spec2row1col3 Holy Specialization
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/priest/talents/holy_specialization.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'holy_specialization');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 EMPTY
    spec2row2col1.style.display = "none";

    //Build spec2row2col2 Spell Warding
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/priest/talents/spell_warding.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'spell_warding');

    //Build spec2row2col3 Divine Fury
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/priest/talents/divine_fury.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'divine_fury');
        //Build arrow
        var spec2row2col3div = document.createElement('div');
        spec2row2col3div.style.maxHeight = "0px";
        spec2row2col3div.style.position = "absolute";
        spec2row2col3div.id = "spec2row2col3div";
        document.getElementById('spec2row2col3').appendChild(spec2row2col3div);
        var spec2row2col3arrow = document.createElement('img');
        spec2row2col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row2col3div').appendChild(spec2row2col3arrow);
        spec2row2col3arrow.style.position = "relative";
        spec2row2col3arrow.style.top = "-3px";
        spec2row2col3arrow.style.left = "19px";
        spec2row2col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row2col3div,  spec2row2col3arrow);

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Holy Nova
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/priest/talents/holy_nova.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'holy_nova');

    //Build spec2row3col2 Blessed Recovery
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/priest/talents/blessed_recovery.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'blessed_recovery');

    //Build spec2row3col3 EMPTY
    spec2row3col3.style.display = "none";

    //Build spec2row3col4 Inspiration
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/priest/talents/inspiration.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'inspiration');

    //Build spec2row4col1 Holy Reach
    spec2row4col1.style.display = "block";
    spec2row4col1.style.backgroundImage = "url('../images/spell icons/priest/talents/holy_reach.jpg')";
    spec2row4col1.style.backgroundRepeat = "no-repeat";
    spec2row4col1.style.backgroundSize = "34px 34px";
    spec2row4col1.style.backgroundPosition = "center center";
    spec2row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col1icon');
        addSpellId.setAttribute('data-spellId', 'holy_reach');

    //Build spec2row4col2 Improved Healing
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_healing.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_healing');

    //Build spec2row4col3 Searing Light
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/priest/talents/searing_light.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'searing_light');

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Improved Prayer of Healing
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_prayer_of_healing.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_prayer_of_healing');

    //Build spec2row5col2 Spirit of Redemption
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/priest/talents/spirit_of_redemption.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'spirit_of_redemption');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div,  spec2row5col2arrow);

    //Build spec2row5col3 Spiritual Guidance
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/priest/talents/spiritual_guidance.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col3icon');
        addSpellId.setAttribute('data-spellId', 'spiritual_guidance');

    //Build spec2row5col4 EMPTY
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Spiritual Healing
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/priest/talents/spiritual_healing.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'spiritual_healing');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Lightwell
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/priest/talents/lightwell.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'lightwell');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Shadow
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Spirit Tap
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/priest/talents/spirit_tap.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'spirit_tap');

    //Build spec3row1col3 Blackout
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/priest/talents/blackout.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'blackout');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Shadow Affinity
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/priest/talents/shadow_affinity.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'shadow_affinity');

    //Build spec3row2col2 Improved Shadow Word: Pain
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_shadow_word_pain.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_shadow_word_pain');

    //Build spec3row2col3 Shadow Focus
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/priest/talents/shadow_focus.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'shadow_focus');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Improved Psychic Scream
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_psychic_scream.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_psychic_scream');
        //Build arrow
        var spec3row3col1div = document.createElement('div');
        spec3row3col1div.style.maxHeight = "0px";
        spec3row3col1div.style.position = "absolute";
        spec3row3col1div.id = "spec3row3col1div";
        document.getElementById('spec3row3col1').appendChild(spec3row3col1div);
        var spec3row3col1arrow = document.createElement('img');
        spec3row3col1arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row3col1div').appendChild(spec3row3col1arrow);
        spec3row3col1arrow.style.position = "relative";
        spec3row3col1arrow.style.top = "-3px";
        spec3row3col1arrow.style.left = "19px";
        spec3row3col1arrow.style.zIndex += 1;
        arrowArray.push(spec3row3col1div,  spec3row3col1arrow);

    //Build spec3row3col2 Improved Mind Blast
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_mind_blast.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_mind_blast');

    //Build spec3row3col3 Mind Flay
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/priest/talents/mind_flay.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'mind_flay');

    //Build spec3row3col4 EMPTY
    spec3row3col4.style.display = "none";

    //Build spec3row4col1 EMPTY
    spec3row4col1.style.display = "none";

    //Build spec3row4col2 Improved Fade
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_fade.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_fade');

    //Build spec3row4col3 Shadow Reach
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/priest/talents/shadow_reach.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col3icon');
        addSpellId.setAttribute('data-spellId', 'shadow_reach');

    //Build spec3row4col4 Shadow Weaving
    spec3row4col4.style.display = "block";
    spec3row4col4.style.backgroundImage = "url('../images/spell icons/priest/talents/shadow_weaving.jpg')";
    spec3row4col4.style.backgroundRepeat = "no-repeat";
    spec3row4col4.style.backgroundSize = "34px 34px";
    spec3row4col4.style.backgroundPosition = "center center";
    spec3row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col4icon');
        addSpellId.setAttribute('data-spellId', 'shadow_weaving');

    //Build spec3row5col1 Silence
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/priest/talents/silence.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col1icon');
        addSpellId.setAttribute('data-spellId', 'silence');

    //Build spec3row5col2 Vampiric Embrace
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/priest/talents/vampiric_embrace.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'vampiric_embrace');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_direct_right.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-31px";
        spec3row5col2arrow.style.left = "43px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div, spec3row5col2arrow);
        //Build arrow
        var spec3row5col2div2 = document.createElement('div');
        spec3row5col2div2.style.maxHeight = "0px";
        spec3row5col2div2.style.position = "absolute";
        spec3row5col2div2.id = "spec3row5col2div2";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div2);
        var spec3row5col2arrow2 = document.createElement('img');
        spec3row5col2arrow2.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div2').appendChild(spec3row5col2arrow2);
        spec3row5col2arrow2.style.position = "relative";
        spec3row5col2arrow2.style.top = "-3px";
        spec3row5col2arrow2.style.left = "19px";
        spec3row5col2arrow2.style.zIndex += 1;
        arrowArray.push(spec3row5col2div2, spec3row5col2arrow2);

    //Build spec3row5col3 Improved Vampiric Embrace
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/priest/talents/improved_vampiric_embrace.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_vampiric_embrace');

    //Build spec3row5col4 EMPTY
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Darkness
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/priest/talents/darkness.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'darkness');

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Shadowform
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/priest/talents/shadowform.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'shadowform');

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";

    calculator("priest");
}

function buildRogue(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/rogue/assassination.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/rogue/combat.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/rogue/subtlety.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Assassination";
    spec2name.innerHTML = "Combat";
    spec3name.innerHTML = "Subtlety";

    //Build spec1 Assassination
    //Build spec1row1col1 Improved Eviscerate
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_eviscerate.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";
    spec1row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_eviscerate');

    //Build spec1row1col2 Remorseless Attacks
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/remorseless_attacks.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'remorseless_attacks');

    //Build spec1row1col3 Malice
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/malice.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'malice');
        //Build arrow
        var spec1row1col3div = document.createElement('div');
        spec1row1col3div.style.maxHeight = "0px";
        spec1row1col3div.style.position = "absolute";
        spec1row1col3div.id = "spec1row1col3div";
        document.getElementById('spec1row1col3').appendChild(spec1row1col3div);
        var spec1row1col3arrow = document.createElement('img');
        spec1row1col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row1col3div').appendChild(spec1row1col3arrow);
        spec1row1col3arrow.style.position = "relative";
        spec1row1col3arrow.style.top = "-3px";
        spec1row1col3arrow.style.left = "19px";
        spec1row1col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row1col3div, spec1row1col3arrow);

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Ruthlessness
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/ruthlessness.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'ruthlessness');
    
    //Build spec1row2col2 Murder
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/murder.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'murder');

    //Build spec1row2col3 EMPTY
    spec1row2col3.style.display = "none";

    //Build spec1row2col4 Improved Slice and Dice
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_slice_and_dice.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_slice_and_dice');

    //Build spec1row3col1 Relentless Strikes
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/relentless_strikes.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'relentless_strikes');

    //Build spec1row3col2 Improved Expose Armor
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_expose_armor.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_expose_armor');

    //Build spec1row3col3 Lethality
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/lethality.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'lethality');

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 EMPTY
    spec1row4col1.style.display = "none";

    //Build spec1row4col2 Vile Poisons
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/vile_poisons.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'vile_poisons');

    //Build spec1row4col3 Improved Poisons
    spec1row4col3.style.display = "block";
    spec1row4col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_poisons.jpg')";
    spec1row4col3.style.backgroundRepeat = "no-repeat";
    spec1row4col3.style.backgroundSize = "34px 34px";
    spec1row4col3.style.backgroundPosition = "center center";
    spec1row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_poisons');

    //Build spec1row4col4 EMPTY
    spec1row4col4.style.display = "none";

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Cold Blood
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/cold_blood.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'cold_blood');
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

    //Build spec1row5col3 Improved Kidney Shot
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_kidney_shot.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_kidney_shot');

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 Seal Fate
    spec1row6col2.style.display = "block";
    spec1row6col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/seal_fate.jpg')";
    spec1row6col2.style.backgroundRepeat = "no-repeat";
    spec1row6col2.style.backgroundSize = "34px 34px";
    spec1row6col2.style.backgroundPosition = "center center";
    spec1row6col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col2icon');
        addSpellId.setAttribute('data-spellId', 'seal_fate');

    //Build spec1row6col3 EMPTY
    spec1row6col3.style.display = "none";

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Vigor
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/vigor.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'vigor');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Combat
    //Build spec2row1col1 Improved Gouge
    spec2row1col1.style.display = "block";
    spec2row1col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_gouge.jpg')";
    spec2row1col1.style.backgroundRepeat = "no-repeat";
    spec2row1col1.style.backgroundSize = "34px 34px";
    spec2row1col1.style.backgroundPosition = "center center";
    spec2row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_gouge');

    //Build spec2row1col2 Improved Sinister Strike
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_sinister_strike.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_sinister_strike');

    //Build spec2row1col3 Lightning Reflexes
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/lightning_reflexes.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'lightning_reflexes');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 Improved Backstab
    spec2row2col1.style.display = "block";
    spec2row2col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_backstab.jpg')";
    spec2row2col1.style.backgroundRepeat = "no-repeat";
    spec2row2col1.style.backgroundSize = "34px 34px";
    spec2row2col1.style.backgroundPosition = "center center";
    spec2row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_backstab');

    //Build spec2row2col2 Deflection
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/deflection.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'deflection');
        //Build arrow
        var spec2row2col2div = document.createElement('div');
        spec2row2col2div.style.maxHeight = "0px";
        spec2row2col2div.style.position = "absolute";
        spec2row2col2div.id = "spec2row2col2div";
        document.getElementById('spec2row2col2').appendChild(spec2row2col2div);
        var spec2row2col2arrow = document.createElement('img');
        spec2row2col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec2row2col2div').appendChild(spec2row2col2arrow);
        spec2row2col2arrow.style.position = "relative";
        spec2row2col2arrow.style.top = "-3px";
        spec2row2col2arrow.style.left = "19px";
        spec2row2col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row2col2div, spec2row2col2arrow);

    //Build spec2row2col3 Precision
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/precision.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'precision');
        //Build arrow
        var spec2row2col3div = document.createElement('div');
        spec2row2col3div.style.maxHeight = "0px";
        spec2row2col3div.style.position = "absolute";
        spec2row2col3div.id = "spec2row2col3div";
        document.getElementById('spec2row2col3').appendChild(spec2row2col3div);
        var spec2row2col3arrow = document.createElement('img');
        spec2row2col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row2col3div').appendChild(spec2row2col3arrow);
        spec2row2col3arrow.style.position = "relative";
        spec2row2col3arrow.style.top = "-3px";
        spec2row2col3arrow.style.left = "19px";
        spec2row2col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row2col3div, spec2row2col3arrow);

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Endurance
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/endurance.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'endurance');

    //Build spec2row3col2 Riposte
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/riposte.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'riposte');
    
    //Build spec2row3col3 EMPTY
    spec2row3col3.style.display = "none";

    //Build spec2row3col4 Improved Sprint
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_sprint.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_sprint');

    //Build spec2row4col1 Improved Kick
    spec2row4col1.style.display = "block";
    spec2row4col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_kick.jpg')";
    spec2row4col1.style.backgroundRepeat = "no-repeat";
    spec2row4col1.style.backgroundSize = "34px 34px";
    spec2row4col1.style.backgroundPosition = "center center";
    spec2row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_kick');

    //Build spec2row4col2 Dagger Specialization
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/dagger_specialization.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'dagger_specialization');

    //Build spec2row4col3 Dual Wield Specialization
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/dual_wield_specialization.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'dual_wield_specialization');

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Mace Specialization
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/mace_specialization.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col1icon');
        addSpellId.setAttribute('data-spellId', 'mace_specialization');

    //Build spec2row5col2 Blade Flurry
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/blade_flurry.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'blade_flurry');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 Sword Specialization
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/sword_specialization.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col3icon');
        addSpellId.setAttribute('data-spellId', 'sword_specialization');

    //Build spec2row5col4 Fist Weapon Specialization
    spec2row5col4.style.display = "block";
    spec2row5col4.style.backgroundImage = "url('../images/spell icons/rogue/talents/fist_weapon_specialization.jpg')";
    spec2row5col4.style.backgroundRepeat = "no-repeat";
    spec2row5col4.style.backgroundSize = "34px 34px";
    spec2row5col4.style.backgroundPosition = "center center";
    spec2row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col4icon');
        addSpellId.setAttribute('data-spellId', 'fist_weapon_specialization');

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 Weapon Expertise
    spec2row6col2.style.display = "block";
    spec2row6col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/weapon_expertise.jpg')";
    spec2row6col2.style.backgroundRepeat = "no-repeat";
    spec2row6col2.style.backgroundSize = "34px 34px";
    spec2row6col2.style.backgroundPosition = "center center";
    spec2row6col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col2icon');
        addSpellId.setAttribute('data-spellId', 'weapon_expertise');

    //Build spec2row6col3 Aggression
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/aggression.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'aggression');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Adrenaline Rush
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/adrenaline_rush.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'adrenaline_rush');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Subtlety
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Master of Deception
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/master_of_deception.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'master_of_deception');

    //Build spec3row1col3 Opportunity
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/opportunity.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'opportunity');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Sleight of Hand
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/sleight_of_hand.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'sleight_of_hand');

    //Build spec3row2col2 Elusiveness
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/elusiveness.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'elusiveness');

    //Build spec3row2col3 Camouflage
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/camouflage.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'camouflage');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Initiative
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/initiative.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'initiative');

    //Build spec3row3col2 Ghostly Strike
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/ghostly_strike.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'ghostly_strike');

    //Build spec3row3col3 Improved Ambush
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_ambush.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_ambush');

    //Build spec3row3col4 EMPTY
    spec3row3col4.style.display = "none";

    //Build spec3row4col1 Setup
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/setup.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col1icon');
        addSpellId.setAttribute('data-spellId', 'setup');

    //Build spec3row4col2 Improved Sap
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/improved_sap.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_sap');

    //Build spec3row4col3 Serrated Blades
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/serrated_blades.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'serrated_blades');
        //Build arrow
        var spec3row4col3div = document.createElement('div');
        spec3row4col3div.style.maxHeight = "0px";
        spec3row4col3div.style.position = "absolute";
        spec3row4col3div.id = "spec3row4col3div";
        document.getElementById('spec3row4col3').appendChild(spec3row4col3div);
        var spec3row4col3arrow = document.createElement('img');
        spec3row4col3arrow.src = '../images/table elements/arrow_right_down.png';
        document.getElementById('spec3row4col3div').appendChild(spec3row4col3arrow);
        spec3row4col3arrow.style.position = "relative";
        spec3row4col3arrow.style.top = "-26px";
        spec3row4col3arrow.style.left = "43px";
        spec3row4col3arrow.style.zIndex += 1;
        arrowArray.push(spec3row4col3div, spec3row4col3arrow);

    //Build spec3row4col4 EMPTY
    spec3row4col4.style.display = "none";

    //Build spec3row5col1 Heightened Senses
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/rogue/talents/setup.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col1icon');
        addSpellId.setAttribute('data-spellId', 'setup');

    //Build spec3row5col2 Preparation
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/preparation.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'preparation');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-3px";
        spec3row5col2arrow.style.left = "19px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div, spec3row5col2arrow);

    //Build spec3row5col3 Dirty Deeds
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/dirty_deeds.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'dirty_deeds');

    //Build spec3row5col4 Hemorrhage
    spec3row5col4.style.display = "block";
    spec3row5col4.style.backgroundImage = "url('../images/spell icons/rogue/talents/hemorrhage.jpg')";
    spec3row5col4.style.backgroundRepeat = "no-repeat";
    spec3row5col4.style.backgroundSize = "34px 34px";
    spec3row5col4.style.backgroundPosition = "center center";
    spec3row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col4icon');
        addSpellId.setAttribute('data-spellId', 'hemorrhage');

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row5col3 Deadliness
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/rogue/talents/deadliness.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'deadliness');

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Premeditation
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/rogue/talents/premeditation.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'premeditation');

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";

    calculator("rogue");
}

function buildShaman(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/shaman/elemental.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/shaman/enhancement.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/shaman/restoration.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Elemental";
    spec2name.innerHTML = "Enhancement";
    spec3name.innerHTML = "Restoration";

    //Build spec1 Elemental
    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Convection
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/convection.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'convection');

    //Build spec1row1col3 Concussion
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/concussion.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'concussion');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Earth's Grasp
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/earths_grasp.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'earths_grasp');

    //Build spec1row2col2 Elemental Warding
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_warding.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'elemental_warding');

    //Build spec1row2col3 Call of Flame
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/call_of_flame.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'elemental_warding');

    //Build spec1row2col4 EMPTY
    spec1row2col4.style.display = "none";

    //Build spec1row3col1 Elemental Focus
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_focus.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'elemental_focus');

    //Build spec1row3col2 Reverberation
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/reverberation.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'reverberation');

    //Build spec1row3col3 Call of Thunder
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/call_of_thunder.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'call_of_thunder');
        //Build arrow
        var spec1row3col3div = document.createElement('div');
        spec1row3col3div.style.maxHeight = "0px";
        spec1row3col3div.style.position = "absolute";
        spec1row3col3div.id = "spec1row3col3div";
        document.getElementById('spec1row3col3').appendChild(spec1row3col3div);
        var spec1row3col3arrow = document.createElement('img');
        spec1row3col3arrow.src = '../images/table elements/arrow_skip2_down.png';
        document.getElementById('spec1row3col3div').appendChild(spec1row3col3arrow);
        spec1row3col3arrow.style.position = "relative";
        spec1row3col3arrow.style.top = "-3px";
        spec1row3col3arrow.style.left = "19px";
        spec1row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row3col3div, spec1row3col3arrow);

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 Improved Fire Totems
    spec1row4col1.style.display = "block";
    spec1row4col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_fire_totems.jpg')";
    spec1row4col1.style.backgroundRepeat = "no-repeat";
    spec1row4col1.style.backgroundSize = "34px 34px";
    spec1row4col1.style.backgroundPosition = "center center";
    spec1row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_fire_totems');

    //Build spec1row4col2 Eye of the Storm
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/eye_of_the_storm.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'eye_of_the_storm');

    //Build spec1row4col3 EMPTY
    spec1row4col3.style.display = "none";

    //Build spec1row4col4 Elemental Devastation
    spec1row4col4.style.display = "block";
    spec1row4col4.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_devastation.jpg')";
    spec1row4col4.style.backgroundRepeat = "no-repeat";
    spec1row4col4.style.backgroundSize = "34px 34px";
    spec1row4col4.style.backgroundPosition = "center center";
    spec1row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col4icon');
        addSpellId.setAttribute('data-spellId', 'elemental_devastation');

    //Build spec1row5col1 Storm Reach
    spec1row5col1.style.display = "block";
    spec1row5col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/storm_reach.jpg')";
    spec1row5col1.style.backgroundRepeat = "no-repeat";
    spec1row5col1.style.backgroundSize = "34px 34px";
    spec1row5col1.style.backgroundPosition = "center center";
    spec1row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col1icon');
        addSpellId.setAttribute('data-spellId', 'storm_reach');

    //Build spec1row5col2 Elemental Fury
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_fury.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'elemental_fury');
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div, spec1row5col2arrow);

    //Build spec1row5col3 EMPTY
    spec1row5col3.style.display = "none";

    //Build spec1row5col4 EMPTY
    spec1row5col4.style.display = "none";

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 EMPTY
    spec1row6col2.style.display = "none";

    //Build spec1row6col3 Lightning Mastery
    spec1row6col3.style.display = "block";
    spec1row6col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/lightning_mastery.jpg')";
    spec1row6col3.style.backgroundRepeat = "no-repeat";
    spec1row6col3.style.backgroundSize = "34px 34px";
    spec1row6col3.style.backgroundPosition = "center center";
    spec1row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col3icon');
        addSpellId.setAttribute('data-spellId', 'lightning_mastery');

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Elemental Mastery
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_mastery.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'elemental_mastery');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Enhancement
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none";

    //Build spec2row1col2 Ancestral Knowledge
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/ancestral_knowledge.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'ancestral_knowledge');

    //Build spec2row1col3 Shield Specialization
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/shield_specialization.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'shield_specialization');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

   //Build spec2row2col1 Guardian Totems
   spec2row2col1.style.display = "block";
   spec2row2col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/guardian_totems.jpg')";
   spec2row2col1.style.backgroundRepeat = "no-repeat";
   spec2row2col1.style.backgroundSize = "34px 34px";
   spec2row2col1.style.backgroundPosition = "center center";
   spec2row2col1.style.filter = "grayscale(100%)";
       //Define Tooltip
       var addSpellId = document.getElementById('spec2row2col1icon');
       addSpellId.setAttribute('data-spellId', 'guardian_totems');

    //Build spec2row2col2 Thundering Strikes
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/thundering_strikes.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'thundering_strikes');
        //Build arrow
        var spec2row2col2div = document.createElement('div');
        spec2row2col2div.style.maxHeight = "0px";
        spec2row2col2div.style.position = "absolute";
        spec2row2col2div.id = "spec2row2col2div";
        document.getElementById('spec2row2col2').appendChild(spec2row2col2div);
        var spec2row2col2arrow = document.createElement('img');
        spec2row2col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row2col2div').appendChild(spec2row2col2arrow);
        spec2row2col2arrow.style.position = "relative";
        spec2row2col2arrow.style.top = "-3px";
        spec2row2col2arrow.style.left = "19px";
        spec2row2col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row2col2div, spec2row2col2arrow);

    //Build spec2row2col3 Improved Ghost Wolf
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_ghost_wolf.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row2col3icon');
       addSpellId.setAttribute('data-spellId', 'improved_ghost_wolf');

    //Build spec2row2col4 Improved Lightning Shield
    spec2row2col4.style.display = "block";
    spec2row2col4.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_lightning_shield.jpg')";
    spec2row2col4.style.backgroundRepeat = "no-repeat";
    spec2row2col4.style.backgroundSize = "34px 34px";
    spec2row2col4.style.backgroundPosition = "center center";
    spec2row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row2col4icon');
       addSpellId.setAttribute('data-spellId', 'improved_lightning_shield');

    //Build spec2row3col1 Enhancing Totems
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/enhancing_totems.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row3col1icon');
       addSpellId.setAttribute('data-spellId', 'enhancing_totems');

    //Build spec2row3col2 EMPTY
    spec2row3col2.style.display = "none";

    //Build spec2row3col3 Two Handed Axes and Maces
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/two_handed_axes_and_maces.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row3col3icon');
       addSpellId.setAttribute('data-spellId', 'two_handed_axes_and_maces');

    //Build spec2row3col4 Anticipation
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/shaman/talents/anticipation.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row3col4icon');
       addSpellId.setAttribute('data-spellId', 'anticipation');

    //Build spec2row4col1 EMPTY
    spec2row4col1.style.display = "none";

    //Build spec2row4col2 Flurry
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/flurry.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row4col2icon');
       addSpellId.setAttribute('data-spellId', 'flurry');

    //Build spec2row4col3 Toughness
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/toughness.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row4col3icon');
       addSpellId.setAttribute('data-spellId', 'toughness');

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Improved Weapon Totems
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_weapon_totems.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row5col1icon');
       addSpellId.setAttribute('data-spellId', 'improved_weapon_totems');

    //Build spec2row5col2 Elemental Weapons
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/elemental_weapons.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row5col2icon');
       addSpellId.setAttribute('data-spellId', 'elemental_weapons');
       //Build arrow
       var spec2row5col2div = document.createElement('div');
       spec2row5col2div.style.maxHeight = "0px";
       spec2row5col2div.style.position = "absolute";
       spec2row5col2div.id = "spec2row5col2div";
       document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
       var spec2row5col2arrow = document.createElement('img');
       spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
       document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
       spec2row5col2arrow.style.position = "relative";
       spec2row5col2arrow.style.top = "-3px";
       spec2row5col2arrow.style.left = "19px";
       spec2row5col2arrow.style.zIndex += 1;
       arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 Parry
    spec2row5col3.style.display = "block";
    spec2row5col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/parry.jpg')";
    spec2row5col3.style.backgroundRepeat = "no-repeat";
    spec2row5col3.style.backgroundSize = "34px 34px";
    spec2row5col3.style.backgroundPosition = "center center";
    spec2row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row5col3icon');
       addSpellId.setAttribute('data-spellId', 'parry');

    //Build spec2row5col4 EMPTY
    spec2row5col4.style.display = "none";

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Weapon Mastery
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/weapon_mastery.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row6col3icon');
       addSpellId.setAttribute('data-spellId', 'weapon_mastery');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Stormstrike
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/stormstrike.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec2row7col2icon');
       addSpellId.setAttribute('data-spellId', 'stormstrike');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Restoration
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Improved Healing Wave
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_healing_wave.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row1col2icon');
       addSpellId.setAttribute('data-spellId', 'improved_healing_wave');

    //Build spec3row1col3 Tidal Focus
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/tidal_focus.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row1col3icon');
       addSpellId.setAttribute('data-spellId', 'tidal_focus');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Improved Reincarnation
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/improved_reincarnation.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row2col1icon');
       addSpellId.setAttribute('data-spellId', 'improved_healing_wave');

    //Build spec3row2col2 Ancestral Healing
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/ancestral_healing.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row2col2icon');
       addSpellId.setAttribute('data-spellId', 'ancestral_healing');

    //Build spec3row2col3 Totemic Focus
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/totemic_focus.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row2col3icon');
       addSpellId.setAttribute('data-spellId', 'totemic_focus');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Nature's Guidance
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/natures_guidance.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row3col1icon');
       addSpellId.setAttribute('data-spellId', 'natures_guidance');

    //Build spec3row3col2 Healing Focus
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/healing_focus.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row3col2icon');
       addSpellId.setAttribute('data-spellId', 'healing_focus');

    //Build spec3row3col3 Totemic Mastery
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/totemic_mastery.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row3col3icon');
       addSpellId.setAttribute('data-spellId', 'totemic_mastery');

    //Build spec3row3col4 Healing Grace
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/shaman/talents/healing_grace.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row3col4icon');
       addSpellId.setAttribute('data-spellId', 'healing_grace');

    //Build spec3row4col1 EMPTY
    spec3row4col1.style.display = "none";

    //Build spec3row4col2 Restorative Totems
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/restorative_totems.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row4col2icon');
       addSpellId.setAttribute('data-spellId', 'restorative_totems');
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

    //Build spec3row4col3 Tidal Mastery
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/tidal_mastery.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row4col3icon');
       addSpellId.setAttribute('data-spellId', 'tidal_mastery');

    //Build spec3row4col4 EMPTY
    spec3row4col4.style.display = "none";

    //Build spec3row5col1 Healing Way
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/shaman/talents/healing_way.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row5col1icon');
       addSpellId.setAttribute('data-spellId', 'healing_way');

    //Build spec3row5col2 EMPTY
    spec3row5col2.style.display = "none";

    //Build spec3row5col3 Nature's Swiftness
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/natures_swiftness.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row5col3icon');
       addSpellId.setAttribute('data-spellId', 'natures_swiftness');

    //Build spec3row5col4 EMPTY
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Purification
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/shaman/talents/purification.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row6col3icon');
       addSpellId.setAttribute('data-spellId', 'purification');

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Mana Tide Totem
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/shaman/talents/mana_tide_totem.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
       var addSpellId = document.getElementById('spec3row7col2icon');
       addSpellId.setAttribute('data-spellId', 'mana_tide_totem');

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";

    calculator("shaman");
}

function buildWarlock(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/warlock/affliction.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/warlock/demonology.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/warlock/destruction.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Affliction";
    spec2name.innerHTML = "Demonology";
    spec3name.innerHTML = "Destruction";

    //Build spec1 Affliction
    //Build spec1row1col1 EMPTY
    spec1row1col1.style.display = "none";

    //Build spec1row1col2 Suppression
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/suppression.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'suppression');

    //Build spec1row1col3 Improved Corruption
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_corruption.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_corruption');

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Improved Curse of Weakness
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_curse_of_weakness.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_curse_of_weakness');

    //Build spec1row2col2 Improved Drain Soul
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_drain_soul.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_drain_soul');

    //Build spec1row2col3 Improved Life Tap
    spec1row2col3.style.display = "block";
    spec1row2col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_life_tap.jpg')";
    spec1row2col3.style.backgroundRepeat = "no-repeat";
    spec1row2col3.style.backgroundSize = "34px 34px";
    spec1row2col3.style.backgroundPosition = "center center";
    spec1row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_life_tap');

    //Build spec1row2col4 Improved Drain Life
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_drain_life.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_drain_life');

    //Build spec1row3col1 Improved Curse of Agony
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_curse_of_agony.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_curse_of_agony');

    //Build spec1row3col2 Fel Concentration
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/fel_concentration.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'fel_concentration');

    //Build spec1row3col3 Amplify Curse
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/amplify_curse.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'amplify_curse');
        //Build arrow
        var spec1row3col3div = document.createElement('div');
        spec1row3col3div.style.maxHeight = "0px";
        spec1row3col3div.style.position = "absolute";
        spec1row3col3div.id = "spec1row3col3div";
        document.getElementById('spec1row3col3').appendChild(spec1row3col3div);
        var spec1row3col3arrow = document.createElement('img');
        spec1row3col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row3col3div').appendChild(spec1row3col3arrow);
        spec1row3col3arrow.style.position = "relative";
        spec1row3col3arrow.style.top = "-3px";
        spec1row3col3arrow.style.left = "19px";
        spec1row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row3col3div, spec1row3col3arrow);

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 Grim Reach
    spec1row4col1.style.display = "block";
    spec1row4col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/grim_reach.jpg')";
    spec1row4col1.style.backgroundRepeat = "no-repeat";
    spec1row4col1.style.backgroundSize = "34px 34px";
    spec1row4col1.style.backgroundPosition = "center center";
    spec1row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col1icon');
        addSpellId.setAttribute('data-spellId', 'grim_reach');
    
    //Build spec1row4col2 Nightfall
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/nightfall.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'nightfall');

    //Build spec1row4col3 EMPTY
    spec1row4col3.style.display = "none";

    //Build spec1row4col4 Improved Drain Mana
    spec1row4col4.style.display = "block";
    spec1row4col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_drain_mana.jpg')";
    spec1row4col4.style.backgroundRepeat = "no-repeat";
    spec1row4col4.style.backgroundSize = "34px 34px";
    spec1row4col4.style.backgroundPosition = "center center";
    spec1row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_drain_mana');

    //Build spec1row5col1 EMPTY
    spec1row5col1.style.display = "none";

    //Build spec1row5col2 Siphon Life
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/siphon_life.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'siphon_life');
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

    //Build spec1row5col3 Curse of Exhaustion
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/curse_of_exhaustion.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'curse_of_exhaustion');
        //Build arrow
        var spec1row5col3div = document.createElement('div');
        spec1row5col3div.style.maxHeight = "0px";
        spec1row5col3div.style.position = "absolute";
        spec1row5col3div.id = "spec1row5col3div";
        document.getElementById('spec1row5col3').appendChild(spec1row5col3div);
        var spec1row5col3arrow = document.createElement('img');
        spec1row5col3arrow.src = '../images/table elements/arrow_direct_right.png';
        document.getElementById('spec1row5col3div').appendChild(spec1row5col3arrow);
        spec1row5col3arrow.style.position = "relative";
        spec1row5col3arrow.style.top = "-31px";
        spec1row5col3arrow.style.left = "43px";
        spec1row5col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col3div, spec1row5col3arrow);

    //Build spec1row5col4 Improved Curse of Exhaustion
    spec1row5col4.style.display = "block";
    spec1row5col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_curse_of_exhaustion.jpg')";
    spec1row5col4.style.backgroundRepeat = "no-repeat";
    spec1row5col4.style.backgroundSize = "34px 34px";
    spec1row5col4.style.backgroundPosition = "center center";
    spec1row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_curse_of_exhaustion');

    //Build spec1row6col1 EMPTY
    spec1row6col1.style.display = "none";

    //Build spec1row6col2 Shadow Mastery
    spec1row6col2.style.display = "block";
    spec1row6col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/shadow_mastery.jpg')";
    spec1row6col2.style.backgroundRepeat = "no-repeat";
    spec1row6col2.style.backgroundSize = "34px 34px";
    spec1row6col2.style.backgroundPosition = "center center";
    spec1row6col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col2icon');
        addSpellId.setAttribute('data-spellId', 'shadow_mastery');

    //Build spec1row6col3 EMPTY
    spec1row6col3.style.display = "none";

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Dark Pact
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/dark_pact.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'dark_pact');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Demonology
    //Build spec2row1col1 Improved Healthstone
    spec2row1col1.style.display = "block";
    spec2row1col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_healthstone.jpg')";
    spec2row1col1.style.backgroundRepeat = "no-repeat";
    spec2row1col1.style.backgroundSize = "34px 34px";
    spec2row1col1.style.backgroundPosition = "center center";
    spec2row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_healthstone');

    //Build spec2row1col2 Improved Imp
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_imp.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_imp');

    //Build spec2row1col3 Demonic Embrace
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/demonic_embrace.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'demonic_embrace');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 Improved Health Funnel
    spec2row2col1.style.display = "block";
    spec2row2col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_health_funnel.jpg')";
    spec2row2col1.style.backgroundRepeat = "no-repeat";
    spec2row2col1.style.backgroundSize = "34px 34px";
    spec2row2col1.style.backgroundPosition = "center center";
    spec2row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_health_funnel');

    //Build spec2row2col2 Improved Voidwalker
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_voidwalker.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_voidwalker');

    //Build spec2row2col3 Fel Intellect
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/fel_intellect.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'fel_intellect');

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Improved Succubus
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_succubus.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_succubus');

    //Build spec2row3col2 Fel Domination
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/fel_domination.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'fel_domination');
        //Build arrow
        var spec2row3col2div = document.createElement('div');
        spec2row3col2div.style.maxHeight = "0px";
        spec2row3col2div.style.position = "absolute";
        spec2row3col2div.id = "spec2row3col2div";
        document.getElementById('spec2row3col2').appendChild(spec2row3col2div);
        var spec2row3col2arrow = document.createElement('img');
        spec2row3col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec2row3col2div').appendChild(spec2row3col2arrow);
        spec2row3col2arrow.style.position = "relative";
        spec2row3col2arrow.style.top = "-3px";
        spec2row3col2arrow.style.left = "19px";
        spec2row3col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row3col2div, spec2row3col2arrow);

    //Build spec2row3col3 Fel Stamina
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/fel_stamina.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col3icon');
        addSpellId.setAttribute('data-spellId', 'fel_stamina');

    //Build spec2row3col4 EMPTY
    spec2row3col4.style.display = "none";

    //Build spec2row4col1 EMPTY
    spec2row4col1.style.display = "none";

    //Build spec2row4col2 Master Summoner
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/master_summoner.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'master_summoner');

    //Build spec2row4col3 Unholy Power
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/unholy_power.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'unholy_power');
        //Build arrow
        var spec2row4col3div = document.createElement('div');
        spec2row4col3div.style.maxHeight = "0px";
        spec2row4col3div.style.position = "absolute";
        spec2row4col3div.id = "spec2row4col3div";
        document.getElementById('spec2row4col3').appendChild(spec2row4col3div);
        var spec2row4col3arrow = document.createElement('img');
        spec2row4col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row4col3div').appendChild(spec2row4col3arrow);
        spec2row4col3arrow.style.position = "relative";
        spec2row4col3arrow.style.top = "-3px";
        spec2row4col3arrow.style.left = "19px";
        spec2row4col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row4col3div, spec2row4col3arrow);

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Improved Enslave Demon
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_enslave_demon.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_enslave_demon');

    //Build spec2row5col2 Demonic Sacrifice
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/demonic_sacrifice.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'demonic_sacrifice');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 EMPTY
    spec2row5col3.style.display = "none";

    //Build spec2row5col4 Improved Firestone
    spec2row5col4.style.display = "block";
    spec2row5col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_firestone.jpg')";
    spec2row5col4.style.backgroundRepeat = "no-repeat";
    spec2row5col4.style.backgroundSize = "34px 34px";
    spec2row5col4.style.backgroundPosition = "center center";
    spec2row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_firestone');

    //Build spec2row6col1 EMPTY
    spec2row6col1.style.display = "none";

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Master Demonologist
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/master_demonologist.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'master_demonologist');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Soul Link
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/soul_link.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'soul_link');

    //Build spec2row7col3 Improved Spellstone
    spec2row7col3.style.display = "block";
    spec2row7col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_spellstone.jpg')";
    spec2row7col3.style.backgroundRepeat = "no-repeat";
    spec2row7col3.style.backgroundSize = "34px 34px";
    spec2row7col3.style.backgroundPosition = "center center";
    spec2row7col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_spellstone');

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Destruction
    //Build spec3row1col1 EMPTY
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Improved Shadow Bolt
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_shadow_bolt.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_shadow_bolt');

    //Build spec3row1col3 Cataclysm
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/cataclysm.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'cataclysm');

    //Build spec3row1col4 EMPTY
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 EMPTY
    spec3row2col1.style.display = "none";

    //Build spec3row2col2 Bane
    spec3row2col2.style.display = "block";
    spec3row2col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/bane.jpg')";
    spec3row2col2.style.backgroundRepeat = "no-repeat";
    spec3row2col2.style.backgroundSize = "34px 34px";
    spec3row2col2.style.backgroundPosition = "center center";
    spec3row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col2icon');
        addSpellId.setAttribute('data-spellId', 'bane');

    //Build spec3row2col3 Aftermath
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/aftermath.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'aftermath');

    //Build spec3row2col4 EMPTY
    spec3row2col4.style.display = "none";

    //Build spec3row3col1 Improved Firebolt
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_firebolt.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_firebolt');

    //Build spec3row3col2 Improved Lash of Pain
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_lash_of_pain.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_lash_of_pain');

    //Build spec3row3col3 Devastation
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/devastation.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'devastation');
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

    //Build spec3row3col4 Shadowburn
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/shadowburn.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col4icon');
        addSpellId.setAttribute('data-spellId', 'shadowburn');

    //Build spec3row4col1 Intensity
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/intensity.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col1icon');
        addSpellId.setAttribute('data-spellId', 'intensity');
        //Build arrow
        var spec3row4col1div = document.createElement('div');
        spec3row4col1div.style.maxHeight = "0px";
        spec3row4col1div.style.position = "absolute";
        spec3row4col1div.id = "spec3row4col1div";
        document.getElementById('spec3row4col1').appendChild(spec3row4col1div);
        var spec3row4col1arrow = document.createElement('img');
        spec3row4col1arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec3row4col1div').appendChild(spec3row4col1arrow);
        spec3row4col1arrow.style.position = "relative";
        spec3row4col1arrow.style.top = "-3px";
        spec3row4col1arrow.style.left = "19px";
        spec3row4col1arrow.style.zIndex += 1;
        arrowArray.push(spec3row4col1div, spec3row4col1arrow);

    //Build spec3row4col2 Destructive Reach
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/destructive_reach.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'destructive_reach');

    //Build spec3row4col3 EMPTY
    spec3row4col3.style.display = "none";

    //Build spec3row4col4 Improved Searing Pain
    spec3row4col4.style.display = "block";
    spec3row4col4.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_searing_pain.jpg')";
    spec3row4col4.style.backgroundRepeat = "no-repeat";
    spec3row4col4.style.backgroundSize = "34px 34px";
    spec3row4col4.style.backgroundPosition = "center center";
    spec3row4col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_searing_pain');

    //Build spec3row5col1 Pyroclasm
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/warlock/talents/pyroclasm.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col1icon');
        addSpellId.setAttribute('data-spellId', 'pyroclasm');

    //Build spec3row5col2 Improved Immolate
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/improved_immolate.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_immolate');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-3px";
        spec3row5col2arrow.style.left = "19px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div, spec3row5col2arrow);

    //Build spec3row5col3 Ruin
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/ruin.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'ruin');

    //Build spec3row5col4 EMPTY
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 EMPTY
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 EMPTY
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 Emberstorm
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/warlock/talents/emberstorm.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'emberstorm');

    //Build spec3row6col4 EMPTY
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 EMPTY
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Conflagrate
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/warlock/talents/conflagrate.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'conflagrate');

    //Build spec3row7col3 EMPTY
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 EMPTY
    spec3row7col4.style.display = "none";

    calculator("warlock");
}

function buildWarrior(){
    removeArrows(); //Arrows are built every time a new class is selected. The removeArrows() function clears the arrows from the previous selection

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
    spec1icon.style.backgroundImage = "url('../images/class icons/spec icons/warrior/arms.jpg')";
        spec1icon.style.backgroundRepeat = "no-repeat";
        spec1icon.style.backgroundSize = "34px 34px";
        spec1icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec2icon.style.backgroundImage = "url('../images/class icons/spec icons/warrior/fury.jpg')";
        spec2icon.style.backgroundRepeat = "no-repeat";
        spec2icon.style.backgroundSize = "34px 34px";
        spec2icon.style.backgroundPosition = "left 5px top 10px";
        spec2icon.style.width = "44px";
        spec2icon.style.height = "44px";
    spec3icon.style.backgroundImage = "url('../images/class icons/spec icons/warrior/protection.jpg')";
        spec3icon.style.backgroundRepeat = "no-repeat";
        spec3icon.style.backgroundSize = "34px 34px";
        spec3icon.style.backgroundPosition = "left 5px top 10px";
        spec1icon.style.width = "44px";
        spec1icon.style.height = "44px";
    spec1name.innerHTML = "Arms";
    spec2name.innerHTML = "Fury";
    spec3name.innerHTML = "Protection";

    //Build spec1 Arms
    //Build spec1row1col1 Improved Heroic Strike
    spec1row1col1.style.display = "block";
    spec1row1col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_heroic_strike.jpg')";
    spec1row1col1.style.backgroundRepeat = "no-repeat";
    spec1row1col1.style.backgroundSize = "34px 34px";
    spec1row1col1.style.backgroundPosition = "center center";
    spec1row1col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_heroic_strike');

    //Build spec1row1col2 Deflection
    spec1row1col2.style.display = "block";
    spec1row1col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/deflection.jpg')";
    spec1row1col2.style.backgroundRepeat = "no-repeat";
    spec1row1col2.style.backgroundSize = "34px 34px";
    spec1row1col2.style.backgroundPosition = "center center";
    spec1row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col2icon');
        addSpellId.setAttribute('data-spellId', 'deflection');

    //Build spec1row1col3 Improved Rend
    spec1row1col3.style.display = "block";
    spec1row1col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_rend.jpg')";
    spec1row1col3.style.backgroundRepeat = "no-repeat";
    spec1row1col3.style.backgroundSize = "34px 34px";
    spec1row1col3.style.backgroundPosition = "center center";
    spec1row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row1col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_rend');
        //Build arrow
        var spec1row1col3div = document.createElement('div');
        spec1row1col3div.style.maxHeight = "0px";
        spec1row1col3div.style.position = "absolute";
        spec1row1col3div.id = "spec1row1col3div";
        document.getElementById('spec1row1col3').appendChild(spec1row1col3div);
        var spec1row1col3arrow = document.createElement('img');
        spec1row1col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row1col3div').appendChild(spec1row1col3arrow);
        spec1row1col3arrow.style.position = "relative";
        spec1row1col3arrow.style.top = "-3px";
        spec1row1col3arrow.style.left = "19px";
        spec1row1col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row1col3div, spec1row1col3arrow);

    //Build spec1row1col4 EMPTY
    spec1row1col4.style.display = "none";

    //Build spec1row2col1 Improved Charge
    spec1row2col1.style.display = "block";
    spec1row2col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_charge.jpg')";
    spec1row2col1.style.backgroundRepeat = "no-repeat";
    spec1row2col1.style.backgroundSize = "34px 34px";
    spec1row2col1.style.backgroundPosition = "center center";
    spec1row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_charge');

    //Build spec1row2col2 Tactical Mastery
    spec1row2col2.style.display = "block";
    spec1row2col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/tactical_mastery.jpg')";
    spec1row2col2.style.backgroundRepeat = "no-repeat";
    spec1row2col2.style.backgroundSize = "34px 34px";
    spec1row2col2.style.backgroundPosition = "center center";
    spec1row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col2icon');
        addSpellId.setAttribute('data-spellId', 'tactical_mastery');
        //Build arrow
        var spec1row2col2div = document.createElement('div');
        spec1row2col2div.style.maxHeight = "0px";
        spec1row2col2div.style.position = "absolute";
        spec1row2col2div.id = "spec1row2col2div";
        document.getElementById('spec1row2col2').appendChild(spec1row2col2div);
        var spec1row2col2arrow = document.createElement('img');
        spec1row2col2arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row2col2div').appendChild(spec1row2col2arrow);
        spec1row2col2arrow.style.position = "relative";
        spec1row2col2arrow.style.top = "-3px";
        spec1row2col2arrow.style.left = "19px";
        spec1row2col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row2col2div, spec1row2col2arrow);

    //Build spec1row2col3 EMPTY
    spec1row2col3.style.display = "none";

    //Build spec1row2col4 Improved Thunder Clap
    spec1row2col4.style.display = "block";
    spec1row2col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_thunder_clap.jpg')";
    spec1row2col4.style.backgroundRepeat = "no-repeat";
    spec1row2col4.style.backgroundSize = "34px 34px";
    spec1row2col4.style.backgroundPosition = "center center";
    spec1row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row2col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_thunder_clap');

    //Build spec1row3col1 Improved Overpower
    spec1row3col1.style.display = "block";
    spec1row3col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_overpower.jpg')";
    spec1row3col1.style.backgroundRepeat = "no-repeat";
    spec1row3col1.style.backgroundSize = "34px 34px";
    spec1row3col1.style.backgroundPosition = "center center";
    spec1row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_overpower');

    //Build spec1row3col2 Anger Management
    spec1row3col2.style.display = "block";
    spec1row3col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/anger_management.jpg')";
    spec1row3col2.style.backgroundRepeat = "no-repeat";
    spec1row3col2.style.backgroundSize = "34px 34px";
    spec1row3col2.style.backgroundPosition = "center center";
    spec1row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col2icon');
        addSpellId.setAttribute('data-spellId', 'anger_management');

    //Build spec1row3col3 Deep Wounds
    spec1row3col3.style.display = "block";
    spec1row3col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/deep_wounds.jpg')";
    spec1row3col3.style.backgroundRepeat = "no-repeat";
    spec1row3col3.style.backgroundSize = "34px 34px";
    spec1row3col3.style.backgroundPosition = "center center";
    spec1row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row3col3icon');
        addSpellId.setAttribute('data-spellId', 'deep_wounds');
        //Build arrow
        var spec1row3col3div = document.createElement('div');
        spec1row3col3div.style.maxHeight = "0px";
        spec1row3col3div.style.position = "absolute";
        spec1row3col3div.id = "spec1row3col3div";
        document.getElementById('spec1row3col3').appendChild(spec1row3col3div);
        var spec1row3col3arrow = document.createElement('img');
        spec1row3col3arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec1row3col3div').appendChild(spec1row3col3arrow);
        spec1row3col3arrow.style.position = "relative";
        spec1row3col3arrow.style.top = "-3px";
        spec1row3col3arrow.style.left = "19px";
        spec1row3col3arrow.style.zIndex += 1;
        arrowArray.push(spec1row3col3div, spec1row3col3arrow);

    //Build spec1row3col4 EMPTY
    spec1row3col4.style.display = "none";

    //Build spec1row4col1 EMPTY
    spec1row4col1.style.display = "none";

    //Build spec1row4col2 Two-Handed Weapon Specialization
    spec1row4col2.style.display = "block";
    spec1row4col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/two_handed_weapon_specialization.jpg')";
    spec1row4col2.style.backgroundRepeat = "no-repeat";
    spec1row4col2.style.backgroundSize = "34px 34px";
    spec1row4col2.style.backgroundPosition = "center center";
    spec1row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col2icon');
        addSpellId.setAttribute('data-spellId', 'two_handed_weapon_specialization');

    //Build spec1row4col3 Impale
    spec1row4col3.style.display = "block";
    spec1row4col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/impale.jpg')";
    spec1row4col3.style.backgroundRepeat = "no-repeat";
    spec1row4col3.style.backgroundSize = "34px 34px";
    spec1row4col3.style.backgroundPosition = "center center";
    spec1row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row4col3icon');
        addSpellId.setAttribute('data-spellId', 'impale');

    //Build spec1row4col4 EMPTY
    spec1row4col4.style.display = "none";

    //Build spec1row5col1 Axe Specialization
    spec1row5col1.style.display = "block";
    spec1row5col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/axe_specialization.jpg')";
    spec1row5col1.style.backgroundRepeat = "no-repeat";
    spec1row5col1.style.backgroundSize = "34px 34px";
    spec1row5col1.style.backgroundPosition = "center center";
    spec1row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col1icon');
        addSpellId.setAttribute('data-spellId', 'axe_specialization');

    //Build spec1row5col2 Sweeping Strikes
    spec1row5col2.style.display = "block";
    spec1row5col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/sweeping_strikes.jpg')";
    spec1row5col2.style.backgroundRepeat = "no-repeat";
    spec1row5col2.style.backgroundSize = "34px 34px";
    spec1row5col2.style.backgroundPosition = "center center";
    spec1row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col2icon');
        addSpellId.setAttribute('data-spellId', 'sweeping_strikes');
        //Build arrow
        var spec1row5col2div = document.createElement('div');
        spec1row5col2div.style.maxHeight = "0px";
        spec1row5col2div.style.position = "absolute";
        spec1row5col2div.id = "spec1row5col2div";
        document.getElementById('spec1row5col2').appendChild(spec1row5col2div);
        var spec1row5col2arrow = document.createElement('img');
        spec1row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec1row5col2div').appendChild(spec1row5col2arrow);
        spec1row5col2arrow.style.position = "relative";
        spec1row5col2arrow.style.top = "-3px";
        spec1row5col2arrow.style.left = "19px";
        spec1row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec1row5col2div, spec1row5col2arrow);

    //Build spec1row5col3 Mace Specialization
    spec1row5col3.style.display = "block";
    spec1row5col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/mace_specialization.jpg')";
    spec1row5col3.style.backgroundRepeat = "no-repeat";
    spec1row5col3.style.backgroundSize = "34px 34px";
    spec1row5col3.style.backgroundPosition = "center center";
    spec1row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col3icon');
        addSpellId.setAttribute('data-spellId', 'mace_specialization');

    //Build spec1row5col4 Sword Specialization
    spec1row5col4.style.display = "block";
    spec1row5col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/sword_specialization.jpg')";
    spec1row5col4.style.backgroundRepeat = "no-repeat";
    spec1row5col4.style.backgroundSize = "34px 34px";
    spec1row5col4.style.backgroundPosition = "center center";
    spec1row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row5col4icon');
        addSpellId.setAttribute('data-spellId', 'sword_specialization');

    //Build spec1row6col1 Polearm Specialization
    spec1row6col1.style.display = "block";
    spec1row6col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/polearm_specialization.jpg')";
    spec1row6col1.style.backgroundRepeat = "no-repeat";
    spec1row6col1.style.backgroundSize = "34px 34px";
    spec1row6col1.style.backgroundPosition = "center center";
    spec1row6col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col1icon');
        addSpellId.setAttribute('data-spellId', 'polearm_specialization');

    //Build spec1row6col2 EMPTY
    spec1row6col2.style.display = "none";

    //Build spec1row6col3 Improved Hamstring
    spec1row6col3.style.display = "block";
    spec1row6col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_hamstring.jpg')";
    spec1row6col3.style.backgroundRepeat = "no-repeat";
    spec1row6col3.style.backgroundSize = "34px 34px";
    spec1row6col3.style.backgroundPosition = "center center";
    spec1row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row6col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_hamstring');

    //Build spec1row6col4 EMPTY
    spec1row6col4.style.display = "none";

    //Build spec1row7col1 EMPTY
    spec1row7col1.style.display = "none";

    //Build spec1row7col2 Improved Hamstring
    spec1row7col2.style.display = "block";
    spec1row7col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_hamstring.jpg')";
    spec1row7col2.style.backgroundRepeat = "no-repeat";
    spec1row7col2.style.backgroundSize = "34px 34px";
    spec1row7col2.style.backgroundPosition = "center center";
    spec1row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec1row7col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_hamstring');

    //Build spec1row7col3 EMPTY
    spec1row7col3.style.display = "none";

    //Build spec1row7col4 EMPTY
    spec1row7col4.style.display = "none";

    //Build spec2 Fury
    //Build spec2row1col1 EMPTY
    spec2row1col1.style.display = "none;"

    //Build spec2row1col2 Booming Voice
    spec2row1col2.style.display = "block";
    spec2row1col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/booming_voice.jpg')";
    spec2row1col2.style.backgroundRepeat = "no-repeat";
    spec2row1col2.style.backgroundSize = "34px 34px";
    spec2row1col2.style.backgroundPosition = "center center";
    spec2row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col2icon');
        addSpellId.setAttribute('data-spellId', 'booming_voice');

    //Build spec2row1col3 Cruelty
    spec2row1col3.style.display = "block";
    spec2row1col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/cruelty.jpg')";
    spec2row1col3.style.backgroundRepeat = "no-repeat";
    spec2row1col3.style.backgroundSize = "34px 34px";
    spec2row1col3.style.backgroundPosition = "center center";
    spec2row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row1col3icon');
        addSpellId.setAttribute('data-spellId', 'cruelty');

    //Build spec2row1col4 EMPTY
    spec2row1col4.style.display = "none";

    //Build spec2row2col1 EMPTY
    spec2row2col1.style.display = "none";

    //Build spec2row2col2 Improved Demoralizing Shout
    spec2row2col2.style.display = "block";
    spec2row2col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_demoralizing_shout.jpg')";
    spec2row2col2.style.backgroundRepeat = "no-repeat";
    spec2row2col2.style.backgroundSize = "34px 34px";
    spec2row2col2.style.backgroundPosition = "center center";
    spec2row2col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_demoralizing_shout');

    //Build spec2row2col3 Unbridled Wrath
    spec2row2col3.style.display = "block";
    spec2row2col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/unbridled_wrath.jpg')";
    spec2row2col3.style.backgroundRepeat = "no-repeat";
    spec2row2col3.style.backgroundSize = "34px 34px";
    spec2row2col3.style.backgroundPosition = "center center";
    spec2row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row2col3icon');
        addSpellId.setAttribute('data-spellId', 'unbridled_wrath');

    //Build spec2row2col4 EMPTY
    spec2row2col4.style.display = "none";

    //Build spec2row3col1 Improved Cleave
    spec2row3col1.style.display = "block";
    spec2row3col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_cleave.jpg')";
    spec2row3col1.style.backgroundRepeat = "no-repeat";
    spec2row3col1.style.backgroundSize = "34px 34px";
    spec2row3col1.style.backgroundPosition = "center center";
    spec2row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_cleave');

    //Build spec2row3col2 Piercing Howl
    spec2row3col2.style.display = "block";
    spec2row3col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/piercing_howl.jpg')";
    spec2row3col2.style.backgroundRepeat = "no-repeat";
    spec2row3col2.style.backgroundSize = "34px 34px";
    spec2row3col2.style.backgroundPosition = "center center";
    spec2row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col2icon');
        addSpellId.setAttribute('data-spellId', 'piercing_howl');

    //Build spec2row3col3 Blood Craze
    spec2row3col3.style.display = "block";
    spec2row3col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/blood_craze.jpg')";
    spec2row3col3.style.backgroundRepeat = "no-repeat";
    spec2row3col3.style.backgroundSize = "34px 34px";
    spec2row3col3.style.backgroundPosition = "center center";
    spec2row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col3icon');
        addSpellId.setAttribute('data-spellId', 'blood_craze');

    //Build spec2row3col4 Improved Battle Shout
    spec2row3col4.style.display = "block";
    spec2row3col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_battle_shout.jpg')";
    spec2row3col4.style.backgroundRepeat = "no-repeat";
    spec2row3col4.style.backgroundSize = "34px 34px";
    spec2row3col4.style.backgroundPosition = "center center";
    spec2row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row3col4icon');
        addSpellId.setAttribute('data-spellId', 'blood_craze');

    //Build spec2row4col1 Dual Wield Specialization
    spec2row4col1.style.display = "block";
    spec2row4col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/dual_wield_specialization.jpg')";
    spec2row4col1.style.backgroundRepeat = "no-repeat";
    spec2row4col1.style.backgroundSize = "34px 34px";
    spec2row4col1.style.backgroundPosition = "center center";
    spec2row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col1icon');
        addSpellId.setAttribute('data-spellId', 'dual_wield_specialization');

    //Build spec2row4col2 Improved Execute
    spec2row4col2.style.display = "block";
    spec2row4col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_execute.jpg')";
    spec2row4col2.style.backgroundRepeat = "no-repeat";
    spec2row4col2.style.backgroundSize = "34px 34px";
    spec2row4col2.style.backgroundPosition = "center center";
    spec2row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_execute');

    //Build spec2row4col3 Enrage
    spec2row4col3.style.display = "block";
    spec2row4col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/enrage.jpg')";
    spec2row4col3.style.backgroundRepeat = "no-repeat";
    spec2row4col3.style.backgroundSize = "34px 34px";
    spec2row4col3.style.backgroundPosition = "center center";
    spec2row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row4col3icon');
        addSpellId.setAttribute('data-spellId', 'enrage');
        //Build arrow
        var spec2row4col3div = document.createElement('div');
        spec2row4col3div.style.maxHeight = "0px";
        spec2row4col3div.style.position = "absolute";
        spec2row4col3div.id = "spec2row4col3div";
        document.getElementById('spec2row4col3').appendChild(spec2row4col3div);
        var spec2row4col3arrow = document.createElement('img');
        spec2row4col3arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row4col3div').appendChild(spec2row4col3arrow);
        spec2row4col3arrow.style.position = "relative";
        spec2row4col3arrow.style.top = "-3px";
        spec2row4col3arrow.style.left = "19px";
        spec2row4col3arrow.style.zIndex += 1;
        arrowArray.push(spec2row4col3div, spec2row4col3arrow);

    //Build spec2row4col4 EMPTY
    spec2row4col4.style.display = "none";

    //Build spec2row5col1 Improved Slam
    spec2row5col1.style.display = "block";
    spec2row5col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_slam.jpg')";
    spec2row5col1.style.backgroundRepeat = "no-repeat";
    spec2row5col1.style.backgroundSize = "34px 34px";
    spec2row5col1.style.backgroundPosition = "center center";
    spec2row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_slam');

    //Build spec2row5col2 Death Wish
    spec2row5col2.style.display = "block";
    spec2row5col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/death_wish.jpg')";
    spec2row5col2.style.backgroundRepeat = "no-repeat";
    spec2row5col2.style.backgroundSize = "34px 34px";
    spec2row5col2.style.backgroundPosition = "center center";
    spec2row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col2icon');
        addSpellId.setAttribute('data-spellId', 'death_wish');
        //Build arrow
        var spec2row5col2div = document.createElement('div');
        spec2row5col2div.style.maxHeight = "0px";
        spec2row5col2div.style.position = "absolute";
        spec2row5col2div.id = "spec2row5col2div";
        document.getElementById('spec2row5col2').appendChild(spec2row5col2div);
        var spec2row5col2arrow = document.createElement('img');
        spec2row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec2row5col2div').appendChild(spec2row5col2arrow);
        spec2row5col2arrow.style.position = "relative";
        spec2row5col2arrow.style.top = "-3px";
        spec2row5col2arrow.style.left = "19px";
        spec2row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec2row5col2div, spec2row5col2arrow);

    //Build spec2row5col3 EMPTY
    spec2row5col3.style.display = "none";

    //Build spec2row5col4 Death Wish
    spec2row5col4.style.display = "block";
    spec2row5col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/death_wish.jpg')";
    spec2row5col4.style.backgroundRepeat = "no-repeat";
    spec2row5col4.style.backgroundSize = "34px 34px";
    spec2row5col4.style.backgroundPosition = "center center";
    spec2row5col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row5col4icon');
        addSpellId.setAttribute('data-spellId', 'death_wish');

    //Build spec2row6col1 Improved Berserker Rage
    spec2row6col1.style.display = "block";
    spec2row6col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_berserker_rage.jpg')";
    spec2row6col1.style.backgroundRepeat = "no-repeat";
    spec2row6col1.style.backgroundSize = "34px 34px";
    spec2row6col1.style.backgroundPosition = "center center";
    spec2row6col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_berserker_rage');

    //Build spec2row6col2 EMPTY
    spec2row6col2.style.display = "none";

    //Build spec2row6col3 Flurry
    spec2row6col3.style.display = "block";
    spec2row6col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/flurry.jpg')";
    spec2row6col3.style.backgroundRepeat = "no-repeat";
    spec2row6col3.style.backgroundSize = "34px 34px";
    spec2row6col3.style.backgroundPosition = "center center";
    spec2row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row6col3icon');
        addSpellId.setAttribute('data-spellId', 'flurry');

    //Build spec2row6col4 EMPTY
    spec2row6col4.style.display = "none";

    //Build spec2row7col1 EMPTY
    spec2row7col1.style.display = "none";

    //Build spec2row7col2 Bloodthirst
    spec2row7col2.style.display = "block";
    spec2row7col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/bloodthirst.jpg')";
    spec2row7col2.style.backgroundRepeat = "no-repeat";
    spec2row7col2.style.backgroundSize = "34px 34px";
    spec2row7col2.style.backgroundPosition = "center center";
    spec2row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec2row7col2icon');
        addSpellId.setAttribute('data-spellId', 'bloodthirst');

    //Build spec2row7col3 EMPTY
    spec2row7col3.style.display = "none";

    //Build spec2row7col4 EMPTY
    spec2row7col4.style.display = "none";

    //Build spec3 Protection
    //Build spec3row1col1 Empty
    spec3row1col1.style.display = "none";

    //Build spec3row1col2 Shield Specialization
    spec3row1col2.style.display = "block";
    spec3row1col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/shield_specialization.jpg')";
    spec3row1col2.style.backgroundRepeat = "no-repeat";
    spec3row1col2.style.backgroundSize = "34px 34px";
    spec3row1col2.style.backgroundPosition = "center center";
    spec3row1col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col2icon');
        addSpellId.setAttribute('data-spellId', 'shield_specialization');
        //Build arrow
        var spec3row1col2div = document.createElement('div');
        spec3row1col2div.style.maxHeight = "0px";
        spec3row1col2div.style.position = "absolute";
        spec3row1col2div.id = "spec3row1col2div";
        document.getElementById('spec3row1col2').appendChild(spec3row1col2div);
        var spec3row1col2arrow = document.createElement('img');
        spec3row1col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row1col2div').appendChild(spec3row1col2arrow);
        spec3row1col2arrow.style.position = "relative";
        spec3row1col2arrow.style.top = "-3px";
        spec3row1col2arrow.style.left = "19px";
        spec3row1col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row1col2div, spec3row1col2arrow);

    //Build spec3row1col3 Anticipation
    spec3row1col3.style.display = "block";
    spec3row1col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/anticipation.jpg')";
    spec3row1col3.style.backgroundRepeat = "no-repeat";
    spec3row1col3.style.backgroundSize = "34px 34px";
    spec3row1col3.style.backgroundPosition = "center center";
    spec3row1col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row1col3icon');
        addSpellId.setAttribute('data-spellId', 'anticipation');

    //Build spec3row1col4 Empty
    spec3row1col4.style.display = "none";

    //Build spec3row2col1 Improved Bloodrage
    spec3row2col1.style.display = "block";
    spec3row2col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_bloodrage.jpg')";
    spec3row2col1.style.backgroundRepeat = "no-repeat";
    spec3row2col1.style.backgroundSize = "34px 34px";
    spec3row2col1.style.backgroundPosition = "center center";
    spec3row2col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_bloodrage');
        //Build arrow
        var spec3row2col1div = document.createElement('div');
        spec3row2col1div.style.maxHeight = "0px";
        spec3row2col1div.style.position = "absolute";
        spec3row2col1div.id = "spec3row2col1div";
        document.getElementById('spec3row2col1').appendChild(spec3row2col1div);
        var spec3row2col1arrow = document.createElement('img');
        spec3row2col1arrow.src = '../images/table elements/arrow_direct_down.png';
        document.getElementById('spec3row2col1div').appendChild(spec3row2col1arrow);
        spec3row2col1arrow.style.position = "relative";
        spec3row2col1arrow.style.top = "-3px";
        spec3row2col1arrow.style.left = "19px";
        spec3row2col1arrow.style.zIndex += 1;
        arrowArray.push(spec3row2col1div, spec3row2col1arrow);

    //Build spec3row2col2 Empty
    spec3row2col2.style.display = "none";

    //Build spec3row2col3 Toughness
    spec3row2col3.style.display = "block";
    spec3row2col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/toughness.jpg')";
    spec3row2col3.style.backgroundRepeat = "no-repeat";
    spec3row2col3.style.backgroundSize = "34px 34px";
    spec3row2col3.style.backgroundPosition = "center center";
    spec3row2col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col3icon');
        addSpellId.setAttribute('data-spellId', 'toughness');

    //Build spec3row2col4 Iron Will
    spec3row2col4.style.display = "block";
    spec3row2col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/iron_will.jpg')";
    spec3row2col4.style.backgroundRepeat = "no-repeat";
    spec3row2col4.style.backgroundSize = "34px 34px";
    spec3row2col4.style.backgroundPosition = "center center";
    spec3row2col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row2col4icon');
        addSpellId.setAttribute('data-spellId', 'iron_will');

    //Build spec3row3col1 Last Stand
    spec3row3col1.style.display = "block";
    spec3row3col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/last_stand.jpg')";
    spec3row3col1.style.backgroundRepeat = "no-repeat";
    spec3row3col1.style.backgroundSize = "34px 34px";
    spec3row3col1.style.backgroundPosition = "center center";
    spec3row3col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col1icon');
        addSpellId.setAttribute('data-spellId', 'last_stand');

    //Build spec3row3col2 Improved Shield Block
    spec3row3col2.style.display = "block";
    spec3row3col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_shield_block.jpg')";
    spec3row3col2.style.backgroundRepeat = "no-repeat";
    spec3row3col2.style.backgroundSize = "34px 34px";
    spec3row3col2.style.backgroundPosition = "center center";
    spec3row3col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_shield_block');

    //Build spec3row3col3 Improved Revenge
    spec3row3col3.style.display = "block";
    spec3row3col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_revenge.jpg')";
    spec3row3col3.style.backgroundRepeat = "no-repeat";
    spec3row3col3.style.backgroundSize = "34px 34px";
    spec3row3col3.style.backgroundPosition = "center center";
    spec3row3col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_revenge');

    //Build spec3row3col4 Defiance
    spec3row3col4.style.display = "block";
    spec3row3col4.style.backgroundImage = "url('../images/spell icons/warrior/talents/defiance.jpg')";
    spec3row3col4.style.backgroundRepeat = "no-repeat";
    spec3row3col4.style.backgroundSize = "34px 34px";
    spec3row3col4.style.backgroundPosition = "center center";
    spec3row3col4.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col4icon');
        addSpellId.setAttribute('data-spellId', 'defiance');
    
    //Build spec3row4col1 Improved Sunder Armor
    spec3row4col1.style.display = "block";
    spec3row4col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_sunder_armor.jpg')";
    spec3row4col1.style.backgroundRepeat = "no-repeat";
    spec3row4col1.style.backgroundSize = "34px 34px";
    spec3row4col1.style.backgroundPosition = "center center";
    spec3row4col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row3col4icon');
        addSpellId.setAttribute('data-spellId', 'improved_sunder_armor');

    //Build spec3row4col2 Improved Disarm
    spec3row4col2.style.display = "block";
    spec3row4col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_disarm.jpg')";
    spec3row4col2.style.backgroundRepeat = "no-repeat";
    spec3row4col2.style.backgroundSize = "34px 34px";
    spec3row4col2.style.backgroundPosition = "center center";
    spec3row4col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col2icon');
        addSpellId.setAttribute('data-spellId', 'improved_disarm');

    //Build spec3row4col3 Improved Taunt
    spec3row4col3.style.display = "block";
    spec3row4col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_taunt.jpg')";
    spec3row4col3.style.backgroundRepeat = "no-repeat";
    spec3row4col3.style.backgroundSize = "34px 34px";
    spec3row4col3.style.backgroundPosition = "center center";
    spec3row4col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row4col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_taunt');

    //Build spec3row4col4 Empty
    spec3row4col4.style.display = "none";

    //Build spec3row5col1 Improved Shield Wall
    spec3row5col1.style.display = "block";
    spec3row5col1.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_shield_wall.jpg')";
    spec3row5col1.style.backgroundRepeat = "no-repeat";
    spec3row5col1.style.backgroundSize = "34px 34px";
    spec3row5col1.style.backgroundPosition = "center center";
    spec3row5col1.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col1icon');
        addSpellId.setAttribute('data-spellId', 'improved_shield_wall');

    //Build spec3row5col2 Concussion Blow
    spec3row5col2.style.display = "block";
    spec3row5col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/concussion_blow.jpg')";
    spec3row5col2.style.backgroundRepeat = "no-repeat";
    spec3row5col2.style.backgroundSize = "34px 34px";
    spec3row5col2.style.backgroundPosition = "center center";
    spec3row5col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col2icon');
        addSpellId.setAttribute('data-spellId', 'concussion_blow');
        //Build arrow
        var spec3row5col2div = document.createElement('div');
        spec3row5col2div.style.maxHeight = "0px";
        spec3row5col2div.style.position = "absolute";
        spec3row5col2div.id = "spec3row5col2div";
        document.getElementById('spec3row5col2').appendChild(spec3row5col2div);
        var spec3row5col2arrow = document.createElement('img');
        spec3row5col2arrow.src = '../images/table elements/arrow_skip1_down.png';
        document.getElementById('spec3row5col2div').appendChild(spec3row5col2arrow);
        spec3row5col2arrow.style.position = "relative";
        spec3row5col2arrow.style.top = "-3px";
        spec3row5col2arrow.style.left = "19px";
        spec3row5col2arrow.style.zIndex += 1;
        arrowArray.push(spec3row5col2div, spec3row5col2arrow);

    //Build spec3row5col3 Improved Shield Bash
    spec3row5col3.style.display = "block";
    spec3row5col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/improved_shield_bash.jpg')";
    spec3row5col3.style.backgroundRepeat = "no-repeat";
    spec3row5col3.style.backgroundSize = "34px 34px";
    spec3row5col3.style.backgroundPosition = "center center";
    spec3row5col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row5col3icon');
        addSpellId.setAttribute('data-spellId', 'improved_shield_bash');

    //Build spec3row5col4 Empty
    spec3row5col4.style.display = "none";

    //Build spec3row6col1 Empty
    spec3row6col1.style.display = "none";

    //Build spec3row6col2 Empty
    spec3row6col2.style.display = "none";

    //Build spec3row6col3 One-Handed Weapon Specialization
    spec3row6col3.style.display = "block";
    spec3row6col3.style.backgroundImage = "url('../images/spell icons/warrior/talents/one_handed_weapon_specialization.jpg')";
    spec3row6col3.style.backgroundRepeat = "no-repeat";
    spec3row6col3.style.backgroundSize = "34px 34px";
    spec3row6col3.style.backgroundPosition = "center center";
    spec3row6col3.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row6col3icon');
        addSpellId.setAttribute('data-spellId', 'one_handed_weapon_specialization');

    //Build spec3row6col4 Empty
    spec3row6col4.style.display = "none";

    //Build spec3row7col1 Empty
    spec3row7col1.style.display = "none";

    //Build spec3row7col2 Shield Slam
    spec3row7col2.style.display = "block";
    spec3row7col2.style.backgroundImage = "url('../images/spell icons/warrior/talents/shield_slam.jpg')";
    spec3row7col2.style.backgroundRepeat = "no-repeat";
    spec3row7col2.style.backgroundSize = "34px 34px";
    spec3row7col2.style.backgroundPosition = "center center";
    spec3row7col2.style.filter = "grayscale(100%)";
        //Define Tooltip
        var addSpellId = document.getElementById('spec3row7col2icon');
        addSpellId.setAttribute('data-spellId', 'shield_slam');

    //Build spec3row7col3 Empty
    spec3row7col3.style.display = "none";

    //Build spec3row7col4 Empty
    spec3row7col4.style.display = "none";

    calculator("warrior");
}

function removeArrows(){
    for (let i = arrowArray.length; i > 0; i--){
        arrowArray[0].remove();
        arrowArray.shift()
    }
}
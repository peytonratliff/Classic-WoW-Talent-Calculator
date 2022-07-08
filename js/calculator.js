function tooltipShow(id){
    var tooltip = document.getElementById("tooltip");
    var viewportHeight = window.innerHeight;

    populate(id);

    var tooltipX = document.getElementById(id).getBoundingClientRect().left + 42;
    var tooltipY = viewportHeight - document.getElementById(id).getBoundingClientRect().top;

    tooltip.style.left = tooltipX + "px";
    tooltip.style.bottom = tooltipY + "px";
    tooltip.style.display = "block";
    tooltip.style.zIndex += 1;
}

function tooltipHide(){
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function populate(elementId){

    var talent = document.getElementById(elementId);
    talentId = talent.getAttribute('data-spellId');

    tooltipName = document.getElementById('tooltipName');
    tooltipRank = document.getElementById('tooltipRank');
    tooltipType = document.getElementById('tooltipType');
    tooltipMana = document.getElementById('tooltipMana');
    tooltipCastTime = document.getElementById('tooltipCastTime');
    tooltipCooldown = document.getElementById('tooltipCooldown');
    tooltipClassReq = document.getElementById('tooltipClassReq');
    tooltipDesc = document.getElementById('tooltipDesc');
    tooltipLearn = document.getElementById('tooltipLearn');


    //Eventually move this into class-wide if statement. EX: if druid(if1/if2/if3) if hunter(if1/if2/if3) if mage(if1/if2/if3)
    if(talentId == "improved_wrath"){
        tooltipName.innerHTML = "Improved Wrath";
        tooltipMana.innerHTML = null;
        tooltipCastTime.innerHTML = null;
        tooltipCooldown.innerHTML = null;
        tooltipDesc.innerHTML = "Reduces the cast time of your Wrath spell by 0.1 sec."
    }
    if(talentId == "natures_grasp"){
        tooltipName.innerHTML = "Nature's Grasp";
        tooltipMana.innerHTML = "50 Mana";
        tooltipCastTime.innerHTML = "Instant";
        tooltipCooldown.innerHTML = "&#x200E;1 min cooldown";
        tooltipDesc.innerHTML = "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec."
    }
    if(talentId == "improved_natures_grasp"){
        tooltipName.innerHTML = "Improved Nature's Grasp";
        tooltipMana.innerHTML = null;
        tooltipCastTime.innerHTML = null;
        tooltipCooldown.innerHTML = null;
        tooltipDesc.innerHTML = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%."
    }
    if(talentId == "improved_entangling_roots"){
        tooltipName.innerHTML = "Improved Entangling Roots";
        tooltipMana.innerHTML = null;
        tooltipCastTime.innerHTML = null;
        tooltipCooldown.innerHTML = null;
        tooltipDesc.innerHTML = "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots."
    }

    //Hunter talent, used for testing
    if(talentId == "improved_aspect_of_the_hawk"){
        tooltipName.innerHTML = "Improved Aspect of the Hawk";
        tooltipMana.innerHTML = null;
        tooltipCastTime.innerHTML = null;
        tooltipCooldown.innerHTML = null;
        tooltipDesc.innerHTML = "While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec."
    }

}

function calculator(sourceClass){
    if(sourceClass == "druid"){
        //Initialize variables
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

        //Initialize row 1 for Balance
        spec1row1col1.style.filter = "none"; //Improved Wrath
            spec1row1col1.src="../images/icon borders/icon_border_noglow_green.png"
        spec1row1col2.style.filter = "none"; //Nature's Grasp

        //Initialize row 1 for Feral Combat
        spec2row1col2.style.filter = "none"; //Ferocity
        spec2row1col3.style.filter = "none"; //Feral Aggression

        //Initialize row 1 for Restoration
        spec3row1col2.style.filter = "none"; //Improved Mark of the Wild
        spec3row1col3.style.filter = "none"; //Furor
    }
    
    if(sourceClass == "hunter"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "mage"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "paladin"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "priest"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "rogue"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "shaman"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "warlock"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }

    if(sourceClass == "warrior"){
        window.alert("Initialize calc (" + sourceClass + ").");
    }
}
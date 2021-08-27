function tooltipShow(id){
    var tooltip = document.getElementById("tooltip");

    populate(tooltip, id);

    var tooltipX = window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
    var tooltipY = window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y

    tooltip.style.left = tooltipX + 43 + "px";
    tooltip.style.top = tooltipY - 195 + "px";
    tooltip.style.display = "block";
    tooltip.style.zIndex += 1;
}

function tooltipHide(){
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function populate(tooltip, elementId){

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

}
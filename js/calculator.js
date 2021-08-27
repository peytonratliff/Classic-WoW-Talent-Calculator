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

    if(talentId == "natures_wrath"){
        tooltipName.innerHTML = "Nature's Wrath";
    }

}
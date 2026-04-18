/*
Luzes On e Off
------------------------------------------------------
Colocar clicks nos switches para ligar e desligar as luzes.
*/

let lights = document.querySelectorAll('[id^="light_"]');
let switches = document.querySelectorAll('[id^="switch_"]');
let lightStatus = ['off', 'off', 'off'];

switches.forEach((sw, index) => {
    sw.addEventListener('click', () => {

        if(lightStatus[index] == 'off'){
            lightStatus[index] = 'on';
        } else {
            lightStatus[index] = 'off';
        }

        updateLightAndSwitchDisplay(index);

    });
});

function updateLightAndSwitchDisplay(index){

    // atualizar a luz
    lights[index].src = `light_${lightStatus[index]}.png`;

    // atualizar o switch
    switches[index].src = `switch_${lightStatus[index]}.png`;
}
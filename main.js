var lineCounter = 0;

$(document).ready(() => {
    gv.nextLine();
    lineCounter++;
    // clicking on text wrapper
    $('#text-wrapper').click(()=> {
        if(lineCounter < chapter.length) {
            gv.nextLine();
            gv.nextName();
            gv.nextBg();
            gv.nextItem();
            lineCounter++;
        }
    });
}); // end of ready function

//=========== game view =============
var gv = {
    // shows next line
    nextLine: () => { 
        $('#text-display').html(chapter[lineCounter].text);
    },
    // if there's a character's name, it chooses a side and shows it
    nextName: () => {
        if(!chapter[lineCounter].nameSide){
            $('#name-container').removeClass();
            $('#name-container').html('');
        }
        else {
            $('#name-container').html(chapter[lineCounter].speaker);
            if(chapter[lineCounter].nameSide === 'right'){
                $('#name-container').removeClass();
                $('#name-container').addClass('name-right');
            }
            else {
                $('#name-container').removeClass();
                $('#name-container').addClass('name-left');
            }
        }
    }, // next name end
    nextBg: () => {
        if(!chapter[lineCounter].backPic){
            $('#container').css('background-image','');
            $('#container').css('background-color', '#000000');
        }
        else{
            var url = `url(img/backgrounds/${chapter[lineCounter].backPic}.jpg`;
            $('#container').css('background-image', url);
        }
    },
    nextItem: () => {
        if(!chapter[lineCounter].itemPic){
            $('#item-pic').css('background-image','');
            $('#item-pic').css('visibility', 'hidden');
        }
        else {
            var url = `url(img/items/${chapter[lineCounter].itemPic}.png`;
            $('#item-pic').css('background-image',url);
            $('#item-pic').css('visibility', 'visible');
        }
    }
} //=========== game view end =============

// var timerList = [];
// window.onload = init;
// function init() {
//     var clickArea = document.getElementById("text-wrapper");
//     clickArea.onclick = onClick;
//     nextSpeechLine(0);
// }

// function onClick() {
//     if (isStillRunning) {
//         timerList.forEach(function(i){clearTimeout(i)});
//         isStillRunning = false;
//         charText.innerHTML = chapter[lineCounter - 1].text;
//     } else {
//         nextSpeechLine(lineCounter);
//     }
// }

// //======== NEXT LINE EVENT ==========
// var isStillRunning = false;
// function nextSpeechLine(i) {
//     charName.innerHTML = chapter[i].speaker;
//     charText.innerHTML = '';
//     chapter[i].text.split('').forEach(function (letter, i, arr) {
//         var id = setTimeout(function () {
//             isStillRunning = true;
//             charText.innerHTML = charText.innerHTML + letter;
//             if (arr.length - 1 === i) {
//                 isStillRunning = false;
//             }
//         }, 50 * i)
//         timerList.push(id);
//     });

// } //======== NEXT LINE EVENT END==========

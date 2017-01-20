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
            gv.nextAvatarLeft();
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
        if(!chapter[lineCounter].backSpeed) {chapter[lineCounter].backSpeed = 10}
        if(!chapter[lineCounter].backPic){
            $('#background').fadeOut(chapter[lineCounter].backSpeed);
        }
        else{
            var url = `url(img/backgrounds/${chapter[lineCounter].backPic}.jpg`;
            $('#background').css('background-image', url);
            $('#background').fadeIn(chapter[lineCounter].backSpeed);

        }
    },
    nextItem: () => {
        if(!chapter[lineCounter].itemPic){
            $('#item-pic').hide('fast');
        }
        else {
            var url = `url(img/items/${chapter[lineCounter].itemPic}.png`;
            $('#item-pic').css('background-image',url);
            $('#item-pic').show('fast');
        }
    },
    nextAvatarLeft: () => {
        if(!chapter[lineCounter].avatarLeft){
            $('#avatar-pic-left').fadeOut('fast');
        }
        else {
            if(!chapter[lineCounter].emotion){chapter[lineCounter].emotion = '01'}
            var url = `url(img/avatars/${chapter[lineCounter].avatarLeft}/${chapter[lineCounter].emotion}.png`;
            $('#avatar-pic-left').css('background-image',url);
            $('#avatar-pic-left').fadeIn('fast');
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

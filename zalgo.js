/* <![CDATA[ */
//============================================================
// ZALGO text script by tchouky
//============================================================

// data set of leet unicode chars
//---------------------------------------------------

//those go UP
// var zalgo_up = [
//   '\u030d', /*     ̍     */   '\u030e', /*     ̎     */   '\u0304', /*     ̄     */   '\u0305', /*     ̅     */
//   '\u033f', /*     ̿     */   '\u0311', /*     ̑     */   '\u0306', /*     ̆     */   '\u0310', /*     ̐     */
//   '\u0352', /*     ͒     */   '\u0357', /*     ͗     */   '\u0351', /*     ͑     */   '\u0307', /*     ̇     */
//   '\u0308', /*     ̈     */   '\u030a', /*     ̊     */   '\u0342', /*     ͂     */   '\u0343', /*     ̓     */
//   '\u0344', /*     ̈́     */    '\u034a', /*     ͊     */   '\u034b', /*     ͋     */   '\u034c', /*     ͌     */
//   '\u0303', /*     ̃     */   '\u0302', /*     ̂     */   '\u030c', /*     ̌     */   '\u0350', /*     ͐     */
//   '\u0300', /*     ̀     */   '\u0301', /*     ́     */   '\u030b', /*     ̋     */   '\u030f', /*     ̏     */
//   '\u0312', /*     ̒     */   '\u0313', /*     ̓     */   '\u0314', /*     ̔     */   '\u033d', /*     ̽     */
//   '\u0309', /*     ̉     */   '\u0363', /*     ͣ     */   '\u0364', /*     ͤ     */   '\u0365', /*     ͥ     */
//   '\u0366', /*     ͦ     */   '\u0367', /*     ͧ     */   '\u0368', /*     ͨ     */   '\u0369', /*     ͩ     */
//   '\u036a', /*     ͪ     */   '\u036b', /*     ͫ     */   '\u036c', /*     ͬ     */   '\u036d', /*     ͭ     */
//   '\u036e', /*     ͮ     */   '\u036f', /*     ͯ     */   '\u033e', /*     ̾     */   '\u035b', /*     ͛     */
//   '\u0346', /*     ͆     */   '\u031a' /*     ̚     */
// ];

//those go DOWN
// var zalgo_down = [
//   '\u0316', /*     ̖     */   '\u0317', /*     ̗     */   '\u0318', /*     ̘     */   '\u0319', /*     ̙     */
//   '\u031c', /*     ̜     */   '\u031d', /*     ̝     */   '\u031e', /*     ̞     */   '\u031f', /*     ̟     */
//   '\u0320', /*     ̠     */   '\u0324', /*     ̤     */   '\u0325', /*     ̥     */   '\u0326', /*     ̦     */
//   '\u0329', /*     ̩     */   '\u032a', /*     ̪     */   '\u032b', /*     ̫     */   '\u032c', /*     ̬     */
//   '\u032d', /*     ̭     */   '\u032e', /*     ̮     */   '\u032f', /*     ̯     */   '\u0330', /*     ̰     */
//   '\u0331', /*     ̱     */   '\u0332', /*     ̲     */   '\u0333', /*     ̳     */   '\u0339', /*     ̹     */
//   '\u033a', /*     ̺     */   '\u033b', /*     ̻     */   '\u033c', /*     ̼     */   '\u0345', /*     ͅ     */
//   '\u0347', /*     ͇     */   '\u0348', /*     ͈     */   '\u0349', /*     ͉     */   '\u034d', /*     ͍     */
//   '\u034e', /*     ͎     */   '\u0353', /*     ͓     */   '\u0354', /*     ͔     */   '\u0355', /*     ͕     */
//   '\u0356', /*     ͖     */   '\u0359', /*     ͙     */   '\u035a', /*     ͚     */   '\u0323' /*     ̣     */
// ];

//those always stay in the middle
var zalgo_mid = [
  '\u0315', /*     ̕     */   '\u031b', /*     ̛     */   '\u0340', /*     ̀     */   '\u0341', /*     ́     */
  '\u0358', /*     ͘     */   '\u0321', /*     ̡     */   '\u0322', /*     ̢     */   '\u0327', /*     ̧     */
  '\u0328', /*     ̨     */   '\u0334', /*     ̴     */   '\u0335', /*     ̵     */   '\u0336', /*     ̶     */
  '\u034f', /*     ͏     */   '\u035c', /*     ͜     */   '\u035d', /*     ͝     */   '\u035e', /*     ͞     */
  '\u035f', /*     ͟     */   '\u0360', /*     ͠     */   '\u0362', /*     ͢     */   '\u0338', /*     ̸     */
  '\u0337', /*     ̷     */   '\u0361', /*     ͡     */   '\u0489' /*     ҉_     */
];

// rand funcs
//---------------------------------------------------

//gets an int between 0 and max
function rand(max) {
  return Math.floor(Math.random() * max);
}

//gets a random char from a zalgo char table
function rand_zalgo(array) {
  var ind = Math.floor(Math.random() * array.length);
  return array[ind];
}

// utils funcs
//---------------------------------------------------

//lookup char to know if its a zalgo char or not
function is_zalgo_char(c) {
  var i;
  for (i = 0; i < zalgo_mid.length; i++)
    if (c == zalgo_mid[i])
      return true;
  return false;
}


// main shit
//---------------------------------------------------
function zalgo_textarea(txt) {
  var txtArr = txt.toLowerCase().split('');
  //console.log(txtArr);
  var jumpingTxt = '';
  for(var i = 0; i < txtArr.length; i++) {
    var checkHeight = rand(2);
    if (checkHeight == 1) {
      jumpingTxt += txtArr[i].toUpperCase();
    }
    else {
      jumpingTxt += txtArr[i];
    }
  }
  var txt = jumpingTxt;
  var newtxt = '';


  for (var i = 0; i < txt.length; i++) {
    if (is_zalgo_char(txt.substr(i, 1)))
      continue;

    var num_mid;

    //add the normal character
    newtxt += txt.substr(i, 1);

    //options
    if (z_mini) {
      num_mid = rand(2);
    }
    else if (z_normal) {
      num_mid = rand(6) / 2;
    }
    else //maxi
    {
      num_mid = rand(16) / 4 + 1;
    }

    for (var j = 0; j < num_mid; j++)
      newtxt += rand_zalgo(zalgo_mid);
  }

  //done

  return newtxt;
}
/* ]]> */
var z_mini = true;
var z_normal = false;

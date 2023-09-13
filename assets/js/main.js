
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

const components = document.querySelectorAll('div');
console.log(components);


document.addEventListener("mousemove", () => {
  let mousex = event.clientX;
  let mousey = event.clientY;
  document.getElementById("mouse").innerHTML = "X = " + mousex + ", " + "Y = " + mousey;
});

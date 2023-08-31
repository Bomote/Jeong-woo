// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Function to create an SVG element
  function createSvg() {
    // Create and configure an SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100% 100%");
    return svg;
  }

 // Function to create nested pyramid sides
 function createNestedPyramid(length, className, parentID, d) {
   // Get the parent element by its ID
   const parentElement = document.getElementById(parentID);

   // Loop to create the specified number of sides
   for (let i = 0; i < length; i++) {
       // Create a side element and add a class
       const side = document.createElement("div");
       side.classList.add(className);

       // Create an SVG element
       const svg = createSvg();
       // Create a path element and set the "d" attribute
       const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
       path.setAttribute("d", d);

       // Add the glow effect to the stroke using a filter
       path.setAttribute("filter", "url(#glow)");

       path.setAttribute("fill", "none");
       path.setAttribute("stroke", "#114b5f");
       path.setAttribute("stroke-width", "4");

       // Append the path to the SVG and the SVG to the side
       svg.appendChild(path);
       side.appendChild(svg);

       // Append the side to the parent element
       parentElement.appendChild(side);
   }
 }

 // Array of pyramid sizes with their IDs and paths
 const pyramidSizes = [
   { id: "pyramidXS", d: "M 197 180 L 203 180 L 220 220 L 180 220 Z" },
   { id: "pyramidSM", d: "M 196 160 L 204 160 L 240 240 L 160 240 Z" },
   { id: "pyramidMD", d: "M 195 140 L 205 140 L 260 260 L 140 260 Z" },
   { id: "pyramidLG", d: "M 193 120 L 207 120 L 280 280 L 121 280 Z" },
   { id: "pyramidXL", d: "M 190 100 L 210 100 L 300 300 L 99 300 Z" },
   { id: "pyramidXXL", d: "M 186 80 L 214 80 L 320 323 L 80 323 Z" },
   { id: "pyramid", d: "M 176 70 L 224 70 L 360 340 L 39 340 Z" },
   { id: "pyramidCAP", d: "M 196 200 L 204 200 L 224 240 L 176 240 Z" }
 ];

 // Loop through each pyramid size and create pyramid sides
 pyramidSizes.forEach(size => {
   createNestedPyramid(4, "side" + size.id.substring(7), size.id, size.d);
   const side = document.querySelectorAll(".side" + size.id.substring(7));
   side[0].classList.add("front" + size.id.substring(7));
   side[1].classList.add("back" + size.id.substring(7));
   side[2].classList.add("left" + size.id.substring(7));
   side[3].classList.add("right" + size.id.substring(7));
 });



  // Create the glow filter dynamically
  function createGlowFilter() {
      const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "glow");

      const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
      feGaussianBlur.setAttribute("stdDeviation", "5");
      feGaussianBlur.setAttribute("result", "coloredBlur");

      const feMerge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
      const feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      feMergeNode1.setAttribute("in", "coloredBlur");
      const feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      feMergeNode2.setAttribute("in", "SourceGraphic");

      feMerge.appendChild(feMergeNode1);
      feMerge.appendChild(feMergeNode2);

      filter.appendChild(feGaussianBlur);
      filter.appendChild(feMerge);

      return filter;
  }

  // Append the glow filter to the SVG element
  const svgElement = document.querySelector("svg"); // Replace with the actual selector
  const glowFilter = createGlowFilter();
  svgElement.appendChild(glowFilter);

  // Get button anchors and pyramid elements
  const btnAnchors = document.querySelectorAll(".btn");
  const pyramidElements = pyramidSizes.map(size => document.getElementById(size.id)); 

 // Click count for button interactions
 let clickCount = 0;
     
  const referralBtn = document.getElementById('referral-btn');
  const referralText = document.getElementById('reveal-btn');

  // Add click event listeners to button anchors
  btnAnchors.forEach((anchor, index) => {
  anchor.addEventListener("click", function(event) {
      event.preventDefault();
      handleClick(event);
      // Get the pyramid corresponding to the current clickCount
      const currentPyramid = pyramidElements[clickCount];
      
      if (clickCount <= index && currentPyramid) {
        const pyramidSides = currentPyramid.querySelectorAll(".side" + currentPyramid.id.substring(7));
        pyramidSides.forEach(side => {
          const svgElement = side.querySelector('svg'); // Select the SVG element inside the side
          const svgPath = svgElement.querySelector('path'); // Select the path element inside the SVG
      
          svgPath.classList.add('fill-pyramid');
          svgPath.classList.add('wave-pyramid');
        });

        //pyramidElements[clickCount].style.display = "none";
          anchor.classList.add("inactive");
          clickCount++;

          if (clickCount === btnAnchors.length) {
              referralText.style.display = "none"
              referralBtn.style.display = "inline-block"
              addBackPyramids();
          } else {
              pulseRemainingPyramids();
          }
      }
  });
  });


  // Function to remove the pulse class from remaining pyramids
  function removePulseFromRemainingPyramids() {
  pyramidSizes.forEach((pyramid, index) => {
      if (index >= clickCount) {
          const side = document.querySelectorAll(".side" + pyramid.id.substring(7));
          side[0].classList.remove("pulse");
          side[1].classList.remove("pulse");
          side[2].classList.remove("pulse");
          side[3].classList.remove("pulse");
      }
  });
  }

  // Function to apply the pulse animation to remaining pyramids
  function pulseRemainingPyramids() {
     pyramidSizes.forEach((pyramid, index) => {
         if (index >= clickCount) {
             const side = document.querySelectorAll(".side" + pyramid.id.substring(7));
             side[0].classList.add("pulse");
             side[1].classList.add("pulse");
             side[2].classList.add("pulse");
             side[3].classList.add("pulse");
         }
     });
     // Remove the pulse class from remaining pyramids after 2 seconds
     setTimeout(removePulseFromRemainingPyramids, 2000);
  }    
});

function animateButton(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
 
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
 bubblyButtons[i].addEventListener('click', animateButton, false);
};


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("referral-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function copyToClipboard(element) {
  const text = element.textContent;
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard: ', text);
    })
    .catch((error) => {
      console.error('Error copying text to clipboard: ', error);
    });

    modal.style.display = "none";
}

// Get all the buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');

// Function to add classes to the water div when a button is clicked
function handleClick(event) {
  event.preventDefault();

  const tableRow = event.target.closest('.table-row');
  const waterDiv = tableRow.querySelector('.water');

  waterDiv.classList.add('fill', 'wave');
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
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
    function createNestedPyramid(length, className, parentID, points) {
                // Get the parent element by its ID
        const parentElement = document.getElementById(parentID);

        // Loop to create the specified number of sides
        for (let i = 0; i < length; i++) {
                // Create a side element and add a class
            const side = document.createElement("div");
            side.classList.add(className);

            // Create an SVG element
            const svg = createSvg();
            // Create a polygon element and set attributes
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", points);

            // Add the glow effect to the stroke using a filter
            polygon.setAttribute("filter", "url(#glow)");

            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "#114b5f");
            polygon.setAttribute("stroke-width", "4");

            // Append the polygon to the SVG and the SVG to the side
            svg.appendChild(polygon);
            side.appendChild(svg);

            // Append the side to the parent element
            parentElement.appendChild(side);
        }
    }

    // Array of pyramid sizes with their IDs and points
    const pyramidSizes = [
        { id: "pyramidXS", points: "197,180 203,180 220,220 180,220" },
        { id: "pyramidSM", points: "196,160 204,160 240,240 160,240" },
        { id: "pyramidMD", points: "195,140 205,140 260,260 140,260" },
        { id: "pyramidLG", points: "193,120 207,120 280,280 121,280" },
        { id: "pyramidXL", points: "190,100 210,100 300,300 99,300" },
        { id: "pyramidXXL", points: "186,80 214,80 320,323 80,323" },
        { id: "pyramid", points: "176,70 224,70 360,340 39,340" },
        //{ id: "pyramidCAP", points: "200,190 200,190 210,210 190,210" },
        { id: "pyramidCAP", points: "196,200 204,200 224,240 176,240" }
    ];

    // Loop through each pyramid size and create pyramid sides
    pyramidSizes.forEach(size => {
        createNestedPyramid(4, "side" + size.id.substring(7), size.id, size.points);
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
        
  // Function to add pyramids back with a delay and interval
const addBackPyramids = () => {
    let index = clickCount - 1; // Index of the last removed pyramid
    const interval = 7500; // Interval in milliseconds (3 seconds)

    const addPyramidInterval = setInterval(() => {
        if (index >= 0) {
            pyramidElements[index].style.display = "flex";
            btnAnchors[index].classList.remove("inactive");
            index--;
        } else {
            clearInterval(addPyramidInterval); // Stop the interval
        }
    }, interval);
};

const referralBtn = document.getElementById('referral-btn');
const referralText = document.getElementById('reveal-btn');


// Add click event listeners to button anchors
btnAnchors.forEach((anchor, index) => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        if (clickCount <= index) {
            pyramidElements[clickCount].style.display = "none";
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

var animateButton = function(e) {

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
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("referral-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
  
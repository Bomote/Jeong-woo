document.addEventListener("DOMContentLoaded", function() {
    function createSvg() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 100% 100%");
        return svg;
    }

    function createNestedPyramid(length, className, parentID, points) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const side = document.createElement("div");
            side.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", points);
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "#114B5F");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            side.appendChild(svg);

            parentElement.appendChild(side);
        }
    }

    const pyramidSizes = [
        { id: "pyramidXS", points: "197,180 203,180 220,220 180,220" },
        { id: "pyramidSM", points: "196,160 204,160 240,240 160,240" },
        { id: "pyramidMD", points: "195,140 205,140 260,260 140,260" },
        { id: "pyramidLG", points: "193,120 207,120 280,280 121,280" },
        { id: "pyramidXL", points: "190,100 210,100 300,300 99,300" },
        { id: "pyramidXXL", points: "186,80 214,80 320,323 80,323" },
        { id: "pyramid", points: "176,70 224,70 369,360 31,360" },
        { id: "pyramidCAP", points: "200,190 200,190 210,210 190,210" }
    ];

    pyramidSizes.forEach(size => {
        createNestedPyramid(4, "side" + size.id.substring(7), size.id, size.points);
        const side = document.querySelectorAll(".side" + size.id.substring(7));
        side[0].classList.add("front" + size.id.substring(7));
        side[1].classList.add("back" + size.id.substring(7));
        side[2].classList.add("left" + size.id.substring(7));
        side[3].classList.add("right" + size.id.substring(7));
    });

    const btnAnchors = document.querySelectorAll(".btn");
    const pyramidElements = pyramidSizes.map(size => document.getElementById(size.id));

    let clickCount = 0;

    btnAnchors.forEach((anchor, index) => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            if (clickCount <= index) {
                pyramidElements[clickCount].style.display = "none";
                anchor.classList.add("inactive");
                clickCount++;
            }
        });
    });
});

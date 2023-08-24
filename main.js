document.addEventListener("DOMContentLoaded", function() {
    function createSvg() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 100% 100%");
        return svg;
    }

    function createEl(length, className, parentElement) {
        for (let i = 0; i < length; i++) {
            const side = document.createElement("div");
            side.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "176,70 224,70 369,360 31,360");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            side.appendChild(svg);

            parentElement.appendChild(side);
        }
    }

    const pyramid = document.getElementById("pyramid");
    createEl(4, "side", pyramid);

    const side = document.querySelectorAll(".side");
    side[0].classList.add("front");
    side[1].classList.add("back");
    side[2].classList.add("left");
    side[3].classList.add("right");

    function createNestedPyramid(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideXXL = document.createElement("div");
            sideXXL.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "186,80 214,80 320,323 80,323");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideXXL.appendChild(svg);

            parentElement.appendChild(sideXXL);
        }
    }

    createNestedPyramid(4, "sideXXL", "pyramidXXL");
    let sideXXL = document.querySelectorAll(".sideXXL")

    sideXXL[0].classList.add("frontXXL");
    sideXXL[1].classList.add("backXXL");
    sideXXL[2].classList.add("leftXXL");
    sideXXL[3].classList.add("rightXXL");

    function createNestedPyramidXL(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideXL = document.createElement("div");
            sideXL.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "190,100 210,100 300,300 99,300");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideXL.appendChild(svg);

            parentElement.appendChild(sideXL);
        }
    }

    createNestedPyramidXL(4, "sideXL", "pyramidXL");
    let sideXL = document.querySelectorAll(".sideXL")

    sideXL[0].classList.add("frontXL");
    sideXL[1].classList.add("backXL");
    sideXL[2].classList.add("leftXL");
    sideXL[3].classList.add("rightXL");
    
    
    function createNestedPyramidLG(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideLG = document.createElement("div");
            sideLG.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "193,120 207,120 280,280 121,280");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideLG.appendChild(svg);

            parentElement.appendChild(sideLG);
        }
    }

    createNestedPyramidLG(4, "sideLG", "pyramidLG");
    let sideLG = document.querySelectorAll(".sideLG")

    sideLG[0].classList.add("frontLG");
    sideLG[1].classList.add("backLG");
    sideLG[2].classList.add("leftLG");
    sideLG[3].classList.add("rightLG");
    
    
    function createNestedPyramidMD(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideMD = document.createElement("div");
            sideMD.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "195,140 205,140 260,260 140,260");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideMD.appendChild(svg);

            parentElement.appendChild(sideMD);
        }
    }

    createNestedPyramidMD(4, "sideMD", "pyramidMD");
    let sideMD = document.querySelectorAll(".sideMD")

    sideMD[0].classList.add("frontMD");
    sideMD[1].classList.add("backMD");
    sideMD[2].classList.add("leftMD");
    sideMD[3].classList.add("rightMD");
    
    
    function createNestedPyramidSM(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideSM = document.createElement("div");
            sideSM.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "196,160 204,160 240,240 160,240");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideSM.appendChild(svg);

            parentElement.appendChild(sideSM);
        }
    }

    createNestedPyramidSM(4, "sideSM", "pyramidSM");
    let sideSM = document.querySelectorAll(".sideSM")

    sideSM[0].classList.add("frontSM");
    sideSM[1].classList.add("backSM");
    sideSM[2].classList.add("leftSM");
    sideSM[3].classList.add("rightSM");

    
    
    function createNestedPyramidXS(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideXS = document.createElement("div");
            sideXS.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "197,180 203,180 220,220 180,220");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideXS.appendChild(svg);

            parentElement.appendChild(sideXS);
        }
    }

    createNestedPyramidXS(4, "sideXS", "pyramidXS");
    let sideXS = document.querySelectorAll(".sideXS")

    sideXS[0].classList.add("frontXS");
    sideXS[1].classList.add("backXS");
    sideXS[2].classList.add("leftXS");
    sideXS[3].classList.add("rightXS");
        
    
    function createNestedPyramidCAP(length, className, parentID) {
        const parentElement = document.getElementById(parentID);

        for (let i = 0; i < length; i++) {
            const sideCAP = document.createElement("div");
            sideCAP.classList.add(className);

            const svg = createSvg();
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "200,190 200,190 210,210 190,210");
            polygon.setAttribute("fill", "black");
            polygon.setAttribute("stroke", "black");
            polygon.setAttribute("stroke-width", "4");
            polygon.setAttribute("stroke-linecap", "round");

            svg.appendChild(polygon);
            sideCAP.appendChild(svg);

            parentElement.appendChild(sideCAP);
        }
    }

    createNestedPyramidCAP(4, "sideCAP", "pyramidCAP");
    let sideCAP = document.querySelectorAll(".sideCAP")

    sideCAP[0].classList.add("frontCAP");
    sideCAP[1].classList.add("backCAP");
    sideCAP[2].classList.add("leftCAP");
    sideCAP[3].classList.add("rightCAP");
});

//click counter
document.addEventListener("DOMContentLoaded", function() {
    const btnAnchors = document.querySelectorAll(".btn");
    const pyramidElements = [
        document.getElementById("pyramidXS"),
        document.getElementById("pyramidSM"),
        document.getElementById("pyramidMD"),
        document.getElementById("pyramidLG"),
        document.getElementById("pyramidXL"),
        document.getElementById("pyramidXXL"),
    ];

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

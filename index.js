const WORKSHOP = {
  "container": document.querySelector(".workshop-list"),
  0: document.getElementsByClassName("workshop-item")[0],
  1: document.getElementsByClassName("workshop-item")[1],
  2: document.getElementsByClassName("workshop-item")[2],
}
const FRAMES = {
  'container': document.querySelector('iframe'),
  'te': document.querySelector('iframe').contentWindow,
  'figures': './figures_calculator.html',
  'percentages': './percentages_and_discounts.html',
  'mode': './mode.html',
}

FRAMES.container.onload = () => {
  let frameDocument = FRAMES.container.contentDocument;
  let frameElement = frameDocument.documentElement;
  let frameHeight = frameElement.offsetHeight;

  FRAMES.container.style.height = `${frameHeight}px`
}

let selectedWorkshop = WORKSHOP[0];
let selectedFrame = "figures";

const changeFrame = srcData => {
  let src = srcData;
  if(selectedFrame != src) {

    FRAMES.container.src = FRAMES[src];
    selectedFrame = src;
  }
}
const changeFocus = target => {
  if(selectedWorkshop) {
    selectedWorkshop.classList.remove('workshop-item--selected');
  }
  selectedWorkshop = target;
  selectedWorkshop.classList.add('workshop-item--selected');
} 

WORKSHOP.container.addEventListener("click", e => {
  let target = e.target;
  
  while(target) {
    if(target.tagName === "LI") {
      changeFrame(target.dataset.src);
      changeFocus(target)
      return;
    }
    target = target.parentNode;
  }
})
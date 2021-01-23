export const NoScroll = () => {
    var eventCancelElems = document.querySelectorAll('.noscroll');
    if(eventCancelElems !== null){
    var eventCanceler = function(e){e.preventDefault();};
    for (let i = 0; i < eventCancelElems.length; i++) {
      eventCancelElems[i].addEventListener('wheel', eventCanceler, { passive: false });
      eventCancelElems[i].addEventListener('touchmove', eventCanceler, { passive: false });
    };
  };
};
const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
const buyButtons = document.querySelectorAll("button.buy");

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
  });

  function handleBuyButtonClick (event) {

    const button = event.target;
    //   console.log('You are buying it');
    //   console.log(parseFloat(event.target.dataset.price));
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.target === event.currentTarget);
    console.log("You clicked a button");
    // Stop this event from bubbling up
    // event.stopPropagation();

}

window.addEventListener('click', function(event) {
    console.log('you clicked the window');
    console.log(event.target);
    event.stopPropagation();
  },
    { capture: true }
  )

const photoEl = document.querySelector(".photo");
photoEl.addEventListener("mousemove", function(e) {
  console.log(e.currentTarget);
  console.count(e.currentTarget);
});

photoEl.addEventListener("mousemove", function(e) {
    console.log(e.currentTarget);
    console.log(this);
  });
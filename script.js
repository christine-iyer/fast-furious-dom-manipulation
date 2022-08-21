let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  
  // Do all of your work inside the document.addEventListener  

  // Part 1 Write a JavaScript statement that selects the #main-titleID element. 
  // Remember there are a couple of ways to query id. 
  // Change the text of the title to something shorter.
  const titleEl = document.getElementById('main-title');
  titleEl.innerHTML = "Let's change this to something short";

  // Part 2 Select the bodyand change the background-color to a new color of your choice
  const bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = '#c06c84';

  // Part 3 Select DOM's Favorite Things list and remove the last list item.
  // const liEl = document.querySelector('#favorite-things > li');
  // liEl.removeChild([liEl.length.length - 1]);
  const favoriteThings = document.querySelectorAll('#favorite-things > li');

  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1]);

  // Part 4 Select all .special-title class elements and change their font-sizeto 2rem. 
  // Remember you might have to iterate through the list of elements
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem';
  })


  // Part 5 Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  // const pastRacesEl = this.getElementById('past-races'); 
  // document.removeChild(pastRacesEl[3]);
  document.querySelectorAll('#past-races > li').forEach((item) => {
    if (item.textContent.trim() === 'Chicago') {
      document.querySelector('#past-races').removeChild(item)
    }
  })


  // Part 6 Let's add to DOM's Past Races list. Create a new <li> element, change the new 
  // <li> text to the name of a city, and append it to the Past Races list.
  const li = document.createElement('li');
  li.textContent = "Portland";
  document.querySelector('#past-races').appendChild(li);

  // Part 7 . 
  //new <h2>with text, and . Think about what order you 
  // want to create the elements, and what order you want to append them in.

  // Create a new .blog-post corresponding to the new city added in Part 6
  const blogPost = document.createElement('div');
  //You will have to create a new <div> with class 
  // of .blog-post, a 
  blogPost.classList.add('blog-post');
  //new <h2>with text
  const heading = document.createElement('h2');
  heading.textContent = "Portland, ME";

  // a new <p>with some text
  // aka "node"
  const pEl = document.createElement('p');
  pEl.textContent = "Here's what's happening in Portland this week. I'll be heading to the dentist and from there I'll zip over to a new manicurist. On Wednesday, I'll be joining Lisa, Andrew, and Max for mixed doubles. "
  document.querySelector('.main').appendChild(blogPost);
  blogPost.appendChild(heading);
  blogPost.appendChild(pEl);

  // Part 8 When you reload the page, the script.jsfile loads a 
  //random DOM quote. Let's play with the included function:
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  console.log(document.getElementById('quote-title'));
  document.getElementById('quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  //   Part 9
  // Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      // The mouseouthandler should toggle the class .purple
      evt.currentTarget.classList.toggle('purple');
    })
    item.addEventListener('mouseenter', (evt) => {
      evt.stopPropagation();
      // The mouseenterhandler should toggle the class .red
      evt.currentTarget.classList.toggle('red');
    })
    console.log(item);
    console.log(item.innerText);
  })
})

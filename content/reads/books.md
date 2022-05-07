---
title: Notes
date: 2022-05-04
sidebar: false
menu: main
---



<meta name="viewport" content="width=device-width, initial-scale=1.0">


<style>
* {
  box-sizing: border-box;
}
body {
  padding: 1rem;
}

/* Just for the fallback layout */

main {
  max-width: 500px;
  margin: 0 auto;
}
article {
  margin: 1rem 0;
}

/* Now lets do a Grid-based layout */

@supports (display: grid) {
  main {
    max-width: 10000px;
    margin: 0;
  }
  article {
    margin: 0;
  }
  .reads {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}

.reads {
  font-family: Avenir, Roboto, Helvetica, san-serif;
  font-size: 80%;
}
.book-item {
  display: flex;
  flex-flow: column;
  border:  1px solid black;
  border-radius: 1rem;
  padding: 2rem;
}
.book-item > h1 {
  margin: 1rem 1rem 0;
}
.book-item > ul {
  margin: 0 0 1rem;
}
.book-item > p {
  margin: 0.25em 1rem 1rem;
}
.book-item > img {
  order: -1;
  align-self: center;
}
.book-item > button {
  margin-top: auto;
  background: teal;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
}

@media only screen and (max-width:800px) {
  /* For tablets: */
  .reads, .book-item {
    width: 80%;
    padding: 0;
  }
  .right, .book-item {
    width: 100%;
  }
  .reads {
    display: grid;
    grid-template-columns: repeat(1, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .reads, .right, .book-item {
    width: 100%;
  }

  .reads {
    display: grid;
    grid-template-columns: repeat(1, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}

    </style>

<main class="reads">
  <article class="book-item">
    <a href="https://dheepak.notion.site/The-Psychology-of-Money-658df60998d74409bfb03ac3135e1f04"  target="_blank" >
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/psych-money.jpg?raw=true" style="width:100%;" >
    </a>
  </article>


 <article class="book-item">
    <a href="https://dheepak.notion.site/The-Psychology-of-Money-658df60998d74409bfb03ac3135e1f04"  target="_blank" >
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/atomicHabits.jpeg?raw=true" style="width:100%;" >
    </a>
  </article>



  <article class="book-item">
    <a href="https://dheepak.notion.site/The-Most-Important-Thing-Uncommon-Sense-for-The-Thoughtful-Investor-32e8601eea944a33ada5aaf3b7cb9d8d" target="_blank">
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/important-things.jpg?raw=true" style="width:100%;" >
     </a>
  </article>

  <article class="book-item">
    <a href="https://dheepak.notion.site/Why-We-Sleep-Unlocking-the-Power-of-Sleep-and-Dreams-4973c31285304d60b699383fb5358491" target="_blank">
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/4-why-we-sleep.jpeg?raw=true" style="width:100%;" >
    </a>
  </article>

<article class="book-item">
    <a href="https://dheepak.notion.site/Factfulness-Ten-Reasons-We-re-Wrong-About-The-World-And-Why-Things-Are-Better-Than-You-Think-f29462008ba04eb983fbffaa3caa73f9" target="_blank">
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/factfullness.jpg?raw=true" style="width:100%;" >
    </a>
  </article>


  <article class="book-item">
    <a href="https://dheepak.notion.site/Bulls-Bears-and-Other-Beasts-4c8d3bb670194136bb3224b561447e77" target="_blank">
    <img src="https://github.com/dheepakg/dheepakg.github.io/blob/main/assets/images/Books/bulls-bears.jpeg?raw=true" style="width:100%;">
     </a>
  </article>



  </article>
</main>

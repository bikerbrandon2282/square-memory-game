# Square Memory Game

[Live Site](https://bikerbrandon2282.github.io/square-memory-game/)

<details>
<summary>Image of Live game screen</summary>
![Live site of Square Memory Game](assets/images/readme-images/screenshot-game-page.webp)
</details>

## Table of Contents

1. [Project Overview](#project-overview)
2. [User Experience](#user-stories)
   - [User Stories](#user-stories)
   - [UX Goals](#user-experience-goals)
   - [Developer Challenges](#developer-challenges)
3. [Design](#design)
   - [Colour Pallette](#colour-pallette)
   - [Typography](#typography)
   - [Accessibility](#accessibility)
   - [Skeleton Layout / Wireframe Images](#skeleton-layout--wireframe-images)
4. [Features](#features)
   - [Landing / Home Page](#landing--home-page)
   - [Footer](#footer)
   - [Favicon & App Icons](#favicon--app-icons)
6. [Technologies Used](#technologies-used)
8. [Testing](#testing)
   - [Manual / Functional Testing Table](#manual--functional-testing-table)
   - [Cross-Browser Testing](#cross-browser-testing)
   - [Validator Testing](#validator-testing)
   - [WAVE - Web Accessibility Evaluation Tools](#wave---web-accessibility-evaluation-tools)
   - [Lighthouse Performance Optimisation Summary](#lighthouse-performance-optimisation-summary)
        - [Lighthouse Optimization Reflections](#lighthouse-optimization-reflections)
        - [Accessibility Testing Comparison](#accessibility-testing-comparison)
        - [User Feedback Testing](#user-feedback-testing)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Reflections](#reflections)


---

## Project Overview

This Website is a Memory game, based on the [Simon Memory Game](https://bikerbrandon2282.github.io/simon-memory-game/). I used this repo and game design to base my starting point from, As it has alot of the features I am going to need in order to make this a functional game.

This was chosen from one of the options for my Code Institute Milestone 2 Development project, as It is a fun game, reasonably easy to code and puts an interesting twist on the original game.

This game is easy to play, has a drop down menu for reading the instructions on how to play. The intention of this game is to provide a simple yet fun way to pass time and provide an enjoyable user experience.

[Back to Top](#square-memory-game)

User Experience
===============

Below are the User stories from the main users of the Website, These have been built with the websites target audience and the intended user experience in mind. 

## User Stories

### Story 1
As Site Owner I want to have a game that can be played easily by all ages and played as many times as someone likes without refreshing and resetting the score.

### Story 2

As a First Time User I would like to be able to read the instructions for the game in case I am unsure on how to play. 

### User Goals
These Goals have been derived from the above respective User Stories for an easier time tracking features.

### Story 1

- To create a easy-to-play game that can be used by any age
- To allow the game to continue infinitely (or until you get bored and stop.) 
- To allow people to see how high a score they can get.

### Story 2

- To be a able to easily read instructions on how to play the game.
- To be able to re-read instructions during gameplay

> Developer Note: Maybe use a Modal for instructions on page load then have a details drop down for seamless reading during gameplay

## Development Challenges

Throughout this website's development I have been faced with multiple challenges Some of these are detailed below.

- I was originally using a basic grid for the buttons and had a very hard time trying to organise the instructions, leaderboards, scorebox and new game button on the screen where I wanted it. To overcome this challenge I watched a [Youtube video]("https://www.youtube.com/watch?v=JYfiaSKeYhE/")

- I still struggled with placing and orientating the grid layout on multiple screens which has taken up so much of my time that my project was submitted late. (I am still struggling with this) With this issue, I am currently exploring and researching alternative methods to the grid layout that will still produce my intended design but with a little more adaptability as my main issue was with sizing issues and as the grid was not evenly filled it produced problems with layouts on smaller screens in which divs and other elements would overflow from there grid space and become unadaptable for moving it to a different layout on screen. Using Google AI mode to help me discuss options that would produce a similar output to the current layout, I am likely to change back to a Flexbox layout with defined parameters to specify where I want each item, however this is likely going to require a restructure of my HTML layout to bring the required output to be near-identical

- Branching from the above challange, I have implemented flexbox and styled it in a way that matches the original layout, This was a big switch however was much needed as the grid structure was very rigid and did not translate to smaller screens very well, but with the help of Microsoft CoPilot, this has been acheived and the layout now converts across all devices successfully.

## Design

### Colour Pallette

For the Colour Scheme of the site I chose the Colour Pallette below I got this from my starting colour of #FF5A60 which was used for my new game button, This was generated using the Color.space website linked in my credits below I tried the different colours to see if I could find a good background colour with a good contrasts with the buttons on the page, Any bright colour e.g. #0075C7, made it more difficult to play the game as when the button fades to show you the next sequence it can be hard to see which button was actually shown, The fade just blended into the background too much. And so I decided to use 

![Colour Pallette](assets/readme-images/color-pallette.png)

## Conclusion

This website is still very far behind being a finished product, However I have ran out of time to finish it and must submit something and progress with the rest of my course before I fall even more behind, When I get my results back, I am fully aware this will be an astonishingly state of a fail. However during the course of this project it has been the summer season with tremendous heatwaves which has resulted in the room my Computer is located in being uninhabitable, I have attempted to switch to working on my laptop for the remainder of the project however due to it being a Microsoft Surface pro, the layout of each device is completely different and stunts my progress so I began going to my computer every time the heat dies down and at night when I don't need to be sleeping for work the next morning, However due to the awkwardness of this It has caused me to fall quite behind, further than I believed I was. By the time I receive my results and have to resubmit I am hoping to be in a much better position, Temperature wise and milestone 3 wise. Whilst this is under review and whatever consequence comes, I will be continuing to improve and move this  project forward as and when I find time inbetween work and my portal learning, I know the readME is the biggest hurdle and needs alot more work, this will be slowly progressed as and when I can, There is a few photos and images in my images folder for this repo that have not yet been added to the site, I will be getting to these.. and The main game is currently under some layout issues with different devices behaving very differently, for example I added the mobile layout media query and lost all interaction with the squares solely on a mobile (was absolutely fine in chrome devTools mobile view) this is still being developed as I regained functionality of buttons 4-9 however the top buttons (1-3) don't seem to like being pressed on a mobile, I suspect this is something with the eventhandlers and will be looking into it. 

As much as this module has severly impacted my motivation to continue and my mental health in general, I am trying to see this for the massive learning curve that it is.. Review me with the upmost Generosity and Pity X'D
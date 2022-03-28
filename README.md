# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/o6w0h5vfdz.gif)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Learn CSS Box Model In 8 Minutes -- https://www.youtube.com/watch?v=rIO5326FgPE]
[https://www.w3schools.com/jsref]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

While making the web game I did not find appealing the way objects moved around as the screen size changed and there was no info in the instructions of HTML worked. 
For me HTML and CSS are new languages there for I had to spend time understanding them. By the end and with the help of a YouTube tutorial I shaped the website to 
my desired look. First was the rearranging of the elements depending on the windows size, which I fixed by setting the body to six hundred pixels by six hundred pixels. 
Now that I now the limits of my site I when ahead and fitted everything inside of it. But I was having another problem which was that the lives counter was under the 
start button, but I wanted them next to each other. By messing around with html, I them discovered that I need them in the same element<div> and make that element's display "flex".
Once this property was added it finally looked like I wanted it, from there I had to adjust the margins of the elements to fit into place. With the menu done 
I went for the buttons which did not present much of a challenge, just some minor margin changes. Then I decided to recolor the web to my style but 
my knowledge of CSS was lacking so I had to review again the instructions. I decided to make the background black. Such color would decrease the 
toll in the user eyes when playing, there fore making it more enjoyable. Nevertheless, I wanted to call attention when first opening the game therefore
 I decided to make the heading red, but it was missing something. Thankfully, I have some knowledge about properties that can be added to objects,
and that’s when stroke came to my mind, making a white stroke truly made it stand out and it was not to overwhelming.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After watching what happens behinds the scene, I wonder how to do animations and top bars. While I understand the concept, I still lack the knowledge on how to make them
 because if the program reads one line at the time, how can it process an animation without stop all other process. Also, how can I call a different HTML from the one I am on, 
it works by making new HTMLs inside the one I am currently in. At last, I would like to learn about API's they are useful in creating interactions between different websites.
 But also, in creating bots that work while users input added information.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

This project can be made into something more important, if I had the time adding a user controlled “cluetime” would be key. Having more interactivity would bring more 
audience to the site, things like leader boards and personal bests allow far more entertainment to the end user. One of the biggest advantages is the lack of theme in the
project as this brings the possibility to adapt to any medium. Also creating different modes to prolong the life of the web, things like “endless” or “music” mode. Can become
 a challenge for the developer and a service for the user. It should also be said that this website may have some use in the medical field, since it is a cognitive game 
it can help to practice kids to focus, but also elderly to train their brain.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/9c6ab581f32643abb0eecfce4d809cae)


## License

    Copyright Raul Lopez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
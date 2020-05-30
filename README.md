# Mem-Game

Mem-game is an online game that revolves around short-term memory skills. It requires minimal mental effort but is engaging enough to pleasantly entertain the user. this makes the game ideal during dull periods of time when one has to wait, e.g. while queing in line or in a waiting room.

## UX
the user is presented with a set of couples of identical cards, so that each card is present twice in the deck . As the game starts, all cards show their back face towards the user. By clicking on a card, the front face is presented to the user. The user can then click on a second card, which will also turn its face towards him/her. If the two cards' faces are identical, they'll stay with their faces turned towards the user. If the two cards do not match, they'll both turn their face away from the user after a few seconds. the game ends when all cards are turned. 

## Features
the home page contains a div centered in the screen where the user is greeted and asked to select the number of cards he will be playing with, either 12, 24 or 36. The selection occurs when the link displying the relevant number is clicked. The user will be brought to a different page depending on selection, for example clicking on the link diplayin the number "24" will load the page with the game with 24 cards. As the game page is loaded, all the cards are presented in a screen centered div with their back face towards the user. The cards' positions are randomly allocated each time the page is loaded.
When the first card is cliecked, it will show its face to the user, and stay turned until at least a second card is clicked. When the second card is clicked and turned, the user has a few seconds to look at them before they both turn again, if unmatching. All other cards are locked and prevented form turning during this time. 
If matching , the two cards will stay turned for the rest of the game, and all the other cards are unlocked for turning. 
Events listeners are in place to detect whether card has been turned, and whether this card is the first or the second in a sequence of two click events. An if statement looks up the data-id of each card's face to prevent it being labelled as first and second simultaneously when double-clicked. 

## Technology used
HTML, CSS and JavaScript.
Each of four HTML pages have their own corresponding style and script file.
all the 3 games pages are identical except for the number of card divs and the card and main div dimensions. By the nature of the game, all cards ust be in view of the user at all times.
This has led to card and main div being resized from rectangular to square shape with the increase of number of cards played with, so that all cards are simultaneously displayed irrespective of screen size and orientation.

## Testing
Testing has been carried out by opening the HTML pages on a separate tab and attempting to play.

## Deployment
This project has been deployed on GitHub, on only one main branch.

## Credits
The game has been developed following a step by step tutorial by Marina Ferreira (https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw), with modifications. 
The images for the card faces have been downloaded from Pixabay.com

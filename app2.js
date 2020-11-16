const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log

log(chalk.bgMagenta('There once was a very lazy doberman. . . '))
log(chalk.yellow('Who napped and napped and napped all day. But when she awoke she found her food dish was very very very empty.'))
log(chalk.bgRed('When she found this, she became very very very sad and began wandering the house looking for someone to feed her.'))

chalkAnimation.rainbow('When she found her owner, she became very very very excited and began dancing with joy!');
setTimeout(() => {
    // Stop the 'Lorem ipsum' animation, then write on a new line.
    console.log('Yay! She found food, and with a full belly can go back to napping!');
}, 1000);
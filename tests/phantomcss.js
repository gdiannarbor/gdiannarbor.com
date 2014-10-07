var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
    screenshotRoot: './shots-phantom',
    failedComparisonsRoot: './shots-phantom/failures'
});

// Set the page width
casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here

casper.start('http://localhost/~jewls/gdi/gdiannarbor.com');

casper.then(function(){
  phantomcss.screenshot('.sidebar', 'Sidebar');
});

casper.then(function(){
  phantomcss.screenshot('.intro', 'Intro');
});

casper.then(function(){
  phantomcss.screenshot('.footer', 'Footer');
});

casper.then(function(){
  phantomcss.compareAll();
});

casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});

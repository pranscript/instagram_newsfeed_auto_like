
var counter = 0;   // current number of liked post
var totalLikes = 200;  // number of likes you want, Recommended is not more than 200 per day.
var likeButtonClassName = 'glyphsSpriteHeart__outline__24__grey_9 u-__7';  // This is the class name of the "Empty heart shape" icon on instagram. If the code isn't working then do check the class name by inspecting the element. Instagram ususally changes it.
var scrollYAxisBy = 3000;   // This scrolls Y axis by 3000 pixels. You can change it accordingly. 
var timeInMillis = 10000;   // Script will like not exactly at 10th second but between a range of 8-12 seconds. Recommended is 10 seconds or put higher value to be on the safe side.


function likeInsta() {
	if (counter >= totalLikes) {
		return;
	}
	let i = 0;
	let HTMLElementArray = document.getElementsByClassName(likeButtonClassName);
    console.log(HTMLElementArray);
	let arr = Array.from(HTMLElementArray);
	if (arr.length != 0) {                      // Condition is true if it founds unliked post
		for (i = 0; i < arr.length; i++) {
            if(counter==totalLikes){
                console.log("Liked "+ totalLikes+ " posts. I am done!");
                break;
            }
			arr[i].click();
			counter++;
			console.log( 'Total liked post is - ' + counter);
		}
		if (i == arr.length) {                  // Enters here if all current visible posts are liked
			window.scrollBy(0, scrollYAxisBy);       // 
			setTimeout(function() {
				console.log('Called function again');
				likeInsta();
			}, Math.floor((Math.random() *3000) + timeInMillis));
		}
	} else {                                    // Enters here if current visible posts are all liked previously and no new unliked posts are there
		window.scrollBy(0, scrollYAxisBy);
		setTimeout(function() {
			console.log('Called function again as no new post to like');
			likeInsta();
		}, Math.floor((Math.random() *3000) + timeInMillis));
	}
}
likeInsta();

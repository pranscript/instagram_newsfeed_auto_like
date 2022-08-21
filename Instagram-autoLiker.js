
var counter = 0;   // current number of liked post
var totalLikes = 10;  // number of likes you want, Recommended is not more than 200 per day.
var likeButtonClassName = '_aamw';  // This is the class name of the "heart shape" element on instagram. If the code isn't working then do check the class name by inspecting the element. Instagram ususally changes it.
var scrollYAxisBy = 3000;   // This scrolls Y axis by 3000 pixels. You can change it accordingly. 
var timeInMillis = 100000;   // Script will like not exactly at 10th second but between a range of 100-200 seconds.


function likeInsta() {
	if (counter >= totalLikes) {
		return;
	}
	let i = 0;
	let HTMLElementArray = document.getElementsByClassName(likeButtonClassName);
    //console.log(HTMLElementArray);
	let arr = Array.from(HTMLElementArray);
	if (arr.length != 0) {		// Condition is true if it founds like element
		for (i = 0; i < arr.length; i++) {
		    if(counter==totalLikes){
			console.log("Liked "+ totalLikes+ " posts. I am done!");
			break;
		    }
			let buttonChild = arr[i].firstChild;
			let svgChild = buttonChild.firstChild.firstChild;
			if(svgChild.nodeName == "svg"){
				if(svgChild.getAttributeNode('aria-label').value = "Like"){
					buttonChild.click();
					counter++;
					console.log( 'Total liked post is - ' + counter);
				}
				else{
					console.log( 'Post Already Liked');
				}
			}	
		}
		if (i == arr.length) {                  // Enters here if all current visible posts are liked
			window.scrollBy(0, scrollYAxisBy);
			let wait = Math.floor((Math.random() *100000) + timeInMillis);
			console.log('Slept for ' + (wait/1000) + " seconds" );
			setTimeout(function() {
				console.log('Called function again');
				likeInsta();
			}, wait);
		}
	} else {                                    
		window.scrollBy(0, scrollYAxisBy);
		let wait = Math.floor((Math.random() *100000) + timeInMillis);
		console.log('Slept for ' + (wait/1000) + " seconds" );
		setTimeout(function() {
			console.log('Called function again as no new post to like');
			likeInsta();
		}, Math.floor((Math.random() *3000) + timeInMillis));
	}
}
likeInsta();

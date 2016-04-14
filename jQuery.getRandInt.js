;(function(){
	if (jQuery && !jQuery.hasOwnProperty('getRandInt')) 
		jQuery.getRandInt = function(min, max, dec){if(min>max){var a=min,b=max;"boolean"==typeof dec&&!0===dec||"object"==typeof dec&&null!==dec&&dec.valueOf&&!0===dec.valueOf()?(min=b+1,max=a-1):(min=b+(a-b)/999,max=a-(a-b)/999)}a=Math.random()*(max-min+1);return"boolean"==typeof dec&&!0===dec||"object"==typeof dec&&null!==dec&&dec.valueOf&&!0===dec.valueOf()?~~a+~~min:"string"==typeof dec&&!isNaN(parseFloat(dec))||"number"==typeof dec?(a=(a+min).toFixed(dec),a=a<=Math.max(max,min)?a:(a/2).toFixed(dec),(parseFloat(a)+"").length==(a+"").length?parseFloat(a):a):(a+=min,a<=Math.max(max,min)?a:a/2)};
})();

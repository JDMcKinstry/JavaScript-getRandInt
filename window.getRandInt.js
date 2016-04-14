;(function(){
	if (!window['getRandInt']) window.getRandInt = function(min, max, dec) {
		if (min > max) {
			var paraMax = min,
				paraMin = max;
			if ("boolean" == typeof dec && !0 === dec || "object" == typeof dec && dec !== null && dec.valueOf && !0 === dec.valueOf())
				(min = paraMin + 1, max = paraMax - 1);
			else 
				(min = paraMin + (paraMax - paraMin) / 999, max = paraMax - (paraMax - paraMin) / 999);
		};
		var r = Math.random() * (max - min + 1);
		if ((typeof dec == "boolean" && !0 === dec) || (typeof dec == "object" && dec !== null && dec["valueOf"] && dec.valueOf() === !0))
			return ~~r + ~~min;
		else if ((typeof dec == "string" && !isNaN(parseFloat(dec))) || typeof dec == "number")
			return r = (r + min).toFixed(dec), r = r <= Math.max(max, min) ? r : (r/2).toFixed(dec), (parseFloat(r)+"").length == (r+"").length ? parseFloat(r) : r;
		return r = r + min, r <= Math.max(max, min) ? r : r/2;
	}
})();

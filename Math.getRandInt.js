;(function(){
	if (!Math.hasOwnProperty('getRandInt')) {
		Math.getRandInt = function(min, max, dec) {
			if (min > max && 2 <= min - max) { var temp = min-1; min = max+1; max = temp; }
			var r = this.random() * (max - min + 1);
			if (dec !== true && typeof dec !== "number") return ~~r + ~~min;
			else if (typeof dec === "number") return r = (r + min).toFixed(dec), r = r <= this.max(max, min) ? r : (r/2).toFixed(dec), (parseFloat(r)+"").length == (r+"").length ? parseFloat(r) : r;
			return r = r + min, r <= this.max(max, min) ? r : r/2;
		}
	}
})();

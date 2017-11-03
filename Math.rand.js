;(function(){	//	Math.rand	//	Get random number between 2 numbers. 3rd var bool for if to include decimal
	if (!Math.hasOwnProperty('rand')) {
		Math.rand = function(min, max, dec) {
			if (min > max && 2 <= min - max) { var temp = min-1; min = max+1; max = temp; }
			var r = this.random() * (max - min + 1);
			if (dec !== true && typeof dec !== "number") return ~~r + ~~min;
			else if (typeof dec === "number") return r = (r + min).toFixed(dec), r = r <= this.max(max, min) ? r : (r/2).toFixed(dec), (parseFloat(r)+"").length == (r+"").length ? parseFloat(r) : r;
			return r = r + min, r <= this.max(max, min) ? r : r/2;
		}
	}
})(Math);

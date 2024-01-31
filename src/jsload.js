export default function(b, j) {
    var d = b;
    var c = [];
    var g = function(i, l) {
        if (!f(c, i)) {
            var k = document.createElement("script");
            k.type = "text/javascript";
            k.src = i;
            l = l || function() {};
            k.onload = k.onreadystatechange = function() {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                    l();
                    c.push(i)
                }
            };
            document.body.appendChild(k)
        } else {
            l()
        }
    };
    var f = function(l, n) {
        if (l != null && l.length > 0) {
            var k = l.length;
            for (var m = 0; m < k; m++) {
                if (l[m] == n) {
                    return true
                }
            }
        }
        return false
    };
    if (d.length > 0) {
        var h = 0;
        for (var e = 0; e < d.length; e++) {
            g(d[e], function() {
                h++;
                if (h == d.length) {
                    if (typeof j == "function") {
                        j()
                    }
                }
            })
        }
    }
}
(function () {
	function loadJS (url, callback) {
		var head = window.document.getElementsByTagName('head')[0];
		var script = window.document.createElement('script');
		script.onload = script.onreadystatechange = script.onerror = function () {
			if (script && script.readyState && /^(?!(?:loaded|complete)$)/.test(script.readyState)) {
				return;
			}
			script.onload = script.onreadystatechange = script.onerror = null;
			script.src = '';
			script.parentNode.removeChild(script);
			script = null;
			if (callback) { callback(); }
		};
		script.charset = 'utf-8';
		script.async = true;
		script.src = url;
		try { head.appendChild(script); } catch (exp) { console.log(exp); };
	}

	loadJS('//<%- host %>/js/libs/information-flow-layout-render.umd.min.js',
	function () {
		var data = <%= JSON.stringify(data) %>;
		var adApp = new InformationFlowLayoutRender();
		adApp.render('myid', data);
	});

})();

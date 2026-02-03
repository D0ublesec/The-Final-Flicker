/* Manual view only — class selector, diagram buttons */
(function () {
    var CLASSES = window.CLASSES;
    if (!CLASSES) return;

    var manualClassPool = CLASSES.slice();
    var currentManualPair = [];

    function updatePoolStatus() {
        var el = document.getElementById('pool-status');
        if (el) el.textContent = manualClassPool.length + ' Classes Available.';
    }

    window.drawClassesManual = function () {
        if (manualClassPool.length < 3) {
            alert('Reset required (need at least 3 classes).');
            return;
        }
        var idx1 = Math.floor(Math.random() * manualClassPool.length);
        var idx2 = idx1;
        while (idx2 === idx1) idx2 = Math.floor(Math.random() * manualClassPool.length);
        var idx3 = idx1;
        while (idx3 === idx1 || idx3 === idx2) idx3 = Math.floor(Math.random() * manualClassPool.length);
        currentManualPair = [manualClassPool[idx1], manualClassPool[idx2], manualClassPool[idx3]];
        document.getElementById('name-0').textContent = currentManualPair[0].name;
        document.getElementById('desc-0').textContent = currentManualPair[0].desc;
        document.getElementById('name-1').textContent = currentManualPair[1].name;
        document.getElementById('desc-1').textContent = currentManualPair[1].desc;
        document.getElementById('name-2').textContent = currentManualPair[2].name;
        document.getElementById('desc-2').textContent = currentManualPair[2].desc;
        document.getElementById('selection-area').style.display = 'grid';
        document.getElementById('result-area').style.display = 'none';
    };

    window.pickClassManual = function (i) {
        var sel = currentManualPair[i];
        manualClassPool = manualClassPool.filter(function (c) { return c.name !== sel.name; });
        var res = document.getElementById('result-area');
        res.innerHTML = '<strong>ACCEPTED:</strong> You are <em>' + sel.name + '</em>.';
        res.style.display = 'block';
        document.getElementById('selection-area').style.display = 'none';
        updatePoolStatus();
    };

    window.resetPoolManual = function () {
        manualClassPool = CLASSES.slice();
        updatePoolStatus();
        document.getElementById('selection-area').style.display = 'none';
        document.getElementById('result-area').style.display = 'none';
    };

    window.showDiagram = function (c) {
        document.querySelectorAll('.diagram-display').forEach(function (e) { e.classList.remove('active'); });
        var d = document.getElementById('diag-' + c);
        if (d) d.classList.add('active');
    };

    function populateManual() {
        var grid = document.getElementById('manual-class-grid');
        if (grid) {
            grid.innerHTML = '';
            CLASSES.forEach(function (cls) {
                grid.innerHTML += '<div class="class-card"><span class="class-name">' + cls.name + '</span>' + cls.desc + '</div>';
            });
        }
    }

    populateManual();
    updatePoolStatus();
})();

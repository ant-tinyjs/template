;
(function () {
  var config = {
    showFPS: true,
    dpi: 1.5,
  };
  Tiny.app = new Tiny.Application(config);

  var main = {
    init: function () {
      console.log('init');

      this.resourceLoad();
    },
    resourceLoad: function () {
      var resources = [];
      for (var key in RESOURCES) {
        resources.push(RESOURCES[key]);
      }
      var progress = document.getElementById('progress');
      var percent = document.getElementById('percent');

      Tiny.Loader.run({
        resources: resources,
        onProgress: function (pre, res) {
          console.log('percent:', pre + '%', res.name);

          var num = ~~pre;
          //更新UI
          percent.innerHTML = num + '%';
          progress.style.width = num + '%';
        },
        onAllComplete: function () {
          console.log('all complete');
          //clear DOM
          var body = document.body;
          body.removeChild(percent);
          body.removeChild(progress.parentNode);

          Tiny.app.run(new StartLayer());
        },
      });
    },
  };
  main.init();
})();

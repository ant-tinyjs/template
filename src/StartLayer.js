var StartLayer = function () {
  Tiny.Container.call(this);
  // 通过 fromImage 实例化精灵
  var sprite = Tiny.Sprite.fromImage(RESOURCES['TinyjsPNG']);
  // 设置精灵的中心点
  sprite.setAnchor(0.5);
  // 设置精灵的缩放
  sprite.setScale(0.5);
  // 设置精灵相对画布的位置，此处设置居中
  sprite.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);

  // 新建 action
  var rotateTo360Action = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
  // 执行 action RepeatForever
  sprite.runAction(Tiny.RepeatForever(rotateTo360Action));

  // 设置精灵可交互的
  sprite.setEventEnabled(true);
  // 绑定 tap 和 mouseup 事件
  sprite.on('pointerdown', function () {
    console.log('taped!');
  });
  // 将精灵添加到场景中
  this.addChild(sprite);
};
StartLayer.prototype = Object.create(Tiny.Container.prototype);
StartLayer.prototype.constructor = StartLayer;

window.onload = function() {
  var size = 512
  var canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  canvas.style.border = 'solid black 1px';

  document.body.appendChild(canvas);

  var mmd = new MMD(canvas, canvas.width, canvas.height);
  mmd.initShaders();
  mmd.initParameters();
  mmd.registerKeyListener(document);
  mmd.registerMouseListener(document);

  var miku = new MMD.Model('model', 'Miku_Hatsune_Ver2.pmd');
  //var miku = new MMD.Model('Lat', 'Normal.pmd');
  //var miku = new MMD.Model('mobko', 'mobko.pmd');
  //var miku = new MMD.Model('yufu', 'yufu.pmd');
  //var miku = new MMD.Model('model', 'Rin_Kagamine.pmd');

  miku.load(function() {
    mmd.addModel(miku);
    mmd.initBuffers();
    mmd.start();

    var dance = new MMD.Motion('motion/kishimen.vmd');
    dance.load(function() {
      mmd.addModelMotion(miku, dance, true);

      mmd.play()
    });
  });
};
/*
Dammy_Bone.pmd
Haku_Yowane.pmd
KAITO.pmd
Len_Kagamine.pmd
MEIKO.pmd
Meiko_Sakine.pmd
Miku_Hatsune_metal.pmd
Miku_Hatsune.pmd
Miku_Hatsune_Ver2.pmd
Neru_Akita.pmd
Rin_Kagamene_act2.pmd
Rin_Kagamine.pmd
*/

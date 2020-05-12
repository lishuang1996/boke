<template>
  <div>
    <div id="container" @mousedown="mousedown" @mousemove.prevent='mousemove' @mouseup='mouseup'></div>
  </div>
</template>

<script>
import * as Three from "three";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      meshs: [],
      num: [
        [[0,1,0], [-1,1,0], [1,1,0], [-1,1,1], [-1,1,-1], [1,1,-1], [1,1,1], [0,1,-1], [0,1,1]],
        [[-1,0,0], [1,0,0], [-1,0,1], [-1,0,-1], [1,0,-1], [1,0,1], [0,0,-1], [0,0,1]],
        [[0,-1,0], [-1,-1,0], [1,-1,0], [-1,-1,1], [-1,-1,-1], [1,-1,-1], [1,-1,1], [0,-1,-1], [0,-1,1]]
      ],
      is_moving:false,
      screenY:0,
      screenX:0
    };
  },
  methods: {
    init: function() {
      let container = document.getElementById("container");
      this.camera = new Three.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.5,
        1000
      );
      this.camera.position.set(0, 0, 8);
      this.scene = new Three.Scene();
      let geometry = new Three.BoxGeometry(1, 1, 1);
      let material = new Three.MeshNormalMaterial({
        color: 0x00ff7c,
        wireframe: true,
        wireframeLinewidth: 1
      });
      this.num.forEach((item, index) => {
          item.forEach((item_, index_) => {
            let mesh = new Three.Mesh(geometry, material);
            this.scene.add(mesh);
            mesh.position.set(item_[0], item_[1], item_[2]);
            this.meshs.push(mesh);
          });
      });
      //角度
      // this.mesh.rotation.x = Math.floor(Math.random() * 360);
      // this.mesh.rotation.y = Math.floor(Math.random() * 360);
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      // requestAnimationFrame(this.animate);
      // this.meshs[0].rotation.y += 0.01;
      console.log(this.meshs)
      this.renderer.render(this.scene, this.camera);
    },
    mousedown: function() {
      this.is_moving = true;
    },
    mousemove: function(e) {
      if (this.is_moving) {
        if(this.screenY){
          if(e.screenY>this.screenY){
            this.scene.rotation.x += 0.02;
          }else{
            this.scene.rotation.x -= 0.02;
          }
          this.screenY = e.screenY
          this.renderer.render(this.scene, this.camera);
        }else{
          this.screenY = e.screenY
        }
        if(e.screenX){
          if(e.screenX>this.screenX){
            this.scene.rotation.y += 0.02;
          }else{
            this.scene.rotation.y -= 0.02;
          }
          this.screenX = e.screenX
          this.renderer.render(this.scene, this.camera);
        }else{
          this.screenX = e.screenX
        }
      }
    },
    mouseup: function(e) {
      this.is_moving = false;
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>
<style scoped>
#container {
  height: 600px;
  width: 600px;
}
</style>
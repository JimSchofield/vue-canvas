const CvsCircle = {
  name: 'CvsCircle',
  props: {
    x: Number,
    y: Number,
    radius: Number
  },
  inject: ['globalCanvas'],
  methods: {
    renderToCanvas(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  },
  render(createElement) {
    if (this.globalCanvas.ctx) {
      this.renderToCanvas(this.globalCanvas.ctx);
    }
  }
};

export default CvsCircle;
const CvsRectangle = {
  name: 'CvsRectangle',
  props: {
    x: Number,
    y: Number,
    width: Number,
    height: Number,
  },
  inject: ['globalCanvas'],
  methods: {
    renderToCanvas(ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  },
  render(createElement) {
    if (this.globalCanvas.ctx) {
      this.renderToCanvas(this.globalCanvas.ctx);
    }
  }
};

export default CvsRectangle;
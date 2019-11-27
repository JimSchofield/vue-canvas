const CvsImage = {
  name: 'CvsImage',
  props: {
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    url: String,
    imageElement: HTMLImageElement,
  },
  data() {
    return {
      image: null,
    }
  },
  inject: ['globalCanvas', 'rerender'],
  methods: {
    renderToCanvas(ctx) {
        ctx.drawImage(this.image, 0, 0);
    },
    async getImage(url) {
      return await new Promise(res => {
        const image = new Image();
        image.src = url;
        image.onload = returnImage;

        function returnImage() {
          res(image);
        }
      })
    }
  },
  async render(createElement) {
    if (!this.image) {
      this.image = await this.getImage(this.url);
    }

    if (this.globalCanvas.ctx && this.image) {
      this.renderToCanvas(this.globalCanvas.ctx);
    }
  }
};

export default CvsImage;
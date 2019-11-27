export class Button {
  private data: any;
  private container: any;
  public elemDom: any;

  constructor(data: any, container: any) {
    this.data = data;
    this.container = container;

    this.init();
  }

  private init(): void {
    this.elemDom = this.createButton();
  }

  private createButton(): any {
    let button = document.createElement('button');
    button.innerText = this.data.title;
    button.addEventListener('click', this.data.onClick.bind(this))
      
    this.container.append(button);
    return button;
  }

  public active(): void {
    this.elemDom.classList.add('active');
  }
  public disactive(): void {
    this.elemDom.classList.remove('active');
  }
}
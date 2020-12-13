class Tree {
  constructor(
    top = 50,
    left = 100,
    color = '#036d1e',
    trunkColor = '#53350',
    starColor = '#ffd105',
  ) {
    this.top = top;
    this.left = left;
    this.color = color;
    this.trunkColor = trunkColor;
    this.starColor = starColor;
  }

  frame = document.createElement('div');
  tree = document.createElement('div');
  starContainer = document.createElement('div');
  star = document.createElement('div');
  treeTop = document.createElement('div');
  treeMiddle = document.createElement('div');
  treeBottom = document.createElement('div');
  trunk = document.createElement('div');
  ornament1 = document.createElement('div');
  ornament2 = document.createElement('div');
  ornament3 = document.createElement('div');
  ornament4 = document.createElement('div');
  ornament5 = document.createElement('div');
  ornament6 = document.createElement('div');
  ornament7 = document.createElement('div');
  ornament8 = document.createElement('div');
  ornament9 = document.createElement('div');
  ornament10 = document.createElement('div');
  ornament11 = document.createElement('div');
  ornament12 = document.createElement('div');
  ornament13 = document.createElement('div');
  ornament14 = document.createElement('div');

  render() {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    this.tree.classList.add('tree');
    this.frame.append(this.tree);

    // treeTop
    this.treeTop.classList.add('tree__top');
    this.treeTop.style.backgroundColor = this.color;
    this.tree.append(this.treeTop);

    // treeMiddle
    this.treeMiddle.classList.add('tree__middle');
    this.treeMiddle.style.backgroundColor = this.color;
    this.tree.append(this.treeMiddle);

    //treeBottom
    this.treeBottom.classList.add('tree__bottom');
    this.treeBottom.style.backgroundColor = this.color;
    this.tree.append(this.treeBottom);

    // trunk
    this.trunk.classList.add('tree__trunk');
    this.trunk.style.backgroundColor = this.trunkColor;
    this.tree.append(this.trunk);

    // STAR
    this.starContainer.classList.add('tree__star');
    this.tree.append(this.starContainer);

    this.star.classList.add('star');
    this.star.style.backgroundColor = this.starColor;
    this.starContainer.append(this.star);

    // treetop ornaments
    this.ornament1.classList.add('ornament, ornament--1');
    this.ornament2.classList.add('ornament, ornament--2');
    this.ornament3.classList.add('ornament, ornament--3');
    this.ornament4.classList.add('ornament, ornament--4');
    this.treeTop.append(this.ornament1);
    this.treeTop.append(this.ornament2);
    this.treeTop.append(this.ornament3);
    this.treeTop.append(this.ornament4);

    //treeMiddle ornaments
    this.ornament5.classList.add('ornament, ornament--5');
    this.ornament6.classList.add('ornament, ornament--6');
    this.ornament7.classList.add('ornament, ornament--7');
    this.ornament8.classList.add('ornament, ornament--8');
    this.treeMiddle.append(this.ornament5);
    this.treeMiddle.append(this.ornament6);
    this.treeMiddle.append(this.ornament7);
    this.treeMiddle.append(this.ornament8);

    //treeBottom ornaments
    this.ornament9.classList.add('ornament, ornament--9');
    this.ornament10.classList.add('ornament, ornament--10');
    this.ornament11.classList.add('ornament, ornament--11');
    this.ornament12.classList.add('ornament, ornament--12');
    this.ornament13.classList.add('ornament, ornament--13');
    this.ornament14.classList.add('ornament, ornament--14');

    document.body.append(this.frame);
  }
}

let tree1 = new Tree(300, 400);
tree1.render();

function createSnowFlake() {
  const snowFlake = document.createElement('i');
  snowFlake.classList.add('fas');
  snowFlake.classList.add('fa-snowflake');
  snowFlake.style.left = Math.random() * window.innerWidth + 'px';
  snowFlake.style.animationDuration = Math.random() * 4 + 2 + 's';
  document.body.appendChild(snowFlake);
  snowFlake.style.fontSize = Math.random() * 10 + 18 + 'px';
  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}

createSnowFlake();

setInterval(createSnowFlake, 100);

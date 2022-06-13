export class CategoryServcie {
  constructor(list) {
    this.list = list;
    this.map = {};
    this.list.forEach(category => {
      this.map[category.id] = category;
    });
  }
  getList() {
    return this.list;
  }
  getName(categoryId) {
    return this.map[categoryId]?.name;
  }
  getType(categoryId) {
    return this.map[categoryId]?.type;
  }
}
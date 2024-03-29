/**
 * @class DisjointSet
 */
class DisjointSet {
  constructor() {
    this.nodes = new Map();
  }

  /**
   * Adds an element as a new set
   * @param {*} value
   * @return {DisjointSetNode} Object holding the element
   */
  add(value) {
    let node = this.nodes.get(value);
    if (!node) {
      node = new DisjointSetNode(value);
      this.nodes.set(value, node);
    }
    return node;
  }

  /**
   * Merges the sets that contain x and y
   * @param {DisjointSetNode} x
   * @param {DisjointSetNode} y
   */
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return;
    }
    if (rootX.rank < rootY.rank) {
      rootX.parent = rootY;
    } else if (rootX.rank > rootY.rank) {
      rootY.parent = rootX;
    } else {
      rootY.parent = rootX;
      rootX.rank++;
    }
  }

  /**
   * Finds and returns the root node of the set that contains node
   * @param {DisjointSetNode} node
   * @return {DisjointSetNode}
   */
  find(node) {
    let rootX = node;
    while (rootX.parent !== null) {
      rootX = rootX.parent;
    }
    let toUpdateX = node;
    while (toUpdateX.parent !== null) {
      let toUpdateParent = toUpdateX;
      toUpdateX = toUpdateX.parent;
      toUpdateParent.parent = rootX;
    }
    return rootX;
  }

  /**
   * Returns true if x and y belong to the same set
   * @param {DisjointSetNode} x
   * @param {DisjointSetNode} y
   */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// eslint-disable-next-line no-undef
module.exports = DisjointSet;

class DisjointSetNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.rank = 0;
  }
}

// eslint-disable-next-line no-undef
const DisjointSet = require('..');

describe('disjoint-set', () => {
  it('should work', () => {
    const ds = new DisjointSet();
    const x0 = ds.add(0);
    const x1 = ds.add(1);
    const x2 = ds.add(3);
    const x3 = ds.add(4);
    const objVal1 = {};
    const objVal2 = {};
    const xObj1 = ds.add(objVal1);
    const xObj2 = ds.add(objVal2);

    xObj1.should.not.equal(xObj2);
    ds.add(0).should.equal(x0);
    ds.union(x0, x1);
    ds.union(x2, x3);
    ds.connected(x0, x1).should.true();
    ds.connected(x1, x0).should.true();
    ds.connected(x2, x3).should.true();
    ds.connected(x1, x3).should.false();
    ds.find(x0).should.equal(x0);
    ds.find(x1).should.equal(x0);
  });
});

interface Array<T> {
  symmetricalDifferenceById(compare: any[]): any[];
}

Array.prototype.symmetricalDifferenceById = function(compare) {
  return this.map(x => x.id)
    .filter(x => !compare.map(y => y.id).includes(x))
    .concat(
      compare.map(x => x.id).filter(x => !this.map(y => y.id).includes(x))
    );
};

import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList {
  // Write your implementation below with API documentation
  private totalAdded: number

  constructor() {
    super()
    this.totalAdded = 0
  }

  public add (num: number): boolean {
    let ret = super.add(num)
    if (ret) {
      ++this.totalAdded
    }
    return true
  }

  public getTotalAdded (): number {
    return this.totalAdded
  }

}

export { InheritanceSortedIntList }

import { IntegerList } from './IntegerList.js'
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class DelegationSortedIntList implements IntegerList {
  private readonly sortedList: SortedIntList
  private totalAdded: number

  constructor () {
    this.sortedList = new SortedIntList()
    this.totalAdded = 0
  }

  add (num: number): boolean {
    const ret = this.sortedList.add(num)
    if (ret) {
      ++this.totalAdded
    }

    return ret
  }

  addAll (list: IntegerList): boolean {
    for (let i = 0; i < list.size(); ++i) {
      if (!this.add(list.get(i))) {
        return false
      }
    }
    return true
  }

  get (index: number): number {
    return this.sortedList.get(index)
  }

  remove (num: number): boolean {
    return this.sortedList.remove(num)
  }

  removeAll (list: IntegerList): boolean {
    return this.sortedList.removeAll(list)
  }

  size (): number {
    return this.sortedList.size()
  }

  getTotalAdded (): number {
    return this.totalAdded
  }
}

export { DelegationSortedIntList }

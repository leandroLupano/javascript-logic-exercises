/* 
PaginationHelper

Instructions:
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

*/

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collectionArray = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collectionArray.length;
  }

  pageCount() {
    const totalItems = this.itemCount();
    const pages = Math.ceil(totalItems / this.itemsPerPage);
    return pages;
  }

  pageItemCount(pageIndex) {
    const totalPages = this.pageCount();
    if (pageIndex < 0 || pageIndex >= totalPages) {
      return -1;
    }

    const startIndex = pageIndex * this.itemsPerPage;
    const remainingItems = this.itemCount() - startIndex;
    return Math.min(remainingItems, this.itemsPerPage);
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// TEST:
const test = new PaginationHelper(
  [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ],
  3
);
console.log(test.itemCount());
console.log(test.pageCount());
console.log(test.pageItemCount(2));
console.log(test.pageIndex(5));

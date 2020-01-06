'use strict';


module.exports = {
  ERROR(msg) {
      return this.fail(msg);
  },
  SUCCESS(msg) {
    return this.success(msg);
  },
};

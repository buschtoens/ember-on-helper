import OnHelper from './on';

export default OnHelper.extend({
  compute(positional, named) {
    return this._super([document, ...positional], named);
  }
});

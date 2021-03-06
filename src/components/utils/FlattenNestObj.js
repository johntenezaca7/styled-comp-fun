const flattenNestObj = (obj) => {
  return Object.assign(
    {}, 
    ...function _flatten(o) { 
        return [].concat(...Object.keys(o)
          .map(k => 
            typeof o[k] === 'object' ?
              _flatten(o[k]) : 
              ({[k]: o[k]})
          )
        );
      }(obj));
};

export { flattenNestObj };
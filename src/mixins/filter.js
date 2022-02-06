export const filterMixin = {
  filters: {
    computedValue(value) {
      let index = 0,
        prefix = "",
        _value = String(value),
        reg = /[0-9]*$/;
      // 不符合条件的
      if (_value.includes(",") || _value.includes("，")) {
        return _value;
      }
      const regResult = reg.exec(_value);
      // 取前缀
      prefix = _value.replace(regResult[0], "");
      // 取数字，仅对数字进行过滤
      _value = regResult[0];

      // 逆序
      const reverseArrFromStr = _value.split("").reverse();
      const computedArrFromStr = reverseArrFromStr.map((ele, inx) => {
        // 有三个数，并且不是最后一个 => +,
        if (++index === 3 && reverseArrFromStr[inx + 1]) {
          index = 0;
          return "," + ele;
        }
        return ele;
      });
      const computedStr = computedArrFromStr.reverse().join("");
      return `${prefix}${computedStr}`;
    },
  },
};

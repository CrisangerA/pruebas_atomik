const { useEffect, useState } = require('react');

const useDebounce = (value, wait) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, wait);
    return () => window.clearTimeout(timeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};

export default useDebounce;

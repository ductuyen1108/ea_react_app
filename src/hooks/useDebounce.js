import { useState, useEffect } from "react";

// Layouts: Search
// 1: Search: searchValue = '' => useDebounce('') =>
// usedebounce: value = '' => initialValue ='' => debouncedValue = '' => return debouncedValue = ''
// Search: UseEffect: lọt vào if vì debounce = '' => return (out useEffect)
// 2: Search: searchValue = 'a' => useDebounce('a') => value = 'a' 
// useDebounce: value = 'a' != initialValue = '' => depenciency = 'a' => setTimeout() after {delay}ms 
// => value = 'a' => setDebouncedValue('a') => debouncedValue = 'a' => return debouncedValue = 'a'
// Search: => debounced = 'a' => dêpnciency = 'a' != '' => call api.

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value]);

    return debouncedValue;
}

export default useDebounce;
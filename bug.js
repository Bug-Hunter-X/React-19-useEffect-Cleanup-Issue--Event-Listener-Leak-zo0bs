```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to add event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll); // Error: event listener not removed
  }, []);

  const handleScroll = () => {
    console.log('Scrolled');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
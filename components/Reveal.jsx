function Reveal({ children, delay = 0, from = "bottom" }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const child = React.Children.only(children);
  const baseClass = child.props.className || "";
  const revealClass = `rv rv-${from}${visible ? " rv-in" : ""}`;

  return React.cloneElement(child, {
    ref,
    className: baseClass ? `${baseClass} ${revealClass}` : revealClass,
    style: delay
      ? { ...(child.props.style || {}), animationDelay: `${delay}ms` }
      : child.props.style,
  });
}

window.Reveal = Reveal;

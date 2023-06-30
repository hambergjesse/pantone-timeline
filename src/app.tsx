import { useEffect } from "preact/hooks";

export const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <a
        className="twitter-timeline"
        data-lang="en"
        data-dnt="true"
        data-theme="dark"
        href="https://twitter.com/pantonesmp?ref_src=twsrc%5Etfw"
      ></a>
    </main>
  );
};

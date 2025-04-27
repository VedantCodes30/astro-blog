import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div>
      <h3>{greeting}! Thank you for Visiting</h3>
      <p>This is a Preact Component running inside Island in Astro.JS</p>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}

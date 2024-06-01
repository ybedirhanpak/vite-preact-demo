import { computed, useSignal } from '@preact/signals';

import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";

import "./app.css";

export function App() {
    const count = useSignal(0); // Create a signal with an initial value of 0
    const doubleCount = computed(() => count.value * 2); // Create a computed signal

    console.log("Render App component");

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} class="logo" alt="Vite logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img
                        src={preactLogo}
                        class="logo preact"
                        alt="Preact logo"
                    />
                </a>
            </div>
            <h1>Vite + Preact</h1>
            <div class="card">
                <button onClick={() => count.value++}>
                    count is {count.value}
                </button>
                <p>Double Count: {doubleCount.value}</p>
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Preact logos to learn more
            </p>
        </>
    );
}

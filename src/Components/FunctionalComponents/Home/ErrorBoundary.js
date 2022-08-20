import React from "react";

export default function ErrorBoundary() {
  return (
    <div>
      <div className="m-2 ml-4">
        <h4>Error Boundary</h4>
        <div>
          <ul>
            <li>
              A class component that defines either one or both of the lifecycle
              methods <i>static getDerivedStateFromError() </i> or
              <i> componentDidCatch() </i> becomes an
              <strong> Error Boundary</strong>.
            </li>
            <li>
              Error boundaries are React components that catch JavaScript errors
              anywhere in their child component tree, log those errors, and
              display a fallback UI instead of the component tree that crashed.
            </li>
            <li>
              Error boundaries catch errors during rendering, in lifecycle
              methods, and in constructors of the whole tree below them.
            </li>
            <li>
              Use static getDerivedStateFromError() to render a fallback UI
              after an error has been thrown. Use componentDidCatch() to log
              error information.
            </li>
            <strong>Note:-</strong>
            <li>
              Error boundaries do not catch errors for:
              <ol>
                <li>
                  Event handlers
                  <li>
                    Asynchronous code (e.g. setTimeout or requestAnimationFrame
                    callbacks)
                  </li>
                  <li>Server side rendering</li>
                  <li>
                    Errors thrown in the error boundary itself (rather than its
                    children)
                  </li>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div className="author">~ ANKIT CHAUDHARY</div>
    </div>
  );
}

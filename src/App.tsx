import { useState } from "react";
import Layout from "./components/Layout.tsx";
import Stories from "./components/Stories.tsx";
import MultiSelectContainer from "./components/MultiSelectContainer.tsx";
import Notifications from "./components/Notifications.tsx";
import clsx from "clsx";

function App() {
  const [isBlur, setIsBlur] = useState<boolean>(true);

  return (
    <Layout>
      <Stories />
      <MultiSelectContainer setIsBlur={setIsBlur} />
      <div className={clsx('flex-1', isBlur && 'blur-sm')}>
        <Notifications />
      </div>
    </Layout>
  )
}

export default App

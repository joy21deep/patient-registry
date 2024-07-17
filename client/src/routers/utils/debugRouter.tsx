import { useLocation } from "react-router-dom"

const DebugRouter = ({ children }: React.PropsWithChildren<unknown>) => {
  const location = useLocation()
  if (process.env.NODE_ENV === "development") {
    console.log(
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
        location.state,
      )}`,
    )
  }

  return children
}

export default DebugRouter

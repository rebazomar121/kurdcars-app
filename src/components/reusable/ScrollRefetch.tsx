import React, { useState, useCallback } from "react"
import { ScrollView, RefreshControl } from "react-native"

type Type = React.FC<{
  contentContainerStyle?: object
  contentContainerClassName?: string
  onRefresh?: () => void
  children: React.ReactNode
  marginBottom?: number
  height?: string
}>

const ScrollRefresh: Type = ({
  contentContainerStyle,
  contentContainerClassName,
  onRefresh,
  children,
  marginBottom = 70,
  height = "88%",
}) => {
  const [loading, setLoading] = useState(false)
  const onRefreshToShowLoaderAction = useCallback(async () => {
    setLoading(true)
    if (onRefresh) {
      await onRefresh()
    }
    setLoading(false)
  }, [])

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      className={contentContainerClassName}
      style={{
        marginBottom: marginBottom,
        height: height,
      }}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefreshToShowLoaderAction}
        />
      }
    >
      {children}
    </ScrollView>
  )
}

export default ScrollRefresh

/* eslint-disable @typescript-eslint/no-explicit-any */
import { h, Fragment } from 'preact'
import { route } from 'preact-router'
import { FC, memo, useEffect, useRef, useState } from 'preact/compat'
import { baseLayerDev } from './baseLayers/baseLayerDev'
import Button, { ButtonThemes } from './components/controls/buttun'
import { dispatchAction, EVENTS } from './eventsLib'

const InjectScript = memo(({ src }: { src: string }) => {
  const divRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = src
    script.async = true

    // script.onload = onload(true) as unknown
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div ref={divRef} />
    </>
  )
})

export const App: FC = () => {
  const [isShowConnectorPlugin, setIsShowConnectorPlugin] = useState(false)
  const [unsub, setunsub] = useState<{ usub: () => void } | undefined>()

  const connectorScript = './connector.umd.js'

  const toggleShowConnectorPlugin = () => {
    if (isShowConnectorPlugin) {
      unsub && unsub.usub()
      dispatchAction({ action: EVENTS.CLOSE_CONNECTOR, payload: null })
      route('/', true)
    } else {
      const usub = baseLayerDev()
      setunsub({ usub })
    }
    setIsShowConnectorPlugin(include => !include)
  }

  return (
    <div className="ts-flex-1 ts-gap-2">
      Demo
      <Button
        label={`${isShowConnectorPlugin ? 'Close' : 'Open'} connector`}
        theme={ButtonThemes.Secondary}
        onClick={toggleShowConnectorPlugin}
      />
      {isShowConnectorPlugin && (
        <>
          <InjectScript src={connectorScript} />
          <div id="eTrusted-connector" />
        </>
      )}
    </div>
  )
}
